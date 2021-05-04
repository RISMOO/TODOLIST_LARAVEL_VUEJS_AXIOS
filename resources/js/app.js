
require('./bootstrap');

window.Vue = require('vue');

/*vue router*/
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/*import vue */
import Home from './components/HomeComponent.vue';

import Task from './components/TaskComponent.vue';
//Vue.component('home-component', require('./components/HomeComponent.vue').default);*
/*on creer une constante routes, on aura donc 2 routes */

const routes = [
    {

        path: '/',
        component: Home

    },

    {

        path: '/tasks',
        component: Task

    }
];

/*on creer une instance de VueRouter*/
const router = new VueRouter({routes});




const app = new Vue({
    el: '#app',
    router:router  //ajout de router
});
