import Vue from 'vue'
import Router from 'vue-router'
import Home from './homeRouter'
import Category from './categoryRouter'
import Topic from './topicRouter'
import Cart from './cartRouter'
import Mine from './mineRouter'
Vue.use(Router);

const routes = [
    ...Home,
    ...Category,
    ...Topic,
    ...Cart,
    ...Mine,
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/404',
        component: ()=>import('../pages/common/NotFind/NotFind.vue')
    },
    {
        path: '**',
        redirect: '/404'
    }
  
]


// export default new Router({
//     mode: 'history',
//     routes
// })


const router = new Router({
    mode: 'history',
    routes
})

export default router