import Vue from 'vue'
import Router from 'vue-router'
import DashboardLayout from '@/layout/DashboardLayout'
import AuthLayout from '@/layout/AuthLayout'
Vue.use(Router)

export default new Router({
  linkExactActiveClass: 'active',
  routes: [
    // Add in path from reservation button to health declaration to menu to checkout page and confirmation
      {
      path: '/',
      redirect: 'dashboard',
      component: DashboardLayout,
      children: [
        {
          path: '/dashboard',
          name: 'Home',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "demo" */ './views/Dashboard.vue')
        },
        {
          path: '/icons',
          name: 'icons',
          component: () => import(/* webpackChunkName: "demo" */ './views/Icons.vue')
        },
        {
          path: '/checkoutpage',
          name: 'checkout',
          component: () => import(/* webpackChunkName: "demo" */ './views/CheckOutPage.vue')
        },
        {
          path: '/confirmationpage',
          name: 'confirmation',
          component: () => import(/* webpackChunkName: "demo" */ './views/ConfirmationPage.vue')
        },
        {
          path: '/healthdeclaration',
          name: 'Safe Dining Measures & Health Declaration',
          component: () => import(/* webpackChunkName: "demo" */ './views/HealthDeclaration.vue')
        },
        {
          path: '/menu',
          name: 'menu',
          component: () => import(/* webpackChunkName: "demo" */ './views/Menu.vue')
        },
        {
          path: '/profile',
          name: 'profile',
          component: () => import(/* webpackChunkName: "demo" */ './views/UserProfile.vue')
        },
        {
          path: '/maps',
          name: 'maps',
          component: () => import(/* webpackChunkName: "demo" */ './views/Location.vue')
        },
        {
          path: '/tables',
          name: 'tables',
          component: () => import(/* webpackChunkName: "demo" */ './views/Tables.vue')
        },
        {
          path: '/restaurant_backend',
          name: 'retaurant management portal',
          component: () => import(/* webpackChunkName: "demo" */ './views/RestaurantBackend_SeatUpdate.vue')
        }
      ]
    },
    {
      path: '/',
      redirect: 'login',
      component: AuthLayout,
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import(/* webpackChunkName: "demo" */ './views/Login.vue')
        },
        {
          path: '/register',
          name: 'register',
          component: () => import(/* webpackChunkName: "demo" */ './views/Register.vue')
        }
      ]
    }
  ]
})
