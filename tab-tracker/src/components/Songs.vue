<template>
    <tab-panel title="Songs" class="mt-4">
        <v-btn fab light small slot="controls" absolute right middle :to="{name: 'songs-create'}">
            <v-icon>add</v-icon>
        </v-btn>
        <v-layout v-for="song in songs" :key="song._id" class="song mb-4">
            <v-flex xs6 align-self-center>
                <div class="song__title" >Title: {{song.title}}</div>
                <div class="song__artist">Artist: {{song.artist}}</div>
                <div class="song__album">Album: {{song.album}}</div>
                <div class="song__genre">Genre: {{song.genre}}</div>
                <v-btn class="mt-4 cyan" dark :to="{ name: 'song', params: { songId: song._id }}">
                    Detail
                </v-btn>
            </v-flex> 
            <v-flex xs6 class="text-xs-center">
                <img class="album__image" :src="song.albumImageUrl" alt="album image">
            </v-flex> 
         </v-layout>   
        
    </tab-panel>
</template>

<script>
import Panel from './Panel.vue'
import songService from './../services/songService'
export default {
    data() {
        return {
            songs: null
        }
    },
    components: {
        'tab-panel': Panel
    },
    async mounted() {
        let songs = await songService.loadSongs();
        this.songs = songs.data;
    }
}
</script>

<style scoped lang="sass">
.song
    height: 330px
    overflow: hidden
    &__title
        font-size: 30px
    &__artist
        font-size: 24px
    &__album
        font-size: 24px
    &__genre
        font-size: 18px
.album__image
    max-height: 100%
    width: auto
</style>
