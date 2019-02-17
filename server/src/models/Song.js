const mongoose = require('mongoose');

const Schema = mongoose.Schema;
var songSchema = new Schema({
    title: {type: String, required: true},
    artist: {type: String, required: true},
    album: {type: String, required: true},
    genre: {type: String, required: true},
    albumImageUrl: {type: String},
    youtubeId: {type: String},
    lyrics: {type: String},
    tab: {type: String}
});

var Song = mongoose.model('Song', songSchema);

module.exports = Song;