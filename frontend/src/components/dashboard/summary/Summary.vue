<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      Summary
    </div>
    <div class="panel-body">
      <div class="summary-wrp">
        <div class="summary-block clearfix">
          <div class="services-summary-title pull-left">Total Running Services</div>
          <div class="services-summary-title pull-right">{{count[0].total}}</div>
        </div>

        <div class="summary-block clearfix">
          <div class="services-summary-title pull-left">Total Stopped Services</div>
          <div class="services-summary-title pull-right">{{count[1].total}}</div>
        </div>

        <div class="summary-block-total clearfix">
          <div class="services-summary-title pull-left">Total Services</div>
          <div class="services-summary-title pull-right">{{count[0].total + count[1].total}}</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

  export default {
    name: 'ServicesSummary',
    props: ['count'],
    mounted: function () {
      console.log(this.count)
    }
  }
</script>

<style>
  .summary-wrp {
    padding: 20px 0;
    font-size: 18px;
  }

  .summary-block {
    padding: 5px 0;
  }

  .summary-block:last-child {
    padding-bottom: 15px;
  }

  .summary-block-total {
    margin-top: 10px;
    padding: 20px 0;
    border-top: 1px solid #ddd;
  }
</style>
