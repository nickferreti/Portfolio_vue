import { createWebHistory, createRouter } from 'vue-router';

import Home from '../components/Home.vue';
import Projects from '../discover/ProjectPage.vue';
import Contact from '../components/Contact.vue';
import SingleProject from "../components/SingleProject.vue";

import PageNotFound from "../components/PageNotFound.vue";



const routes = [{
        path: "/",
        component: Home,
    },
    {
        path: "/projetos",
        component: Projects,
    },
    {
        path: "/contato",
        component: Contact,
    },
    {
        path: "/singleproject/:id",
        component: SingleProject,
    },
    {
        path: '/:catchAll(.*)*',
        name: "PageNotFound",
        component: PageNotFound,
    },
];





const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 }
    },
    linkActiveClass: 'vue-school-active-link',

});

export default router;