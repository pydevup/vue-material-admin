import { useUserStore } from '@/store/userStore';
import { createRouter, createWebHashHistory } from 'vue-router';
import PrivateRoutes from './private';
import PublicRoutes from './public';

const whiteList = ['Login', 'Register', 'Forget', 'Reset'];

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, behavior: 'smooth', top: 60 };

    return { top: 0 };
  },
  routes: [
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/pages/NotFound.vue')
    },
    PrivateRoutes,
    PublicRoutes
  ]
});

// Docs: https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards
router.beforeEach(async (to) => {
  const userStore = useUserStore();
  const routeName = String(to.name);

  // If the route is in the whitelist, allow access without authentication
  if (whiteList.includes(routeName)) {
    return true;
  }

  // For non-whitelisted routes, check authentication
  if (!userStore.getAccessToken) {
    // No token, redirect to login
    return { name: 'Login' };
  }
  
  try {
    await userStore.getProfile();
    return true; // Allow access to the requested route
  } catch (error) {
    // Profile fetch failed, token might be invalid
    userStore.setToken(''); // Clear the invalid token
    return { name: 'Login' };
  }
});
