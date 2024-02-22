const Artist = require('../models/Artist')
const mongo = require('../Config/mongo.db')
const uploadFile = require('../middleware/upload')

module.exports = {
    getArtists(req, res) {
        Artist.find({})
        .then(artists => {
            res.status(200);
            res.json(artists);
        })
        .catch(error => {
            res.status(500);
            res.json(error);

            console.log(error);
        })
    },

    getArtist(req, res) {
        var id = req.params.id;

        Artist.findOne({_id: id})
        .then(artist => {
            res.status(200);
            res.json(artist);
        })
        .catch(error => {
            res.status(500);
            res.json(error);

            console.log(error);
        })
    },

    postArtist(req, res) {
        var body = req.body;
        
        Artist.create(body)
        .then(artist => {
            res.status(200);
            res.json(artist);
        })
        .catch(error => {
            res.status(500);
            res.json(error);

            console.log(error);
        })
    },

    putArtist(req, res) {
        var body = req.body;
        var id = req.params.id;
        Artist.findOneAndUpdate({_id: id}, body)
        .then(artist => {
            res.status(200);
            res.json(body);
        })
        .catch(error => {
            res.status(500);
            res.json(error);

            console.log(error);
        })
    },

    deleteArtist(req, res) {
        var id = req.params.id;

        Artist.findOneAndDelete({_id: id})
        .then(response => {
            res.status(200);
            res.json(id);
        })
        .catch(error => {
            res.status(500);
            res.json(error);

            console.log(error);
        })
    },

    async uploadPicture(req, res, next) {
        await uploadFile(req, res, function (err) {
            
            if(err) {
                console.log(err)
                res.status(500).json(err)
            } else {
                res.status(200).json({"msg":"Succesfully uploaded file"})
            }
        });
        
    }

    
}