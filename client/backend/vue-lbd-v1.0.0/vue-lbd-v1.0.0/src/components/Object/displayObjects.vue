<template>
<card>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card>
            <template slot="header">
              <h4 class="card-title">List of added objects</h4>
              <p class="card-category">Here is a list of the most recent added objects</p>
            </template>
            <div class="table-responsive">
              <table class="table" border="2">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Degree</th>
                    <th scope="col">Previously detected?</th>
                    <th scope="col">Date</th>
                    <th scope="col">Image</th>
                    <th scope="col">Details</th>
                    <th scope="col">Edit</th>
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
                    {{object.degree}}
                    </td>
                    <td>
                    {{object.thread}}
                    </td>
                    <td>
                    {{object.dateAjout}}
                    </td>
                     <td>
                    {{object.img}}
                    </td>
                    <td>
                      <router-link :to="{ name: 'show-object', params: { id: object._id} }">Show</router-link>
                    </td>
                    <td>
                       <router-link :to="{ name: 'edit-object', params: { id: object._id} }">Edit</router-link>
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
</card>
</template>
<script>
  import axios from 'axios'
  import Card from 'src/components/UIComponents/Cards/Card.vue'
  export default {
    name: 'DisplayObjects',
    components: {
      Card
    },
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