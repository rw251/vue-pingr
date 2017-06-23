<template lang="pug">
  .indicator-list
    ul
      li First indicator
      li Second indicator
</template>

<script>
export default {
  name: 'indicator-list',
  data() {
    return {
      title: 'The default title',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.indicator-list {
  border: 2px black solid;
  padding: 20px;
  margin-bottom: 20px;
}
</style>
