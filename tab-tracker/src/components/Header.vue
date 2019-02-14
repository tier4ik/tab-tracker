<template>
    <v-toolbar fixed class="cyan" dark>
        <v-toolbar-title @click="routeTo('/')">
            <span class="title">TabTracker</span>  
        </v-toolbar-title>
        <v-toolbar-items>
            <v-btn :to="{name: 'songs'}" flat large>
                BROWSE
            </v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn :to="{name: 'login'}" v-if="!$store.state.isUserLogged" flat large>
                Login 
            </v-btn>
            <v-btn :to="{name: 'register'}" v-if="!$store.state.isUserLogged" flat large>
                Sign Up 
            </v-btn>
            <v-btn @click="logout" :to="{name: 'home'}" v-if="$store.state.isUserLogged" flat large>
                Logout 
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
        },
        logout() {
            this.$store.dispatch('setToken', null);
            this.$store.dispatch('setUser', null);
        }
    }
}
</script>

<style scoped lang="sass">
  .title
    cursor: pointer
</style>
