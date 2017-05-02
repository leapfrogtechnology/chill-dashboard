<template>
  <div>
    <div class="row">
      <div class="col-lg-12">
        <h1 class="page-header">Dashboard</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <summary-pie-chart :count="instanceCount"></summary-pie-chart>
      </div>
      <div class="col-xs-12 col-sm-6">
        <services-summary :count="instanceCount"></services-summary>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="panel panel-default">
          <div class="panel-heading">
            List
          </div>
          <div class="panel-body">
            Here should be the list
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import SummaryPieChart from './charts/SummaryPieChart.vue'
  import ServicesSummary from './summary/Summary.vue'

  export default {
    name: 'dashboard',
    components: {
      SummaryPieChart,
      ServicesSummary
    },

    data: function () {
      return {
        instanceCount: {}
      }
    },

    created: function () {
      // Fetch data
      this.instanceCount = [
        {name: 'Up', y: 0.25, total: 25},
        {name: 'Down', y: 0.75, total: 75}
      ]
    }
  }
</script>
