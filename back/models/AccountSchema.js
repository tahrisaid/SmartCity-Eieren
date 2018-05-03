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
  },
  role :{
   type:String,
   required:true, 
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

var Account = mongoose.model('Account', AccountSchema);
module.exports = Account;