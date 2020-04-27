<template>
    <div>

        <div style="display: flex;justify-content: flex-start; margin-bottom: 20px">
<!--            <el-input-->
<!--                    placeholder="Search by Id..."-->
<!--                    prefix-icon="el-icon-search"-->
<!--                    v-model="keywords" style="width: 300px" size="mini">-->
<!--            </el-input>-->
<!--            <el-button type="primary" icon="el-icon-search" size="mini" style="margin-left: 3px; margin-right: 20px" @click="searchClick">Search-->
<!--            </el-button>-->

<!--            <el-input-->
<!--                    placeholder="Search by title..."-->
<!--                    prefix-icon="el-icon-search"-->
<!--                    v-model="keywords" style="width: 380px" size="mini">-->
<!--            </el-input>-->
<!--            <el-button type="primary" icon="el-icon-search" size="mini" style="margin-left: 3px" @click="searchClick">Search-->
<!--            </el-button>-->


            <el-button type="success" icon="el-icon-plus" size="mini" style="margin-left: 10px;float: right;" @click="add">Add New Book</el-button>

        </div>

        <el-table
                :data="tableData"
                border
                style="width: 80%">
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

        <el-pagination
                background
                layout="prev, pager, next"
                :page-size="pageSize"
                :total="total"
                @current-change="page">
        </el-pagination>

    </div>
</template>

<script>
    export default {
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
            page(currentPage){
                const _this = this
                axios.get('http://springboot-hkd.us-east-1.elasticbeanstalk.com/book/findAll/'+(currentPage-1)+'/6').then(function(resp){
                    console.log(resp)
                    _this.tableData = resp.data.content
                    _this.pageSize = resp.data.size
                    _this.total = resp.data.totalElements
                })
            }
        },

        data() {
            return {
                pageSize:'1',
                total:'11',
                tableData: [{
                    id: 1,
                    name: 'R',
                    author: 'A',
                    rating: 2.1,
                    category: 'Textbook'
                }, {
                    id: 2,
                    name: 'Java',
                    author: 'B',
                    rating: 4.85,
                    category: 'Textbook'
                }, {
                    id: 3,
                    name: 'Python',
                    author: 'C',
                    rating: 4.9,
                    category: 'Textbook'
                }],
                computed: {
                    user () {
                        return this.$store.state.user
                    }
                }
            }
        },

        created() {
            const _this = this
            axios.get('http://springboot-hkd.us-east-1.elasticbeanstalk.com/book/findAll/0/6').then(function(resp){
                // console.log(resp)
                _this.tableData = resp.data.content
                _this.pageSize = resp.data.size
                _this.total = resp.data.totalElements
            })
        },
        computed: {
            user () {
                return this.$store.state.user
            }
        }
    }
</script>