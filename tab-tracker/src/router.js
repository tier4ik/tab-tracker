import Vue from 'vue'
import Router from 'vue-router'
//
import App from './App.vue'
import Register from './components/Register.vue'
import Login from './components/Login.vue'
import Songs from './components/Songs.vue'
import CreateSong from './components/CreateSong.vue'
import ViewSong from './components/ViewSong.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: App
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/songs',
      name: 'songs',
      component: Songs
    },
    {
      path: '/songs/create',
      name: 'songs-create',
      component: CreateSong
    },
    {
      path: '/song/:songId',
      name: 'song',
      component: ViewSong
    }
  ]
})
