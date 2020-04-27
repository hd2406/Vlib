<template>
    <div>

        <div style="display: flex;justify-content: flex-start; margin-bottom: 20px">
                        <el-input
                                placeholder="Search by Id..."
                                prefix-icon="el-icon-search"
                                 style="width: 300px" size="mini"
                                v-model="ruleForm.id">
                        </el-input>
                        <el-button type="primary"
                                   icon="el-icon-search"
                                   size="mini"
                                   style="margin-left: 3px; margin-right: 20px"
                                   @click="search">
                            Search
                        </el-button>

        </div>

        <el-table
                :data="tableData"
                border
                style="width: 80%"
                empty-text="No Data"
        >
            <el-table-column
                    fixed
                    prop="id"
                    label="Id"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="Title"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="author"
                    label="Author"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="category"
                    label="Category"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="rating"
                    label="Rating"
                    width="250">
                <template slot-scope="scope">
                    <el-rate
                            v-model="scope.row.rating"
                            disabled
                            show-score
                            text-color="#ff9900"
                            score-template="{value} points">
                    </el-rate>
                </template>

            </el-table-column
            >
            <el-table-column
                    align="right"
                    label="Operation"
            >
                <template slot-scope="scope">
                    <el-button @click="edit(scope.row)" type="primary" size="small">Edit</el-button>

                    <span v-if="user">
                        <el-button @click="deleteBook(scope.row)" type="danger" size="small">Delete</el-button>
                    </span>
                </template>
            </el-table-column>
        </el-table>


    </div>
</template>

<script>
    export default {
        data(){
            return {
                count:'10'
            }
        },
        methods: {
            deleteBook(row){
                const _this = this
                axios.delete('http://springboot-hkd.us-east-1.elasticbeanstalk.com/book/deleteById/'+row.id).then(function(resp){
                    _this.$alert('《'+row.name+'》Deleted！', 'Message', {
                        confirmButtonText: 'Confirm',
                        callback: action => {
                            window.location.reload()
                        }
                    })
                })
            },
            add(row) {
                this.$router.push({
                    path: '/AddBooks',
                })
            },
            edit(row) {
                this.$router.push({
                    path: '/update',
                    query:{
                        id:row.id
                    }
                })
            },
            search(){
                const _this = this


                axios.get('http://springboot-hkd.us-east-1.elasticbeanstalk.com/book/findById/' + this.ruleForm.id).then(function(resp){
                    const tem = [resp.data]
                    _this.tableData = tem
                })
            }

        },

        data() {
            return {
                tableData: [],
                ruleForm: {
                    id: ''
                },
                message:''
            }
        },


        computed: {
            user () {
                return this.$store.state.user
            }
        }
    }
</script>