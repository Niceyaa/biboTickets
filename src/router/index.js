import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index'
import iii from '../views/home/iii'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[
      {
        path: '/',
        name: 'home',
        component: iii
      },
      {
        path: '/vocalConcert',
        name: 'vocalConcert',
        meta: "演唱会",
        component: ()=>import("../views/vocalConcert/index")
      },
      {
        path: '/drama',
        name: 'drama',
        meta: "歌剧舞剧",
        component: ()=>import("../views/drama/index")
      },
      {
        path: '/nativeLife',
        name: 'nativeLife',
        meta: "本地生活",
        component: ()=>import("../views/nativeLife/index")
      },
      {
        path: '/concert',
        name: 'concert',
        meta: "音乐会",
        component: ()=>import("../views/concert/index")
      },
      {
        path: '/kids',
        name: 'kids',
        meta: "儿童亲子",
        component: ()=>import("../views/kids/index")
      },
      {
        path: '/dancing',
        name: 'dancing',
        meta: "舞蹈芭蕾",
        component: ()=>import("../views/dancing/index")
      },
      {
        path: '/exhibition',
        name: 'exhibition',
        meta: "展览休闲",
        component: ()=>import("../views/exhibition/index")
      },
      {
        path: '/tittleTattle',
        name: 'tittleTattle',
        meta: "曲艺杂谈",
        component: ()=>import("../views/tittleTattle/index")
      },
      {
        path: '/sports',
        name: 'sports',
        meta: "体育赛事",
        component: ()=>import("../views/sports/index")
      },
      {
        path: '/ticketDetail/:id',
        name: 'ticketDetail',
        component:()=>import("../components/ticketDetail")
      },
      {
        path: '/help/:sendName',
        name: 'help',
        component:()=>import("../views/helpCenter/index")
      },
      {
        path: '/about/:sendName',
        name: 'about',
        component:()=>import("../views/aboutUs/index")
      },
      {
        path: '/searchPage/:id',
        name: 'searchPage',
        component:()=>import("../views/searchPage/index")
      }
    ]
  },
    {
      path:"/test",
      component:()=>import("../views/test")
    }
]

const router = new VueRouter({
  routes,
  // 使用该代码解决路由嵌套时，父子组件之间产生的滚动条自动定位
  scrollBehavior(to,from,savedPosition){
    return {x:0,y:0}
   }
});

export default router
