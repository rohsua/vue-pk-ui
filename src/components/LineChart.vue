<script>
//Importing Line class from the vue-chartjs wrapper
import { Line } from "vue-chartjs";
//Exporting this so it can be used in other components
export default {
  extends: Line,
  props: {
    chartdata: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      datacollection: {
        labels: ["01월", "02월", "03월", "04월"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "transparent",
            pointBackgroundColor: "transparent",
            borderWidth: 1,
            borderColor: "#fff",
            pointBorderColor: "#fff",
            lineTension: 0,
            data: [20, 50, 30, 70]
          }
        ]
      },
      //Chart.js options that controls the appearance of the chart
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: false
              }
            }
          ],
          xAxes: [
            {
              gridLines: {
                display: false
              }
            }
          ]
        },
        legend: {
          display: false
        },
        responsive: true,
        maintainAspectRatio: false,
        steppedLine: true
      }
    };
  },
  mounted() {
    this.renderChart(this.datacollection, this.options);
  }
};
</script>
