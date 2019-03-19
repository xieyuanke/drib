import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index'
import module from '../pages/module'
import moNav from "../components/module/moduleRight/moNav"
import buttons from "../components/module/moduleRight/buttons"
import teams from "../components/teams/teams"

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      redirect: "/index"
    },
    {
      path:"/index",
      component:index
    },
    {
      path:"/module",
      component:module,
      children:[
        {
          path:"moNav",
          component:moNav
        },
        {
          path:"buttons",
          component:buttons
        }
      ]
    },
    {
      path:"/teams",
      component:teams
    }
  ]
})
