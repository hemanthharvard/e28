import {
    createApp
} from 'vue'
import {
    createRouter,
    createWebHistory
} from 'vue-router';
import {
    store
} from "@/common/store.js";

import App from './App.vue'
import HomePage from '@/components/pages/HomePage.vue';
import FavoritesPage from '@/components/pages/FavoritesPage.vue';
import CreateNewNotePage from '@/components/pages/CreateNewNotePage.vue';
import UserLoginPage from '@/components/pages/UserLoginPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/',
            component: HomePage,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/favourites',
            component: FavoritesPage,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/new',
            component: CreateNewNotePage,
            meta: {
                requiresAuth: true
            }
        },
        {
            // This is a route we can direct the user to if they try to access 
            // a part of the site they don’t have privileges for
            path: '/login',
            component: UserLoginPage,
        },
    ]
});

// beforeEach provides a way to execute some code before a route is resolved
// Ref: https://router.vuejs.org/guide/advanced/navigation-guards.html
router.beforeEach(async (to, from, next) => {

    // Exact the meta information from our routes
    // Ref: https://router.vuejs.org/guide/advanced/meta.html#route-meta-fields
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    if (requiresAuth && !store.state.user) {
        // If they’re trying to access a requiresAuth route and they’re not logged in, 
        // they get sent to "Access Denied" page
        next('/login');
    } else {
        // In all other circumstances, send them to the route they requested
        next();
    }
});


createApp(App).use(router).use(store).mount('#app');