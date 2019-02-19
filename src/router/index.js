import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import moviedetail from '@/components/moviedetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/moviedetail',
      name: 'moviedetail',
      component: moviedetail
    },
  ]
})
