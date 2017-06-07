<template>
  <div id="app">
    <transition 
      :name="transitionName"
      @before-enter="beforeEnter"
      @after-leave="afterLeave"
    >
      <router-view
        v-finger:swipe="throttle(swipe, 1800, { 'trailing': false })"
        class="page-container"
      ></router-view>
    </transition>
  </div>
</template>

<script>
  import router from './scripts/router'
  import throttle from 'lodash.throttle'

  export default {
    name: 'app',
    data () {
      return {
        transitionName: '',
        transitionEnded: true
      }
    },
    methods: {
      beforeEnter () {
        this.transitionEnded = false
      },
      afterLeave () {
        setTimeout(() => {
          this.transitionEnded = true
        }, 800)
      },
      throttle (func, wait, options) {
        return throttle(func, wait, options)
      },
      slideUp () {
        this.transitionName = 'slide-up'
        this.$router.push(this.routePaths[++this.pageNum])
      },
      slideDown () {
        this.transitionName = 'slide-down'
        this.$router.push(this.routePaths[--this.pageNum])
      },
      changePage (e) {
        if (this.transitionEnded === true) {
          if (this.pageNum >= 0 && this.pageNum <= this.routePaths.length - 2 && e.deltaY > 0) {
            this.slideUp()
          } else if (this.pageNum >= 1 && this.pageNum <= this.routePaths.length && e.deltaY < 0) {
            this.slideDown()
          }
        }
      },
      swipe (e) {
        if (this.transitionEnded === true) {
          if (this.pageNum >= 0 && this.pageNum <= this.routePaths.length - 2 && e.direction === 'Up') {
            this.slideUp()
          } else if (this.pageNum >= 1 && this.pageNum <= this.routePaths.length && e.direction === 'Down') {
            this.slideDown()
          }
        }
      }
    },
    computed: {
      routePaths () {
        let arr = []

        router.options.routes.forEach(function (el, index, routes) {
          if (index <= routes.length - 2) {
            arr.push(el.path)
          }
        })

        return arr
      },
      pageNum () {
        return this.routePaths.indexOf(this.$route.path)
      }
    },
    mounted () {
      if (this.$route.path === '/') {
        this.$router.replace(this.routePaths[0])
      }

      window.addEventListener('wheel', this.throttle(this.changePage, 1800, { 'trailing': false }))
    },
    destroyed () {
      window.removeEventListener('wheel', this.throttle(this.changePage, 1800, { 'trailing': false }))
    }
  }
</script>

<style lang="less">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    .page-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-size: 50px;
      transition: transform 1s;
      transform: translateZ(0);
    }

    .slide-up-enter,
    .slide-down-leave-to {
      transform: translateY(100%);
    }

    .slide-up-leave-to,
    .slide-down-enter {
      transform: translateY(-100%);
    }
  }
</style>
