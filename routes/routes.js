const package = require('../package.json')
const ArtistController = require('../controllers/ArtistController')
const ShowController = require('../controllers/ShowController')
const UserController = require('../controllers/UserController')
const auth = require('../middleware/auth')
const upload = require('../middleware/upload')

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.status(200);
        res.json({msg: "RaspberryAPI version " + package.version});
    });

    // Artist Routes
    app.get('/artists', ArtistController.getArtists)
    app.get('/artists/:id', ArtistController.getArtist)
    app.post('/artists', auth,  ArtistController.postArtist)
    app.put('/artists/:id', auth,  ArtistController.putArtist)
    app.delete('/artists/:id', auth,  ArtistController.deleteArtist)
    app.post('/artists/uploadPicture', ArtistController.uploadPicture)
    app.put('/artists/listeners/:id', ArtistController.updateListeners)

    // Show Routes
    app.get('/shows', ShowController.getShows)
    app.get('/shows/:id', ShowController.getShow)
    app.post('/shows', auth,  ShowController.postShow)
    app.put('/shows/:id', auth,  ShowController.putShow)
    app.delete('/shows/:id', auth,  ShowController.deleteShow)

    // User Routes
    app.get('/users', auth,  UserController.getUsers)
    app.get('/users/:id', auth,  UserController.getUser)
    app.post('/users', auth, UserController.addUser)
    app.put('/user/:id', auth, UserController.putUser)
    app.delete('/user/:id', auth,  UserController.deleteUser)
    app.post('/users/authenticate', UserController.authenticate)
    
}