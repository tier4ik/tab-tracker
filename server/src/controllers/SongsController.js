const Song  = require('./../models/Song')
const objectId = require('mongodb').ObjectID;

module.exports = {
    async sendSongs(req, res) {
        try {
            let songs;
            let val = req.query.val;
            if(val) {
                songs = await Song.find({$or: [
                    {title: {$regex: val, $options: 'i'}},
                    {artist: {$regex: val,$options: 'i'}},
                    {album: {$regex: val, $options: 'i'}},
                    {genre: {$regex: val, $options: 'i'}}
                ]})
            }else{
                songs = await Song.find().limit(10);
            }
            res.send(songs);
        } catch (e) {
            console.log(e);
            res.status(500).send({
                error: `An error has occure trying to fetch the songs`
            })
        }
    },
    async addSong(req, res) {
        try {
            let song = await new Song(req.body);
            song.save();
            res.send(song);
        } catch (e) {
            console.log(e);
            res.status(500).send({
                error: `An error has occure trying to add the song`
            })
        }
    },
    async sendSong(req, res) {
        try {
            let song = await Song.findOne({_id: objectId(req.params.id)})
            if(!song) {
                return res.status(404).send({error: 'The song is missed'})
            }
            res.send(song);
        } catch (e) {
            console.log(e);
            res.status(500).send({
                error: `An error has occure trying to fetch the song with id: ${req.params.id}`
            })
        }
    },
    async updateSong(req, res) {
        try {
            let song = await Song.findOneAndUpdate({_id: objectId(req.body._id)}, {$set: req.body})
            res.send(song);
        } catch (error) {
            console.log(e);
            res.status(500).send({
                error: `An error has occure trying to update the song with id: ${req.params.id}`
            })
        }
    }
}