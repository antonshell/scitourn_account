/**
 * Created by antonshell on 11.06.2017.
 */

//import Vue from 'vue'
//import App from './App'
import router from './router'

//import router from './router.js'


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