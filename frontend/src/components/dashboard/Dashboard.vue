<template>
  <div>
    <div class="row">
      <div class="col-lg-12">
        <h1 class="page-header">Dashboard</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <div class="row">
          <services-summary :count="instanceCount"></services-summary>
          <summary-pie-chart :count="instanceCount"></summary-pie-chart>
        </div>
      </div>
      <div class="col-xs-12 col-sm-6">
          <logs></logs>
      </div>
    </div>
    <div class="row">
      <summary-table></summary-table>
    </div>
  </div>
</template>

<script>
  import SummaryPieChart from './charts/SummaryPieChart.vue'
  import ServicesSummary from './summary/Summary.vue'
  import Logs from './logs/Logs.vue'
  import SummaryTable from './services/Table.vue'

  export default {
    name: 'dashboard',
    components: {
      SummaryPieChart,
      ServicesSummary,
      Logs,
      SummaryTable
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
