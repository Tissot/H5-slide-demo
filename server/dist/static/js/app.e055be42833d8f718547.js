webpackJsonp([0],[,,function(t,e,n){"use strict";var i=n(1),r=n(30),o=n(22),s=n.n(o),a=n(23),u=n.n(a),c=n(24),p=n.n(c),l=n(21),f=n.n(l);i.a.use(r.a),e.a=new r.a({routes:[{path:"/page0",component:s.a},{path:"/page1",component:u.a},{path:"/page2",component:p.a},{path:"*",component:f.a}]})},,function(t,e,n){"use strict";var i=n(1),r=n(7),o=n.n(r),s=n(8),a=n.n(s);i.a.use(a.a,{AlloyFinger:o.a})},function(t,e){},function(t,e,n){function i(t){n(18)}var r=n(0)(n(10),n(28),i,null,null);t.exports=r.exports},,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(5),r=(n.n(i),n(4),n(1)),o=n(6),s=n.n(o),a=n(2);r.a.config.productionTip=!1,new r.a({el:"#app",router:a.a,template:"<App/>",components:{App:s.a}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(2),r=n(20),o=n.n(r);e.default={name:"app",data:function(){return{transitionName:"",transitionEnded:!0}},methods:{beforeEnter:function(){this.transitionEnded=!1},afterLeave:function(){var t=this;setTimeout(function(){t.transitionEnded=!0},800)},throttle:function(t,e,n){return o()(t,e,n)},slideUp:function(){this.transitionName="slide-up",this.$router.push(this.routePaths[++this.pageNum])},slideDown:function(){this.transitionName="slide-down",this.$router.push(this.routePaths[--this.pageNum])},changePage:function(t){!0===this.transitionEnded&&(this.pageNum>=0&&this.pageNum<=this.routePaths.length-2&&t.deltaY>0?this.slideUp():this.pageNum>=1&&this.pageNum<=this.routePaths.length&&t.deltaY<0&&this.slideDown())},swipe:function(t){!0===this.transitionEnded&&(this.pageNum>=0&&this.pageNum<=this.routePaths.length-2&&"Up"===t.direction?this.slideUp():this.pageNum>=1&&this.pageNum<=this.routePaths.length&&"Down"===t.direction&&this.slideDown())}},computed:{routePaths:function(){var t=[];return i.a.options.routes.forEach(function(e,n,i){n<=i.length-2&&t.push(e.path)}),t},pageNum:function(){return this.routePaths.indexOf(this.$route.path)}},mounted:function(){"/"===this.$route.path&&this.$router.replace(this.routePaths[0]),window.addEventListener("wheel",this.throttle(this.changePage,1800,{trailing:!1}))},destroyed:function(){window.removeEventListener("wheel",this.throttle(this.changePage,1800,{trailing:!1}))}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"not-found"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"page0",components:{}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"page1"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"page2"}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,function(t,e,n){function i(t){n(19)}var r=n(0)(n(11),n(29),i,null,null);t.exports=r.exports},function(t,e,n){function i(t){n(15)}var r=n(0)(n(12),n(25),i,null,null);t.exports=r.exports},function(t,e,n){function i(t){n(16)}var r=n(0)(n(13),n(26),i,null,null);t.exports=r.exports},function(t,e,n){function i(t){n(17)}var r=n(0)(n(14),n(27),i,null,null);t.exports=r.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{attrs:{id:"page0"}},[t._v("\n  0\n")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{attrs:{id:"page1"}},[t._v("\n  1\n")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{attrs:{id:"page2"}},[t._v("\n  2\n")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:t.transitionName},on:{"before-enter":t.beforeEnter,"after-leave":t.afterLeave}},[n("router-view",{directives:[{name:"finger",rawName:"v-finger:swipe",value:t.throttle(t.swipe,1800,{trailing:!1}),expression:"throttle(swipe, 1800, { 'trailing': false })",arg:"swipe"}],staticClass:"page-container"})],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{attrs:{id:"not-found"}},[t._v("\n  Page not found!\n")])},staticRenderFns:[]}}],[9]);
//# sourceMappingURL=app.e055be42833d8f718547.js.map