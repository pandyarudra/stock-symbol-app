<template>
<div class="row">
    <h2 class="left col s12">Welcome to MCAP's Stock Trading Tool
    </h2>
    <button class="btn waves-effect waves-light"><i class="material-icons left">trending_up</i>Click to Access Stock History</button>
</div>
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