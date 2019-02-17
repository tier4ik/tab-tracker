<template>
    <tab-panel title="Search">
        <v-text-field
        clearable
        label="search"
        v-model.trim="search">
        </v-text-field>
    </tab-panel>
    
</template>

<script>
import Panel from './Panel.vue'
import songService from './../services/songService'
import _ from 'lodash'
export default {
    data() {
        return {
            search: ''
        }
    },
    components: {
        'tab-panel': Panel
    },
    watch: {
        search: _.debounce(async function(val) {
            const route = {
                name: 'songs'
            }
            if(this.search !== '') {
                route.query = {
                    search: val
                }
            }
            this.$router.push(route)
        }, 700),
        '$route.query.search': {
            immediate: true,
            handler(val) {
                this.search = val
            }
        }
    }
}
</script>

<style lang="sass" scoped>

</style>
