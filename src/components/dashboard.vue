<template>
        <div>

                <!--   :class="{mainResponsiveClass: !primaryDrawer.mini, mainResponsiveClassMin: primaryDrawer.mini}"  -->
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
                        <v-col cols="6"></v-col>
                        <v-col cols="3">
                                <v-alert
                                        v-model="alert"
                                        dismissible
                                        close-icon="mdi-close-circle-outline"
                                        color="black"
                                        border="left"
                                        elevation="2"
                                        colored-border
                                        width="300px"

                                >
                                        Hello John!<br>
                                        <strong>Have a nice day at work!</strong>
                                </v-alert>
                        </v-col>
                </v-row>

                <v-row>
                        <v-col cols="3">
                        </v-col>
                        <v-col cols="6" >
                                <v-card
                               style="height: 400px;width: 750px"
                                >
                                        <v-spacer></v-spacer>
                                        <v-card-text>
                                                <div id="charts">
                                                        <apexchart type="line" height="350" :options="chartOptionsBar" :series="seriesBar"></apexchart>
                                                </div>

                                        </v-card-text>

                                </v-card>
                        </v-col>
                        <v-col cols="3">

                        </v-col>
                </v-row>

                 <v-row>
                                <v-col cols="3">
                                </v-col>
                                <v-col cols="6" >
                                        <v-card
                                                  style="height: 300px;width: 80%"
                                        >
                                                <v-spacer></v-spacer>
                                                <v-card-text>
                                                        <div id="chart" >
                                                                <apexchart type="donut" width="380" :options="chartOptions"   :series="series">
                                                                </apexchart>
                                                        </div>
                                                </v-card-text>

                                        </v-card>
                                </v-col>
                                <v-col cols="3">

                                </v-col>
                 </v-row>


        </div>
</template>

<script>

    /*import LeftNavigationDrawerComponent from "./LeftNavigationDrawerComponent";
    import RightNavigationDraweComponent from "./RightNavigationDrawerComponent";
    import MobileResComponent from "./MobileResComponent";*/

    export default {
        name: "Dashboard",
        components:{

          /*
          'left-nav-drawe-component' : LeftNavigationDrawerComponent,
          'right-nav-drawe-component' : RightNavigationDraweComponent,
          'mobile-res-component' : MobileResComponent
           */
        },
        data: () => ({
                date: new Date().toISOString().substr(0, 10),
                menu2: false,
                // props: ['primaryDrawer.mini']
                // drawer: null,
                // primaryDrawer: {
                //         mini: false
                // }
                seriesBar:
                        [{
                                name: 'Website Blog',
                                type: 'column',
                                data: [440, 505, 414, 671]
                        },
                                {
                                        name: 'Social Media',
                                        type: 'line',
                                        data: [23, 42, 35, 27]
                                }],
                chartOptionsBar: {
                        chart: {
                                height: 350,
                                type: 'line',
                        },
                        stroke: {
                                width: [0, 4]
                        },
                        title: {
                                // text: 'Traffic Sources'
                        },
                        dataLabels: {
                                enabled: true,
                                enabledOnSeries: [1]
                        },
                        labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001'],
                        xaxis: {
                                type: 'datetime'
                        },
                        yaxis: [{
                                title: {
                                        // text: 'Website Blog',
                                },

                        }, {
                                opposite: true,
                                title: {
                                        // text: 'Social Media'
                                }
                        }]
                },
                series: [35, 42, 11, 12],
                chartOptions: {
                        chart: {
                                width: 380,
                                type: 'line',
                        },
                        stroke:{
                                width: 0,
                        },
                        plotOptions: {
                                pie: {
                                        donut: {

                                                labels: {
                                                        show: true,
                                                        total: {
                                                                showAlways: false,
                                                                show: false
                                                        }
                                                }

                                        }
                                }
                        },
                        labels: ['Reboot', 'Low Temperature', 'High Temperature', 'Missing Routine Data'],
                        dataLabels: {
                                enabled: true,
                                enabledOnSeries: undefined,
                                formatter: function (val) {
                                        return val + "%";
                                },
                                textAnchor: 'middle',
                                distributed: false,
                                offsetX: 0,
                                offsetY: 0,
                                style: {
                                        fontSize: '14px',
                                        fontFamily: 'Helvetica, Arial, sans-serif',
                                        fontWeight: 'bold',
                                        colors: undefined
                                },
                                background: {
                                        enabled: true,
                                        foreColor: '#fff',
                                        padding: 4,
                                        borderRadius: 2,
                                        borderWidth: 1,
                                        borderColor: '#fff',
                                        opacity: 0.9,
                                        dropShadow: {
                                                enabled: false,
                                                top: 1,
                                                left: 1,
                                                blur: 1,
                                                color: '#000',
                                                opacity: 0.45
                                        }
                                },
                                dropShadow: {
                                        enabled: false,
                                        top: 1,
                                        left: 1,
                                        blur: 1,
                                        color: '#000',
                                        opacity: 0.45
                                }
                        },

                        fill: {
                                colors: [ '#14A5FF','#B3D2FE','#14D2FF','#193B68'],
                        },
                        states: {
                                hover: {
                                        filter: 'none'
                                }
                        },
                        theme: {
                                palette: 'palette2'
                        },
                        tooltip: {
                                y: {
                                        formatter: function(val) {
                                                return val + "%";
                                        },
                                        title: {

                                        },
                                }
                        },
                        responsive: [{
                                breakpoint:0,
                                options: {
                                        chart: {
                                                width: 100
                                        },
                                        legend: {
                                                position: 'bottom',
                                        }
                                }
                        }]
                },

        }),
    }
</script>
<style>
        /*.dropdown-menu:before {*/
        /*        border-bottom: 41px solid #FFFCF5;*/
        /*        border-left: 53px solid rgba(0, 0, 0, 0);*/
        /*        border-right: 1px solid rgba(0, 0, 0, 0);*/
        /*        content: "";*/
        /*        display: inline-block;*/
        /*        position: absolute;*/
        /*        right: 0px;*/
        /*        top: -38px;*/
        /*}*/
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
</style>

