<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <i class="fa fa-pie-chart"></i>
      Chart
    </div>
    <div class="panel-body">
      <div id="container-hawa" style="height:200px;"></div>
    </div>
  </div>
</template>

<script>
  import * as Highcharts from 'highcharts'

  export default {
    name: 'SummaryPieChart',
    props: ['count'],
    mounted: function () {
      console.log(Highcharts)
      console.log(this)

      Highcharts.chart('container-hawa', {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
        },
        title: {
          text: ''
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        credits: false,
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %',
              style: {
                color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
              }
            }
          }
        },
        series: [{
          name: 'Server',
          colorByPoint: true,
          data: this.count
        }]
      })
    }
  }
</script>
