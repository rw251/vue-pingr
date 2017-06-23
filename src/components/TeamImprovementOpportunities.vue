<template lang="pug">
  .team-improvement-opportunities
    ul
      li First opp
      li Second opp
</template>

<script>
export default {
  name: 'team-improvement-opportunities',
  data() {
    return {
      title: 'The default title',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.team-improvement-opportunities {
  border: 2px black solid;
  padding: 20px;
  margin-bottom: 20px;
}
</style>
