<template>
  <div class="container row">
      <div class="col s9 offset-s2 card-panel">

        <h1 class="col s12">Login</h1>
        <input class="col s12 m6 offset-m3 center" type="text" name="username" v-model="input.username" placeholder="Username" />
        <input class="col s12 m6 offset-m3 center" type="password" name="password" v-model="input.password" placeholder="Password" />
        <div class="col s12 m6 offset-m3 login-button"><button class="btn btn-large" v-on:click="login()">Login</button></div>
        <div class="col s12 error-message" v-if="errorMessage" style="color: red;padding-top: 2%;">{{ errorMessage }}</div>

      </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      input: {
        username: "",
        password: "",
      },
      errorMessage: null,
    };
  },
  methods: {
    login() {
      if (this.input.username != "" && this.input.password != "") {
        if (
          this.input.username == this.$parent.mockAccount.username &&
          this.input.password == this.$parent.mockAccount.password
        ) {
          this.$emit("authenticated", true);
          this.$router.replace("/welcome");
        } else {
          this.errorMessage = "The username and / or password is incorrect";
        }
      } else {
        this.errorMessage = "Username and Password both are required fields.";
      }
    },
    mounted() {
      if (this.authenticated) {
        this.$router.replace("/welcome");
      }
    },
  },
};
</script>

<style lang="scss">

@import '../assets/styles.scss';

.login-button {
  padding-top: 2% !important;
}

div.container {
  padding-top: 5%;
}

div.card-panel {
  padding-bottom: 5% !important;
}

.error-message {
  color: $error-color
}

</style>