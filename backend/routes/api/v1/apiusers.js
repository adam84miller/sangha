const express = require('express');
const router = express.Router();
const db = require('../../../dal/mongodb');

/* GET users listing. */
router.get('/', function(req, res, next) {

    let info = {
        query: {},
        collection: req.app.locals.collectionUsers
    }

    db.readAll(info)
        .then(users => {
            res.json(users)
        })
        .catch(err => {
            res.status(500).send('Unable to Get Document',err.message)
        })

});

// localhost:3000/api/v1/users/
router.get('/:userName', function (req, res, next) {


    if (req.params.userName !== undefined) {

        const userName = req.params.userName.toLowerCase()
        
        const info = {
            query: {
                fName: userName
            },
            collection: req.app.locals.collectionUsers
        }

        db.readOne(info)
            .then(user => {
                res.json(user)
            })
            .catch(err => {
                res.status(500).send(err.message)
            })
    } else {
        res.status(400).send('User Name not Found')
    }

})

router.post('/', function (req, res, next) {

    const info = {
        body: req.body,
        collection: req.app.locals.collectionUsers
    }
})

module.exports = router;
