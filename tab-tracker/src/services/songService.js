import api from './api'

export default {
  loadSongs (val) {
    return api().get('/songs', {
      params: {
        val: val
      }
    })
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
