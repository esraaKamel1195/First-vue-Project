import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/blog",
        name: "blog",
        component: () =>
            import(/*webpackChunkName: "blog" */ "../views/blog.vue")
    },
    {
        path: "/blogposts",
        name: "blogposts",
        component: () =>
            import(/*webpackChunkName: "blogposts" */ "../components/blog/blogposts.vue")
    },
    {
        path: "/blogsidebar",
        name: "blogsidebar",
        component: () =>
            import(/*webpackChunkName: "blogsidebar" */ "../components/blog/blogsidebar.vue")
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/About.vue")
    },
    {
        path: "/help",
        name: "help",
        component: () =>
            import(/* webpackChunkName: "help" */ "../views/help.vue")
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
