<template>
        <div>
                <v-main
                        :class="{mainResponsiveClass: !primaryDrawer.mini, mainResponsiveClassMin: primaryDrawer.mini}"
                >
                        <v-row >
                                <v-col cols="6">
                                        <v-text-field
                                                label="Search"
                                                outlined
                                                append-icon="mdi-magnify"
                                        >

                                        </v-text-field>

                                </v-col>
                        </v-row>
                </v-main>
<!--                <div>{{primaryDrawer.mini}}}</div>-->
        </div>

</template>

<script>

    /*import LeftNavigationDrawerComponent from "./LeftNavigationDrawerComponent";
    import RightNavigationDraweComponent from "./RightNavigationDrawerComponent";
    import MobileResComponent from "./MobileResComponent";*/

    export default {
        name: "Dashboard",
        components:{

          /*'left-nav-drawe-component' : LeftNavigationDrawerComponent,
          'right-nav-drawe-component' : RightNavigationDraweComponent,
            'mobile-res-component' : MobileResComponent*/
        },
        data: () => ({
                // props: ['primaryDrawer.mini']
                // drawer: null,
                // primaryDrawer: {
                //         mini: false
                // }

        }),
    }
</script>
<style>
     .mainResponsiveClass{
             width: 100% !important;
             padding: 0% 27.96% 0% 19.25% !important;
     }
     .mainResponsiveClassMin{
             width: 100% !important;
             padding: 0% 27.96% 0% 6.7% !important;
     }

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

