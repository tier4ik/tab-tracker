import api from './api'

export default {
  loadSongs () {
    return api().get('songs')
  },
  addSong (song) {
    return api().post('songs', song)
  }
}
