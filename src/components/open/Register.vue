<template>
  <div class="register">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      msg: 'Register'
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
