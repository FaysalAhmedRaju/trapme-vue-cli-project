<template>
    <v-navigation-drawer
            v-model="secondaryDrawer.model"
            floating
            right
            permanent
            class="right-nav-weight rightNavigationTriangle hidden-xs-only"
            app
    > <!--                :width="382" 27.96%-->

        <template>
            <v-toolbar flat
                       class="rightNavigationTriangle  triangleAtLink"
            >
                <v-spacer></v-spacer>

              <div style="padding-right: 80px;"  >
                      <v-menu
                          :nudge-left="280"
                          :nudge-bottom="50"
                      >
                      <template v-slot:activator="{ on, attrs }">
                      <v-btn
                          depressed
                          icon
                          v-bind="attrs"
                          v-on="on"
                      >
<!--                        <v-btn  class="ma-2" outlined fab >-->

                        <v-card
                                style="height: 35px;width: 35px;padding-left: 6px; padding-top: 5px;"
                        >
                            <v-badge
                                    color="red"
                                    :content="secondaryDrawer.notificationCount"
                            >
                                <v-icon color="#2C3040"  style="height: 17px; width: 17.85px; text-align: center;">mdi-bell</v-icon>
                            </v-badge>
                        </v-card>

                      </v-btn>
                      </template>

                        <v-card
                            class="notificationCard"
                        >
                      <v-list
                          subheader
                          three-line

                      >
                        <v-subheader><strong>YOUR NOTIFICATION</strong></v-subheader>
                        <v-divider></v-divider>
                        <v-list-item
                            v-for="(item, index) in notifications"
                            :key="index"
                            @click="seeNotification"
                            three-line
                        >
                          <v-list-item-content>
                          <v-list-item-title>{{ item.title }}</v-list-item-title>
                          <v-list-item-subtitle>{{item.time}}</v-list-item-subtitle>
                            <v-divider></v-divider>
                          </v-list-item-content>

                        </v-list-item>
                      </v-list>
                        </v-card>
                      </v-menu>
      </div>
              <v-menu
                  v-model="menu"
                  :nudge-width="100"
                  offset-y
              >
                <!--              :close-on-content-click="false"-->
              <template v-slot:activator="{ on, attrs }">
              <v-btn
                  depressed
                  icon
                  v-bind="attrs"
                  v-on="on"
              >
                    <v-avatar
                            class="mr-2"
                            size="32"
                    >
                        <v-img width="5" src="@/assets/images/john.png"/>
                    </v-avatar>
                </v-btn>
              </template>
              <v-card

              >
                <!--                  class="triangleAtLink"-->
                <v-list>
                  <v-list-item>
                    <v-list-item-avatar>
                      <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title>JOHN DOE</v-list-item-title>
                      <v-list-item-subtitle>johndoe@gmail.com</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
                <v-divider></v-divider>
                <v-list>
                  <v-list-item
                      @click="myProfile"
                  >
                    <v-list-item-title>My profile</v-list-item-title>
                  </v-list-item>
                  <v-list-item
                      @click="settings"
                  >
                    <v-list-item-title>Settings</v-list-item-title>
                  </v-list-item>
                  <v-list-item
                      @click="help_support"
                  >
                    <v-list-item-title>Help & Support</v-list-item-title>
                  </v-list-item>
                </v-list>
                <v-divider></v-divider>
                <v-list>
                  <v-list-item
                      @click="signOut"
                  >
                    <v-list-item-title>Sign Out</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-card>
              </v-menu>

              <v-menu
                  v-model="menu"
                  :nudge-width="100"
                  offset-y
              >
                <!--              :close-on-content-click="false"-->
                <template v-slot:activator="{ on, attrs }">
              <v-btn
                  depressed
                  v-bind="attrs"
                  v-on="on"
              > John Doe
