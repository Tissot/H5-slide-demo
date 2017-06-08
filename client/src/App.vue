<template>
  <div id="app">
    <transition 
      :name="transitionName"
      @before-enter="beforeEnter"
      @after-leave="afterLeave"
    >
      <router-view
        v-finger:swipe="throttle(swipe, (delay + 1000) / 2, { 'trailing': false })"
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
        delay: 650,
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
        }, this.delay)
      },
      throttle (func, wait, options) {
        return throttle(func, wait, options)
      },
      changePage (e) {
        if (this.transitionEnded === true) {
          if (this.pageNum >= 0 && this.pageNum <= this.routePaths.length - 2 && e.deltaY > 0) {
            this.$router.push(this.routePaths[++this.pageNum])
          } else if (this.pageNum >= 1 && this.pageNum <= this.routePaths.length && e.deltaY < 0) {
            this.$router.push(this.routePaths[--this.pageNum])
          }
        }
      },
      swipe (e) {
        if (this.transitionEnded === true) {
          if (this.pageNum >= 0 && this.pageNum <= this.routePaths.length - 2 && e.direction === 'Up') {
            this.$router.push(this.routePaths[++this.pageNum])
          } else if (this.pageNum >= 1 && this.pageNum <= this.routePaths.length && e.direction === 'Down') {
            this.$router.push(this.routePaths[--this.pageNum])
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
    watch: {
      '$route.path' (newPath, oldPath) {
        this.transitionName = this.routePaths.indexOf(newPath) > this.routePaths.indexOf(oldPath) ? 'slide-up' : 'slide-down'
      }
    },
    mounted () {
      if (this.$route.path === '/') {
        this.$router.replace(this.routePaths[0])
      }

      window.addEventListener('wheel', this.throttle(this.changePage, this.delay + 1100, { 'trailing': false }))
    },
    destroyed () {
      window.removeEventListener('wheel', this.throttle(this.changePage, this.delay + 1100, { 'trailing': false }))
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
      transition: transform 1s cubic-bezier(0.86, 0, 0.07, 1);
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
