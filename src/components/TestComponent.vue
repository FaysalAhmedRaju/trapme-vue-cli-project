<template>
    <div>
        <v-row>
            <v-col cols="4" >
                <v-alert
                elevation="24"
                icon="mdi-spider"
                type="success"
                class="successClass"
                >
                    I'm a success alert.
                </v-alert>
            </v-col>
            <v-col cols="4" >
                <v-alert type="info">
                    I'm an info alert.
                </v-alert>
            </v-col>
            <v-col cols="4" >
                <v-alert type="warning">
                    I'm a warning alert.
                </v-alert>
            </v-col>
        </v-row>
    </div>
</template>
<script>
    export default {
        name: "TestComponent",

        data: () => ({


        }),
    }
</script>
<style >    /*lang="scss"*/

    /*@import "../../src/sass/variables.sass";*/
    .successClass{
        /*border-radius: 30px;*/
        height: 200px;
        /*font-size: 45px;*/
    }

</style>
