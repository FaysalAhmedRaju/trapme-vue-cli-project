<template>
<div>
  <v-row>
    <v-col cols="2"></v-col>
    <v-col cols="4">
      <v-menu offset-y



      >
<!--        :nudge-top="100"-->
        <template v-slot:activator="{ on, attrs }">
          <v-btn
              depressed
              icon
              v-bind="attrs"
              v-on="on"
          >
            <!--                        <v-btn  class="ma-2" outlined fab >-->
            <div style="padding-right: 80px;">
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
            </div>
          </v-btn>
        </template>
        <v-card
         flat
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
    </v-col>
    <v-col cols="4" style="background-color: ivory">
      <template>
        <div class="text-center"

        >
          <div class="triangleAtLink">
          <v-menu
              v-model="menu"
              :nudge-width="200"
              offset-y

          >
            <!--              :close-on-content-click="false"-->
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                  color="indigo"
                  dark
                  v-bind="attrs"
                  v-on="on"
              >
                Menu as Popover
              </v-btn>
            </template>

            <v-card

            >



              <v-list

              >
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
                <v-list-item>
                  <v-list-item-title>My profile</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>Settings</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>Help & Support</v-list-item-title>
                </v-list-item>
              </v-list>
              <v-divider></v-divider>
              <v-list>
                <v-list-item>
                  <v-list-item-title>Sign Out</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card>

          </v-menu>
          </div>
        </div>
      </template>
    </v-col>
    <v-col cols="2"></v-col>

  </v-row>
  <v-row>
    <v-col cols="4">
      <v-card
          class="d-flex pr-8"
          outlined
          tile
      >
        <div>I'm a flexbox container!</div>
      </v-card>
    </v-col>
    <v-col cols="4"></v-col>
    <v-col cols="4"></v-col>
  </v-row>
  <v-row>
    <v-col cols="4">
      <div class="text-center">
        <v-menu>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
                v-bind="attrs"
                v-on="on"
            >
              Click me
            </v-btn>
          </template>

          <v-list>
            <v-list-item @click="method">
              <v-list-item-title>Option 1</v-list-item-title>
            </v-list-item>
            <v-list-item disabled>
              <v-list-item-title>Option 2</v-list-item-title>
            </v-list-item>
            <v-list-item @click="method">
              <v-list-item-title>Option 3</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-col>
    <v-col cols="4">
      <v-menu>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
              v-bind="attrs"
              v-on="on"
          >
            Click me
          </v-btn>
        </template>

        <v-list>
          <v-list-item @click="method">
            <v-list-item-title>Option 1</v-list-item-title>
          </v-list-item>
          <v-list-item disabled>
            <v-list-item-title>Option 2</v-list-item-title>
          </v-list-item>
          <v-list-item @click="method">
            <v-list-item-title>Option 3</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-col>
    <v-col cols="4">
      <button
          type="button"
          role="button"
          aria-haspopup="true"
          aria-expanded="false"
      >
        Click me
      </button>
    </v-col>


  </v-row>
</div>

</template>
<script>
    export default {
        name: "TestComponent",

        data: () => ({
          fav: true,
          message: false,
          hints: true,
          items: [
            'All', 'Family', 'Friends', 'Coworkers'
          ],
          notifications: [
            { title: 'Your notification shows here.', time: '2 hours ago' },
            { title: 'Your notification shows here.', time: '2 hours ago' },
            { title: 'Your notification shows here.', time: '2 hours ago' },
            { title: 'Your notification shows here.', time: '2 hours ago' },
            { title: 'Your notification shows here.', time: '2 hours ago' },
          ],
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

        }),
    }
</script>

<style >    /*lang="scss"*/

/*.triangleAtLink:after {*/
/*  border-bottom: 41px solid #000000;*/
/*  border-left: 53px solid rgba(0, 0, 0, 0);*/
/*  border-right: 1px solid rgba(0, 0, 0, 0);*/
/*  content: "";*/
/*  display: inline-block;*/
/*  position: absolute;*/
/*  right: 0px;*/
/*  top: -38px;*/
/*}*/
    /*@import "../../src/sass/variables.sass";*/
    .successClass{
        /*border-radius: 30px;*/
        height: 200px;
        /*font-size: 45px;*/
    }

</style>
