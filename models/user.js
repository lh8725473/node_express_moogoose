var mongoose = require('mongoose');
    
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	name : String,
	age : String
});

var User = mongoose.model("User", UserSchema);

var UserDAO = function(){};

UserDAO.prototype.save = function(obj, callback) {
  var instance = new User(obj);
  instance.save(function(err){
    callback(err);
  });
};

UserDAO.prototype.findByIdAndUpdate = function(obj,callback){
  var _id=obj._id;
  delete obj._id;
  User.findOneAndUpdate(_id, obj, function(err,obj){
    callback(err, obj);
  });
}

UserDAO.prototype.deleteByName = function(name, callback) {
  User.remove({name:name}, function(err){
    callback(err);
  });
}

UserDAO.prototype.findByName = function(name, callback) {
  User.findOne({name:name}, function(err, obj){
    callback(err, obj);
  });
};

UserDAO.prototype.findById = function(id, callback) {
  User.findOne({_id:id}, function(err, obj){
    callback(err, obj);
  });
};

UserDAO.prototype.findAll = function(callback) {
  User.find({}, function(err, obj){
    callback(err, obj);
  });
};

module.exports = new UserDAO();