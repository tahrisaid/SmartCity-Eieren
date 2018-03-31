<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card>
            <template slot="header">
              <h4 class="card-title">List of detected objects</h4>
              <p class="card-category">Here is a list of the most recent detected objects</p>
            </template>
            <div class="table-responsive">
              <table class="table" border="2">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Thread or not</th>
                    <th scope="col">Date</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody v-for="object of objects" :key="object.description">
                  <tr>
                    <td>
                    {{object.name}}
                    </td>
                    <td>
                    {{object.description}}
                    </td>
                    <td>
                    {{object.thread}}
                    </td>
                    <td>
                    {{object.dateAjout}}
                    </td>
                    <td>
                      <router-link :to="{ name: 'show-object', params: { id: object._id} }">Show object</router-link>
                    </td>
                    <td>
                       <router-link :to="{ name: 'edit-object', params: { id: object._id} }">Edit object</router-link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </card>
        </div>
         </div>
    </div>
    <router-link to="/admin/add-object">Add object</router-link>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        objects: [],
        errors: []
      }
    },
    created () {
      axios
        .get(`http://localhost:3000/object`)
        .then(response => {
          this.objects = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
</script>