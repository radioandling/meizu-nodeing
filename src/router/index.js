import Vue from 'vue'
import Router from 'vue-router'
import Index from '../view/index.vue'
import Category from '../view/category.vue'
import Detail from '../view/detail.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/cate/:id?',
      name: 'cate',
      component: Category
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    }
  ]
})
