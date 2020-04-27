<template>
  <div id="app">
    <el-menu
            default-active="1"
            class="el-menu-demo"
            mode="horizontal"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
      <el-menu-item index="1" @click="home"><i class="el-icon-school"></i>
        V Library
      </el-menu-item>

      <el-menu-item index="3" @click="about"><i class="el-icon-question"></i>
        About
      </el-menu-item>

      <el-menu-item index="2" style="float: right;">
        <span v-if="user">
            <i class="el-icon-user-solid"></i>{{username}}
            <el-button type="warning"  @click="logout">Logout</el-button>
        </span>

        <el-button v-else type="primary" @click="login">Login</el-button>

      </el-menu-item>
    </el-menu>

    <el-container style="height: 670px; border: 1px solid #eee">

      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">

        <el-menu router>
          <el-submenu v-for="(item,index) in $router.options.routes" :index="index+''" v-if="item.show" style="float: left;">
            <template slot="title">
              <i class="el-icon-menu"></i>{{item.name}}
            </template>
            <el-menu-item v-for="(item2,index2) in item.children" :index="item2.path"
                          :class="$route.path==item2.path?'is-active':''"
                          style="float: right;">
              <i class="el-icon-document"></i>{{item2.name}}
            </el-menu-item>
          </el-submenu>
        </el-menu>

      </el-aside>

      <el-main>
        <router-view></router-view>
      </el-main>

    </el-container>

  </div>
</template>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }

</style>

<script>
  export default {
    methods: {
      login(row) {
        this.$router.push({
          path: '/login'
        })
      },
      home(row) {
        this.$router.push({
          path: '/'
        })
      },
      about(row) {
        this.$router.push({
          path: '/about'
        })
      },
      logout () {
        this.$store.dispatch('logout').then(() => {
          this.$router.replace('/login')
        })
      }
    },

    data() {
      const item = {
      };
      return {
        tableData: Array(20).fill(item)
      }
    },
    computed: {
      user () {
        return this.$store.state.user
      },
      username (){
        return window.sessionStorage.getItem('user')
      }
    }
  };
</script>