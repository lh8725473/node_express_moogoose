// DB Connection
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/winedb');
var db = mongoose.connection; 
db.on('error',console.error);
db.once('open',function(){
	
    console.log("Connected to 'winedb' database");
}); 

exports.mongoose = mongoose;