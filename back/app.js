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
var auth = require('./api/auth');
var area = require('./api/area');
var account = require ('./api/Account');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var claim = require('./api/claim');

/******** Requirements of object detection  ***********/
var net = require('net');
var JsonSocket = require('json-socket');
var port1 = 4545;
var server = net.createServer();
var nodemailer = require('nodemailer');

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

app.use('/claim', claim);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/*var PythonShell = require('python-shell');
  PythonShell.run('./api/object_detection_tutorial_webcam.py', function (err) {
    if (err) throw err;
    console.log('finished');
  });
*/
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
/*app.listen(3000, function () {
  console.log('Currently listening on port 3000!')
})*/

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


/******************Alerts after detection  ************/

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
      if (str.indexOf('person') > -1)
      {
          /*transporter.sendMail(mailOptions, function(error, info){
              if (error) {
                  console.log(error);
              } else {
                  console.log('Email sent: ' + info.response);
              }
          });*/
          console.log('Detection from Python arrived to NodeJs server')
      }
      //io.emit(array[0],array)
  });
});

module.exports = app;
