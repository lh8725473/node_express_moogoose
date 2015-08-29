var user = require('./../models/user.js');

exports.douserAdd = function(req, res) {
    var json = req.body;
    // //var json = JSON.parse(req.body.content);

    if(json._id){//update

    } else {//insert
        user.save(json, function(err){
            if(err) {
                res.send({'success':false,'err':err});
            } else {
                res.send({'success':true});
            }
        }); 
    }
};

exports.deleteByName = function(req, res) {
    user.deleteByName(req.params.name,function(err){
        if(err) {
            res.send({'success':false,'err':err});
        } else {
            res.send({'success':true});
        }
    });
}


exports.findByName = function(req, res) {
    user.findByName(req.params.name,function(err, obj){
        res.send(obj);
    });
}

exports.findUserById = function(req, res) {
    user.findById(req.params.id,function(err, obj){
        res.send(obj);
    });
}

exports.findAll = function(req, res) {
    console.log('findAll');
    user.findAll(function(err, obj){
        res.send(obj);
    });
}