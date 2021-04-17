import {
    createApp
} from 'vue'
import {
    createRouter,
    createWebHistory
} from 'vue-router';

import App from './App.vue'
import HomePage from '@/components/pages/HomePage.vue';
import FavouritesPage from '@/components/pages/FavouritesPage.vue';
import CreateNewNotePage from '@/components/pages/CreateNewNotePage.vue';
import NoteDetailPage from '@/components/pages/NoteDetailPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/',
            component: HomePage,
        },
        {
            path: '/favourites',
            component: FavouritesPage,
        },
        {
            path: '/new',
            component: CreateNewNotePage
        },
        {
            path: '/:id',
            component: NoteDetailPage,
            props: true
        },
    ]
});

createApp(App).use(router).mount('#app');