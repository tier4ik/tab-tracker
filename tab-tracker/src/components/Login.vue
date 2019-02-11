<template>
  <v-layout justify-center align-center>
    <v-flex xs12 lg8>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Log In</v-toolbar-title>
        </v-toolbar>
        <form class="login__form">
          <v-text-field
            type="email" 
            name="email" 
            placeholder="email" 
            v-model.trim="email"
            autofocus>
          </v-text-field>
          <v-text-field 
            type="password" 
            name="password" 
            placeholder="password" 
            v-model.trim="password">
          </v-text-field>
          <div v-if="error" v-html="error" class="error"></div>
          <v-btn class="cyan" dark @click="login">Log In</v-btn>
        </form>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import authenticationService from './../services/authenticationService'
import Header from './Header.vue'
export default {
  data() {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  components: {
    "tab-header": Header
  },
  methods: {
    async login() {
      try {
        const response = await authenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      }catch(e){
        // error которую возвращает axios
        this.error = e.response.data
      }
    }
  }
}
</script>

<style scoped lang="sass">
  @import '~vuetify/dist/vuetify.css'
  .login
    &__form
      display: flex
      flex-direction: column
      align-items: center
    &__error
      color: red
</style>
