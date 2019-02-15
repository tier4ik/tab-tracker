<template>
    <tab-panel  title="Edit the song">
        <v-container grid-list-lg>
            <v-layout row wrap>
                <v-flex xs12 lg4>
                    <v-text-field 
                        :rules="[rules.required]"
                        name="title" 
                        label="Your song title" 
                        v-model.trim="song.title"
                        outline>
                    </v-text-field>
                </v-flex>
                
                <v-flex xs12 lg4>
                <v-text-field 
                    :rules="[rules.required]"
                    name="artist" 
                    label="Artist" 
                    v-model.trim="song.artist"
                    outline>
                    </v-text-field> 
                </v-flex>
                
                <v-flex xs12 lg4>
                    <v-text-field
                    :rules="[rules.required]"
                    name="album" 
                    label="Album" 
                    v-model.trim="song.album"
                    outline>
                    </v-text-field>
                </v-flex>
                
                <v-flex xs12 lg4>
                    <v-text-field
                    :rules="[rules.required]"
                    name="genre" 
                    label="Genre" 
                    v-model.trim="song.genre"
                    outline>
                    </v-text-field>
                </v-flex>

                <v-flex xs12 lg4>
                    <v-text-field
                    :rules="[rules.required]"
                    name="albumImageUrl" 
                    label="Album Image Url" 
                    v-model.trim="song.albumImageUrl"
                    outline>
                    </v-text-field>
                </v-flex>

                <v-flex xs12 lg4>
                    <v-text-field
                    :rules="[rules.required]"
                    name="youtubeId" 
                    label="Youtube Id" 
                    v-model.trim="song.youtubeId"
                    outline>
                    </v-text-field>
                </v-flex>

                <v-flex xs12 lg6>
                    <v-textarea
                    :rules="[rules.required]"
                    outline
                    name="lyrics"
                    label="Lyrics"
                    v-model.trim="song.lyrics"
                    ></v-textarea>
                </v-flex>

                <v-flex xs12 lg6>
                    <v-textarea
                    :rules="[rules.required]"
                    outline
                    name="tab"
                    label="Tabs"
                    v-model.trim="song.tab"
                    ></v-textarea>
                </v-flex>
                
                <v-flex xs12>
                    <v-alert
                    :value="true"
                    v-if="error"
                    type="error"
                    class="create-error">
                        {{error}}
                    </v-alert>
                </v-flex>
                
                <v-flex xs2 offset-xs5 class="text-xs-center"> 
                    <v-btn
                    dark
                    class="cyan"
                    @click="edit">
                        Edit
                    </v-btn>
                </v-flex>
            </v-layout>
        </v-container>
    </tab-panel>
</template>

<script>
import Panel from './Panel.vue'
import songService from './../services/songService'
export default {
    data() {
        return {
            song: null,
            error: null,
            rules: {
                required: value => !!value || 'Required'
            }
        }
    },
    components: {
        'tab-panel': Panel
    },
    methods: {
        async edit() {
            try {
                await songService.edit(this.song);
                this.$router.push({
                        name: 'song', 
                        params: {
                            songId: this.song._id
                        }
                    })
            } catch (e) {
                console.log(e)
            }
        }
    },
    async mounted() {
        let songId = this.$store.state.route.params.songId;
        let song = await songService.show(songId);
        this.song = song.data;
    }
}
</script>

<style scoped lang="sass">
    
</style>
