<template>
  <div class="col-lg-12 services-wrapper">
    <div class="panel panel-default">
      <div class="panel-heading">List</div>
      <div class="panel-body">
        <div class="table-responsive">
          <table class="table table-bordered table-hover table-striped">
            <thead>
            <tr>
              <td>Service</td>
              <td>Status</td>
              <td>Active Since</td>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>LMS</td>
              <td>Up</td>
              <td>Yesterday</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SummaryTable'
  }
</script>

<style>
  .services-wrapper .table thead>tr>td{
    font-weight: bold;
    padding-top: 12px;
    padding-bottom: 12px;
  }
</style>
