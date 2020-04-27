<template>
    <el-form style="width: 60%" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

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
            <el-button type="primary" @click="submitForm('ruleForm')">Submit</el-button>
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
                        axios.post('http://springboot-hkd.us-east-1.elasticbeanstalk.com/book/save',this.ruleForm).then(function(resp){
                            if(resp.data == 'success'){
                                _this.$alert('《'+_this.ruleForm.name+'》Added！', 'Message', {
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
        }
    }
</script>

