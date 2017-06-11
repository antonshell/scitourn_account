<template>
  <div>
    <p>
      <router-link to="/login">login</router-link>
      <router-link to="/register">register</router-link>
      <router-link to="/forget-password">forget-password</router-link>
    </p>

    <p>
      <router-link to="/">Home</router-link>
      <router-link to="/dashboard">dashboard</router-link>
      <router-link to="/tournaments">tournaments</router-link>
      <router-link to="/teams">teams</router-link>
      <router-link to="/profile">profile</router-link>
    </p>

    <transition>
      <router-view></router-view>
    </transition>

  </div>
</template>

<script>

//var themes = require('./../../themes/index.js');
//import header from './../../themes/index.js';
import router from './../../router';

export default {
  name: 'Layout',
  data () {
    return {
      msg: 'Layout'
    }
  },
  router,
}
</script>
