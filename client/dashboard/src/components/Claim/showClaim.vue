<template>
<div class="content">
    <div class="container-fluid">
      <div class="row">
<div class="col-md-12">
<card>
  <b-row>
    <b-col cols="12">
      <b-jumbotron>

        <template slot="lead">
          Email: {{claim.email}}<br>
          Object: {{claim.object}}<br>
          Content: {{claim.content}}<br>
          place: {{claim.place}}<br>
          lattitude: {{claim.lat}}<br>
          longitude: {{claim.long}}<br>
        </template>
        <hr class="my-4">
        <b-btn variant="danger" @click.stop="deleteClaim(claim._id),notifyVue('bottom', 'right')">Delete</b-btn>
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
  name: 'displayClaims',
  components: {
    Card
  },
  data () {
    return {
      claim: [],
      type: ['', 'info', 'success', 'warning', 'danger'],
      notifications: {
        topCenter: false
      }
    }
  },
  created () {
    axios.get(`http://localhost:3000/claim/` + this.$route.params.id)
    .then(response => {
      this.claim = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    deleteClaim (Id) {
      axios.delete('http://localhost:3000/claim/' + Id)
      .then((result) => {
        this.$router.push({
          name: 'display-claims'
        })
      })
      .catch(e => {
        this.errors.push(e)
      })
    },
    notifyVue (verticalAlign, horizontalAlign) {
      const notification = {
        template: `<span><b>Removal Notification</b></br>This claim have been removed succesfully.</span>`
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
