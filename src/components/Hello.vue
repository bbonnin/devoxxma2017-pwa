<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!--img :src="imgUrl" width="80%"-->
    <div class="chart" v-html="chart"></div>
  </div>
</template>

<script>
/* eslint prefer-template: 0 */

const QUERY_URL = 'http://localhost:3000/export?t=Browsers&v=52.81|14.44|8.75|6.67|7.86&k=Chrome|Safari|UC Browser|Firefox|Others';

export default {
  name: 'hello',

  data() {
    return {
      msg: 'Welcome to Your Vue.js PWA',
      chart: '',
      imgUrl: QUERY_URL + '&f=png',
    };
  },

  mounted() {
    this.$http.get(QUERY_URL + '&f=svg')
      .then((resp) => {
        console.log(resp.body);
        this.chart = resp.body;
      }, (resp) => {
        console.log(resp);
      });
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}

.chart {
  margin: auto;
  display: block;
  width: 90%;
  height: 550px;
}

/*svg g {
  transform: translateX(100px);
  transform-origin: 100px 100px 100px;
}*/
</style>
