<template>
     <div>
    <dashboard-component/>
    <mobile-res-component/>
   <left-nav-drawe-component/>
   <right-nav-drawe-component/>
    </div>
</template>

<script>
    import dashboardComponent from './dashboard.vue';
    import LeftNavigationDrawerComponent from "./LeftNavigationDrawerComponent";
    import RightNavigationDraweComponent from "./RightNavigationDrawerComponent";
    import MobileResComponent from "./MobileResComponent";
    export default {
        name: "MainComponent",
        components: {
            'dashboard-component' : dashboardComponent,
            'left-nav-drawe-component' : LeftNavigationDrawerComponent,
            'right-nav-drawe-component' : RightNavigationDraweComponent,
            'mobile-res-component' : MobileResComponent
        },
        data: () => ({


        }),
    }
</script>
<style scoped>


</style>
