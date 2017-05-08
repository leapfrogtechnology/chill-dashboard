<template>
  <div class="col-xs-12">
    <div class="row">
      <div class="col-xs-6">
        <div class="panel panel-green">
          <div class="panel-heading">
            <div class="row">
              <div class="col-xs-3">
                <i class="fa fa-arrow-up fa-5x"></i>
              </div>
              <div class="col-xs-9 text-right">
                <div class="huge">3</div>
                <div>Services</div>
              </div>
            </div>
          </div>
          <div class="panel-footer clearfix">
            <span class="pull-left">Running</span>
          </div>
        </div>
      </div>

      <div class="col-xs-6">
        <div class="panel panel-red">
          <div class="panel-heading">
            <div class="row">
              <div class="col-xs-3">
                <i class="fa fa-arrow-down fa-5x"></i>
              </div>
              <div class="col-xs-9 text-right">
                <div class="huge">1</div>
                <div>Services</div>
              </div>
            </div>
          </div>
          <div class="panel-footer clearfix">
            <span class="pull-left">Stopped</span>
          </div>
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
</style>
