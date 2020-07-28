<template>
    <div>
<!--        <div class="chart-wrapper" >-->
<!--            <apexchart-->
<!--                    width="500" type="bar"-->
<!--                    :options="options" :series="series">-->
<!--            </apexchart>-->
<!--        </div>-->
        <div id="chart">
            <apexchart type="donut" :options="chartOptions" width="25%"  :series="series">

            </apexchart>
        </div>
    </div>

</template>
<script>
    export default {
        name: 'HelloWorld',
        data: () => ({
            // options: {
            //     chart: {
            //         id: 'vuechart-example'
            //     },
            //     xaxis: {
            //         categories: [
            //             "Jan",
            //             "Feb",
            //             "Mar",
            //             "Apr",
            //             "May",
            //             "Jun",
            //             "Jul",
            //             "Aug",
            //             "Sep",
            //             "Oct",
            //             "Nov",
            //             "Dec"
            //         ]
            //     },
            //     title:{
            //         text: 'Monthly Stock Pricing',
            //         align: 'center',
            //         style:{
            //             fontSize: '20px',
            //         }
            //     },
            //     colors: ['#00897b']
            // },
            // series: [{
            //     name: 'series-1',
            //     data: [55, 62, 89, 66, 98, 72, 101, 75, 94, 120, 117, 139]
            // }],
            series: [44, 55, 41, 17, 15],
            chartOptions: {
                chart: {
                    type: 'donut',
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 100
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            },
        })
    }
</script>
<style scoped>
    /*div.chart-wrapper {*/
    /*    display: flex;*/
    /*    align-items: center;*/
    /*    justify-content: center*/
    /*}*/
</style>
