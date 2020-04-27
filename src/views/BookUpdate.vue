<template>
    <el-form style="width: 60%" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

        <el-form-item label="Id">
            <el-input v-model="ruleForm.id" readOnly></el-input>
        </el-form-item>

        <el-form-item label="Title" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>

        <el-form-item label="Author" prop="author">
            <el-input v-model="ruleForm.author"></el-input>
        </el-form-item>

        <el-form-item label="Category" prop="category">
            <el-input v-model="ruleForm.category"></el-input>
        </el-form-item>

        <el-form-item label="Rating" prop="rating">
            <el-input-number v-model="ruleForm.rating" :precision="2" :step="1" :max="5"></el-input-number>
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">Edit</el-button>
            <el-button @click="resetForm('ruleForm')">Reset</el-button>
        </el-form-item>

    </el-form>
</template>

<script>
    export default {
        data() {
            return {
                num:1,
                ruleForm: {
                    id: '',
                    name: '',
                    author: '',
                    category:'',
                    rating: ''
                },
                rules: {
                    name: [
                        { required: true, message: 'Please enter the title', trigger: 'blur' }
                    ],
                    author:[
                        { required: true, message: 'Please enter the author', trigger: 'blur' }
                    ],
                    category:[
                        { required: true, message: 'Please enter the category', trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                const _this = this
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        axios.put('http://springboot-hkd.us-east-1.elasticbeanstalk.com/book/update',this.ruleForm).then(function(resp){
                            if(resp.data == 'success'){
                                _this.$alert('《'+_this.ruleForm.name+'》Edited！', 'Message', {
                                    confirmButtonText: 'Confirm',
                                    callback: action => {
                                        _this.$router.push('/Book')
                                    }
                                })
                            }
                        })
                    } else {
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        },
        created() {
            const _this = this
            axios.get('http://springboot-hkd.us-east-1.elasticbeanstalk.com/book/findById/'+this.$route.query.id).then(function(resp){
                _this.ruleForm = resp.data
            })
        }
    }
</script>