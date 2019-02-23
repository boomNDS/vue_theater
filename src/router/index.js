import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'

import index from '@/components/index'
import moviedetail from '@/components/moviedetail'
import payment from '@/components/payment'
import selectingmovie from '@/components/selectingmovie'
import signin from '@/components/signin'
import signup from '@/components/signup'
import moviebooking from '@/components/moviebooking'
import gettickets from '@/components/gettickets'


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
    },
    {
      path: '/signin',
      naem: 'signin',
      component: signin
    },
    {
      path: '/signup',
      naem: 'signup',
      component: signup
    },
    {
      path: '/moviebooking',
      naem: 'moviebooking',
      component: moviebooking
    },
    {
      path: '/gettickets',
      naem: 'gettickets',
      component: gettickets
    }
    // gettickets
  ]
})
