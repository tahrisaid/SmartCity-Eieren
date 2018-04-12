<template>
<div class="content">
    <div class="container-fluid">
      <div class="row">
<div class="col-md-12">
<card>
  <b-row>
    <b-col cols="12">
      <h4>
        Delete Area
      </h4>
      <b-jumbotron>
        <template slot="header">
          {{area.name}}
        </template>
        <template slot="lead">
          Camera Name: {{area.cameraName}}<br>
          Camera Status: {{area.status}}<br>
          Address: {{area.address}}<br>
          Crime Rate: {{area.crimeRate}}<br>
        </template>
        <hr class="my-4">
        <b-btn variant="danger" @click.stop="deleteArea(area._id)">Confirm Delete</b-btn>
               <router-link class="btn btn-info" to="/admin/manage-areas">Cancel</router-link>
      </b-jumbotron>
    </b-col>
  </b-row>
  </card>
</div>
</div>
    </div>
  </div>
</template>

<script>

import axios from 'axios'
import Card from 'src/components/UIComponents/Cards/Card.vue'
export default {
  name: 'deleteArea',
  components: {
    Card
  },
  data () {
    return {
      area: [],
      type: ['', 'info', 'success', 'warning', 'danger'],
      notifications: {
        topCenter: false
      }
    }
  },
  created () {
    axios.get(`http://localhost:3000/area/` + this.$route.params.id)
    .then(response => {
      this.area = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    deleteArea (areaId) {
      axios.delete('http://localhost:3000/area/' + areaId)
      .then((result) => {
        const notification = {
        template: `<span><b>Removal Notification</b></br>This area have been removed succesfully.</span>`
      }
      const color = Math.floor((Math.random() * 4) + 1)
      this.$notifications.notify(
        {
          component: notification,
          icon: 'nc-icon nc-app',
          horizontalAlign: 'bottom',
          verticalAlign: 'right',
          type: this.type[4]
        })
        this.$router.push({
          name: 'manage-areas'
        })
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  }
}
</script>

<style>
  .jumbotron {
    padding: 2rem;
  }
</style>