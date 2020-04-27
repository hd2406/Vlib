<template>
    <div>
        <el-row>
            <el-col :span="8">
                <el-row>
                    <el-card class="demo-card">
                        <el-row>
                            <div class="el-col el-col-8 el-col-lg-8" style="padding-left: 10px; padding-right: 10px;">
                                <el-avatar :size="100">
                                    <img style="width: auto" src="../assets/avatar.jpg"/>
                                </el-avatar>
                                <h3>Haokun Dong</h3>
                            </div>
                            <div class="el-col el-col-12 el-col-lg-12" style="padding-left: 10px; padding-right: 10px;">
                                <h1>My name is Haokun Dong</h1>
                                <el-row class="link-row">
                                    <el-link href="https://github.com/hd2406" target="_blank" type="success"><i class="el-icon-thumb" > </i> GitHub</el-link>
                                </el-row>
                                <el-row class="link-row">
                                    <el-link href="https://www.linkedin.com/in/haokun-dong-46a08a13b/" target="_blank" type="primary"><i class="el-icon-user" > </i> LinkedIn</el-link>
                                </el-row>
                                <el-row class="link-row">
                                    <el-link href="https://hd2406.github.io/" target="_blank"><i class="el-icon-document-checked" > </i> Blog</el-link>
                                </el-row>

                            </div>
                        </el-row>
                    </el-card>

                </el-row>
                <el-row>
                    <el-card class="demo-card">
                        Vue
                        <el-progress :text-inside="true" :stroke-width="26" :percentage="100" class="demo-progress"></el-progress>
                        SpringBoot
                        <el-progress :text-inside="true" :stroke-width="24" :percentage="100" status="success"class="demo-progress"></el-progress>
                        Axios
                        <el-progress :text-inside="true" :stroke-width="22" :percentage="100" status="warning"class="demo-progress"></el-progress>
                        Element UI
                        <el-progress :text-inside="true" :stroke-width="20" :percentage="100" status="exception"class="demo-progress"></el-progress>
                    </el-card>
                </el-row>
            </el-col>

            <el-col :span="12">
                <el-row>
                    <el-card class="el-card">

                        <h1 style="font-weight: bolder">This is a Spring Boot + VueJS Full Stack Application</h1>
                        <el-row>
                            <div class="el-col el-col-12 el-col-lg-12" style="padding-left: 10px; padding-right: 10px;">
                                <h3>Backend：</h3>
                                <li>SpringBoot</li>
                                <li>Spring Data JPA</li>
                                <li>SpringBoot Web</li>
                                <li>MySQL</li>
                            </div>

                            <div class="el-col el-col-12 el-col-lg-12" style="padding-left: 10px; padding-right: 10px;">
                                <h3>Frontend：</h3>
                                <li>Vue</li>
                                <li>axios</li>
                                <li>ElementUI</li>
                                <li>vue-echarts</li>
                                <li>Vuex</li>
                                <li>vue-router</li>
                            </div>
                        </el-row>
                        <hr style="FILTER: alpha(opacity=100,finishopacity=0,style=3)" width="80%" color=#987cb9 SIZE=3>


                        <el-row>
                            <p>
                                You can view all the books in the library.
                            </p>
                            <p>
                                But if you want to use the modification and deletion behavior, you must log in first.
                            </p>
                            <p>
                                Statistics can be viewed in the chart area.
                            </p>
                            <p>
                                More features are being developed.
                            </p>
                            <p>
                                Copyright © HaokunDong 2020
                            </p>
                        </el-row>
                    </el-card>
                </el-row>


            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
    }
</script>

<style>
    .demo-card {
        margin-top: 0px;
        margin-bottom: 30px;
        margin-right: 20px;
    }
    .demo-progress {
        margin-top: 10px;
        margin-bottom:10px;
        margin-right: 0px;
    }

    .link-row{
        margin-top: 10px;
        margin-bottom: 10px;
    }

    li{
        margin-bottom: 10px;
        margin-top: 10px;
    }
</style>