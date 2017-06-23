<template lang="pug">
  .overview
    title-bar
    .left-panel
      team-improvement-opportunities
      team-user-actions
    .right-panel
      indicator-list
</template>

<script>
import TitleBar from '@/components/TitleBar';
import TeamImprovementOpportunities from '@/components/TeamImprovementOpportunities';
import TeamUserActions from '@/components/TeamUserActions';
import IndicatorList from '@/components/IndicatorList';

export default {
  name: 'overview',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  components: {
    TitleBar,
    TeamImprovementOpportunities,
    TeamUserActions,
    IndicatorList,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.left-panel {
  width: 33%;
  height: 100%;
  float: left;
}
.right-panel {
  width: 67%;
  height: 100%;
  float: left;
}
</style>
