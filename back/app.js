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


var fs = require('fs');
var http = require('http');
var Kairos = require('kairos-api');
var client = new Kairos('6863aca2', '6156a8b3d4092deddfcb69664328fd24');
var base64Img = require('base64-img');

/******** Requirements of object detection ***********/
var net = require('net');
var JsonSocket = require('json-socket');
var port1 = 4545;
var server = net.createServer();


/*********Requirement for mail *************/
var nodemailer = require('nodemailer');

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

/******** Requirement for SMS *************/
const Nexmo = require('nexmo');
const nexmo = new Nexmo({
    apiKey: '192f9dc1',
    apiSecret: '32bf00438db3abcd'
});


/********** Requirements for Call ***********/
const nexmo1 = new Nexmo({
    apiKey: '192f9dc1',
    apiSecret: '32bf00438db3abcd',
    applicationId: 'e9e602f8-25d8-4a9a-b508-dd55e995a95d',
    privateKey: '-----BEGIN PRIVATE KEY-----\n' +
    'MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDRsC1m0VNqTNLQ\n' +
    'Lo86c27yp9McjrWklv7zfDoAAN3pmkca0WRUUG3lPyM7RSZrkwaaczQcy4izIqoZ\n' +
    'a9no5OpsLSKTISbsxYpNGWIJJfWMIacY8sUGrnxztPjIffQamXEc3WuZEvjmAshn\n' +
    'tTOgtjTlnSN8yjus3RHcp7LMNg4TE6VBGiwS4NundPIedLdbpmY91N5xLKcotNyP\n' +
    'oNUvDAmY0szcqEFHwPXmNYT3zSq5OJZD4BAm80k9FdUWTudbNJvHCwCkWeS1v2Rm\n' +
    'Vh/nFf+XNa4GjYh+6iDzHa2FtLwGW5hlUxAbCh4WRatfcWAjmqvUNY61JWIP9wkx\n' +
    'IuRDIeYzAgMBAAECggEAAe3f0/Z6M+7aijobl5fSwnRq+2yc7+FK5nPg56G7CZIh\n' +
    'oCCKCY1pc9unBwjn2uZXBRNi2m8B5PGsVEIsaYYRfPkG0yIak+jv8qsYjEKbZonZ\n' +
    'biExl0vaJOsqmgMcS5OH/Aq6GakzyhdKxvXhLfmaKNR1Gssb9fRiL3ilAGvw2w1a\n' +
    'gTYqRJw6wMDouNOlnHSaOLA+UOCypKqFk+Le1is+nnYvHMWUnI70NxC8JQn6+1HQ\n' +
    'jGz+z7lBex8M45M4Qmfeb4zbJMHWPIi1cMP9qpLVRDVOrmGW7jOtgZhnDkvkrOtC\n' +
    'peYDBHCQ4kU/VAbE4OJ3gIO0VjqHjdmoaDh5p4gbmQKBgQDqH0S+pmso9DBxxflh\n' +
    'XygHNZuEK5zRWj3r3Zzl+ma34/mdUf5fr2zBiMu6ST1LClzL0cnb9PFnLR2HehZl\n' +
    'oB6LPh62pkOwJrH0Wi5u/8b513JkUmcgOxNEYbHydeuFCHWLgHjjYA+T3ao9j0cs\n' +
    '7n421jRWFv9nOr+V0SAxjPta9QKBgQDlSGS4fk4omMm2/pL1ksr5D7gKImqeNTuB\n' +
    'Qmmboa8/0OU858ALwpZs91qozccAQYnrz0++uZeLihiMsostURrzuBn018Rdl9Vl\n' +
    'kJaLrR0OuxUAoGFB0UNZ5ogzQoxODF6hHljdsXlEJQmr7P6RXBEYhty840KrD3FZ\n' +
    'fHTz3AnThwKBgQCY9xMQSWUsXdclDsdwAh8CDtlsEp6j/gUFDUdMzzy7mxzk18SO\n' +
    'OeyhykHplZ6RX9TfalMr/i6XTdfEQ1VM0sACE/U3Owxwk+ejEiTSaxVS+ZwIxfoR\n' +
    'Cef9vqLoGnll8u/x1F+nl4S2BJcNH4bOaYhXRb7uHJqElNLGDNuu5ED53QKBgF3X\n' +
    'Rln4X/bfqdd61B0samSLmXCUa3y7HtKlouGuyDJfRiOqWoC1sKmCh5mFN0iUimV4\n' +
    'IRRXk33qFGgpfysaAeT0WbNLSDRiO1XpWqRqQvVPfqYV/hhZFK7L2rzYJOKgz240\n' +
    'JHz/8TkBy7aRNhO6UcjvEZNBlHy8wlC0zo0sZt0rAoGADcrJtlfgaP9f2AbeWMtY\n' +
    'm7r4VyzddZ9LCAE5CM2xDruRRAsZFqWQKAVmjOHzTKQ1jAZJlENtrI8zuKy0rXWg\n' +
    '6Cj7ZSCVQa94gb8EHD7Jk8Dy0VS2TjJBzTo0fPB4NReEtH56+JV9xit8dX5ftGiq\n' +
    '6yjzDEQxkBaxaDnTKlGyA34=\n' +
    '-----END PRIVATE KEY-----\n'});


    
