<!-->
<template>
<card>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card>
            <template slot="header">
              <h4 class="card-title">list of Claims</h4>
              <p class="card-category"></p>
            </template>
            <div class="table-responsive">
              <table class="table" border="2">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">Email</th>
                    <th scope="col">Object</th>
                    <th scope="col">Content</th>
                    <th scope="col">Place</th>

                    <th scope="col">Details</th>

                  </tr>
                </thead>
                <tbody v-for="claim of claims" :key="claim.description">
                  <tr>
                    <td>
                    {{claim.email}}
                    </td>
                    <td>
                    {{claim.object}}
                    </td>
                    <td>
                    {{claim.content}}
                    </td>
                    <td>
                    {{claim.place}}
                    </td>

                    <td>
                      <router-link :to="{ name: 'show-claim', params: { id: claim._id} }">Show</router-link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </card>
        </div>
         </div>
    </div>
    <router-link to="/admin/add-claim">Add Claim</router-link>
  </div>
</card>
</template>
<script>
  import axios from 'axios'
  import Card from 'src/components/UIComponents/Cards/Card.vue'
  export default {
    name: 'DisplayClaims',
    components: {
      Card
    },
    data () {
      return {
        claims: [],
        errors: []
      }
    },
    created () {
      axios
        .get(`http://localhost:3000/claim`)
        .then(response => {
          this.claims = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
</script>
