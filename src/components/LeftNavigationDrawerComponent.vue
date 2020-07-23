<template>
    <v-navigation-drawer
            v-model="primaryDrawer.model"
            :mini-variant="primaryDrawer.mini"
            :mini-variant-width="primaryDrawer.miniWidth"
            :width="263"
            permanent
            class="hidden-xs-only"
            floating
            app
            :class="{ primaryTriangle: !primaryDrawer.mini, primaryTriangle1: primaryDrawer.mini, leftNavWeight: !primaryDrawer.mini, leftNavWeightMin: primaryDrawer.mini}"
    >
        <v-list
                dense
                nav
                class="pa-4"
        >
            <v-list-item>
                <v-list-item-avatar>
                    <v-img width="10" src="@/assets/images/logo.png"/>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title>
                        <v-img width="90" src="@/assets/images/trapme.png"/>
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list>
            <v-list-item
                    v-for="item in primaryDrawer.items"
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
        <div>
            <v-img class="test-click1" src="@/assets/images/a.svg" @click.stop="primaryDrawer.mini = !primaryDrawer.mini"/>
        </div>
<!--        <div>-->
<!--            <dash-board primaryDrawer />-->
<!--        </div>-->
    </v-navigation-drawer>

</template>

<script>
    // import Dashboard from './components/dashboard.vue'
    export default {
        name: "LeftNavigationDrawerComponent",
        components:{
            // 'dash-board' : Dashboard
        },
        data: () => ({
            // props: ["primaryDrawer.mini"],
            drawer: false,
            primaryDrawer: {
                model: null,
                mini: false,
                miniWidth: 92,
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
            }

        }),
    }
</script>

<style>
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

    .leftNavWeight{
        width: 19.25% !important;
    }
    .leftNavWeightMin{
        width: 6.7% !important;
    }

</style>
