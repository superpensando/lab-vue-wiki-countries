import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  
    {
      path: '/',
      name: 'root',
      component: () => import(/* webpackChunkName: 'index' */ './pages/list.vue'),
      children: [
        {
          path: '/details/:id',
          name: 'details',
          component: () => import(/* webpackChunkName: 'details' */ './pages/details.vue')
        },
      ]
    },
  ];

  const router = createRouter({
    history: createWebHistory('/'),
    routes,
    scrollBehavior() {
      document.getElementById('app').scrollIntoView();
    }
  });


export default router