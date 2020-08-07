<template>
  <div>
    <dashboard-agent-component/>
    <mobile-res-component/>
    <left-nav-drawe-component/>
  </div>
</template>
<script>
import dashboardComponent from './dashboardAgent';
import LeftNavigationDrawerComponent from "./LeftNavigationDrawerComponent";

import MobileResComponent from "./MobileResComponent";
export default {
  name: "AgentComponent",
  components: {
    'dashboard-agent-component' : dashboardComponent,
    'left-nav-drawe-component' : LeftNavigationDrawerComponent,
    'mobile-res-component' : MobileResComponent
  },
  data: () => ({


  }),
}
</script>
<style scoped>


</style>
