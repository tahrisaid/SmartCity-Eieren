<template>
<div class="content">
    <div class="container-fluid">
      <div class="row">
<div class="col-md-12">
<card>
  <b-row>
    <b-col cols="12">
      <h4>
        Edit object
       <router-link to="/admin/display-objects">List of objects</router-link>
      </h4>
      <b-jumbotron>
        <template slot="header">
          {{object.name}}
        </template>
        <template slot="lead">
          name: {{object.name}}<br>
          description: {{object.description}}<br>
          thread: {{object.thread}}<br>
        </template>
        <hr class="my-4">
        <b-btn variant="success" @click.stop="editObject(object._id)">Edit</b-btn>
        <b-btn variant="danger" @click.stop="deleteObject(object._id),notifyVue('bottom', 'right')">Delete</b-btn>
      </b-jumbotron>
    </b-col>
  </b-row>
  </card>
</div>
</div>
    </div>
  </div>
</template>
</template>

<script>

import axios from 'axios'
import Card from 'src/components/UIComponents/Cards/Card.vue'
export default {
  name: 'displayObjects',
  components: {
    Card
  },
  data () {
    return {
      object: [],
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
    editObject (objectId) {
      this.$router.push({
        name: 'edit-object',
        params: { id: objectId }
      })
    },
    deleteObject (objectId) {
      axios.delete('http://localhost:3000/object/' + objectId)
      .then((result) => {
        this.$router.push({
          name: 'display-objects'
        })
      })
      .catch(e => {
        this.errors.push(e)
      })
    },
    notifyVue (verticalAlign, horizontalAlign) {
      const notification = {
        template: `<span><b>Removal Notification</b></br>This object have been removed succesfully.</span>`
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

<style>
  .jumbotron {
    padding: 2rem;
  }
</style>