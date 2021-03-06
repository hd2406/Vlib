import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    // 全局变量

    state: {
        user: window.sessionStorage.getItem('user')
    },
    // 修改全局变量必须通过mutations中的方法
    // mutations只能采用同步方法
    mutations: {
        login (state, data) {
            state.user = data;
            window.sessionStorage.setItem('user', data.name)
            console.log(window.sessionStorage.getItem('user'))
        },
        logout (state) {
            state.user = undefined;
            window.sessionStorage.setItem('user', '')
        }
    },
    // 异步方法用actions
    // actions不能直接修改全局变量，需要调用commit方法来触发mutation中的方法
    actions: {
        login (context, payload) {
            context.commit('login', payload)
        },
        logout (context) {
            context.commit('logout')
        }
    }
})

export default store