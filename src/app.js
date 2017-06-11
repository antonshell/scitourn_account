/**
 * Created by antonshell on 11.06.2017.
 */

//import Vue from 'vue'
//import App from './App'
import Layout from './components/layouts/Layout.vue'
import router from './router'
import themeMixin from './mixins/theme'




// sample component
Vue.component('todo-item', {
    template: '<li>This is a todo</li>'
});





// vue app instance
var app = new Vue({
    mixins: [themeMixin],
    el: '#app1',
    //el: '#app',

    template: '<Layout/>',

    data: {
        message: 'Hello Vue! 111',
        seen: true,

        currentRoute: window.location.pathname
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    },
    router,
    components: { Layout }
});

console.log(app.getTheme());