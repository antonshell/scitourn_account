import ForgetPassword from './../components/open/ForgetPassword.vue'
import Login from './../components/open/Login.vue'
import NotFound from './../components/open/NotFound.vue'
import Register from './../components/open/Register.vue'

import Home from './../components/protected/Home.vue'
import Dashboard from './../components/protected/Dashboard.vue'
import Tournaments from './../components/protected/Tournaments.vue'
import Teams from './../components/protected/Teams.vue'
import Profile from './../components/protected/Profile.vue'

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
    { path: '/', component: Home, beforeEnter: requireAuth },
    { path: '/dashboard', component: Dashboard, beforeEnter: requireAuth },
    { path: '/tournaments', component: Tournaments, beforeEnter: requireAuth },
    { path: '/teams', component: Teams, beforeEnter: requireAuth },
    { path: '/profile', component: Profile, beforeEnter: requireAuth },
];

const router = new VueRouter({
    routes, // short for routes: routes
    //mode: 'history', // remove # from url
});

export default router;