<template>
  <div class="not-found">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'not-found',
  data () {
    return {
      msg: 'NotFound'
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
