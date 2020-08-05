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
                       class="rightNavigationTriangle"
            >
                <v-spacer></v-spacer>

                    <div style="padding-right: 80px; ">
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
                            size="32"

                    >
                        <v-img width="5" src="@/assets/images/john.png"/>
                    </v-avatar>
                    <v-list-item-content style="max-width: 73px">
                        <v-list-item-title>John Doe</v-list-item-title>
                    </v-list-item-content>


                    <img src="@/assets/images/tri.svg"/>
<!--                <drop-down class="nav-item "-->
<!--                           title="5 Notifications"-->
<!--                           title-classes="nav-link"-->
<!--                           icon="ti-bell"-->
<!--                >-->
<!--                    <ul class="triangleAtLink">-->
<!--                        <a class="dropdown-item" href="#">Notification 1</a>-->
<!--                        <a class="dropdown-item" href="#">Notification 2</a>-->
<!--                        <a class="dropdown-item" href="#">Notification 3</a>-->
<!--                        <a class="dropdown-item" href="#">Notification 4</a>-->
<!--                        <a class="dropdown-item" href="#">Another notification</a>-->
<!--                    </ul>-->

<!--                </drop-down>-->

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
    }
</script>

<style lang="scss">
    .triangleAtLink:before {
        border-bottom: 41px solid #FFFCF5;
        border-left: 53px solid rgba(0, 0, 0, 0);
        border-right: 1px solid rgba(0, 0, 0, 0);
        content: "";
        display: inline-block;
        position: absolute;
        right: 0px;
        top: -38px;
    }
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
