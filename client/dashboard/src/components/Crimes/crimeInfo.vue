<template>

<div class="content">
    <div class="container-fluid">
      <div class="row">
                <div class="col-md-4">
          <chart-card :chart-data="pieChart.data" chart-type="Pie">
            <template slot="header">
              <h4 class="card-title">Criminal Infos</h4>
              <p class="card-category">Criminal skin color predictions</p>
            </template>
            <template slot="footer">
              <div class="legend">
                Age {{crime.age}}<br>
                Gender: {{crime.gender}}<br>
                Glasses: {{crime.glasses}}<br>
              </div>
              <hr>
              <div class="stats">
                <i class="fa fa-clock-o"></i>{{crime.gallery}}
              </div>
            </template>
          </chart-card>
        </div>
<div class="col-md-8">
<card>
  <b-row>
    <b-col cols="8">
      <h4>
        Crime captures
      </h4>
      <b-jumbotron>
        <template slot="header">
        </template>
        <template slot="lead">
          Frames: <br>
                <img v-img:my-group :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/'+crime.gallery.substr(14, 2)+'_00.jpg')" >
                <img v-img:my-group :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/'+crime.gallery.substr(14, 2)+'_01.jpg')" >
                <img v-img:my-group :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/'+crime.gallery.substr(14, 2)+'_02.jpg')" >
                <img v-img:my-group :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/'+crime.gallery.substr(14, 2)+'_03.jpg')" >
                <img v-img:my-group :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/'+crime.gallery.substr(14, 2)+'_04.jpg')" >
                <img v-img:my-group :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/'+crime.gallery.substr(14, 2)+'_05.jpg')" >
                <img v-img:my-group :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/'+crime.gallery.substr(14, 2)+'_06.jpg')" >
                <img v-img:my-group :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/'+crime.gallery.substr(14, 2)+'_07.jpg')" >
                <img v-img:my-group :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/'+crime.gallery.substr(14, 2)+'_08.jpg')" >
                <img v-img:my-group :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/'+crime.gallery.substr(14, 2)+'_09.jpg')" >
                <img v-img:my-group :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/'+crime.gallery.substr(14, 2)+'_10.jpg')" >
                <img v-img:my-group :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/'+crime.gallery.substr(14, 2)+'_11.jpg')" >
                <img v-img:my-group :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/'+crime.gallery.substr(14, 2)+'_12.jpg')" >
                <img v-img:my-group :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/'+crime.gallery.substr(14, 2)+'_13.jpg')" >
                <img v-img:my-group :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/'+crime.gallery.substr(14, 2)+'_14.jpg')" >
                <img v-img:my-group :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/'+crime.gallery.substr(14, 2)+'_15.jpg')" >
                <img v-img:my-group :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/'+crime.gallery.substr(14, 2)+'_16.jpg')" >
                <img v-img:my-group :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/'+crime.gallery.substr(14, 2)+'_17.jpg')" >
                <img v-img:my-group :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/'+crime.gallery.substr(14, 2)+'_18.jpg')" >
                <img v-img:my-group :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/'+crime.gallery.substr(14, 2)+'_19.jpg')" >
                <img v-img:my-group :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/'+crime.gallery.substr(14, 2)+'_20.jpg')" >
                <img v-img:my-group :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/'+crime.gallery.substr(14, 2)+'_21.jpg')" >
                <img v-img:my-group :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/'+crime.gallery.substr(14, 2)+'_22.jpg')" >
                <img v-img:my-group :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/'+crime.gallery.substr(14, 2)+'_23.jpg')" >
                <img v-img:my-group :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/'+crime.gallery.substr(14, 2)+'_24.jpg')" >
                <img v-img:my-group :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/'+crime.gallery.substr(14, 2)+'_25.jpg')" >
                <img v-img:my-group :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/'+crime.gallery.substr(14, 2)+'_26.jpg')" >
                <img v-img:my-group :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/'+crime.gallery.substr(14, 2)+'_27.jpg')" >
                <img v-img:my-group :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/'+crime.gallery.substr(14, 2)+'_28.jpg')" >
                <img v-img:my-group :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/'+crime.gallery.substr(14, 2)+'_29.jpg')" >
                <img v-img:my-group :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/'+crime.gallery.substr(14, 2)+'_30.jpg')" >
                <img v-img:my-group :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/'+crime.gallery.substr(14, 2)+'_31.jpg')" >
                <img v-img:my-group :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/'+crime.gallery.substr(14, 2)+'_32.jpg')" >
                <img v-img:my-group :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/'+crime.gallery.substr(14, 2)+'_33.jpg')" >
                <img v-img:my-group :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/'+crime.gallery.substr(14, 2)+'_34.jpg')" >
                <img v-img:my-group :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/'+crime.gallery.substr(14, 2)+'_35.jpg')" >
                <img v-img:my-group :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/'+crime.gallery.substr(14, 2)+'_36.jpg')" >
                <img v-img:my-group :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/'+crime.gallery.substr(14, 2)+'_37.jpg')" >
                <img v-img:my-group :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/'+crime.gallery.substr(14, 2)+'_38.jpg')" >
                <img v-img:my-group :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/'+crime.gallery.substr(14, 2)+'_39.jpg')" >
                <img v-img:my-group :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/'+crime.gallery.substr(14, 2)+'_40.jpg')" >
                <img v-img:my-group :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/'+crime.gallery.substr(14, 2)+'_41.jpg')" >
                <img v-img:my-group :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/'+crime.gallery.substr(14, 2)+'_42.jpg')" >
                <img v-img:my-group :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/'+crime.gallery.substr(14, 2)+'_43.jpg')" >
                <img v-img:my-group :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/'+crime.gallery.substr(14, 2)+'_44.jpg')" >
                <img v-img:my-group :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/'+crime.gallery.substr(14, 2)+'_45.jpg')" >
                <img v-img:my-group :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/'+crime.gallery.substr(14, 2)+'_46.jpg')" >
                <img v-img:my-group :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/'+crime.gallery.substr(14, 2)+'_47.jpg')" >
                <img v-img:my-group :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/'+crime.gallery.substr(14, 2)+'_48.jpg')" >
                <img v-img:my-group :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/'+crime.gallery.substr(14, 2)+'_49.jpg')" >
                <img v-img:my-group :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/'+crime.gallery.substr(14, 2)+'_50.jpg')" >
                <img v-img:my-group :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/'+crime.gallery.substr(14, 2)+'_51.jpg')" >
                <img v-img:my-group :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/'+crime.gallery.substr(14, 2)+'_52.jpg')" >
                <img v-img:my-group :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/'+crime.gallery.substr(14, 2)+'_53.jpg')" >
                <img v-img:my-group :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/'+crime.gallery.substr(14, 2)+'_54.jpg')" >
                <img v-img:my-group :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/'+crime.gallery.substr(14, 2)+'_55.jpg')" >
                <img v-img:my-group :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/'+crime.gallery.substr(14, 2)+'_56.jpg')" >
                <img v-img:my-group :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/'+crime.gallery.substr(14, 2)+'_57.jpg')" >
                <img v-img:my-group :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/'+crime.gallery.substr(14, 2)+'_58.jpg')" >
                <img v-img:my-group :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/'+crime.gallery.substr(14, 2)+'_59.jpg')" >
           <br><br><br><br><h2> Recongnized </h2> <br><br>

                <img v-img:recognized :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/recognized/00.jpg')" >
                <img v-img:recognized :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/recognized/01.jpg')" >
                <img v-img:recognized :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/recognized/02.jpg')" >
                <img v-img:recognized :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/recognized/03.jpg')" >
                <img v-img:recognized :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/recognized/04.jpg')" >
                <img v-img:recognized :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/recognized/05.jpg')" >
                <img v-img:recognized :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/recognized/06.jpg')" >
                <img v-img:recognized :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/recognized/07.jpg')" >
                <img v-img:recognized :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/recognized/08.jpg')" >
                <img v-img:recognized :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/recognized/09.jpg')" >
                <img v-img:recognized :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/recognized/10.jpg')" >
                <img v-img:recognized :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/recognized/11.jpg')" >
                <img v-img:recognized :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/recognized/12.jpg')" >
                <img v-img:recognized :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/recognized/13.jpg')" >
                <img v-img:recognized :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/recognized/14.jpg')" >
                <img v-img:recognized :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/recognized/15.jpg')" >
                <img v-img:recognized :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/recognized/16.jpg')" >
                <img v-img:recognized :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/recognized/17.jpg')" >
                <img v-img:recognized :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/recognized/18.jpg')" >
                <img v-img:recognized :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/recognized/19.jpg')" >
                <img v-img:recognized :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/recognized/20.jpg')" >
                <img v-img:recognized :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/recognized/21.jpg')" >
                <img v-img:recognized :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/recognized/22.jpg')" >
                <img v-img:recognized :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/recognized/23.jpg')" >
                <img v-img:recognized :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/recognized/24.jpg')" >
                <img v-img:recognized :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/recognized/25.jpg')" >
                <img v-img:recognized :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/recognized/26.jpg')" >
                <img v-img:recognized :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/recognized/27.jpg')" >
                <img v-img:recognized :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/recognized/28.jpg')" >
                <img v-img:recognized :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/recognized/29.jpg')" >
                <img v-img:recognized :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/recognized/30.jpg')" >
                <img v-img:recognized :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/recognized/31.jpg')" >
                <img v-img:recognized :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/recognized/32.jpg')" >
                <img v-img:recognized :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/recognized/33.jpg')" >
                <img v-img:recognized :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/recognized/34.jpg')" >
                <img v-img:recognized :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/recognized/35.jpg')" >
                <img v-img:recognized :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/recognized/36.jpg')" >
                <img v-img:recognized :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/recognized/37.jpg')" >
                <img v-img:recognized :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/recognized/38.jpg')" >
                <img v-img:recognized :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/recognized/39.jpg')" >
                <img v-img:recognized :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/recognized/40.jpg')" >
                <img v-img:recognized :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/recognized/41.jpg')" >
                <img v-img:recognized :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/recognized/42.jpg')" >
                <img v-img:recognized :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/recognized/43.jpg')" >
                <img v-img:recognized :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/recognized/44.jpg')" >
                <img v-img:recognized :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/recognized/45.jpg')" >
                <img v-img:recognized :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/recognized/46.jpg')" >
                <img v-img:recognized :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/recognized/47.jpg')" >
                <img v-img:recognized :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/recognized/48.jpg')" >
                <img v-img:recognized :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/recognized/49.jpg')" >
                <img v-img:recognized :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/recognized/50.jpg')" >
                <img v-img:recognized :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/recognized/51.jpg')" >
                <img v-img:recognized :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/recognized/52.jpg')" >
                <img v-img:recognized :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/recognized/53.jpg')" >
                <img v-img:recognized :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/recognized/54.jpg')" >
                <img v-img:recognized :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/recognized/55.jpg')" >
                <img v-img:recognized :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/recognized/56.jpg')" >
                <img v-img:recognized :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/recognized/57.jpg')" >
                <img v-img:recognized :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/recognized/58.jpg')" >
                <img v-img:recognized :src="('http://localhost:8080/incidents/'+crime.gallery.substr(0, 10)+'/'+crime.gallery.substr(11, 5)+'/recognized/59.jpg')" >
                
                
        </template>
        <hr class="my-4">
        <router-link class="btn btn-info" to="/admin/crimes">Return</router-link>
      </b-jumbotron>
    </b-col>
  </b-row>
  </card>
</div>
</div>
    </div>
  </div>
</template>

<script>
import ChartCard from 'src/components/UIComponents/Cards/ChartCard.vue'
import axios from 'axios'
import Card from 'src/components/UIComponents/Cards/Card.vue'
import Vue from 'vue';
import VueImg from 'v-img';
 
Vue.use(VueImg);
export default {
  methods: {
    imageLoadError () {
      console.log('Image failed to load');
    }},
  name: 'crimeInfo',
  components: {
    ChartCard,
    Card
  },
  data () {
      return {
        editTooltip: 'Edit Task',
        deleteTooltip: 'Remove',
        pieChart: {
          data: {
            labels: ['White','Other', 'Black', 'Asian','Hispanic','Other'],
            series: [35, 5, 20, 30, 10]
          }
        },
        crime: [],
        errors: []
  }},
  created () {
    axios.get(`http://localhost:3000/criminal/` + this.$route.params.id)
    .then(response => {
      this.crime = response.data


            var array = [],
            j = 0;
            for(var i = min; i <= max; i++){
            array[j] = i;
            j++;
            }
            return array;
            
    })

    .catch(e => {
      this.errors.push(e)
    })
    
  }
}
</script>

<style>
  .jumbotron {
    padding: 2rem;
  }
</style>