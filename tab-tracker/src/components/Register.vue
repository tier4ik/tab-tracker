<template>
  <v-layout justify-center align-center>
    <v-flex xs12 lg8>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
        <form class="register__form">
          <v-text-field
            type="email" 
            name="email" 
            placeholder="email" 
            v-model.trim="$v.email.$model"
            autofocus
            autocomplete="off">
          </v-text-field>
          <div class="register__error" v-if="!$v.email.required">
            Email field is required
          </div>
          <v-text-field 
            type="password" 
            name="password" 
            placeholder="password" 
            v-model.trim="$v.password.$model">
          </v-text-field>
          <div class="register__error" v-if="!$v.password.minLength || !$v.password.maxLength">
            Password length must be more than {{$v.password.$params.minLength.min}} and less than {{$v.password.$params.maxLength.max}}
          </div>
          <div v-if="error" v-html="error" class="error"></div>
          <v-btn class="cyan" dark @click="register">Register</v-btn>
        </form>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import authenticationService from './../services/authenticationService'
import {required, minLength, maxLength} from 'vuelidate/lib/validators'
import Header from './Header.vue'
export default {
  data() {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  validations: {
    email: {
      required
    },
    password: {
      required,
      minLength: minLength(6),
      maxLength: maxLength(16)
    }
  },
  components: {
    "tab-header": Header
  },
  methods: {
    async register() {
      try {
        const response = await authenticationService.register({
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
  .register
    &__form
      display: flex
      flex-direction: column
      align-items: center
    &__error
      color: red
</style>
