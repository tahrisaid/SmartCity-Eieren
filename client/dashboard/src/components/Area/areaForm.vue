<!--<template>
  <card>
    <h4 slot="header" class="card-title">Add Area</h4>
     <b-form @submit="onSubmit">
      <div class="row">
        <div class="col-md-6">
          <fg-input type="text"
                    id="name"
                    label="Area Name"
                    placeholder="Area Name"
                    v-model.trim="area.name"
                    required>
          </fg-input>
        </div>
        <div class="col-md-6">
          <fg-input type="text"
                    id="cameraName"
                    label="Camera Name"
                    placeholder="Camera Name"
                    v-model.trim="area.cameraName"
                    required>
          </fg-input>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <label>Camera Status</label>
          <select class="form-control border-input" v-model="area.status">
          <option value="Enabled" >Enabled</option> 
          <option value="Disabled">Disabled</option>
        </select>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <fg-input type="text"
                    id="adress"
                    label="Address"
                    placeholder="Area Address"
                    v-model.trim="area.address"
                    required>
          </fg-input>
        </div>
      </div>
      <div class="text-center">
        <button class="btn btn-success btn-fill float-right" type="submit" variant="primary" @click.stop="notifyVue('bottom', 'right')">
          Add Area
        </button>
      </div>
      <div class="clearfix"></div>
    </b-form>
<<<<<<< HEAD
   
=======

>>>>>>> 29167b17fb9c185d43c064b65ee7779106913cb1
  </card>
</template>
<script>
  import Card from 'src/components/UIComponents/Cards/Card.vue'

  import axios from 'axios'
  import Vue from 'vue'
<<<<<<< HEAD
  import * as VueGoogleMaps from 'vue2-google-maps'
  Vue.use(VueGoogleMaps, {
  load: {
    key: '',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
  }
})
=======

>>>>>>> 29167b17fb9c185d43c064b65ee7779106913cb1
  export default {
    name: 'CreateArea',
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
    methods: {
      onSubmit (evt) {
        evt.preventDefault()
        axios.post(`http://localhost:3000/area`, this.area)
        .then(response => {
          this.$router.push({
            name: 'manage-areas',
            params: { id: response.data._id }
          })
        })
        .catch(e => {
          this.errors.push(e)
        })
      },
      notifyVue (verticalAlign, horizontalAlign) {
        const notification = {
          template: `<span><b>Add Notification</b></br>The new area have been added succesfully.</span>`
        }
        const color = Math.floor((Math.random() * 4) + 1)
        this.$notifications.notify(
          {
            component: notification,
            icon: 'nc-icon nc-app',
            horizontalAlign: horizontalAlign,
            verticalAlign: verticalAlign,
            type: this.type[color]
          })
      }
    }
  }
</script>