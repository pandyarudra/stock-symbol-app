<template>
    <div class="row main-container">

        <div v-if="loading" class="col s12 center-align">   
            <div class="row preloader-wrapper big active">
                <div class="spinner-layer">
                    <div class="circle-clipper left">
                        <div class="circle"></div>
                    </div>
                </div>
            </div>
            <div class="row"> 
                <span class="col s12">Loading...</span>
            </div>
        </div>

        <div v-if="stockData" class="col s12 charts-container center-align">
            <div class="card-panel">
                <highcharts class="center" :constructor-type="'stockChart'" :options="chartOptions"></highcharts>
            </div>

        </div>

        <div v-else-if="errorMessage" class="error-container col s12 left-align valign-wrapper">
            <h5 class="left"> <i class="material-icons error-icon col s1 left">error</i>{{ errorMessage }}</h5>
        </div>

    </div>
</template>


<script src="./stock-history-graph-component.js"></script>
<style lang="scss">
    @import './stock-history-graph-component.scss';
</style>