<template>
  <div id="app">
    <TopNav logout="logout" authenticated="authenticated" ref="topNav" />
    <router-view @authenticated="setAuthenticated" class="router-view"/>
    <!-- <Footer /> TODO: Couldn't finish it time so left if for later. -->
  </div>
</template>


<script>
import M from 'materialize-css';
import TopNav from '@/components/top-nav/TopNav.vue';
// import Footer from '@/components/footer/Footer.vue';

export default {
  mounted() {
    M.AutoInit();
  },
  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
      this.$emit('authenticated', status);
      localStorage.setItem('authenticated', status);
      this.$refs.topNav.loginSuccessful(status);

      // Just for Demo Purposes, it will log you out after every two hours
      setTimeout(() => {
        localStorage.removeItem('authenticated');
      }, 7200000)
    }
  },
  components: {
    TopNav,
    // Footer
  },
  data() {
    return {
      authenticated: localStorage.getItem('authenticated'),
      mockAccount: {
        username: "Admin",
        password: "password"
      },
    }
  },
  created() {
    if (!this.authenticated) {
      this.$router.replace({ name: 'login' });
    }
  }
}
</script>

<style lang="scss">

 @import "assets/styles.scss";

#app {
  
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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

// .router-view {
//   height: calc(100vh - 16.4vh);
// }
</style>
