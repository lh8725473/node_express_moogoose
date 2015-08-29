var express = require('express'),
	bodyParser = require('body-parser'),
    moogoose = require('./models/moogoose'),
    user = require('./routes/user');


//setting
var app = express();
app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/public', express.static(__dirname + '/public'));


//routes
app.post('/user/add',user.douserAdd);
app.get('/user/findByName/:name',user.findByName);
app.get('/user/findUserById/:id',user.findUserById);
app.get('/user/find/all',user.findAll);
app.delete('/user/deleteByName/:name',user.deleteByName);


//server port
app.listen(8080);
console.log('Listening on port 8080...');