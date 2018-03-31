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
          <div class="col-md-6">
          <fg-input type="text"
                    id="name"
                    :state="state" 
                    label="Name"
                    v-model.trim="object.name"
                    required>
          </fg-input>
        </div>
        <div class="col-md-6">
         <fg-input type="text"
                    id="thread"
                    :state="state" 
                    label="Thread"
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
                      required>
              </textarea>
          </div>
        </div>
      </div>
        <b-button type="submit" variant="primary">Update</b-button>
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
      object: {}
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