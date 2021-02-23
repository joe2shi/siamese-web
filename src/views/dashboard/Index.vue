<template>
  <v-card flat class="dashboard" height="1000" color="accent">
    <v-row>
      <v-col cols="12">
        <v-card flat>
          <v-card-title>Siamese Overview</v-card-title>
          <v-divider class="pa-4"/>
          <div v-if="chart">
            <apexchart :options="options" :series="series" height="320"/>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      chart: false,
      options: {
        chart: {
          id: 'line',
          type: 'line',
          toolbar: {
            show: false,
            tools: {
              download: false,
              selection: false,
              zoom: false,
              zoomin: false,
              zoomout: false,
              pan: false,
              reset: false,
              customIcons: []
            }
          }
        },
        tooltip: {
          style: {
            fontSize: '12px',
            fontFamily: 'inherit'
          }
        },
        stroke: {
          curve: 'smooth',
          width: 3
        },
        legend: {
          position: 'top',
          fontFamily: 'inherit'
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          labels: {
            style: {
              fontFamily: 'inherit',
              fontSize: '12px'
            }
          }
        },
        yaxis: {
          labels: {
            style: {
              fontFamily: 'inherit',
              fontSize: '12px'
            }
          }
        }
      },
      series: [
        {
          name: 'Count',
          data: [55, 62, 120, 66, 98, 72, 101, 75, 94, 120, 117, 139]
        },
        {
          name: 'Sum',
          data: [40, 80, 89, 50, 100, 80, 120, 65, 50, 82, 120, 150]
        },
        {
          name: 'Avg',
          data: [150, 127, 100, 89, 95, 80, 64, 65, 50, 30, 12, 1]
        }
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: 'area'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: ['2018-09-19T00:00:00.000Z', '2018-09-19T01:30:00.000Z', '2018-09-19T02:30:00.000Z', '2018-09-19T03:30:00.000Z', '2018-09-19T04:30:00.000Z', '2018-09-19T05:30:00.000Z', '2018-09-19T06:30:00.000Z']
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          }
        }
      }
    }
  },
  mounted () {
    this.chart = true
  }
}
</script>
