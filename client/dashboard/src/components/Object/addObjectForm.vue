<template>
   <card>
      <h4 slot="header" class="card-title">Add an object</h4>
      <b-form @submit="onSubmit" enctype="multipart/form-data">
         <div class="row">
            <div class="col-md-6">
               <fg-input type="text"
                  id="name"
                  :state="state" 
                  label="Name"
                  placeholder="Name"
                  v-model.trim="object.name"
                  required>
               </fg-input>
               <!--<div class="col-md-6">
                  <fg-input type="file"
                     id="img"
                     :state="state" 
                      required
                     label="image"
                    >
                  </fg-input>
                  </div>-->
               <div class="form-group">
                  <label>Previously detected?</label>
                  <select class="form-control border-input" v-model="object.thread" required>
                     <option value="" disabled selected>Select if detected or not</option>
                     <option value="Detected" >Detected</option>
                     <option value="Not detected">Not detected</option>
                  </select>
               </div>
               <div class="form-group">
                  <label>Degree</label>
                  <select class="form-control border-input" v-model="object.degree" required>
                     <option value="" selected disabled>Select the degree of danger</option>
                     <option value="Dangerous">Dangerous</option>
                     <option value="Very Dangerous">Very Dangerous</option>
                     <option value="Might be a danger">Might be a danger</option>
                  </select>
               </div>
               <div class="form-group">
                  <label>Description</label>
                  <textarea rows="5" class="form-control border-input"
                     id="description"
                     v-model="object.description"
                     no-resize=true
                     placeholder="Description"
                     required>
                  </textarea>
               </div>
            </div>
            <div class="col-md-6">
               <picture-input 
                  ref="pictureInput" 
                  id="img"
                  :state="state" 
                  required
                  width="800" 
                  height="500" 
                  accept="image/jpeg,image/png" 
                  size="10" 
                  buttonClass="btn"
                  :customStrings="{
                  upload: '<h1>Bummer!</h1>',
                  drag: 'Drag your image here'
                  }">
               </picture-input>
               <br><br>
            </div>
         </div>
         <div class="text-center">
            <button class="btn btn-info btn-fill float-right" type="submit" variant="primary" @click.stop>
            Add object
            </button>
         </div>
         <div class="clearfix"></div>
      </b-form>
   </card>
</template>
<script>
   import Card from 'src/components/UIComponents/Cards/Card.vue'
   import axios from 'axios'
   import PictureInput from 'vue-picture-input'
   export default {
     
     name: 'CreteObject',
     components: {
       Card,
       PictureInput
     },
     data () {
       return {
         object: {},
         fileName:'',
         type: ['', 'info', 'success', 'warning', 'danger'],
         notifications: {
           topCenter: false
         }
       }
     },
     
     methods: {
       onSubmit (evt) {
   
    var name = document.getElementById('img'); 
     this.fileName = name.files.item(0).name;
     console.log("le nom de fichier est",this.fileName)
   
         evt.preventDefault()
         this.object.nameOfImg =this.fileName;
         axios.post(`http://localhost:3000/object`, this.object)
         .then(response => {
            const notification = {
           template: `<span><b>Add Notification</b></br>This object have been added succesfully.</span>`
         }
         const color = Math.floor((Math.random() * 4) + 1)
         this.$notifications.notify(
           {
             component: notification,
             icon: 'nc-icon nc-app',
             horizontalAlign: 'bottom',
             verticalAlign: 'right',
             type: this.type[color]
           })
           this.$router.push({
             name: 'display-objects',
             params: { id: response.data._id }
           })
         })
         .catch(e => {
           this.errors.push(e)
         })
       }
     }
   }
</script>