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
         <fg-input type="text"
                    id="thread"
                    :state="state" 
                    label="Thread"
                    placeholder="Thread"
                    v-model.trim="object.thread"
                    required>
          </fg-input>
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
        <button class="btn btn-info btn-fill float-right" type="submit" variant="primary">
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
        object: {}
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
      }
    }
  }
</script>



