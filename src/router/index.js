import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/blog-single/:slug',
      name: 'blog-single',
      component: AboutView,
      props: true,
      // component: () => import('../views/AboutView.vue'),
    },
  ],
});

export default router;
