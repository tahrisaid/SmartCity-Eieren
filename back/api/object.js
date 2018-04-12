var Object = require(
    './../models/ObjectSchema');
  var express = require('express');
  var fs = require('fs');
  var router = express.Router();
  var authenticate = require('../api/auth').authenticate;


  var imgPath = '././pics/said.jpg';

  /****** Add object *******/
  router.post('/', function(req, res) {
    var object = new Object(req.body);
   /* object.img.data = fs.readFileSync(imgPath);
    object.img.contentType = 'image/png';*/
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

        /*for(var i= 0; i < objects.length; i++)
        {
          
         this.objects[i].img = 'data:image/jpeg;base64,' + btoa(objects[i].img);
        }*/
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