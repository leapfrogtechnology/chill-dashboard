<template>
  <div class="col-xs-12">
    <div class="panel panel-default">
      <div class="panel-heading">
        <i class="fa fa-pie-chart"></i>
        Summary
      </div>
      <div class="panel-body">
        <div id="chart-container" style="height:230px;"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import * as Highcharts from 'highcharts'

  export default {
    name: 'SummaryPieChart',
    props: ['count'],

    mounted: function () {
      Highcharts.chart('chart-container', {
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
