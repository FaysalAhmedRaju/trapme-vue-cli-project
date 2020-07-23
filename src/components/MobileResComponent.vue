<template>
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
</template>

<script>
    export default {
        name: "MobileResComponent",
        data: () => ({
            drawer: false,

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



        }),
    }
</script>

<style>

</style>
