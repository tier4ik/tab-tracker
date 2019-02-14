<template>
  <tab-panel title="Register">
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
  </tab-panel>
</template>

<script>
import authenticationService from './../services/authenticationService'
import {required, minLength, maxLength} from 'vuelidate/lib/validators'
import Header from './Header.vue'
import Panel from './Panel.vue'
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
    "tab-header": Header,
    "tab-panel": Panel
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
  .register
    &__form
      display: flex
      flex-direction: column
      align-items: center
    &__error
      color: red
</style>
