<template>
<card>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card>
            <template slot="header">
              <h4 class="card-title">List of potentiel crimes</h4>
              <p class="card-category">This is the list of potentiel crimes and suspected criminals frames</p>
            </template>

            <div class="table-responsive">
              <table class="table" border="2">
                <thead class="thead-light">
                  <tr>
                    <th scope="col">Gallery/Date</th>
                    <th scope="col">Confidence</th>
                    <th scope="col"> </th>
                  </tr>
                </thead>
                <tbody v-for="criminal of criminals" :key="criminal._id">
                  <tr>
                    <td>
                    {{criminal.gallery}}
                    </td>
                    <td>
                    {{criminal.confidence}}
                    </td>
                    <td>
                      <router-link class="btn btn-info" :to="{ name: 'crime-info', params: { id: criminal._id} }">More Crime/Criminal Info</router-link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>   
          </card>
        </div>

       </div>
    </div>
  </div>
</card>       
</template>

<script>
  import axios from 'axios'
  import Card from 'src/components/UIComponents/Cards/Card.vue'
  export default {
    name: 'Crimes',
    components: {
      Card
    },
    data () {
      return {
        criminals: [],
        errors: []
      }
    },
    created () {
      axios
        .get(`http://localhost:3000/criminal`)
        .then(response => {
          this.criminals = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
</script>