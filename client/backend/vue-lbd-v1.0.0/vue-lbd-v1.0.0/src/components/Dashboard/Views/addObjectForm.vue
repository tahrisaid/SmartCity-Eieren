<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Add an object
        <!--<b-link href="#/">(Book List)</b-link>-->
      </h2>
      <b-form @submit="onSubmit">
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Enter name">
          <b-form-input id="name" :state="state" v-model.trim="object.name"></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                      horizontal
                      :label-cols="4"
                      breakpoint="md"
                      label="Enter Description">
                <b-form-textarea id="description"
                          v-model="object.description"
                          placeholder="Enter something"
                          :rows="2"
                          :max-rows="6">{{object.description}}</b-form-textarea>
            </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Enter thread">
          <b-form-input id="thread" :state="state" v-model.trim="object.thread"></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Add object</b-button>
      </b-form>
    </b-col>
  </b-row>
</template>

<script>

import axios from 'axios'

export default {
  name: 'CreteObject',
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