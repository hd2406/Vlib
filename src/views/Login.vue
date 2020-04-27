<template>
    <div class="login">
        <el-card class="login-card">
            <h2 class="login_title">Login</h2>
            <el-row type="flex" justify="center">
                <el-form ref="loginForm" :model="user" :rules="rules" status-icon label-width="80px">
                    <el-form-item label="Username" prop="name">
                        <el-input v-model="user.name" prefix-icon="el-icon-user"></el-input>
                    </el-form-item>
                    <el-form-item label="Password" prop="pass">
                        <el-input v-model="user.pass" type="password" prefix-icon="el-icon-key" show-password></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" icon="el-icon-upload" @click="login">Login</el-button>
                    </el-form-item>
                </el-form>
            </el-row>
        </el-card>
    </div>
</template>

<script>
    export default {
        methods: {
            login () {
                this.$refs.loginForm.validate((valid) => {
                    if (valid) {
                        if (this.user.name === 'admin' && this.user.pass === '123') {
                            this.$store.dispatch('login', this.user).then(() => {
                            this.$notify({
                                type: 'success',
                                message: 'Welcome,' + this.user.name + '!',
                                duration: 3000
                            })
                            this.$router.replace('/')})
                        } else {
                            this.$message({
                                type: 'error',
                                message: 'Incorrect username or password',
                                showClose: true
                            })
                        }
                    }
                    else {
                        return false
                    }
                })
            }
        },
        data () {
            return {
                user: {name:'admin',
                pass:'123'},
                rules: {
                    name: [
                        {required: true, message: 'Please enter the username', trigger: 'blur'}
                    ],
                    pass: [
                        {required: true, message: 'Please enter the password', trigger: 'blur'}
                    ]
                }
            }
        }
    }
</script>

<style scoped>
    .login {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .login-button {
        width: 100%;
        margin-top: 40px;
    }
    .login-form {
        width: 290px;
    }

    h2 {
        font-family: "Open Sans";
        letter-spacing: 1px;
        font-family: Roboto, sans-serif;
        padding-bottom: 10px;
        padding-top: 10px;
        text-align: center;
        font-weight: 800;
    }
    .login-card {
        width: 400px;
        height: 300px;
        padding-top: 0;
        padding-bottom: 30px;
        display: flex;
        justify-content: center;
        align-content: center;
        margin-top: 100px;
    }

    .login_title {
        margin: 0px auto 40px auto;
        text-align: center;
        color: #505458;
    }

</style>
