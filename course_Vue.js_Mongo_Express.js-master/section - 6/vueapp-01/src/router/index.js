/* eslint-disable */

import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import EditMovie from '@/components/editmovie'
import Child from '@/components/component/child'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      nmae: 'Hello',
      component: Hello
    },
    {
      path: '/editMovie',
      name: 'EditMovie',
      component: EditMovie
    },
    // {
    //   path: '/child',
    //   name: 'ChildComponent',
    //   component: Child
    // }
  ]
})