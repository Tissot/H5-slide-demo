'use strict'

import Vue from 'vue'
import VueRouter from 'vue-router'

import page0 from '../views/page0'
import page1 from '../views/page1'
import page2 from '../views/page2'
import page3 from '../views/page3'
import notFound from '../views/not-found'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    { path: '/page0', component: page0 },
    { path: '/page1', component: page1 },
    { path: '/page2', component: page2 },
    { path: '/page3', component: page3 },
    { path: '*', component: notFound }
  ]
})
