export default {
  props: ['authenticated'],  
  data() {
    return {
      isAuthenticated: this.authenticated,
    };
  },
  mounted() {
    this.isAuthenticated = localStorage.getItem("authenticated") === "true";
  },
  updated() {
      console.log();
  },
  computated() {
      console.log();
  },
  created() {
      console.log();
  },
  methods: {
    logoutUser: function() {
        this.isAuthenticated = false;
      localStorage.removeItem("authenticated");
      this.$router.replace({ name: "login" });
    },
    loginSuccessful: function(status) {
        this.isAuthenticated = status;
    }
  },
};