<!--                    <v-list-item-content style="max-width: 73px">-->
<!--                        <v-list-item-title>John Doe</v-list-item-title>-->
<!--                    </v-list-item-content>-->
                <img src="@/assets/images/tri.svg"/>
              </v-btn>
                </template>
                <v-card
                >
                  <v-list>
                    <v-list-item>
                      <v-list-item-avatar>
                        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                      </v-list-item-avatar>

                      <v-list-item-content>
                        <v-list-item-title>JOHN DOE</v-list-item-title>
                        <v-list-item-subtitle>johndoe@gmail.com</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                  <v-divider></v-divider>
                  <v-list>
                    <v-list-item
                        @click="myProfile"
                    >
                      <v-list-item-title>My profile</v-list-item-title>
                    </v-list-item>
                    <v-list-item
                        @click="settings"
                    >
                      <v-list-item-title>Settings</v-list-item-title>
                    </v-list-item>
                    <v-list-item
                        @click="help_support"
                    >
                      <v-list-item-title>Help & Support</v-list-item-title>
                    </v-list-item>
                  </v-list>
                  <v-divider></v-divider>
                  <v-list>
                    <v-list-item
                        @click="signOut"
                    >
                      <v-list-item-title>Sign Out</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-card>
              </v-menu>

            </v-toolbar>
            <v-toolbar flat>
                <div style="padding-left: 20px;">
                    <br>
                    <h3>Overview</h3>
                </div>
            </v-toolbar>
            <div>
                <v-tabs
                        v-model="tab"
                >
                    <v-tab>Elements</v-tab>
                    <v-tab>Device Overview</v-tab>
                    <v-tab>Misconfigured Devices</v-tab>
                </v-tabs>

                <v-tabs-items
                        v-model="tab"
                >
                    <v-tab-item
                            v-for="item in itemstab"
                            :key="item.tab"
                    >
                        <v-card flat>
                            <v-card-text>
                                <v-row>
                                    <v-col cols="8">
                                        <v-card-title>
                                            <v-icon
                                                    large
                                                    left
                                                    color="#00E5FF"
                                                    class="create-circle"
                                            >
                                                mdi-account
                                            </v-icon>


                                            <span class="title font-weight-dark">{{item.title}}</span>
                                        </v-card-title>
                                        <div>
                                            <h4>Total Count: {{item.total_count}}</h4>
                                        </div>
                                        <div >
                                            {{ item.content }}
                                        </div>
                                    </v-col>
                                    <v-col cols="4" class="mt-6">
                                        <div >
                                            <v-progress-circular
                                                    :rotate="90"
                                                    :size="100"
                                                    :width="5"
                                                    :value="45"
                                                    color="#14D2FF"
                                                    class="progressCircularFirst"

                                            >
                                                45 %
                                            </v-progress-circular>
                                        </div>
                                    </v-col>

                                </v-row>
                                <v-divider></v-divider>
                                <v-row>
                                    <v-col cols="8">
                                        <v-card-title>
                                            <v-icon
                                                    large
                                                    left
                                                    color="#00E5FF"
                                                    class="create-circle"
                                            >
                                                mdi-account
                                            </v-icon>


                                            <span class="title font-weight-dark">{{item.title}}</span>
                                        </v-card-title>
                                        <div>
                                            <h4>Total Count: {{item.total_count}}</h4>
                                        </div>
                                        <div >
                                            {{ item.content }}
                                        </div>
                                    </v-col>
                                    <v-col cols="4" class="mt-6">
                                        <div >
                                            <v-progress-circular
                                                    :rotate="90"
                                                    :size="100"
                                                    :width="5"
                                                    :value="value"
                                                    color="#77AFFF"
                                                    class="progressCircularSecond"

                                            >
                                                {{ value=56 }} %
                                            </v-progress-circular>
                                        </div>
                                    </v-col>

                                </v-row>
                                <v-divider></v-divider>
                                <v-row>
                                    <v-col cols="8">
                                        <v-card-title>
                                            <v-icon
                                                    large
                                                    left
                                                    color="#00E5FF"
                                                    class="create-circle"
                                            >
                                                mdi-account
                                            </v-icon>


                                            <span class="title font-weight-dark">{{item.title}}</span>
                                        </v-card-title>
                                        <div>
                                            <h4>Total Count: {{item.total_count}}</h4>
                                        </div>
                                        <div >
                                            {{ item.content }}
                                        </div>
                                    </v-col>
                                    <v-col cols="4" class="mt-6">
                                        <div >
                                            <v-progress-circular
                                                    :rotate="90"
                                                    :size="100"
                                                    :width="5"
                                                    :value="value"
                                                    color="#14A5FF"
                                                    class="progressCircularThird"

                                            >
                                                {{ value }} %
                                            </v-progress-circular>
                                        </div>
                                    </v-col>

                                </v-row>
                                <v-divider></v-divider>
                                <v-row>
                                    <v-col cols="8">
                                        <v-card-title>
                                            <v-icon
                                                    large
                                                    left
                                                    color="#00E5FF"
                                                    class="create-circle"
                                            >
                                                mdi-account
                                            </v-icon>


                                            <span class="title font-weight-dark">{{item.title}}</span>
                                        </v-card-title>
                                        <div>
                                            <h4>Total Count: {{item.total_count}}</h4>
                                        </div>
                                        <div >
                                            {{ item.content }}
                                        </div>
                                    </v-col>
                                    <v-col cols="4" class="mt-6">
                                        <div >
                                            <v-progress-circular
                                                    :rotate="90"
                                                    :size="100"
                                                    :width="5"
                                                    :value="value"
                                                    color="#2C3040"
                                                    class="progressCircular"

                                            >
                                                {{ value }} %
                                            </v-progress-circular>
                                        </div>
                                    </v-col>

                                </v-row>
                                <v-divider></v-divider>

                            </v-card-text>
                        </v-card>
                    </v-tab-item>
                </v-tabs-items>
            </div>
        </template>
        <div>
            <v-img class="navigation-click-svg" src="@/assets/images/a.svg"/>
        </div>
    </v-navigation-drawer>
