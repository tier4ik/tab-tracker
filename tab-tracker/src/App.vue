<template>
  <div id="app">
    <v-app>
      <v-content>
        <v-container fill-height fluid>
          <tab-header></tab-header>
          <router-view></router-view>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  components: {
    "tab-header": Header
  }
}
</script>


<style lang="sass">
  #app
    font-family: Arial, sans-serif
  a
    text-decoration: none
</style>
