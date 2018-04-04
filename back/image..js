var express = require('express');
var multer  = require('multer');
var path = require('path');
var app = express();

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

app.listen(3000, () => {
  console.log('app listening on port 3000!');
});

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

module.exports = app;