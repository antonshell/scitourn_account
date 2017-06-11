/**
 * Created by antonshell on 11.06.2017.
 */

/*import Vue from 'vue'
import App from './App'
import router from './router'*/

const mainRoute = '/scitourn_account';

// Templates
const NotFound = { template: '<p>Page not found</p>' }
const Home = { template: '<p>home page</p>' }

const Login = { template: '<p>Login</p>' }
const Register = { template: '<p>Register</p>' }
const ForgetPassword = { template: '<p>Forget password</p>' }

const Dashboard = { template: '<p>Dashboard</p>' }
const Tournaments = { template: '<p>Tournaments</p>' }
const Teams = { template: '<p>My teams</p>' }
const Profile = { template: '<p>Profile</p>' }

var authorized = false;

function requireAuth (to, from, next) {


    if(!authorized){
        next({
            path: '/login',
            //query: { redirect: to.fullPath }
        })
    }
    else{
        next()
    }

    /*if (!auth.loggedIn()) {
     next({
     path: '/login',
     query: { redirect: to.fullPath }
     })
     } else {
     next()
     }*/
}

function authorizedRedirect(to, from, next) {
    if(authorized){
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


// sample component
Vue.component('todo-item', {
    template: '<li>This is a todo</li>'
});

// vue app instance
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue! 111',
        seen: true,

        currentRoute: window.location.pathname
        //message: 'You loaded this page on ' + new Date()
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    },
    router,
});