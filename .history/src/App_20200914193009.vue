<template>
  <div id="app">
    <TopHeader />
    <router-view/>
  </div>
</template>


<script>
import M from 'materialize-css';
import TopHeader from './components/TopHeader.vue';

export default {
  mounted() {
    M.AutoInit();
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
