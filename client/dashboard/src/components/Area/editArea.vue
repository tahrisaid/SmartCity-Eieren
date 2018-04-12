<template>
<div class="content">
    <div class="container-fluid">
      <div class="row">
<div class="col-md-8">
<card>
   <h4 slot="header" class="card-title">Edit area
      </h4>
      <b-form @submit="onSubmit">
        <div class="row">
          <div class="col-md-6">
            <fg-input type="text"
                      id="name"
                      label="Name"
                      v-model.trim="area.name"
                      required>
            </fg-input>
        </div>
        <div class="col-md-6">
            <fg-input type="text"
                      id="cameraName"
                      label="Camera Name"
                      v-model.trim="area.cameraName"
                      required>
            </fg-input>
        </div>
      </div>
      <br>
        <div class="row">
          <div class="col-md-6">
            <fg-input type="number"
                      id="crimeRate"
                      label="Crime Rate"
                      v-model.trim="area.crimeRate"
                      required>
            </fg-input>
            </div>  
          <div class="col-md-6">
            <label>Camera Status</label>
          <select class="form-control border-input" v-model.trim="area.status" :state="state" required>
          <option value="Enabled" >Enabled</option> 
          <option value="Disabled">Disabled</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <fg-input type="text"
                      id="address"
                      label="Address"
                      v-model.trim="area.address"
                      required>
            </fg-input>
          </div>
        </div>
        <br>
        <b-button class="btn btn-warning" type="submit" variant="primary" @click.stop>Update</b-button>
        <router-link class="btn btn-info" to="/admin/manage-areas">Cancel</router-link>
        <br><br>
          <router-link class="btn btn-danger" :to="{ name: 'delete-area', params: { id: area._id } }">Delete ?</router-link>
      
      </b-form>
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
  name: 'EditArea',
  components: {
    Card
  },
  data () {
    return {
      area: {},
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
    onSubmit (evt) {
      evt.preventDefault()
      axios.put(`http://localhost:3000/area/` + this.$route.params.id, this.area)
      .then(response => {
        const notification = {
        template: `<span><b>Edit Notification</b></br>This area have been edited succesfully.</span>`
      }
      const color = Math.floor((Math.random() * 4) + 1)
      this.$notifications.notify(
        {
          component: notification,
          icon: 'nc-icon nc-app',
          horizontalAlign: 'bottom',
          verticalAlign: 'right',
          type: this.type[3]
        })
        this.$router.push({
            name: 'manage-areas',
            params: { id: response.data._id }
        })
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
    
      
    
  }
}
</script>