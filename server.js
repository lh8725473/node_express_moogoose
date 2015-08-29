var express = require('express'),
	bodyParser = require('body-parser'),
    // wine = require('./routes/wines');
    moogoose = require('./models/moogoose'),
    user = require('./routes/user');


var app = express();
app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/public', express.static(__dirname + '/public'));

app.post('/user/add',user.douserAdd);
app.get('/user/findByName/:name',user.findByName);
app.get('/user/findUserById/:id',user.findUserById);
app.get('/user/find/all',user.findAll);
app.delete('/user/deleteByName/:name',user.deleteByName);

// app.get('/wines', wine.findAll);
// app.get('/wines/:id', wine.findById);
// app.post('/wines', wine.addWine);
// app.put('/wines/:id', wine.updateWine);
// app.delete('/wines/:id', wine.deleteWine);

app.listen(8080);
console.log('Listening on port 8080...');