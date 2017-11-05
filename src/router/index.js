/*var path = require('path');

var commonPath = path.resolve(__dirname, './../components/pages/');
console.log(commonPath);

var commonPath = '../components/pages/';
var openPath = commonPath + 'open/';
var protectedPath = commonPath + 'protected/';

let ForgetPassword = require(openPath + "ForgetPassword.vue");*/

import ForgetPassword from './../components/pages/open/ForgetPassword.vue'
import Login from './../components/pages/open/Login.vue'
import NotFound from './../components/pages/open/NotFound.vue'
import Register from './../components/pages/open/Register.vue'

import Home from './../components/pages/protected/Home.vue'
import Dashboard from './../components/pages/protected/Dashboard.vue'
import Tournaments from './../components/pages/protected/Tournaments.vue'
import Teams from './../components/pages/protected/Teams.vue'
import Profile from './../components/pages/protected/Profile.vue'

import auth from './../auth'

function requireAuth (to, from, next) {
    if(!auth.loggedIn()){
        next({
            path: '/login',
            //query: { redirect: to.fullPath }
        })
    }
    else{
        next()
    }
}

function authorizedRedirect(to, from, next) {
    if(auth.loggedIn()){
        next({
            path: '/',
            //query: { redirect: to.fullPath }
        })
    }
    else{
        next()
    }
}

const routes = [
    // open area
    { path: '/login', component: Login, beforeEnter: authorizedRedirect },
    { path: '/register', component: Register, beforeEnter: authorizedRedirect },
    { path: '/forget-password', component: ForgetPassword, beforeEnter: authorizedRedirect },

    // auth required
    //{ path: '/', component: Home, beforeEnter: requireAuth },
    { path: '/', redirect: '/tournaments', beforeEnter: requireAuth },
    { path: '/dashboard', component: Dashboard, beforeEnter: requireAuth },
    { path: '/tournaments', component: Tournaments, beforeEnter: requireAuth },
    { path: '/teams', component: Teams, beforeEnter: requireAuth },
    { path: '/profile', component: Profile, beforeEnter: requireAuth },

    { path: "*", component: NotFound }
];

const router = new VueRouter({
    routes, // short for routes: routes
    //mode: 'history', // remove # from url
});

export default router;