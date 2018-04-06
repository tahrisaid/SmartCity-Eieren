<template>
<card>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card>
            <template slot="header">
              <h4 class="card-title">List of areas</h4>
              <p class="card-category">This is the list of installed cameras and areas</p>
            </template>
            <div class="table-responsive">
              <table class="table" border="2">
                <thead class="thead-light">
                  <tr>
                    <th scope="col">Area Name</th>
                    <th scope="col">Camera Name</th>
                    <th scope="col">Status</th>
                    <th scope="col">Address</th>
                    <th scope="col">Crime Rate</th>
                    <th scope="col">Updated Date</th>
                    <th scope="col"> </th>
                    <th scope="col"> </th>
                  </tr>
                </thead>
                <tbody v-for="area of areas" :key="area._id">
                  <tr>
                    <td>
                    {{area.name}}
                    </td>
                    <td>
                    {{area.cameraName}}
                    </td>
                    <td>
                    {{area.status}}
                    </td>
                    <td>
                    {{area.address}}
                    </td>
                    <td>
                    {{area.crimeRate}}
                    </td>
                    <td>
                    {{area.updateDate}}
                    </td>
                    <td>
                      <router-link class="btn btn-danger" :to="{ name: 'delete-area', params: { id: area._id} }">Delete</router-link>
                    </td>
                    <td>
                       <router-link class="btn btn-warn" :to="{ name: 'edit-area', params: { id: area._id} }">Edit</router-link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </card>
        </div>
         </div>
    </div>
    <router-link class="btn btn-success" to="/admin/add-area">Add Area</router-link>
  </div>
</card>
</template>
<script>
  import axios from 'axios'
  import Card from 'src/components/UIComponents/Cards/Card.vue'
  export default {
    name: 'ManageAreas',
    components: {
      Card
    },
    data () {
      return {
        areas: [],
        errors: []
      }
    },
    created () {
      axios
        .get(`http://localhost:3000/area`)
        .then(response => {
          this.areas = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
</script>