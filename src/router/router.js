import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import store from '../store/store';
import General from '../views/General.vue';
import DataClient from '../views/DataClient.vue';
import Products from '../views/Products.vue';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      auth: true
    }
  },
  {
    path: '/inventory',
    name: 'Inventario',
    component: () => import('../views/Inventory.vue'),
    meta: {
      auth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: {
      auth: false
    }
  },
  {
    path: '/orders',
    name: 'Monitor de ordenes',
    component: () => import('../views/Orders.vue'),
    meta: {
      auth: true
    }
  },
  {
    path: '/detail-order/:item',
    name: 'Detalle Orden',
    component: () => import('../views/DetailOrder.vue'),
    children: [
      {
        path: '/general/:item',
        component: General,
        name: 'General'
      },
      {
        path: '/data-client/:item',
        component: DataClient,
        name: 'Datos Cliente'
      },
      {
        path: '/products/:item',
        component: Products,
        name: 'Productos'
      },
    ],
    meta: {
      auth: true
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue'),
    meta: {
      auth: true
    }
  },
  {
    path: '*',
    name: 'Error404',
    component: () => import('../views/Error404.vue'),
    meta: {
      auth: false
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  let authRequired = to.matched.some(route => route.meta.auth);
  if(store.state.token.length == 0 && authRequired) {
    next('login');
  } else {
    next();
  }
})

export default router
