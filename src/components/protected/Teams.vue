<template>
  <div class="teams">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'teams',
  data () {
    return {
      msg: 'Teams'
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
