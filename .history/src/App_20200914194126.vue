<template>
  <div id="app">
    <TopNav />
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/stockHistory">Stock History</router-link> |
      <router-link to="/about">Author</router-link>
    </div>
    <router-view/>
  </div>
</template>


<script>
import M from 'materialize-css';
import TopNav from '@/components/TopNav.vue'

export default {
  mounted() {
    M.AutoInit();
  },
  components: {
    TopNav
  }
}
</script>

<style lang="scss">
#app {
  $pms-2756-c: color("1d2675");
  $primary-color: $pms-2756-c !default;
  $primary-color-light: false !default;
  $primary-color-dark: false !default;
  @if not $primary-color-light {
    $primary-color-light: lighten($primary-color, 15%);
  }
  @if not $primary-color-dark {
    $primary-color-dark: darken($primary-color, 15%);
  }
  $secondary-color: color("#919095", "lighten-1") !default;
  $success-color: color("green", "base") !default;
  $error-color: color("red", "base") !default;
  $link-color: color("light-blue", "darken-1") !default;

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
