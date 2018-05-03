<template>

  <card>
    <h4 slot="header" class="card-title">Add Claim</h4>
     <b-form @submit="onSubmit">
      <div class="row">
        <div class="col-md-6">
          <fg-input type="text"
                    id="email"
                    :state="state"
                    label="Email"
                    placeholder="email"
                    v-model.trim="object.email"
                    required>
          </fg-input>
        </div>
        <div class="col-md-6">
          <fg-input type="text"
                    id="object"
                    :state="state"
                    label="Object"
                    placeholder="object"
                    v-model.trim="object.object"
                    required>
          </fg-input>
        </div>
        <div class="col-md-6">
        <fg-input type="hidden"  id="long"  v-model.trim="object.long"/>
        <fg-input type="text" v-bind:value="center.lng" id="longg" label="longittude"/>
        </div>
        <div class="col-md-6">
          <fg-input type="hidden"  id="lat"  v-model.trim="object.lat"/>
          <fg-input type="text" v-bind:value="center.lng" id="latt" label="lattitude"/>
        </div>


      </div>

      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <label>Content</label>
            <textarea rows="5" class="form-control border-input"
                      id="content"
                      v-model="object.content"
                      no-resize=true
                      placeholder="content"
                      required>
              </textarea>
          </div>
        </div>

      </div>

      <div class="text-center">
        <button class="btn btn-info btn-fill float-right" type="submit" variant="primary" @click.stop="notifyVue('bottom', 'right')">
          Add Claim
        </button>
      </div>

      <div class="clearfix"></div>
    </b-form>
    <div>
      <div>
        <h2>Search and add a pin</h2>
        <label>
          <gmap-autocomplete
            @place_changed="setPlace">
          </gmap-autocomplete>

          <button @click="addMarker">Add</button>
        </label>
        <br/>

      </div>
      <br>
      <gmap-map
        :center="center"
        :zoom="12"
        style="width:100%;  height: 400px;"
      >
        <gmap-marker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          @click="center=m.position"
        ></gmap-marker>
      </gmap-map>
    </div>
  </card>
</template>
<script>
  import Card from 'src/components/UIComponents/Cards/Card.vue'

  import axios from 'axios'
  import * as VueGoogleMaps from 'vue2-google-maps';
  import Vue from 'vue'
  Vue.use(VueGoogleMaps, {
    load: {
     
      key: 'AIzaSyDyLpThV6bpKtKwxFEssTctRryoHsVOTR0',
      libraries: 'places', // necessary for places input
    },
  });


  export default {
    name: 'CreteObject',
    components: {
      Card
    },
    data () {
      return {
        object: {},
        type: ['', 'info', 'success', 'warning', 'danger'],
        notifications: {
          topCenter: false
        },
        center: { lat: 45.508, lng: -73.587 },
        markers: [],
        places: [],
        currentPlace: null,

      }
    },
    mounted() {
      this.geolocate();
    },
    methods: {
      onSubmit (evt) {
        evt.preventDefault()
        this.object.long=this.center.lng;
        this.object.lat=this.center.lat;

        axios.post(`http://localhost:3000/claim`, this.object)
        .then(response => {
          this.$router.push({
            name: 'display-claims',
            params: { id: response.data._id }
          })
        })
        .catch(e => {
          this.errors.push(e)
        })
      },
      setPlace(place) {
        this.currentPlace = place;
      },
      addMarker() {
        if (this.currentPlace) {
          const marker = {
            lat: this.currentPlace.geometry.location.lat(),
            lng: this.currentPlace.geometry.location.lng(),
          };
          this.markers.push({ position: marker });
          this.places.push(this.currentPlace);
          this.center = marker;
          this.currentPlace = null;
        }
      },
      geolocate() {
        navigator.geolocation.getCurrentPosition((position) => {
          this.center = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            //  latt: position.coords.latitude,
            //  langg: position.coords.longitude,
          };
        });
      },
    }
  }
</script>



