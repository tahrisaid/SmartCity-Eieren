
var Object = require('./../models/ObjectSchema');
  var express = require('express');
  var fs = require('fs');
  var router = express.Router();
  var authenticate = require('../api/auth').authenticate;
  var imgPath = '././pics/said.jpg';



  


  /****** Add object *******/
  router.post('/', function(req, res) {
    var object = new Object(req.body);
    //object.img = fs.readFileSync(imgPath);
    object.pathOfImg = 'http://127.0.0.1:8080/images/'+req.body.nameOfImg;
    //object.img.contentType = 'image/png';
    object.save(function(err, object) {
      if (err) {
        res.send(err);
        console.log(
          'Errer before add!!!!'
        )
      } else res.send(object);
      console.log(
        'Object added!!!!!')
    });
  });

  /****** Get objects *******/
  router.get('/', function(req, res, next) {
    Object.find(function(err, objects) { 
      if (err) {
        res.send(err)
        console.log('error')
      }
      if (!objects) {
        res.status(404).send();
      } else {
      //  base64Img.img('data:image/png;base64,'+objects.img, '', '1', function(err, filepath) {});
        res.json(objects);
      }
    });
  });

  /****** Get object by id *******/
  router.get('/:id', function(req, res) {
    var id = req.params.id;
    Object.findById(id).exec(function(
      err, object) {
      if (err) {
        res.send(err)
      }
      if (!object) {
        res.status(404).send();
      } else {
        res.json(object);
      }
    });
  });

  /****** Get object by id *******/
  router.get('/data/:id', function(req, res) {
    var id = req.params.id;
    Object.findById(id).exec(function(
      err, object) {
      if (err) {
        res.send(err)
      }
      if (!object) {
        res.status(404).send();
      } else {
        
        var ch = '';
        for (var i = 0 ; i< object.img.length ; i++){
          ch = ch + object.img[i] + ','
        }
        console.log(Buffer.from(ch).toString())

        res.json(ch.slice(0, -1));
      }
    });
  });
  

  /****** Delete object *******/
  router.delete('/:id', function(req, res) {
    var id = req.params.id;
    Object.findByIdAndRemove(id,
      function(err, object) {
        if (err) res.send(err);
        else res.send();
      });
  });
  
  /****** Update object *******/
  router.put('/:id', function(req, res) {
    Object.update({
      _id: req.params.id
    }, {
      name: req.body.name,
      description: req.body.description,
      thread: req.body.thread,
      degree: req.body.degree
    }, function(err, object) {
      if (err) res.json(err);
      else res.json(req.body);
    });
  });
  module.exports = router;