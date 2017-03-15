import Vue from 'vue'
import Router from 'vue-router'
import index from 'components/index/index'
import about from 'components/about/about'
import fe from 'components/fe/fe'
import science from 'components/science/science'
import comment from 'components/comment/comment'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      component: index
    },
      {
          path: '/about',
          component: about
      },
      {
          path: '/fe',
          component: fe
      },
      {
          path: '/science',
          component: science
      },
      {
          path: '/comment',
          component: comment
      }
  ]
})
