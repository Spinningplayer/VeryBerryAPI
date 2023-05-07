const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectID = mongoose.Schema.Types.ObjectId;

const ShowSchema = new Schema({
    venue: {
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    artistID: {
        type: ObjectID,
        ref: 'Artist',
        required: true
    },
    artistName: {
        type: String,
        required: false
    },
    ticketLink: {
        type: String,
        required: true
    },
    expired: {
        type: Boolean,
        required: false
    }
})

const Show = mongoose.model('Show', ShowSchema)

module.exports = Show;