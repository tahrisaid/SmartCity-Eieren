var Object = require('./../models/areaSchema');
var express = require('express');
var fs = require('fs');
var router = express.Router();


/* post */
router.post('/', function (req, res) {
    var object = new Object(req.body);
    object.save(function (err, object) {

        if (err)
            res.send(err);
        else
            res.send(object);
    });
});



/*get all*/
router.get('/', function (req, res, next) {

    Object.find(function (err, objects) {
        if (err) {
            res.send(err)
            console.log('error')
        }
        if (!objects) {
            res.status(404).send();
        }
        else {
            res.json(objects);
        }

    });
});
/*get by id*/
router.get('/:id', function (req, res) {
    var id = req.params.id;
    Object.findById(id).exec(function (err, object) {
        if (err) {
            res.send(err)

        }
        if (!object) {
            res.status(404).send();

        }
        else {
            res.json(object);

        }
    });
});
/*delete*/
router.delete('/:id', function (req, res) {

    var id = req.params.id;
    Object.findByIdAndRemove(id, function (err, object) {
        if (err)
            res.send(err);
        else
            res.send();
    });

});
/* update*/
/*put*/
router.put('/:id', function (req, res) {
    Object.update({ _id: req.params.id },
        {
            name:req.body.name,
			cameraName:req.body.cameraName,
			status: req.body.status,
            address: req.body.address,
			crimeRate: req.body.crimeRate,
            updateDate: req.body.updateDate
        }, function (err, object) {
            if (err) res.json(err);
            else
                res.json(req.body);
        });
});
module.exports = router;

