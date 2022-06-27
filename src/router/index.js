import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

import About from '@/components/About'

import History from '@/components/about/History'
import Rule from '@/components/about/Rule'
import Partner from '@/components/about/Partner'
import Cadre from '@/components/about/Cadre'

import Activity from '@/components/Activity'

import PageNotFound from '@/components/PageNotFound'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      children: [
        {
          path: 'activity',
          name: 'Activity',
          component: Activity
        },
        {
          path: 'history',
          name: 'History',
          component: History
        },
        {
          path: 'rule',
          name: 'Rule',
          component: Rule
        },
        {
          path: 'partner',
          name: 'Partner',
          component: Partner
        },
        {
          path: 'cadre/:year?/:cadre?',
          name: 'Cadre',
          component: Cadre
        }
      ]
    },
    {
      path: '*',
      name: 'PageNotFound',
      component: PageNotFound
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    } else {
      return { x: 0, y: 0 }
    }
  }
})
