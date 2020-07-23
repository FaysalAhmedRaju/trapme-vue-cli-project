<template>
  <v-app id="app" style="background-color: #F6F7FB">
      <mobile-res-component/>
      <left-nav-drawe-component/>
      <right-nav-drawe-component/>
      <!--      <my-loc-component-login/>-->
      <!--      <hello-world-component/>-->
<!--      <dashboard-component/>-->
      <router-view></router-view>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
// import loginComponent from './login.vue';
// import dashboardComponent from './components/dashboard.vue';
import LeftNavigationDrawerComponent from "./components/LeftNavigationDrawerComponent";
import RightNavigationDraweComponent from "./components/RightNavigationDrawerComponent";
import MobileResComponent from "./components/MobileResComponent";

export default {
  name: 'App',

    components:{
        'left-nav-drawe-component' : LeftNavigationDrawerComponent,
        'right-nav-drawe-component' : RightNavigationDraweComponent,
        'mobile-res-component' : MobileResComponent
    },

  data: () => ({
    title: "Trapme Project",
  }),
  // data: function () {
  //   return {
  //     title: "Trapme Project -2",
  //   }
  // },
};
</script>
<style scoped lang="sass" >
  @import '../node_modules/typeface-roboto/index.css'
</style>

