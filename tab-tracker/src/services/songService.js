import api from './api'

export default {
  loadSongs () {
    return api().get('/songs')
  },
  addSong (song) {
    return api().post('/songs', song)
  },
  show (id) {
    return api().get(`/songs/${id}`)
  },
  edit (song) {
    return api().patch(`song/${song._id}`, song)
  }
}
