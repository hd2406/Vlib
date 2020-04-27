<template>

    <div class="echarts">
        <div class="el-row" style="margin-left: 0px; margin-right: 0px;margin-bottom: 20px">
            <div class="el-col el-col-6 el-col-xs-12" style="padding-left: 10px; padding-right: 10px;">
                <div class="demo-color-box" style="background: rgb(134,182,194);">
                    <el-row>
                        <div class="el-col el-col-6 el-col-xs-12" style="padding-left: 10px; padding-right: 10px;">
                            <i class="el-icon-document" > </i>
                        </div>
                        <div class="el-col el-col-6 el-col-md-12" style="float: right;">
                            <el-row style="font-weight:600; font-size: 20px; ">
                                Total Books:
                            </el-row>
                            <el-row style="float: right; font-size: 30px;margin-top: 5px;font-weight:800 ">
                                {{count}}
                            </el-row>
                        </div>
                    </el-row>
                </div>
            </div>

            <div class="el-col el-col-6 el-col-xs-12" style="padding-left: 10px; padding-right: 10px;">
                <div class="demo-color-box" style="background: rgb(233,115,135);">
                    <el-row>
                        <div class="el-col el-col-6 el-col-xs-12" style="padding-left: 10px; padding-right: 10px;">
                            <i class="el-icon-s-data" > </i>
                        </div>
                        <div class="el-col el-col-6 el-col-md-12" style="float: right;">
                            <el-row style="font-weight:600; font-size: 20px; ">
                                Categories:
                            </el-row>
                            <el-row style="float: right; font-size: 30px;margin-top: 5px;font-weight:800 ">
                                {{count_category}}
                            </el-row>
                        </div>
                    </el-row>
                </div>
            </div>
            <div class="el-col el-col-6 el-col-xs-12" style="padding-left: 10px; padding-right: 10px;">
                <div class="demo-color-box" style="background: rgba(210,155,0,0.7);">
                    <el-row>
                        <div class="el-col el-col-6 el-col-xs-12" style="padding-left: 10px; padding-right: 10px;">
                            <i class="el-icon-thumb" > </i>
                        </div>
                        <div class="el-col el-col-6 el-col-md-12" style="float: right;">
                            <el-row style="font-weight:600; font-size: 15px; ">
                                Highest Rating:
                            </el-row>
                            <el-row style="float: right; font-size: 30px;margin-top: 5px;font-weight:800 ">
                                <i class="el-icon-star-on"></i> {{rating}}
                            </el-row>
                        </div>
                    </el-row>
                </div>
            </div>
            <div class="el-col el-col-6 el-col-xs-12" style="padding-left: 10px; padding-right: 10px;">
                <div class="demo-color-box" style="background: rgb(107,151,194);">
                    <el-row>
                        <div class="el-col el-col-6 el-col-xs-12" style="padding-left: 10px; padding-right: 10px;">
                            <i class="el-icon-circle-plus" > </i>
                        </div>
                        <div class="el-col el-col-6 el-col-md-12" style="float: right;">
                            <el-row style="font-weight:600; font-size: 20px; ">
                                New feature:
                            </el-row>
                            <el-row style="float: right; font-size: 30px;margin-top: 5px;font-weight:800 ">
                                Developing
                            </el-row>
                        </div>
                    </el-row>
                </div>
            </div>
        </div>


        <v-chart :options="option"/>
    </div>

</template>

<style>
    /**
     * The default size is 600px×400px, for responsive charts
     * you may need to set percentage values as follows (also
     * don't forget to provide a size for the container).
     */
    .echarts {
        width: 100%;
        height: 100%;
    }

    .demo-color-box {
        position: relative;
        border-radius: 4px;
        padding: 20px;
        margin: 5px 0;
        height: 114px;
        box-sizing: border-box;
        color: #eff4ff;
        font-size: 60px;
    }

</style>

<script>
    import ECharts from 'vue-echarts'
    import 'echarts/lib/chart/line'
    import 'echarts/lib/chart/bar'
    import 'echarts/lib/chart/pie'
    import 'echarts/lib/component/polar'


    export default {
        components: {
            'v-chart': ECharts
        },

        data () {
            return {
                count:'0',
                count_category:'0',
                rating:'0',
                option :  {
                    backgroundColor: 'rgba(254,254,255,0)',

                    title: {
                        text: 'Statistical Pie Chart',
                        left: 'center',
                        top: 20,
                        textStyle: {
                            color: '#000000'
                        }
                    },

                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c} ({d}%)'
                    },

                    visualMap: {
                        show: false,
                        min: 0,
                        max: 10,
                        inRange: {
                            colorLightness: [0, 1]
                        }
                    },
                    series: [
                        {
                            name: 'Category',
                            type: 'pie',
                            radius: '50%',
                            center: ['50%', '50%'],
                            data: [{value:1,name:'Rstudio'},
                                {value:3,name:'Python'},
                                {value:5,name:'Java'},
                                {value:8,name:'Vue.js'},
                                {value:10,name:'SpringBoot'},],
                            roseType: 'radius',
                            label: {
                                formatter: '{b}：{d}%  ',
                                color: 'rgba(50,0,25,0.91)',
                                fontSize: 20
                            },
                            labelLine: {
                                lineStyle: {
                                    color: 'rgba(230,0,23,0.71)'
                                },
                                smooth: 0.2,
                                length: 10,
                                length2: 20
                            },
                            itemStyle: {
                                color: '#c23531',
                                shadowBlur: 100,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            },

                            animationType: 'scale',
                            animationEasing: 'elasticOut',
                            animationDelay: function (idx) {
                                return Math.random() * 200;
                            }
                        }
                    ]
                }
            }
        },

        created() {
            const _this = this
            axios.get('http://springboot-hkd.us-east-1.elasticbeanstalk.com/book/cat').then(function(resp){
                // console.log(resp.data[0])
                console.log(_this.option.series[0].data)

                _this.option.series[0].data = resp.data.sort(function (a, b) { return a.value - b.value; })
            })

            axios.get('http://springboot-hkd.us-east-1.elasticbeanstalk.com/book/countAll').then(function(resp){
                // console.log(resp)
                _this.count = resp.data
            })

            axios.get('http://springboot-hkd.us-east-1.elasticbeanstalk.com/book/countCategory').then(function(resp){
                // console.log(resp)
                _this.count_category = resp.data
            })

            axios.get('http://springboot-hkd.us-east-1.elasticbeanstalk.com/book/findHighestRating').then(function(resp){
                // console.log(resp)
                _this.rating = resp.data
            })

        }



    }
</script>