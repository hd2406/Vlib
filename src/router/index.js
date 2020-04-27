import Vue from 'vue'
import VueRouter from 'vue-router'
import BookUpdate from '../views/BookUpdate.vue'
import Login from '../views/Login.vue'
import store from '../vuex/index.js'

Vue.use(VueRouter)

const routes = [
  {
    path:"/nav",
    name:"Navigation",
    component: () => import(/* webpackChunkName: "about" */ '../views/Index.vue'),
    show:true,
    children:[
      {
        path:"/About",
        name:"About",
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      }

    ]
  },
  {
    path:"/nav",
    name:"Edit Books",
    component: () => import(/* webpackChunkName: "about" */ '../views/Index.vue'),
    show:true,
    children:[
      {
        path:"/Book",
        name:"Books",
        component: () => import(/* webpackChunkName: "about" */ '../views/Book.vue')
      },
      {
        path:"/searchById",
        name:"Search",
        component: () => import(/* webpackChunkName: "about" */ '../views/SearchId.vue')
      }
    ]
  },
  {
    path:"/nav",
    name:"Statistical Charts",
    component: () => import(/* webpackChunkName: "about" */ '../views/Index.vue'),
    show:true,
    children:[
      {
        path:"/Charts",
        name:"Pie Chart",
        component: () => import(/* webpackChunkName: "about" */ '../views/Chart.vue')
      }
    ]
  },{
    path:"/nav",
    name:"Option",
    component: () => import(/* webpackChunkName: "about" */ '../views/Index.vue'),
    show:true,
    children:[
      {
        path:'/login',
        name:'Login',
        component:Login,
        show:false
      }
    ]
  },
  {
    path:"/",
    name:"Home",
    show: false,
    component: () => import(/* webpackChunkName: "about" */ '../views/Homepage.vue')
  },
  {
    path:'/update',
    component:BookUpdate,
    show:false,
    meta: {
      need2Login: true
    }
  },{
    path:"/AddBooks",
    name:"Add Books",
    show:false,
    component: () => import(/* webpackChunkName: "about" */ '../views/AddBooks.vue'),
    meta: {
      need2Login: true
    }
  },
  {
    path:'/login',
    name:'login',
    component:Login,
    show:false
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  to.matched.some((route) => {
    if (route.meta.need2Login && store.state.user == undefined) {
      window.alert('Please login')
      next({ name: 'login' })
    } else {
      next();
    }
  });

});

export default router
