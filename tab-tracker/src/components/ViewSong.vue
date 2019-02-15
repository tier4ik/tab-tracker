<template>
    <v-container fluid>
        <v-layout row wrap>
            <v-flex xs12>
                <tab-panel title="Video" class="text-xs-center">
                    <youtube-media :video-id="song.youtubeId" class="song__video"></youtube-media>
                </tab-panel>
            </v-flex>
            <v-flex xs10 offset-xs1>
                <v-btn 
                    dark
                    block
                    :to="{name: 'song-edit'}"
                    class="cyan darken-2 align-self-center">
                    Edit Song
                </v-btn>
            </v-flex>
            <v-flex xs12 lg4>
                <tab-panel title="Lyrics" class="text-xs-center">
                    <div class="song__lyrics"><pre>{{song.lyrics}}</pre></div>
                </tab-panel>
            </v-flex>
            <v-flex xs12 lg8>
                <tab-panel title="Tabs">
                    <div class="song__tabs"><pre>{{song.tab}}</pre></div>
                </tab-panel>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import songService from './../services/songService'
import Panel from './Panel.vue'

export default {
    data() {
        return {
           song: null
        }
    },
    components: {
        'tab-panel': Panel
    },
    async mounted() {
        //из объекта в VUEX
        let songId = this.$store.state.route.params.songId;
        let song = await songService.show(songId);
        this.song = song.data;
    }    
}
</script>

<style scoped lang="sass">
.song__video>iframe
    max-width: 100%
</style>
