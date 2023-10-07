import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

export const routerArray: RouteRecordRaw[] = [
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/homeView.vue'),
    meta: {
      title: '首页',
      icon: 'HomeFilled'
    }
  },
  {
    path: '/screen',
    component: () => import('@/views/screen/screenView.vue'),
    name: 'screen',
    meta: {
      title: '数据大屏',
      icon: 'Platform'
    }
  },
  {
    path: '/permission',
    name: 'permission',
    meta: {
      title: '权限管理',
      icon: 'Lock'
    },
    redirect: '/permission/user',
    children: [
      {
        path: '/permission/user',
        component: () => import('@/views/permission/user/userView.vue'),
        name: 'user',
        meta: {
          title: '用户管理',
          icon: 'User'
        }
      },
      {
        path: '/permission/role',
        component: () => import('@/views/permission/role/roleView.vue'),
        name: 'role',
        meta: {
          title: '角色管理',
          icon: 'UserFilled'
        }
      },
      {
        path: '/permission/menu',
        component: () => import('@/views/permission/menu/perMenuView.vue'),
        name: 'menu',
        meta: {
          title: '菜单管理',
          icon: 'Monitor'
        }
      }
    ]
  },
  {
    path: '/product',
    name: 'Product',
    meta: {
      title: '商品管理',
      icon: 'Goods'
    },
    redirect: '/product/brand',
    children: [
      {
        path: '/product/brand',
        component: () => import('@/views/product/brand/brandView.vue'),
        name: 'brand',
        meta: {
          title: '品牌管理',
          icon: 'ShoppingCartFull'
        }
      },
      {
        path: '/product/property',
        component: () => import('@/views/product/property/propertyView.vue'),
        name: 'property',
        meta: {
          title: '属性管理',
          icon: 'ChromeFilled'
        }
      },
      {
        path: '/product/spu',
        component: () => import('@/views/product/spu/spuView.vue'),
        name: 'spu',
        meta: {
          title: 'SPU管理',
          icon: 'Calendar'
        }
      },
      {
        path: '/product/sku',
        component: () => import('@/views/product/sku/skuView.vue'),
        name: 'sku',
        meta: {
          title: 'SKU管理',
          icon: 'Orange'
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/loginView.vue')
    },
    {
      path: '/',
      redirect: '/home'
    },
    ...routerArray,
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/default/defaultView.vue')
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  const isAuthenticated = localStorage.getItem('token')
  if (!isAuthenticated && to.name != 'login') next({ name: 'login' })
  else next()
})

export default router
