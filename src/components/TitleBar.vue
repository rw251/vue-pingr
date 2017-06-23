<template lang="pug">
  .title-bar
    h1 {{ title }}
</template>

<script>
export default {
  name: 'title-bar',
  data() {
    return {
      title: 'The default title',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}
</style>
