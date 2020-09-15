<template>
    <h2 class="left">Welcome to MCAP's Stock Trading Tool
    </h2>
    <button>Click to Access Stock History</button>
</template>


<script>
export default {
  name: 'WelcomePage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  div {
      color: black;
      text-align: center;
  }
</style>