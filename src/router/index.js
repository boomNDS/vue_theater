import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import moviedetail from '@/components/moviedetail'
import payment from '@/components/payment'

Vue.use(Router)

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
  ]
})