</template>

<script>
    export default {
        name: "RightNavigationDrawerComponent",
        data: () => ({
          notifications: [
            { title: 'Your notification shows here.', time: '2 hours ago' },
            { title: 'Your notification shows here.', time: '2 hours ago' },
            { title: 'Your notification shows here.', time: '2 hours ago' },
            { title: 'Your notification shows here.', time: '2 hours ago' },
            { title: 'Your notification shows here.', time: '2 hours ago' },
          ],
            value: 60,
            secondaryDrawer: {
                model: null,
                mini: false,
                items: [
                    { title: 'Dashboard', icon: 'mdi-view-dashboard' },
                    { title: 'Agents', icon: 'mdi-headset' },
                    { title: 'Clients', icon: 'mdi-account' },
                    { title: 'Devices', icon: 'mdi-laptop-chromebook' },
                    { title: 'Device History', icon: 'mdi-clock-check-outline' },
                    { title: 'Traps', icon: 'mdi-view-parallel' },
                    { title: 'Data Collector', icon: 'mdi-database' },
                    { title: 'Support', icon: 'mdi-face-agent' },
                    { title: 'Production', icon: 'mdi-decagram' },
                ],
                notificationCount: 9,
            },
            tab: null,
            itemstab: [
                { tab: 'elements',icon:'mdi-account',title: 'Clients', total_count: '250', content: 'Little description about progrss from previous months can be added here.' },
                { tab: 'device_overview', icon:'mdi-bag-personal-outline',title: 'Sold', total_count: '16612', content: 'Little description about progrss from previous months can be added here.' },
                { tab: 'misconfigured_devices', icon:'mdi-account',title: 'Clients', total_count: '250', content: 'Little description about progrss from previous months can be added here.' },

            ],


        }),
      methods: {
        seeNotification: function () {
          alert('Hello You clicked Me ' + '!')
          // alert(event.target.tagName)
        },
        myProfile: function (){
          alert('You clicked My Profile')
        },
        settings: function (){
          alert('You clicked Settings')
        },
        help_support: function (){
          alert('You clicked Help & Support')
        },
        signOut: function (){
          alert('You clicked Sign Out')
        }
      }
    }
</script>

