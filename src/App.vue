<template>
  <v-app id="app" style="background-color: #F6F7FB">
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
export default {
  name: 'App',

  components: {
    // 'dashboard-component' : dashboardComponent,
    // 'my-loc-component-login' : loginComponent,
    // 'hello-world-component' : HelloWorld
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

