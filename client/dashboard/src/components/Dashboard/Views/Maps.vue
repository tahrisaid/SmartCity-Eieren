<template>
  <vue-google-heatmap :points="fields"
                      id="map"
                      :center="center"

  />

</template>
<script>
  import Vue from 'vue'

  import VueGoogleHeatmap from 'vue-google-heatmap';
  import axios from 'axios'


 
Vue.use(VueGoogleHeatmap, {
  apiKey: 'AIzaSyDyLpThV6bpKtKwxFEssTctRryoHsVOTR0'
});

  Vue.use(VueGoogleHeatmap, {
    apiKey: 'AIzaSyDMc-V1coe0x9lYgPvFTa-JCX6smDAVfyU'
  });

  export default {
    data : function () {
      return {
        center: {
          lat: 40.748817,
          lng: -73.985428
        },
        errors:[],
        fields:[  {lat: 37.786117, lng:-122.440119},
      {lat: 37.786564, lng:-122.440209},
      {lat: 37.786905, lng:-122.440270},
      {lat: 37.786956, lng:-122.440279},
      {lat: 37.800224, lng:-122.433520},
      {lat: 37.800155, lng:-122.434101},
      {lat: 37.800160, lng:-122.434430},
      {lat: 37.800378, lng:-122.434527},
      {lat: 37.800738, lng:-122.434598},
      {lat: 37.800938, lng:-122.434650},
      {lat: 37.801024, lng:-122.434889},
      {lat: 37.800955, lng:-122.435392},
      {lat: 37.800886, lng:-122.435959},
      {lat: 37.786117, lng:-122.419087676747},
      {lat: 37.786117, lng:-122.419087676747},
      {lat: 37.800886, lng:-122.425891675136}
      ,
      {lat: 37.8065165, lng:-122.42589151651},
      {lat: 37.80051641, lng:-122.425895151},
      {lat: 37.80651, lng:-122.425891654164},
      {lat: 37.8051, lng:-122.42586451651}
      ,
      {lat: 37.8065165, lng:-122.42589151651},
      {lat: 37.80051641, lng:-122.425895651},
      {lat: 37.80651, lng:-122.425891654164},
      {lat: 37.8051, lng:-122.42586451164},
      {lat: 37.8065165, lng:-122.42589151651},
      {lat: 37.80051641, lng:-122.42589551651},
      {lat: 37.80651, lng:-122.425891654164},
      {lat: 37.8051, lng:-122.42581654164},
      {lat: 37.8065165, lng:-122.42589151651},
      {lat: 37.80051641, lng:-122.4258989151651},
      {lat: 37.80651, lng:-122.425891654164},
      {lat: 37.8051, lng:-122.42586454164},
      {lat: 37.8065165, lng:-122.42589151651},
      {lat: 37.80051651, lng:-122.425895151},
      {lat: 37.80651, lng:-122.425891654164},
      
      {lat: 37.8051, lng:-122.42586451651}],
         
          points: [
                    
        
            
      
    ],


        points: [




        ],
        options: {
          styles: [{
            'featureType': 'water',
            'stylers': [{'saturation': 43}, {'lightness': -11}, {'hue': '#0088ff'}]
          }, {
            'featureType': 'road',
            'elementType': 'geometry.fill',
            'stylers': [{'hue': '#ff0000'}, {'saturation': -100}, {'lightness': 99}]
          }, {
            'featureType': 'road',
            'elementType': 'geometry.stroke',
            'stylers': [{'color': '#808080'}, {'lightness': 54}]
          }, {
            'featureType': 'landscape.man_made',
            'elementType': 'geometry.fill',
            'stylers': [{'color': '#ece2d9'}]
          }, {
            'featureType': 'poi.park',
            'elementType': 'geometry.fill',
            'stylers': [{'color': '#ccdca1'}]
          }, {
            'featureType': 'road',
            'elementType': 'labels.text.fill',
            'stylers': [{'color': '#767676'}]
          }, {
            'featureType': 'road',
            'elementType': 'labels.text.stroke',
            'stylers': [{'color': '#ffffff'}]
          }, {'featureType': 'poi', 'stylers': [{'visibility': 'off'}]}, {
            'featureType': 'landscape.natural',
            'elementType': 'geometry.fill',
            'stylers': [{'visibility': 'on'}, {'color': '#b8cb93'}]
          }, {'featureType': 'poi.park', 'stylers': [{'visibility': 'on'}]}, {
            'featureType': 'poi.sports_complex',
            'stylers': [{'visibility': 'on'}]
          }, {'featureType': 'poi.medical', 'stylers': [{'visibility': 'on'}]}, {
            'featureType': 'poi.business',
            'stylers': [{'visibility': 'simplified'}]
          }]
        }
      }
    },
  created: function () {
 
   axios.get('http://localhost:3000/crime/all')
      .then(response => { 
                            
                                                     
                             
                                                        
                       //  console.log(response.data.length);

                          for( var i = 0; i < response.data.length; i++)
                        { 
                          this.fields.push({lat:response.data[i].Y,lng:response.data[i].X});
                         
             
                          //console.log( this.fields[i].lat);
                         }
                                                 

                                                  


}).catch(e => { this.errors.push(e) }) 
      },
      
    created: function () {

      axios.get('http://localhost:3000/crime/all')
        .then(response => {




          //  console.log(response.data.length);

          for( var i = 0; i < response.data.length; i++)
          {
            this.fields.push({lat:response.data[i].Y,lng:response.data[i].X});
            console.log(this.fields[i].lat);
            console.log(this.fields[i].lng);



            //console.log( this.fields[i].lat);
          }





        }).catch(e => { this.errors.push(e) })
    },
    mounted () {
      this.$nextTick(() => {
        this.$refs.mymap.$mapCreated.then(() => {
          var self = this;
          Http.post("v1/getheatmap")
          .then(response => {
            let latlon = new google.maps.MVCArray();
            response.data.result.forEach(function(coord) {
                latlon.push(new google.maps.LatLng(coord.lat, coord.lng));
            });
            let x = new google.maps.visualization.HeatmapLayer({
              data: latlon,
              map: self.$refs.mymap.$mapObject
            });            
          })        
              .then(response => {
              let latlon = new google.maps.MVCArray();
              response.data.result.forEach(function(coord) {
                latlon.push(new google.maps.LatLng(this.fields.lat, this.fields.lng));
              });
              let x = new google.maps.visualization.HeatmapLayer({
                data: latlon,
                map: self.$refs.mymap.$mapObject
              });
            })
        })
      })
    }

  }
</script>
<style>
  #map {
    min-height: calc(100vh - 123px);
  }
</style>

