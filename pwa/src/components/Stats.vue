<template>
  <div>
    <div class="title">
      {{ stats.name }}
    </div>
    <div>
      <button class="btn-refresh" @click.prevent="loadStats()"><icon name="refresh"></icon></button>
    </div>

    <line-chart
      id="stats"
      :data="stats.data"
      :xkey="stats.key"
      :ykeys="stats.series"
      :labels="stats.labels"
      :line-colors="colors"
      resize="true"
      grid="true"
      grid-text-weight="bold">
    </line-chart>
  </div>
</template>

<script>
/* eslint prefer-template: 0 */
import 'vue-awesome/icons/refresh';
import Icon from 'vue-awesome/components/Icon';
import { LineChart } from 'vue-morris';

const QUERY_URL = 'http://localhost:3000/api/stats/random';
const COLORS = ['#42B8E0', '#33658A', '#F6AE2D', '#F26419', '#0E3A53'];

export default {
  name: 'stats',

  data() {
    return {
      stats: { data: [] },
      colors: [],
    };
  },

  components: { LineChart, Icon },

  beforeMount() {
    this.loadStats();
  },

  methods: {
    loadStats() {
      this.$http.get(QUERY_URL)
      .then((resp) => {
        this.colors = [];
        this.stats = resp.body;
        for (let i = 0; i < this.stats.data.length; i += 1) {
          this.colors.push(COLORS[i]);
        }
      }, (resp) => {
        console.log(resp);
      });
    },
  },
};
</script>

<style>
.title {
  font-size: xx-large;
}

.btn-refresh {
  margin-top: 10px;
  background-color: #fff;
  font-size: 16px;
  word-spacing: 1px;
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495E; /* #3b8070; */
  color: #35495E; /* #3b8070; */
  padding: 10px 30px;
}

.btn-refresh:hover {
  color: #fff;
  background-color: #35495E; /* #3b8070; */
}
</style>