<style>
/*.triangleAtLink:before{*/
/*  border-bottom: 41px solid #000000;*/
/*  border-left: 53px solid #1565c0;*/
/*  border-right: 1px solid #CDDC39;*/
/*  content: "";*/
/*  !*background: #FFFFFF;*!*/
/*  !*display: inline-block;*!*/
/*  display: block;*/
/*  position: absolute;*/
/*  right: 0px;*/
/*  top: 15px;*/
/*  !*-webkit-box-shadow: 2px 2px 2px 0px rgba(183, 183, 183, 0.39);*!*/
/*  !*-moz-box-shadow: 2px 2px 2px 0px rgba(183, 183, 183, 0.39);*!*/
/*  !*box-shadow: 2px 2px 2px 0px rgba(183, 183, 183, 0.39);*!*/
/*}*/
    .v-navigation-drawer {
        overflow: visible;
        box-shadow: 0 0 5px rgba(97, 97, 97, 0.4);
    }
    .v-progress-circular__underlay{
        stroke: rgba(0, 0, 0, 0)!important;
        /*stroke: rgba(20, 210, 255, 0.15);*/
    }
    .progressCircularFirst{
        background: rgba(20, 210, 255, 0.15);
        border-radius: 50%;
        width: 90px;
        height: 90px;
        color: #2C3040;
        font-weight: bold;
    }
    .progressCircularSecond{
        background: #EBF3FF;
        border-radius: 50%;
        width: 90px;
        height: 90px;
        color: #77AFFF;
        font-weight: bold;
    }
    .progressCircular{
        /*stroke: rgba(20, 210, 255, 0.15);*/
        background: rgba(20, 210, 255, 0.15);
        border-radius: 50%;
        width: 90px;
        height: 90px;
        color: #2C3040;
        font-weight: bold;

    }
    .progressCircularThird{
        background: #DCF1FF;
        border-radius: 50%;
        width: 90px;
        height: 90px;
        color: #14A5FF;
        font-weight: bold;
    }
    /*.icon-circle{*/
    /*    background: rgba(20, 210, 255, 0.15);*/
    /*    border-radius: 50%;*/
    /*    width: 40px;*/
    /*    height: 40px;*/
    /*    padding-left: 5px;*/
    /*}*/
    .create-circle{
        background: #DCF8FF;
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }

    /*.progrssCircul{*/
    /*    background-color: #DCF8FF;*/
    /*    border-radius: 100%; !* Must Have *!*/
    /*    width: 90px; !* Must Be the same as Height *!*/
    /*    height: 90px; !* Must Be the same as Width *!*/
    /*}*/
    .v-badge__badge {
        font-size: 12px !important;
        min-width: 17px !important;
        max-height: 17px !important;
        padding: 3px 2px !important;
    }

    .v-badge__wrapper{
        flex: 0 1;
        height: 0%;
        left: 13px;
        pointer-events: none;
        position: absolute;
        top: 6px;
        width: 0%;

    }
    .v-badge__badge:before {
        font-size: 11px !important;
        min-width: 15px !important;
        max-height: 15px !important;
        padding: 3px 2px !important;
    }

    .right-nav-weight{
        width: 27.96% !important;
    }
    .rightNavigationTriangle:before {
        content: '';
        display: block;
        position: absolute;
        top: 27px;
        left: -12px;
        width: 25px;
        height: 25px;
        background: #F6F7FB;
        -moz-transform: rotate(133deg);
        -webkit-transform: rotate(133deg);
        -webkit-box-shadow: inset 2px 2px 2px 0px rgba(183, 183, 183, 0.39);
        -moz-box-shadow: inset 2px 2px 2px 0px rgba(183, 183, 183, 0.39);
        box-shadow: inset 2px 2px 2px 0px rgba(183, 183, 183, 0.39);
    }

    .navigation-click-svg {
        left: -12px;
        top: 50%;
        position: absolute;
        -moz-transform: rotate(180deg);
        -webkit-transform: rotate(180deg);
    }

    .test-click1 {
        right: -12px;
        top: 50%;
        position: absolute;
    }
</style>
