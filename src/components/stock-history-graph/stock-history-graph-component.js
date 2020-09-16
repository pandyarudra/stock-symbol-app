import axios from "axios";
import { Chart } from "highcharts-vue";
import VueLodash from "vue-lodash";
import lodash from "lodash";
import Vue from "vue";
import Highcharts from "highcharts";
import stockInit from "highcharts/modules/stock";

stockInit(Highcharts);

Vue.use(VueLodash, { name: "custom", lodash: lodash });

export default {
  data() {
    return {
      stockData: null,
      errorMessage: null,
      loading: false,
      chartOptions: {
        series: [
          {
            data: [1, 2, 2, 1, 4],
          },
        ],
      },
    };
  },
  props: ["stockSymbol", "bus"],
  components: {
    highcharts: Chart,
  },
  mounted() {
    this.bus.$on("getSymbolData", (data) => {
      this.getSymbolData(data);
    });
  },
  methods: {
    // Fetch the Data on symbol input
    getSymbolData(symbol) {
      const apiKey = "KXN1MKTJP3T13SBC";
      this.errorMessage = null;
      this.stockData = null;
      this.loading = true;
      const _ = this._;
      return axios
        .get(
          `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${apiKey}`
        )
        .then((response) => {
          if (response.data["Error Message"]) {
            this.errorMessage = " Please enter a valid Stock Symbol";
          } else if (response.data["Note"]) {
            this.errorMessage =
              "There is an issue with the API Key, please change it before proceeding.";
          } else {
            const graphData = _.map(
              response.data["Time Series (Daily)"],
              (value, key) => {
                return { date: key, val: value };
              }
            ).reverse();

            let openValues = [];
            let highValues = [];
            let lowValues = [];
            let closeValues = [];
            let volumeValues = [];

            _.each(graphData, (row) => {
              var lastKey = _.last(openValues);
              if (lastKey) {
                var totalDays = this.getDaysArray(
                  new Date(row.date),
                  lastKey[0]
                );

                if (totalDays && totalDays.length > 1) {
                  _.each(totalDays, (d) => {
                    const dEpochTime = d.getTime();
                    openValues.push([dEpochTime, null]);
                    highValues.push([dEpochTime, null]);
                    lowValues.push([dEpochTime, null]);
                    closeValues.push([dEpochTime, null]);
                  });
                }
              }

              const epochTime = new Date(row.date).getTime();
              openValues.push([epochTime, Number(row.val["1. open"])]);
              highValues.push([epochTime, Number(row.val["2. high"])]);
              lowValues.push([epochTime, Number(row.val["3. low"])]);
              closeValues.push([epochTime, Number(row.val["4. close"])]);
              volumeValues.push([epochTime, Number(row.val["5. volume"])]);
            });

            this.stockData = response.data;
            this.chartOptions = {
              title: {
                text: this.stockSymbol,
              },
              legend: {
                enabled: true,
              },
              rangeSelector: {
                enabled: true,
                inputEnabled: true,
              },

              series: [
                {
                  showInLegend: true,
                  type: "spline",
                  name: "Open",
                  data: openValues,
                },
                {
                  showInLegend: true,
                  name: "High",
                  data: highValues,
                },
                {
                  showInLegend: true,
                  name: "Low",
                  data: lowValues,
                },
                {
                  showInLegend: true,
                  name: "Close",
                  data: closeValues,
                },
                {
                  showInLegend: true,
                  name: "Volume",
                  data: volumeValues,
                  visible: true,
                },
              ],
            };
            this.errorMessage = null;
          }

          this.loading = false;
        });
    },
    getDaysArray: function(startDate, endDate, addFn, interval) {
      addFn = addFn || Date.prototype.addDays;
      interval = interval || 1;

      var retVal = [];
      var current = new Date(startDate);

      while (current <= endDate) {
        retVal.push(new Date(current));
        current = addFn.call(current, interval);
      }

      return retVal;
    },
  },
  created() {
    this.getSymbolData(this.stockSymbol);
  },
};
