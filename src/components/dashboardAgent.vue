<template>
  <div >
    <v-row >
      <v-col cols="3">

      </v-col>
      <v-col cols="3" class="pl-0">
        <v-text-field
            label="Search"
            outlined
            append-icon="mdi-magnify"
        >

        </v-text-field>

      </v-col>
      <v-col cols="2">
        <v-menu
            v-model="menu2"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
                v-model="date"
                solo
                append-icon="event"
                style="background-color: orange; height: 50%;"
                readonly
                v-bind="attrs"
                v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
        </v-menu>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="3">
      </v-col>
      <v-col cols="6" >
        <v-row col="12" >
          <v-col col="2" style="padding-left: 0px;
                                        padding-right: 0px;">
            <v-card
                style="height: 100%;width:100%;background-color: #ECECEC"
                flat
                class="DashboardTriangle"
            >
              <v-card-text>
                <h3>Dashboard</h3>
              </v-card-text>

            </v-card>
          </v-col>
          <v-col col="2" style="padding-left: 0px;
                                        padding-right: 0px;">
            <v-card
                style="height: 100%;width:100%;background-color: #ECECEC;"
                flat

            >
              <v-card-text>
                <h3>Device</h3>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col col="8" style="padding-left: 0px; padding-right: 0px">
            <v-card
                style="height: 100%;width:75%"
                class="elevation-0 DashboardTriangle-two"
            >
              <v-card-text>

              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="3">
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="3">

      </v-col>
      <v-col cols="3">
        <h3>Agents</h3>
      </v-col>
      <v-col cols="3">

      </v-col>
      <v-col cols="3">
        <v-btn
            class="ma-2" dark

        >
          <v-icon left>mdi-cloud-download</v-icon>
          Invoice Overview (CSV)
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-divider></v-divider>
      </v-col>

    </v-row>
  </div>
</template>

<script>
export default {
  name: "DashboardAgent",
  components:{

    /*
    'left-nav-drawe-component' : LeftNavigationDrawerComponent,
    'right-nav-drawe-component' : RightNavigationDraweComponent,
    'mobile-res-component' : MobileResComponent
     */

  },
  data: () => ({


  }),
}
</script>
<style>
.DashboardTriangle:before {
  content: '';
  display: block;
  position: absolute;
  top: 7px;
  left: 260px;
  width: 40px;
  height: 40px;
  background: #ECECEC;
  -moz-transform: rotate(133deg);
  -webkit-transform: rotate(133deg);
  border-top-left-radius: 11px;
  -webkit-box-shadow: inset 2px 2px 2px 0px rgba(183, 183, 183, 0.39);
  -moz-box-shadow: inset 2px 2px 2px 0px rgba(183, 183, 183, 0.39);
  box-shadow: inset 2px 2px 2px 0px rgba(183, 183, 183, 0.39);
}

.DashboardTriangle-two:before {
  content: '';
  display: block;
  position: absolute;
  top: 7px;
  left: -23px;
  width: 40px;
  height: 40px;
  background: #ECECEC;
  -moz-transform: rotate(133deg);
  -webkit-transform: rotate(133deg);
  border-top-left-radius: 11px;
  -webkit-box-shadow: inset 2px 2px 2px 0px rgba(183, 183, 183, 0.39);
  -moz-box-shadow: inset 2px 2px 2px 0px rgba(183, 183, 183, 0.39);
  box-shadow: inset 2px 2px 2px 0px rgba(183, 183, 183, 0.39);
}

.rounded-corner{
  border-radius:50px;
}
/*.mainResponsiveClass{*/
/*        width: 100% !important;*/
/*        padding: 0% 27.96% 0% 19.25% !important;*/
/*}*/
/*.mainResponsiveClassMin{*/
/*        width: 100% !important;*/
/*        padding: 0% 27.96% 0% 6.7% !important;*/
/*}*/

#app {
  background-color: #F6F7FB;
}
/*.test-design{*/
/*    border-right: 2px solid #CAD5E0;*/
/*}*/
/*.test-design:before{*/
/*    content: '';*/
/*    display: block;*/
/*    position: absolute;*/
/*    top: 24px;*/
/*    right: -9px;*/
/*    width: 17px;*/
/*    height: 17px;*/
/*    background: #F6F7FB;*/
/*    border-left: 2px solid #CAD5E0;*/
/*    border-top: 2px solid #CAD5E0;*/
/*    -moz-transform:rotate(-45deg);*/
/*    -webkit-transform:rotate(-45deg);*/
/*}*/
/*.rectangle:after{*/
/*    content: '||';*/
/*    color: black;*/
/*    font-size: 30px;*/
/*    display: block;*/
/*    position: absolute;*/
/*    top: 40%;*/
/*    right: -18px;*/
/*    width: 18px;*/
/*    height: 53px;*/
/*    background: #ffffff;*/
/*    !* border-right: 2px solid #CAD5E0; *!*/
/*    !* border-bottom: 2px solid #CAD5E0; *!*/
/*    !* border-top: 2px solid #CAD5E0; *!*/
/*    border-top-right-radius: 10px;*/
/*    border-bottom-right-radius: 10px;*/
/*    box-shadow: 5px 0px 6px 2px rgba(0, 0, 0, 0.4);*/
/*    !*box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);*!*/
/*}*/
/*.two{*/
/*    margin-top: 100px;*/
/*    margin-left: 50px;*/
/*    margin-right: 500px;*/
/*    margin-bottom: 100px;*/
/*    background: #FF6B6C;*/
/*    position: relative;*/
/*    z-index: 10;*/
/*}*/

/*.two__image{*/
/*    clip-path: circle();*/
/*}*/
.chart2{
  /*background-color: #DCF8FF;*/
  width: 362px;
}
</style>

