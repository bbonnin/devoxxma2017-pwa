<template>
  <div>
    <div class="clickable-title">
      <a @click="loadStats()">Mobile OS</a>
    </div>
    
    <bar-chart
      id="mobile-os"
      :data="mobileOSStats"
      xkey="year"
      ykeys='[ "and", "ios", "win" ]'
      labels='[ "Android", "iOS", "Windows" ]'
      resize="true"
      bar-colors='[ "#FF6384", "#36A2EB", "#FFCE56" ]'
      grid="true"
      grid-text-weight="bold">
    </bar-chart>
  </div>
</template>

<script>
/* eslint prefer-template: 0 */
import { BarChart } from 'vue-morris';

const QUERY_URL = 'http://localhost:3000/api/stats/os/mobile';

export default {
  name: 'hello',

  data() {
    return {
      mobileOSStats: [],
    };
  },

  components: { BarChart },

  mounted() {
    this.loadStats();
  },

  methods: {
    loadStats() {
      this.$http.get(QUERY_URL)
      .then((resp) => {
        this.mobileOSStats = resp.body;
      }, (resp) => {
        console.log(resp);
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.clickable-title {
  font-size: xx-large;

}
</style>
