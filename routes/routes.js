var package = require('../package.json')
var ArtistController = require('../controllers/ArtistController')
var ShowController = require('../controllers/ShowController')

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.status(200);
        res.json({msg: "RaspberryAPI version " + package.version});
    });

    // Artist Routes
    app.get('/artists', ArtistController.getArtists)
    app.get('/artists/:id', ArtistController.getArtist)
    app.post('/artists', ArtistController.postArtist)
    app.put('/artists/:id', ArtistController.putArtist)
    app.delete('/artists/:id', ArtistController.deleteArtist)

    // Show Routes
    app.get('/shows', ShowController.getShows)
    app.get('/shows/:id', ShowController.getShow)
    app.post('/shows', ShowController.postShow)
    app.put('/shows/:id', ShowController.putShow)
    app.delete('/shows/:id', ShowController.deleteShow)
}