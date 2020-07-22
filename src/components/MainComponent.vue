<template>
    <v-container id="app" style="background-color:#F6F7FB">
              <dashboard-component/>
    </v-container>
</template>

<script>
    import dashboardComponent from './dashboard.vue';
    export default {
        name: "MainComponent",
        components: {
            'dashboard-component' : dashboardComponent,
        },
        data: () => ({


        }),
    }
</script>
<style scoped>


</style>
