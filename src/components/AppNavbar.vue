<template lang="pug">
  .app-navbar
    ul
      li
        router-link(to='/') Overview
      li
        router-link(to='/indicator') Indicator
      li
        router-link(to='/patient') Patient
      li
        router-link(to='/actionplan') Action Plans
      li.right
        a Login
      li.right
        a Feedback
</template>

<script>
export default {
  name: 'app-navbar',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.app-navbar {
  /*position: fixed;*/
  min-width: 100%;
  z-index: 1024;
  /*box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1), 0 0 0 1px rgba(17, 17, 17, 0.1);*/
  top: 0;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li.right {
  float: right;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  cursor: pointer;
}

li a:hover {
  background-color: #111;
}

.router-link-exact-active,
.router-link-exact-active:hover {
  background-color: white;
  color: black;
}
</style>