var fs = require('fs');
var http = require('http');
var Kairos = require('kairos-api');
var client = new Kairos('6863aca2', '6156a8b3d4092deddfcb69664328fd24');
var base64Img = require('base64-img');
var request = require('request');

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
    if (str.indexOf('knive') > -1 || str.indexOf('gun') > -1 || str.indexOf('bottle') > -1)
    {
        //Send the mail
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });

        //Send the call
        nexmo1.calls.create({
            from: {
                type: 'phone',
                number: +21696130504
            },
            to: [{
                type: 'phone',
                number: +21654548392
            }],
            answer_url: ['https://gist.githubusercontent.com/tahrisaid/51c1ecf98a7962e387999dd20e6f6b06/raw/5f52f07df6f9737970b4891e4a660c63f0ae1d63/voix.json'] //lien git
        });

        
        //Send the sms
        const from = 'Eieren';
        const to = '+21654548392';
        const text = 'Yo, this is Eieren. I am sending you this message to warn you about a threat in your area. Please be carreful!';

        nexmo.message.sendSms(from, to, text,function(error, response){
            if(error){
                console.log(error);
            }
            else{
                console.log("Message sent");
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
                  console.log("enroll_min: "+getDateTime().substr(0, 14)+min.toString())

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
                  console.log("enroll: "+JSON.stringify(result)+getDateTime().substr(0, 16))
                  var myJSONObject =     {
                    "gallery": getDateTime().substr(0, 16),
                    "confidence": result.body.images[0].transaction.confidence,
                    "age":result.body.images[0].attributes.age,
                    "glasses":result.body.images[0].attributes.glasses,
                    "white":result.body.images[0].attributes.white,
                    "black":result.body.images[0].attributes.black,
                    "asian":result.body.images[0].attributes.asian,
                    "hispanic":result.body.images[0].attributes.hispanic,
                    "other":result.body.images[0].attributes.other,
                    "gender":result.body.images[0].attributes.gender.type
                    };
                    request({
                        url: "http://localhost:3000/criminal/",
                        method: "POST",
                        json: true,
                        body: myJSONObject
                    }, function (error, response, body){
                        console.log("response");
                    });
                
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
          client.recognize(settings)
            .then(function(result) {
              if(JSON.stringify(result).indexOf("success") > -1)
              {
                if (!(fs.existsSync("./public/incidents/"+result.body.images[0].candidates[0].subject_id.substr(0, 10)+'/'+result.body.images[0].candidates[0].subject_id.substr(11, 5)+'/recognized')))  
                    fs.mkdirSync('./public/incidents/'+result.body.images[0].candidates[0].subject_id.substr(0, 10)+'/'+result.body.images[0].candidates[0].subject_id.substr(11, 5)+'/recognized')
                fs.createReadStream('../object_detection/frame.jpg').pipe(fs.createWriteStream('./public/incidents/'+result.body.images[0].candidates[0].subject_id.substr(0, 10)+'/'+result.body.images[0].candidates[0].subject_id.substr(11, 5)+'/recognized/'+getDateTime().substr(17, 2)+'.jpg'))     
                console.log("!!recognized!! :"+JSON.stringify(result.body.images[0].candidates[0].subject_id))
              }
             })
            .catch(function(err) { 
                console.log("errr :"+err)
             });
    
      }

});
});


module.exports = app
