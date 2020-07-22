<template>
<v-container id="app" style="background-color:#F6F7FB">
        <div class="hidden-md-and-up">
            <v-app-bar>
                <v-toolbar-items>
                    <v-list-item-avatar>
                        <v-img src="@/assets/images/logo.png"/>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-img
                                height="50"
                                width="120"
                                src="@/assets/images/trapme.png" class="img-thumbnail"
                        />
                    </v-list-item-content>
                </v-toolbar-items>

                <v-spacer></v-spacer>

                <v-toolbar-items>
                    <span><img src="@/assets/images/john.png" width="60px" ></span>
                    <v-btn @click.stop="drawer = !drawer">
                        <v-icon large left>mdi-menu</v-icon>
                    </v-btn>
                </v-toolbar-items>
            </v-app-bar>

            <v-navigation-drawer
                    v-model="drawer"
                    absolute
                    temporary
                    right

            >

                <v-list
                        dense
                        nav
                        class="py-0"
                >
                    <v-list-item>
                        <v-list-item-avatar>
                            <v-img width="10" src="@/assets/images/logo.png"/>
                        </v-list-item-avatar>

                        <v-list-item-content>
                            <v-img width="90" src="@/assets/images/trapme.png" />
                        </v-list-item-content>
                    </v-list-item>

                    <v-divider></v-divider>

                    <v-list-item
                            v-for="item in items"
                            :key="item.title"
                            link
                    >
                        <v-list-item-icon>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>
        </div>
        <left-nav-drawe-component/>

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
                           class="rightNavigationTriangle"
                >
                    <v-row
                            align="center"
                            justify="center"
                    >
                        <div style="padding-left: 100px">
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
                        <v-avatar
                                class="mr-2"
                                size="32">
                            <v-img width="5" src="@/assets/images/john.png"/>
                        </v-avatar>
                        <v-list-item-content style="max-width: 73px">
                            <v-list-item-title>John Doe</v-list-item-title>
                        </v-list-item-content>
                        <img src="@/assets/images/tri.svg"/>
                    </v-row>
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
                                    <v-card-title>
                                        <v-icon
                                                large
                                                left
                                                color="#00E5FF"
                                        >
                                            {{item.icon}}
                                        </v-icon>
                                        <span class="title font-weight-dark">{{item.title}}</span>
                                    </v-card-title>

                                    <div>
                                        <h4>Total Count: {{item.total_count}}</h4>
                                    </div>
                                    <div>{{ item.content }}</div>
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

        <v-main>

        </v-main>
</v-container>
</template>

<script>
    import LeftNavigationDrawerComponent from "./LeftNavigationDrawerComponent.vue";
    export default {
        name: "Dashboard",
        components:{
          'left-nav-drawe-component' : LeftNavigationDrawerComponent
        },
        data: () => ({
            drawer: false,
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
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',


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

            mobiles: [
                { title: 'Home', icon: 'mdi-home-city' },
                { title: 'My Account', icon: 'mdi-account' },
                { title: 'Users', icon: 'mdi-account-group-outline' },
            ],

        }),
    }
</script>
<style >
    .right-nav-weight{
        width: 27.96% !important;
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

    .rightNavigationTriangle:before {
        content: '';
        display: block;
        position: absolute;
        top: 27px;
        right: 520px;
        width: 25px;
        height: 25px;
        background: #F6F7FB;
        -moz-transform: rotate(133deg);
        -webkit-transform: rotate(133deg);
        -webkit-box-shadow: inset 2px 2px 2px 0px rgba(183, 183, 183, 0.39);
        -moz-box-shadow: inset 2px 2px 2px 0px rgba(183, 183, 183, 0.39);
        box-shadow: inset 2px 2px 2px 0px rgba(183, 183, 183, 0.39);
    }
    .primaryTriangle:before {
        content: '';
        display: block;
        position: absolute;
        top: 27px;
        right: -13px;
        width: 25px;
        height: 25px;
        background: #F6F7FB;
        -moz-transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
        -webkit-box-shadow: inset 2px 2px 2px 0px rgba(183, 183, 183, 0.39);
        -moz-box-shadow: inset 2px 2px 2px 0px rgba(183, 183, 183, 0.39);
        box-shadow: inset 2px 2px 2px 0px rgba(183, 183, 183, 0.39);
    }

    .primaryTriangle1:after {
        content: '';
        display: block;
        position: absolute;
        top: 27px;
        right: -12px;
        width: 25px;
        height: 25px;
        background: #FFFFFF;
        -moz-transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
        -webkit-box-shadow: 2px 2px 2px 0px rgba(183, 183, 183, 0.39);
        -moz-box-shadow: 2px 2px 2px 0px rgba(183, 183, 183, 0.39);
        box-shadow: 2px 2px 2px 0px rgba(183, 183, 183, 0.39);
    }


    .navigation-click-svg {
        right: 531px;
        top: 50%;
        position: absolute;
        -moz-transform: rotate(180deg);
        -webkit-transform: rotate(180deg);
    }
    .v-navigation-drawer {
        overflow: visible;
        box-shadow: 0 0 5px rgba(97, 97, 97, 0.4);
    }
    .v-badge__badge {
        font-size: 12px !important;
        min-width: 17px !important;
        max-height: 17px !important;
        padding: 3px 2px !important;
    }
    #app {
        background-color: #F6F7FB;
    }


    .test-click1 {
        right: -12px;
        top: 50%;
        position: absolute;
    }
    .two{
        margin-top: 100px;
        margin-left: 50px;
        margin-right: 500px;
        margin-bottom: 100px;
        background: #FF6B6C;
        position: relative;
        z-index: 10;
    }
    .two__image{
        clip-path: circle();
    }
    .curved{
        margin-top: 100px;
        margin-left: 50px;
        margin-right: 500px;
        background-color: #ff3c00;
        color: #fff;
        text-align: center;

    }
    .curved h1{
        font-size: 6rem;
        font-family: 'Segoe UI',Tahoma, Geneva, Verdana, sans-serif;
    }
    .curved p{
        font-size: 1rem;
        font-family: 'segoe UI', Tahoma, Geneva, verdana, sans-serif;
    }
    .curved svg{
        display: block;
    }
    .curved.upper{
        color: #fff;
    }
    .test-design{
        border-right: 2px solid #CAD5E0;
    }
    .test-design:before{
        content: '';
        display: block;
        position: absolute;
        top: 24px;
        right: -9px;
        width: 17px;
        height: 17px;
        background: #F6F7FB;
        border-left: 2px solid #CAD5E0;
        border-top: 2px solid #CAD5E0;
        -moz-transform:rotate(-45deg);
        -webkit-transform:rotate(-45deg);
    }

    .rectangle:after{
        content: '||';
        color: black;
        font-size: 30px;
        display: block;
        position: absolute;
        top: 40%;
        right: -18px;
        width: 18px;
        height: 53px;
        background: #ffffff;
        /* border-right: 2px solid #CAD5E0; */
        /* border-bottom: 2px solid #CAD5E0; */
        /* border-top: 2px solid #CAD5E0; */
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        box-shadow: 5px 0px 6px 2px rgba(0, 0, 0, 0.4);
        /*box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);*/
    }


</style>

