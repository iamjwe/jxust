<template>
  <div id="app">
    <home/>
  </div>
</template>
<script>
import home from '@/views/Home.vue'
export default {
  components: {
    home
  }
}
</script>
<style>
  @import "./common/css/global.css";
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  body {
    margin: 0;
  }

</style>
