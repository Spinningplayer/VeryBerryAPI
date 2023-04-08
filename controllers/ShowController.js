const Show = require('../models/Show')

module.exports = {
    getShows(req, res) {
        Show.find({})
        .then(shows => {
            res.status(200);
            res.json(shows);
        })
        .catch(error => {
            res.status(500);
            res.json(error);

            console.log(error);
        })
    },

    getShow(req, res) {
        var id = req.params.id;

        Show.findOne({_id: id})
        .then(show => {
            res.status(200);
            res.json(show);
        })
        .catch(error => {
            res.status(500);
            res.json(error);

            console.log(error);
        })
    },

    postShow(req, res) {
        var body = req.body;

        Show.create(body)
        .then(show => {
            res.status(200);
            res.json(show);
        })
        .catch(error => {
            res.status(500);
            res.json(error);

            console.log(error);
        })
    },

    putShow(req, res) {
        var body = req.body;
        var id = req.params.id;

        Show.findOneAndUpdate({_id: id}, body)
        .then(show => {
            res.status(200);
            res.json(body);
        })
        .catch(error => {
            res.status(500);
            res.json(error);

            console.log(error);
        })
    },

    deleteShow(req, res) {
        var id = req.params.id;

        Show.findOneAndDelete({_id: id})
        .then(response => {
            res.status(200);
            res.json(id);
        })
        .catch(error => {
            res.status(500);
            res.json(error);

            console.log(error);
        })
    }
}