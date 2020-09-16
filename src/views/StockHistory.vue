<template>
    <div class="row main-div">
        <div class="col s12">
            <h4 class="col s12"><span class="left">Stock History by Symbol</span></h4>
        </div>
        
        <div class="col s12 search-form">
            <form>
                <div class="row">
                    <div class="input-field col l2 m4 s10 offset-s1">
                        <input type="text" id="stock_symbol" class="validate" v-model="stockSymbol" value='MSFT' required>
                        <label class="active" for="stock_symbol">Stock Symbol</label>
                    </div>
                    <div class="col l10 m8 s9 offset-s3">
                        <button class="btn btn-large left" @click="searchData()">Search Stock</button>
                    </div>
                </div>
            </form>
        </div>
        <StockHistoryGraph :stockSymbol="stockSymbol" :bus="bus"  />
    </div>
</template>

<script>
import StockHistoryGraph from '@/components/stock-history-graph/StockHistoryGraph.vue';
import Vue from 'vue';

export default {
    components: {
        StockHistoryGraph
    },
    data() {
        return {
            stockSymbol: 'MSFT',
            showGraph: false,
            bus: new Vue(),
        }
    },
    methods: {
        searchData() {
            if (!this.stockSymbol) { 
                return; 
            }
            this.showGraph = true;
            this.bus.$emit('getSymbolData', this.stockSymbol);
        }
    }
}
</script>

<style>
    .search-form {
        padding-top: 2% !important;
        padding-left: 1% !important;
    }
</style>