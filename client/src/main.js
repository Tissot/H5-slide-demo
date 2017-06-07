'use strict'

// 浏览器样式标准化
import './assets/styles/normalize.less'

// 引入alloyfinger手势库
import './scripts/gesture'

// 引入 Vue 相关库
import Vue from 'vue'
import App from './App'
import router from './scripts/router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
