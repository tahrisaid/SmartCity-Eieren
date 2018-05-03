<!-->
<template>
<card>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card>
            <template slot="header">
              <h4 class="card-title">Search a place</h4>
              <p class="card-category"></p>
            </template>
            <div class="col-md-6">

              <label>Enter the longittude of place</label>

              <input class="form-control border-input" type="text" v-model="long"/>

              <label>Enter the lattitude of place</label>

              <input class="form-control border-input" type="text" v-model="lat"/>

            </div>
            <br>
            <h4 class="card-title">list of Claims</h4>
            <div class="table-responsive">
              <table class="table"  border="2">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">Email</th>
                    <th scope="col">Object</th>
                    <th scope="col">Content</th>
                    <th scope="col">Longittude</th>
                    <th scope="col">Lattitude</th>
                    <th scope="col">Details</th>

                  </tr>
                </thead>
                <tbody v-for="claim of  filteredObjets" :key="claim.description">
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
                      {{claim.long}}
                    </td>
                    <td>
                      {{claim.lat}}
                    </td>

                    <td>
                      <router-link class="btn btn-danger" :to="{ name: 'show-claim', params: { id: claim._id} }">Show</router-link>
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
        claim:[],
        errors: [],
        long:"",
        lat:""
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
    },
    computed: {
      //computed property
      filteredObjets: function() {
        return this.claims.filter(claim => {
          return (
            claim.long.match(this.long) &&
            claim.lat.match(this.lat)

          );
        });
      }
    }
  }
</script>
