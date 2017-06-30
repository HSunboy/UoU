import Vue from "vue";
import routes from "./router/route.js";
import vueRouter from "vue-router";
import VueResource from "vue-resource";

Vue.config.debug = process.env.NODE_ENV !== "production";

Vue.use(VueResource);
Vue.use(vueRouter);

const router = new vueRouter({routes});

router.beforeEach((to, from, next) => {

    next();

});
router.afterEach(() => {});

new Vue({router}).$mount("#app");