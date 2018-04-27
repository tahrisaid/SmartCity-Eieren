<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <div class="collapse navbar-collapse justify-content-end">
        <ul class="nav navbar-nav mr-auto">
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
             <b-form>
            
                  <router-link to="/signIn"  @click.native="logOut">
     <a data-v-65414849="" href="#" class="dropdown-item text-danger"><i data-v-65414849="" class="nc-icon nc-button-power"></i> Log out
    </a>
</router-link>
                  </b-form>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import axios from "axios";
export default {
  computed: {
    routeName() {
      const { name } = this.$route;
      return this.capitalizeFirstLetter(name);
    }
  },
  data() {
    return {
      activeNotifications: false
    };
  },
  methods: {
    logOut(evt) {
      evt.preventDefault();
      axios
        .get(`http://localhost:3000/account/logout`)
        .then(response => {
          this.$router.push({
            name: "signIn",
            params: { id: response.data._id }
          });
        })
        .catch(e => {});
    },

    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    toggleNotificationDropDown() {
      this.activeNotifications = !this.activeNotifications;
    },
    closeDropDown() {
      this.activeNotifications = false;
    },
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },
    hideSidebar() {
      this.$sidebar.displaySidebar(false);
    }
  }
};
</script>
<style>

</style>
