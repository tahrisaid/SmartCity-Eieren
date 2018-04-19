var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var multer = require ('multer');
var db=require('./models/database')
var index = require('./routes/index');
var users = require('./routes/users');;
var object = require('./api/object');
var predictModels = require('./routes/predictModel');
var predictModel = require('./api/predictModel');
var crimeroute = require('./routes/crime');
var crimeapi = require('./api/crime');
var auth = require('./api/auth');
var area = require('./api/area');
var criminal = require('./api/criminal');
var account = require ('./api/Account');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var claim = require('./api/claim');
var DetectedObject = require('./models/DetectedObjectSchema');

/******** Requirements of object detection ***********/
var net = require('net');
var JsonSocket = require('json-socket');
var port1 = 4545;
var server = net.createServer();
var nodemailer = require('nodemailer');
var fs = require('fs');
var http = require('http');
var Kairos = require('kairos-api');
var client = new Kairos('6863aca2', '6156a8b3d4092deddfcb69664328fd24');
var base64Img = require('base64-img');

var app = express();

app.use(session({
    secret: 'work hard',
    resave: true,
    saveUninitialized: false

}));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');



// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/object', object);
app.use('/area', area);
app.use('/account',account);
app.use('/criminal',criminal);
app.use('/claim', claim);
app.use('/predictModels', predictModels);
app.use('/predictModel', predictModel);
app.use('/crimes', crimeroute);
app.use('/crime', crimeapi);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
var cors = require('cors');

// use it before all route definitions
app.use(cors({origin: '*'}));

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname))
    }
});

var upload = multer({ storage: storage });


app.post('/uploads', upload.single('image'), (req, res) => {
    return res.json('success');
});

/************** Alerts after detection (Mail exp) ************/
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'eierengod@gmail.com',
        pass: 'eieren2018'
    }
});

var mailOptions = {
    from: 'eierengod@gmail.com',
    to: 'said.tahri@esprit.tn',
    subject: 'Eieren app | Thread alert!!!',
    text: 'Yo, this is Eieren. I am sending you this email to warn you about a threat in your area. Please be carreful!'
};

var NodeWebcam = require( "node-webcam" );
var opts = {

    width: 1280,

    height: 720,

    quality: 100,


    //Delay to take shot

    delay: 0,


    //Save shots in memory

    saveShots: true,


    // [jpeg, png] support varies
    // Webcam.OutputTypes

    output: "jpeg",


    //Which camera to use
    //Use Webcam.list() for results
    //false for default device

    device: false,



    //Logging

    verbose: false

};

var Webcam = NodeWebcam.create( opts );



function getDateTime() {

    var date = new Date();

    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    var year = date.getFullYear();

    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    var day = date.getDate();
    day = (day < 10 ? "0" : "") + day;

    return year + "_" + month + "_" + day + "_" + hour + "_" + min + "_" + sec;

}

/**************** Reading socket from python ****************/
server.listen(port1);
server.on('connection', function(socket) {

  liste=[];
  object={};
  liste.push(socket.remoteAddress);
  //console.log(liste);
  socket = new JsonSocket(socket);
  var n;
  var isRunning = false;
  var streatTimeout;

  socket.on('data', function(data) {

    var str= data.toString();
    console.log(str);
    //If the detected objects are a gun or a knive, send alerts
    if (str.indexOf('knive') > -1 || str.indexOf('gun') > -1)
    {
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
        console.log('Detection from Python arrived to NodeJs server')
    }
  
      else if (str.indexOf('person') > -1 && str.indexOf('bottle') > -1)
      {
        if (!(fs.existsSync("./public/incidents/"+getDateTime().substr(0, 10))))
         fs.mkdirSync('./public/incidents/'+getDateTime().substr(0, 10));


          var min = parseInt(getDateTime().substr(14, 2),10);
          min=min-1;

          if ((fs.existsSync("./public/incidents/"+getDateTime().substr(0, 10)+'/'+getDateTime().substr(11, 3)+min.toString())))
          {
               fs.createReadStream('../object_detection/frame.jpg').pipe(fs.createWriteStream('./public/incidents/'+getDateTime().substr(0, 10)+'/'+getDateTime().substr(11, 3)+min.toString()+'/'+getDateTime().substr(14, 5)+'.jpg'))
               var settings = {
                "image": base64Img.base64Sync('../object_detection/frame.jpg'),
                "gallery_name": "Arti",
                "subject_id": getDateTime().substr(0, 14)+min.toString(),
                multiple_faces: true
              }
              client.enroll(settings)
                .then(function(result) {
                  console.log(getDateTime().substr(0, 14)+min.toString())
                 })
                .catch(function(err) { 
                    console.log(err)
                 });
          }
          else 
          {
            if (!(fs.existsSync("./public/incidents/"+getDateTime().substr(0, 10)+'/'+getDateTime().substr(11, 5))))
            {
              fs.mkdirSync('./public/incidents/'+getDateTime().substr(0, 10)+'/'+getDateTime().substr(11, 5));
              var settings = {
                "image": base64Img.base64Sync('../object_detection/frame.jpg'),
                "gallery_name": "Arti",
                "subject_id": getDateTime().substr(0, 16),
                multiple_faces: true
              }
              client.enroll(settings)
                .then(function(result) {
                  console.log(JSON.stringify(result)+getDateTime().substr(0, 16))
                 })
                .catch(function(err) { 
                    console.log(err)
                 });
            }  
            fs.createReadStream('../object_detection/frame.jpg').pipe(fs.createWriteStream('./public/incidents/'+getDateTime().substr(0, 10)+'/'+getDateTime().substr(11, 5)+'/'+getDateTime().substr(14, 5)+'.jpg'))
          }

      }else if (str.indexOf('person') > -1 )
      {
        var settings = {
          "image": base64Img.base64Sync('../object_detection/frame.jpg'),
          "gallery_name": "Arti"

        }
        //io.emit(array[0],array)
      }

});
});


module.exports = app
