<template>
  <v-card flat class="dashboard" height="1000" color="accent">
    <v-row>
      <v-col cols="12">
        <v-card flat>
          <v-card-title>Siamese Overview</v-card-title>
          <v-divider class="pa-4"/>
          <div v-if="chart">
            <apexchart ref="overviewChart" :options="options" :series="series" height="320"/>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      chart: false,
      options: {
        chart: {
          id: 'line',
          type: 'line',
          foreColor: '',
          fontFamily: 'inherit',
          animations: {
            easing: 'easein'
          },
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
            fontSize: '12px'
          }
        },
        stroke: {
          curve: 'smooth',
          width: 3
        },
        legend: {
          position: 'top'
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          labels: {
            style: {
              fontSize: '12px'
            }
          }
        },
        yaxis: {
          labels: {
            style: {
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
      ]
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init: function () {
      this.chart = true
      this.options.chart.foreColor = !this.$vuetify.theme.dark ? '' : '#BDBDBD'
    }
  },
  computed: {
    ...mapState(['theme'])
  }
}
</script>
