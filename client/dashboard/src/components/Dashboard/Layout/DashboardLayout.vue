<template>
  <div class="wrapper">
    <div id="map" style="display:none"></div>
    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/admin/overview">
        <i class="nc-icon nc-chart-pie-35"></i>
        <p>Dashboard</p>
      </sidebar-link>
      <sidebar-link to="/admin/Eiren">
        <i class="nc-icon nc-satisfied"></i>
        <p>Eiren's bot</p>
      </sidebar-link>
           <sidebar-link to="/admin/EirenBrain">
        <i class="nc-icon nc-chart-pie-35"></i>
        <p>Eiren's Brain</p>
      </sidebar-link>
       <sidebar-link to="/admin/Maps">
        <i class="nc-icon nc-pin-3"></i>
        <p>Crime HEATMAP</p>
      </sidebar-link>
      <sidebar-link to="/admin/display-claims">
        <i class="nc-icon nc-email-85"></i>
        <p>Claims</p>
      </sidebar-link>
      <sidebar-link to="/admin/display-objects">
        <i class="nc-icon nc-notes"></i>
        <p>Objects</p>
      </sidebar-link>
      <!--<sidebar-link to="/admin/user">
        <i class="nc-icon nc-circle-09"></i>
        <p>User Profile</p>
      </sidebar-link>-->
      <sidebar-link to="/admin/manage-areas">
        <i class="nc-icon nc-globe-2"></i>
        <p>Areas</p>
      </sidebar-link>
      <sidebar-link to="/admin/crimes">
        <i class="nc-icon nc-tv-2"></i>
        <p>Crimes</p>
      </sidebar-link>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click="toggleSidebar">

      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>
  import TopNavbar from './TopNavbar.vue'
  import ContentFooter from './ContentFooter.vue'
  import DashboardContent from './Content.vue'
  import MobileMenu from './MobileMenu.vue'
  export default {
    components: {
      TopNavbar,
      ContentFooter,
      DashboardContent,
      MobileMenu
    },
    methods: {
      toggleSidebar () {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false)
        }
      }
    }
  }

</script>
