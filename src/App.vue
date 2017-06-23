<template lang="pug">
  #app
    app-navbar
    .container
      router-view
</template>

<script>
import AppNavbar from './components/AppNavbar';

export default {
  name: 'app',
  components: {
    AppNavbar,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}
.container {
  /*margin-top: 50px;*/
}
</style>
