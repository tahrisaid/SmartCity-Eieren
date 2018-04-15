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

               <div class="col-md-6">
              <div class="form-group">

                 <label>Degree of danger</label>
          <select class="form-control border-input" v-model="searchDanger">
          <option value="" selected disabled>Select the degree of danger</option> 
          <option value="Dangerous">Dangerous</option> 
          <option value="Very Dangerous">Very Dangerous</option>
          <option value="Might be a danger">Might be a danger</option>
        </select>

            <label>Previously detected?</label>
          <select class="form-control border-input" v-model="searchThread">
          <option value="" disabled selected>Select if detected or not</option> 
          <option value="Detected" >Detected</option> 
          <option value="Not detected">Not detected</option>
        </select>
          </div>
              <label>Enter the name of the object here: </label>
              <fg-input type="text" v-model="search" placeholder="Search objects"></fg-input>
               </div>
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
                <tbody v-for="object of filteredObjets" :key="object.description">
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

                         <img src="http://127.0.0.1:8080/images/said.jpg" width="100" height="100">
                    </td>
                    <td>
                      <router-link class="btn btn-danger" :to="{ name: 'show-object', params: { id: object._id} }">Show</router-link>
                    </td>
                    <td>
                       <router-link class="btn btn-info" :to="{ name: 'edit-object', params: { id: object._id} }">Edit</router-link>
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
        object : {},
        objects: [],
        errors: [],
        search:'',
        searchThread:'',
        searchDanger:''
      }
    }
    ,
    methods: {
          dataUrl(x){
            console.log(x);
         return  'data:image/jpg;base64,'+x;
        /*return 'data:image/jpeg;base64,' + btoa(
            new Uint8Array(x)
                .reduce((data, byte) => data + String.fromCharCode(byte), '')
            );*/
            
            //return 'static/img/said.jpg';
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
    },
    computed:{ //computed property
      filteredObjets: function(){
        return this.objects.filter((object) => {
          return object.name.match(this.search) && object.thread.match(this.searchThread)
          && object.degree.match(this.searchDanger);
        })
      }
    }
  }
</script>