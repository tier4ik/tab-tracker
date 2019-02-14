<template>
    <v-container>
        <v-layout justify-center>
            <v-flex xs12 lg10>
                <div class="white elevation-2">
                    <v-toolbar flat dense class="cyan" dark>
                        <v-toolbar-title>{{ title }}</v-toolbar-title>
                        <slot name="controls"></slot>    
                    </v-toolbar>
                    <div class="pl-4 pr-4 pt-2 pb-2">
                        <slot></slot>
                    </div>
                </div>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    props: {
        title: {
            type: String
        }
    }
}
</script>

<style scoped lang="sass">

</style>
