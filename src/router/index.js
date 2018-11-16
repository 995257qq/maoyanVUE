import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '@pages/home'

import Cinema from '@pages/cinema'

import Profile from '@pages/profile'

import Coming from '@c/common/Home/coming'

import MoviesBox from '@c/common/Home/movieBox'

import Login from '@c/common/profile/login'

import UserCenter from '@c/common/profile/usecenter'

import PositionCity from '@pages/position'
import bus from '@util/bus'
const routes = [
    { path: '/',
     redirect:{path:'/home'}
    },
    { path: '/home',
    component: Home,
    redirect: '/home/hot',
    children: [
      {
        name: 'hot',
        path: 'hot',
        component: MoviesBox
      },
      {
        name: 'coming',
        path: 'coming',
        component:Coming
      }
    ]
},
    { path: '/cinema', 
    component: Cinema  
     },
     { path: '/profile', 
    component:Profile
     },
     {
      path: '/login', 
      name:'login',
      component:Login
     },
     {
      path: '/usecenter', 
      name:'usecenter',
      component:UserCenter,
      beforeEnter:async(to,from,next)=>{
        let result=await WebAuthentication.authLogin()
        next(result?true:{name:'login'})
      }
     },
     {
       path:'/position',
       name:'position',
       component:PositionCity
     }
  ]
const router = new VueRouter({
    mode: 'history',
    routes  
  })
  
  router.beforeEach((to,from,next)=>{
      let _title=''
      switch(to.path){
          case '/cinema':_title='影院';break;
          default:_title='猫眼电影';break;
      }
      bus.$emit('change:title',_title)
      next()
  })
  export default router
   