<script src="/dist/vue-social-sharing.min.js"></script>
<template>
   <card>
      <div class="content">
         <div class="container-fluid">
            <div class="row">
               <div class="col-12">
                  <card>
                     <template slot="header">
                        <h3 class="card-title"><strong>List of objects</strong></h3>
                        <p class="card-category">Here is a list of the most recent added objects.</p>
                     </template>
                     <b-form-fieldset>
                        <legend>Criterias</legend>
                        <div class="row">
                           <div class="col-md-6">
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
                           <div class="col-md-6">
                              <label>Enter the name of the object here </label>
                              <input class="form-control border-input" type="text" v-model="search" placeholder="Search objects"/>
                              <label>Enter the date of the search</label>
                              <input id ="dateS" name="dateS" class="form-control border-input" type="date" v-model="searchDate"/>
                           </div>
                        </div>
                     </b-form-fieldset>
                     <br><br>
                     <div class="table-responsive" id="docDuPdf">
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

                                   {{object.dateAjout.slice(8,-14)}}/{{object.dateAjout.slice(5,-17)}}/{{object.dateAjout.slice(0,-20)}}
                                 </td>
                                 <td>
                                    <img @click="aggrandir" id="myImg" :src="(object.pathOfImg)" width="150" height="200">
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
         <!-- The Modal -->
         <div id="myModal" class="modal">
            <span @click="closeModal" class="close">&times;</span>
            <img class="modal-content" id="img01">
            <div id="caption"></div>
         </div>
         <router-link to="/admin/add-object">Add object</router-link>
         <button class="btn btn-success" @click="exportPdf" style="float: right;">Export PDF</button>
         <social-sharing url="http://localhost:8000/#/signIn"
            title="Smart-City new app"
            description="Smart-City : They key to a wonderful and safe life.."
            quote="Smart city is a new concept."
            hashtags="smart,city,tunisia"
            twitter-user="tahrisaid_"
            inline-template>
            <div>
               <br>
               <h6>Make your application more popular on social media</h6>
               <network network="email">
                  <button><i class="fa fa-envelope"></i>Email</button>
               </network>
               <network network="facebook">
                  <button><i class="fa fa-facebook"></i>Facebook</button>
               </network>
               <network network="googleplus">
                  <button><i class="fa fa-google-plus"></i>Google +</button>
               </network>
               <network network="linkedin">
                  <button><i class="fa fa-linkedin"></i>LinkedIn</button>
               </network>
               <network network="twitter">
                  <button><i class="fa fa-twitter"></i>Twitter</button>
               </network>
            </div>
         </social-sharing>
      </div>
   </card>
</template>
<style>
   body {font-family: Arial, Helvetica, sans-serif;}
   #myImg {
   border-radius: 5px;
   cursor: pointer;
   transition: 0.3s;
   }
   #myImg:hover {opacity: 0.7;}
   /* The Modal (background) */
   .modal {
   display: none; /* Hidden by default */
   position: fixed; /* Stay in place */
   z-index: 1; /* Sit on top */
   padding-top: 100px; /* Location of the box */
   left: 0;
   top: 0;
   width: 100%; /* Full width */
   height: 100%; /* Full height */
   overflow: auto; /* Enable scroll if needed */
   background-color: rgb(0,0,0); /* Fallback color */
   background-color: rgba(0,0,0,0.9); /* Black w/ opacity */
   }
   /* Modal Content (image) */
   .modal-content {
   margin: auto;
   display: block;
   width: 40%;
   max-width: 700px;
   }
   /* Caption of Modal Image */
   #caption {
   margin: auto;
   display: block;
   width: 80%;
   max-width: 700px;
   text-align: center;
   color: #ccc;
   padding: 10px 0;
   height: 150px;
   }
   /* Add Animation */
   .modal-content, #caption {    
   -webkit-animation-name: zoom;
   -webkit-animation-duration: 0.6s;
   animation-name: zoom;
   animation-duration: 0.6s;
   }
   @-webkit-keyframes zoom {
   from {-webkit-transform:scale(0)} 
   to {-webkit-transform:scale(1)}
   }
   @keyframes zoom {
   from {transform:scale(0)} 
   to {transform:scale(1)}
   }
   /* The Close Button */
   .close {
   position: absolute;
   top: 15px;
   right: 35px;
   color: #f1f1f1;
   font-size: 40px;
   font-weight: bold;
   transition: 0.3s;
   }
   .close:hover,
   .close:focus {
   color: #bbb;
   text-decoration: none;
   cursor: pointer;
   }
   /* 100% Image Width on Smaller Screens */
   @media only screen and (max-width: 700px){
   .modal-content {
   width: 100%;
   }
   }
</style>
<script>
 
   import Vue from "vue"
    import axios from "axios";
    import Card from "src/components/UIComponents/Cards/Card.vue";
   
    var jsPDF = require('jspdf');
    require('jspdf-autotable');
   
    var SocialSharing = require('vue-social-sharing');
   
     Vue.use(SocialSharing);
   
 

    export default {
      name: "DisplayObjects",
      components: {
        Card,
        SocialSharing
      },
      data() {     
        return {
          object: {},
          objects: [],
          errors: [],
          search: "",
          searchThread: "",
          searchDanger: "",
          searchDate:"",
          dataa: ""
        };
      },
      methods: {
        aggrandir(){
           var modal = document.getElementById('myModal');
           var im = document.getElementById('myImg');
           var modalImg = document.getElementById("img01");
           modal.style.display = "block";
           modalImg.src = im.src;   
        },
         closeModal() {
           var modal = document.getElementById('myModal');
           var span = document.getElementsByClassName("close")[0];
            modal.style.display = "none";
         },
         exportPdf() {
           var vm = this
           var columns =
           [
             {title:"Name",dataKey:"name"},
             {title:"Description",dataKey:"description"},
             {title:"Degree",dataKey:"degree"},
             {title:"Thread",dataKey:"thread"},
             {title:"Date",dataKey:"dateAjout"}
           ];
           var doc = new jsPDF('p','pt')
           doc.autoTable(columns,vm.objects)
           doc.save('objects.pdf')
         }
      },
      created() {
        //document.getElementById('dateS').valueAsDate = new Date();
        axios
          .get(`http://localhost:3000/object`)
          .then(response => {
            this.objects = response.data;
          })
          .catch(e => {
            this.errors.push(e);
          });
      },
      computed: {
        filteredObjets: function() {
          return this.objects.filter(object => {
            return (
              object.name.match(this.search) &&
              object.thread.match(this.searchThread) &&
              object.degree.match(this.searchDanger) &&
              object.dateAjout.match(this.searchDate)
            );
          });
        }
      }
    };
</script>