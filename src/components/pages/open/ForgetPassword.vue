<template>
  <div class="forget-password">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>

//var themes = require('./../../themes/index.js');
//import themes from './../../themes/index.js';
//import themeMixin from './../../mixins/theme'

export default {
  //mixins: [themeMixin],
  name: 'forget-password',
  //template: require('./../../themes/classic/open/ForgetPassword.html'),
  data () {
    return {
      msg: 'Forget Password'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
