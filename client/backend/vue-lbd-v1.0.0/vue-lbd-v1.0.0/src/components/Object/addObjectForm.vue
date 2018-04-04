<template>
  <card>
    <h4 slot="header" class="card-title">Add an object</h4>
     <b-form @submit="onSubmit">
      <div class="row">
        <div class="col-md-6">
          <fg-input type="text"
                    id="name"
                    :state="state" 
                    label="Name"
                    placeholder="Name"
                    v-model.trim="object.name"
                    required>
          </fg-input>
        </div>
        <div class="col-md-6">
         <div class="form-group">
            <label>Previously detected?</label>
          <select class="form-control border-input" v-model="object.thread">
          <option value="valeur1" selected disabled>Select if detected or not</option> 
          <option value="Detected" >Detected</option> 
          <option value="Not detected">Not detected</option>
        </select>
          </div>
        </div>
      </div>
        <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <label>Degree</label>
          <select class="form-control border-input" v-model="object.degree">
          <option value="valeur1" selected disabled>Select the degree of danger</option> 
          <option value="Dangerous">Dangerous</option> 
          <option value="Very Dangerous">Very Dangerous</option>
          <option value="Might be a danger">Might be a danger</option>
        </select>
          </div>
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
                      placeholder="Description"
                      required>
              </textarea>
          </div>
        </div>
      </div>
      <div class="text-center">
        <button class="btn btn-info btn-fill float-right" type="submit" variant="primary" @click.stop="notifyVue('bottom', 'right')">
          Add object
        </button>
      </div>
      <div class="clearfix"></div>
    </b-form>
  </card>
</template>
<script>
  import Card from 'src/components/UIComponents/Cards/Card.vue'

  import axios from 'axios'

  export default {
    name: 'CreteObject',
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
    methods: {
      onSubmit (evt) {
        evt.preventDefault()
        axios.post(`http://localhost:3000/object`, this.object)
        .then(response => {
          this.$router.push({
            name: 'display-objects',
            params: { id: response.data._id }
          })
        })
        .catch(e => {
          this.errors.push(e)
        })
      },
      notifyVue (verticalAlign, horizontalAlign) {
        const notification = {
          template: `<span><b>Add Notification</b></br>This object have been added succesfully.</span>`
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



