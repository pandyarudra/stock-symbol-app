<template>
  <div class="row center main-container">
    <h2 class="col s10 offset-s1 l12">Welcome to MCAP's Stock Trading Tool
    </h2>

    <div class="col s12">
      <p class="left-align col s6 offset-s3">MCAP welcomes you to the Stock Trading Tool. It is one of a kind tool, which provides accurate history of a stock based on Stock Symbols.
        MCAP is one of Canada's largest independent Mortgage Finance Companies, with over $100 billion in assets under management. Comprised of over 800 employees in 8 offices, MCAP originates, securitizes, trades and services residential and commercial mortgages & development financing loans with some of Canada’s largest financial institutions. Click the button below to dive into the Stock World.
      </p>
    </div>
    
    <div class="stock-history-button col s12">
      <router-link to="/stockHistory">
        <button class="btn waves-effect waves-light btn-large">
          <i class="material-icons left">trending_up</i>
          Click to Access Stock History
        </button>
      </router-link>
    </div>
    
  </div>
</template> 


<script>
export default {
  name: 'WelcomePage',
}
</script>

<style scoped lang="scss">
  div.main-container {
      padding-top: 12%;
  }
  div.stock-history-button {
    padding-top: 2%;

    button {
      white-space: nowrap;
    }
  }
</style>