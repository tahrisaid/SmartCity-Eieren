<template>
<div class="content">
    <div class="container-fluid">
      <div class="row">
<div class="col-md-8">
<card>
   <h4 slot="header" class="card-title">Edit this object
        <router-link :to="{ name: 'show-object', params: { id: object._id } }">(Show Object)</router-link>
      </h4>
      <b-form @submit="onSubmit">
        <div class="row">
          <div class="col-md-12">
            <fg-input type="text"
                      id="name"
                      :state="state" 
                      label="Name"
                      v-model.trim="object.name"
                      required>
            </fg-input>
        </div>
      </div>
        <div class="row">
          <div class="col-md-12">
            <label>Thread</label>
            <select label="thread" class="form-control border-input" id="thread" v-model.trim="object.thread" :state="state" required>
              <option value="valeur1" selected disabled>Select if detected or not</option> 
              <option value="Detected" >Detected</option> 
              <option value="Not detected">Not detected</option>
           </select>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
              <label>Degree</label>
              <select class="form-control border-input" id="degree" v-model.trim="object.degree" :state="state" required>
                <option value="valeur1" selected disabled>Select the degree of danger</option> 
                <option value="Dangerous">Dangerous</option> 
                <option value="Very Dangerous">Very Dangerous</option>
                <option value="Might be a danger">Might be a danger</option>
              </select>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
                <label>Description</label>
                <textarea rows="5" class="form-control border-input"
                        id="description"
                        v-model="object.description"
                        no-resize=true
                        required>
                </textarea>
            </div>
         </div>
      </div>
        <b-button type="submit" variant="primary" @click.stop>Update</b-button>
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
  name: 'EditObject',
  components: {
    Card
  },
  data () {
    return {
      object: {},
      type: ['', 'info', 'success', 'warning', 'danger'],
      notifications: {
        topCenter: false
      }
    }
  },
  created () {
    axios.get(`http://localhost:3000/object/` + this.$route.params.id)
    .then(response => {
      this.object = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      axios.put(`http://localhost:3000/object/` + this.$route.params.id, this.object)
      .then(response => {
        const notification = {
        template: `<span><b>Edit Notification</b></br>This object have been edited succesfully.</span>`
      }
      const color = Math.floor((Math.random() * 4) + 1)
      this.$notifications.notify(
        {
          component: notification,
          icon: 'nc-icon nc-app',
          horizontalAlign: 'bottom',
          verticalAlign: 'right',
          type: this.type[color]
        })
        this.$router.push({
          name: 'show-object',
          params: { id: this.$route.params.id }
        })
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
    
      
    
  }
}
</script>