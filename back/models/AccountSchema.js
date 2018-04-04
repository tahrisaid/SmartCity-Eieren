var bcrypt = require ('bcrypt')
var mongoose = require('mongoose');
var AccountSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  accountname: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
  },
  passwordConf: {
    type: String,
    required: true,
  }
});
AccountSchema.pre('save', function (next) {
  var account = this;
  bcrypt.hash(account.password, 10, function (err, hash){
    if (err) {
      return next(err);
    }
    account.password = hash;
    next();
  })
});

/* AccountSchema.statics.authenticate = function (email, password, callback) {
  Account.findOne({ email: email })
    .exec(function (err, account) {
      if (err) {
        return callback(err)
      } else if (!account) {
        var err = new Error('Account not found.');
        err.status = 401;
        return callback(err);
      }
      bcrypt.compare(password, account.password, function (err, result) {
        if (result === true) {
          return callback(null, account);
        } else {
          return callback();
        }
      })
    });
}*/ 
var Account = mongoose.model('Account', AccountSchema);
module.exports = Account;