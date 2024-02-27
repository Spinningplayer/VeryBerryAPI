const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectID = mongoose.Schema.Types.ObjectId;

const ArtistSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    shortDescription: {
        type: String,
        required: true
    },
    urlName: {
        type: String,
        required: true
    },
    pressPic: {
        type: String,
        required: true
    },
    spotifyPlaylist: {
        type: String,
        required: true
    },
    youtubeLink: {
        type: String,
        required: true
    },
    instagramLink: {
        type: String,
        required: true
    },
    facebookLink: {
        type: String,
        required: true
    },
    driveLink: {
        type: String,
        required: true
    },
    shows: [{
        type: ObjectID,
        ref: 'Show'
    }],
    spotifyListeners: {
        type: Number,
        required: false
    },
    instagramFollowers: {
        type: Number,
        required: false
    },
    facebookFollower: {
        type: Number,
        required: false
    },
    spotifyId: {
        type: String,
        required: true
    },
    spotifyListeners: {
        type: String,
        required: false
    },
    lastEditBy: {
        type: String
    },
    lastEdited: {
        type: Date
    }
})

const Artist = mongoose.model('Artist', ArtistSchema)

module.exports = Artist;