<template>
    <v-toolbar fixed class="cyan" dark>
        <v-toolbar-title @click="routeTo('/')">
            <span class="title">TabTracker</span>  
        </v-toolbar-title>
        <v-toolbar-items>
            <v-btn flat large>
                BROWSE
            </v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn to="login" v-if="!$store.state.isUserLogged" flat large>
                Log In 
            </v-btn>
            <v-btn to="register" v-if="!$store.state.isUserLogged" flat large>
                Sign Up 
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        routeTo(path) {
            this.$router.push(path)
        }
    }
}
</script>

<style scoped lang="sass">
  .title
    cursor: pointer
</style>
