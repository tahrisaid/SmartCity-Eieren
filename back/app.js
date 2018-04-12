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


var NodeWebcam = require( "node-webcam" );
var opts = {

  //Picture related

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


//Will automatically append location output type

NodeWebcam.capture( "./public/data/capture0.jpg", opts, function( err, data ) {

});

/*
Webcam.list( function( list ) {

  //Use another device

  var anotherCam = NodeWebcam.create( { device: list[ 0 ] } );

});
*/
module.exports = app;
