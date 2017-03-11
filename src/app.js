/**
 * Created by hf on 2017/2/13.
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";
import rRouters from "./routes/index.js"
import xStore from "./vuex/store.js"

Vue.config.debug = true;
Vue.use(VueRouter);
Vue.use(Vuex);

const store=new Vuex.Store({
    xStore
});

const router=new VueRouter({
    base:__dirname,
    routes:rRouters
});
new Vue({
    router:router
   ,store:store
}).$mount("#wrap");