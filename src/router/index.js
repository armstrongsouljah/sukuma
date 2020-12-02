import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const routes = [{
    path: '',
    component: () => import('@/components/LandingPage.vue')
},
{
    path: '/auth',
    component: () => import('@/components/auth/Auth.vue'),
    name: 'auth'
}]

const router = new VueRouter({
     routes,
     mode: 'history'
    
})

export default router;
