<template>
  <div id="app">
    <div id="wrapper">
      <nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
        <div class="navbar-header">
          <a class="navbar-brand">Chill</a>
        </div>
        <sidebar></sidebar>
      </nav>

      <div id="page-wrapper">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import Sidebar from './components/sidebar/Sidebar.vue'

  export default {
    name: 'app',
    components: {
      Sidebar
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }
</style>
