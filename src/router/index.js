import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'

import index from '@/components/index'
import moviedetail from '@/components/moviedetail'
import payment from '@/components/payment'
import selectingmovie from '@/components/selectingmovie'


Vue.use(Router)
Vue.use(Vuex)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/moviedetail/:id',
      name: 'moviedetail',
      component: moviedetail
    },
    {
      path: '/payment',
      name: 'payment',
      component: payment
    },
    {
      path: '/selectingmovie/:id',
      naem: 'selectingmovie',
      component: selectingmovie
    }
  ]
})
