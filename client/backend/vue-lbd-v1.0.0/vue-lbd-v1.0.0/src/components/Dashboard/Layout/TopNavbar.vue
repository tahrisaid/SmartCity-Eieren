<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <div class="collapse navbar-collapse justify-content-end">
        <ul class="nav navbar-nav mr-auto">
        </ul>
        <ul class="navbar-nav ml-auto">
          <drop-down title="Action">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something</a>
            <div class="divider"></div>
            <a class="dropdown-item" href="#">Separated link</a>
          </drop-down>
          <li class="nav-item">
             <b-form @submit="logOut">
             
             <button class="btn btn-info btn-fill float-right" type="submit"  @click.stop>
                  Log out
                  </button>
                  </b-form>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
  import axios from 'axios'
  export default {
    computed: {
      routeName () {
        const {name} = this.$route
        return this.capitalizeFirstLetter(name)
      }
    },
    data () {
      return {
        activeNotifications: false
      }
    },
    methods:{
    logOut (evt) {
           evt.preventDefault()
          axios.get(`http://localhost:3000/account/logout`)
          .then(response => {
            this.$router.push({
            name: 'signIn',
            params: { id: response.data._id }
          })
          })
          .catch(e => {
          
          })
        },
       
      capitalizeFirstLetter (string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
      },
      toggleNotificationDropDown () {
        this.activeNotifications = !this.activeNotifications
      },
      closeDropDown () {
        this.activeNotifications = false
      },
      toggleSidebar () {
        this.$sidebar.displaySidebar(!this.$sidebar.showSidebar)
      },
      hideSidebar () {
        this.$sidebar.displaySidebar(false)
      }
    }
  }

</script>
<style>

</style>
