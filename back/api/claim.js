var Claim = require('./../models/ClaimSchema');
var express = require('express');
var fs = require('fs');
var router = express.Router();



/* post claim */
router.post('/', function (req, res) {
    var claim = new Claim (req.body);
    claim.save(function (err, claim) {
        if (err)
            res.send(err);
        else
            res.send(claim);
    });
});



/*get all*/
router.get('/', function (req, res, next) {

    Claim.find(function (err, claims) {
        if (err) {
            res.send(err)
            console.log('error')
        }
        if (!claims) {
            res.status(404).send();
        }
        else {
            res.json(claims);
        }

    });
});
/*get by id*/
router.get('/:id', function (req, res) {
    var id = req.params.id;
    Claim.findById(id).exec(function (err,claim) {
        if (err) {
            res.send(err)

        }
        if (!claim) {
            res.status(404).send();

        }
        else {
            res.json(claim);

        }
    });
});
/*delete*/
router.delete('/:id', function (req, res) {

    var id = req.params.id;
    Claim.findByIdAndRemove(id, function (err, claim) {
        if (err)
            res.send(err);
        else
            res.send();
    });

});
/* update*/
/*put*/
/*router.put('/:id', function (req, res) {
    Claim.update({ _id: req.params.id },
        {
            name:req.body.name,
            description: req.body.description,
            thread: req.body.thread,
            dateAjout: req.body.dateAjout,
        }, function (err, object) {
            if (err) res.json(err);
            else
                res.json(req.body);
        });
});*/
module.exports = router;

