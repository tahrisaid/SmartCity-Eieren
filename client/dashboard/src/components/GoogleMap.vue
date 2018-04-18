<template>
  <div>
    <div>
      <h2>Search and add a pin</h2>
      <label>
        <gmap-autocomplete
          @place_changed="setPlace">
        </gmap-autocomplete>
        <button @click="addMarker">Add</button>
      </label>
      <input type="text" v-bind:value="center.lng" />
      <input type="text" v-bind:value="center.lat" />
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
</template>

<script>
  import * as VueGoogleMaps from 'vue2-google-maps';
  import Vue from 'vue'
  Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyDyLpThV6bpKtKwxFEssTctRryoHsVOTR0',
      libraries: 'places', // necessary for places input
    },
  });
  export default {
    name: 'GoogleMap',
    data() {
      return {
        // default to montreal to keep it simple
        // change this to whatever makes sense
        center: { lat: 45.508, lng: -73.587 },
        markers: [],
        places: [],
        currentPlace: null,
        latt: 'c',
        langg: 'c',
      };
    },

    mounted() {
      this.geolocate();
    },

    methods: {
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
  };
</script>
