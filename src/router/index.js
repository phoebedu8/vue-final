import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/front/LoginView.vue')
  },
  {
    path: '/',
    name: 'front',
    component: () => import('../views/front/FrontView.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('../views/front/HomeView.vue')
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('../views/front/AboutView.vue')
      },
      {
        path: 'contact',
        name: 'contact',
        component: () => import('../views/front/ContactView.vue')
      },
      {
        path: 'products',
        name: 'products',
        component: () => import('../views/front/ProductsView.vue')
      },
      {
        path: 'product/:productId',
        name: 'product',
        component: () => import('../views/front/ProductsID.vue')
      },
      {
        path: 'cart',
        name: 'cart',
        component: () => import('../views/front/CartView.vue')
      },
      {
        path: 'cartInfo',
        name: 'cartInfo',
        component: () => import('../views/front/CartInfo.vue')
      },
      {
        path: 'checkout/:orderId',
        name: 'checkout',
        component: () => import('../views/front/CartCheckout.vue')
      },
      {
        path: 'final/:orderId',
        name: 'final',
        component: () => import('../views/front/CartFinal.vue')
      }
    ]
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/admin/DashboardView.vue'),
    children: [
      {
        path: '',
        name: 'newproducts',
        component: () => import('../views/admin/AdminProducts.vue')
      },
      {
        path: 'orders',
        name: 'orders',
        component: () => import('../views/admin/AdminOrders.vue')
      },
      {
        path: 'coupons',
        name: 'coupons',
        component: () => import('../views/admin/AdminCoupons.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('../views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router
