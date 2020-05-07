import Vue from 'vue'
import VueRouter from 'vue-router'
import Game from '../views/Game.vue'
import Home from '../views/Home.vue'
import login from '../views/login.vue'
export let CurrentUser = null;
import signup from '../views/signup.vue'
export async function login(email, password) {

Vue.use(VueRouter)
const user = await myFetch('/Users/login', { email, password }) ;

const routes = [
  
    { path: '/', name: 'Home', component: Home },
    { path: '/game', name: 'Game', component: Game, meta: { isSecret: true } },
    { path: '/login', name: 'Login', component: login },
    { path: 'signup', name: 'signup', component: signup },
  
  
  
  {
    path: '/about',
    name: 'About',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  {
      path: '/help',
      name: 'help',
      
      component: () => import(/* webpackChunkName: "help" */ '../views/help.vue')
      

  },
  {
    path: '/signup',
    name: 'signup',
    
    component: signup
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});
router.beforeEach( (to, from, next) => {
  if( to.meta.isSecret && !CurrentUser) next('/login');
  else next();
});
}
export default router