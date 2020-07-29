<template>
    <div>
        <v-row>
            <v-col cols="3">
            </v-col>
            <v-col cols="6" >
                <v-card>
                    <v-card-text>
                        <div id="charts">
                            <apexchart type="line" height="350" :options="chartOptions" :series="series"></apexchart>
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
    export default {
        name: "TestComponent",

        data: () => ({
            series:
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
            chartOptions: {
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


        }),
    }
</script>
<style scoped>

</style>
