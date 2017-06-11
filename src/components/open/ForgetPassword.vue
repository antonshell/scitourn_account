<template>
  <div class="forget-password">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'forget-password',
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
