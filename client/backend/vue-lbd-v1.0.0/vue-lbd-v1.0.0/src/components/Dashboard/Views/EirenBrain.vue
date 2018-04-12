<template>

  <div class="content">

      <div class="row">

  <div class="col-md-8" >    
 
<div class="bord">
              <div class="text-danger">This is an Artifical intelligence module that's capable of
                precting crimes that might happen in the future and also classifcing crimes and analysing data 
                using machine learning algorithms
              </div>
</div>
                        <br>

 

    <div class="container-fluid">
      
      <div class="row">
        
        <div class="col-md-4">
          <stats-card>
            <div slot="header" class="icon-warning">
            <img src="static/img/poss.png" width="40px" height="60px"/> {{fruit}}
            </div>
            <div slot="content">
              <p class="card-category">Possibilties of crimes </p>
              <h4 class="card-title">
{{this.nbr.valueOf()}}</h4>
            </div>
            <div slot="footer">
            PREDICTION
            </div>
          </stats-card>
        </div>
        <div class="col-md-4">
          <stats-card>
            <div slot="header" class="icon-warning">
            <img src="static/img/dataset.png" width="40px" height="40px"/> {{fruit}}
            </div>
            <div slot="content">
              <p class="card-category">Crimes in our dataset</p>
              <h4 class="card-title">
{{this.nbrcrime .valueOf()}}</h4>
            </div>
            <div slot="footer">
            PREDICTION
            </div>
          </stats-card>
        </div>
        <div class="col-md-4">
          <stats-card>
            <div slot="header" class="icon-warning">
            <img src="static/img/crimetype.png" width="40px" height="40px"/> {{fruit}}
            </div>
            <div slot="content">
              <p class="card-category">Number type of crimes</p>
              <h4 class="card-title">
{{this.nbrtype}}</h4>
            </div>
            <div slot="footer">
            PREDICTION
            </div>
          </stats-card>
        </div>

      

      

      

      </div>
     
         <div class="col-md-12">
      <reactive-prop-example :chart-data="dataPoints"/>
  
      <doughnut-example/>
   

   
      <pie-example/>
   

   
      <radar-example/>
   

   
      <polar-area-example/>
    


      <bubble-example />
   


      <scatter-example />
    
      <custom-line />
  </div>

     
    </div>
            



  </div>
   <div class="col-md-4">
    <div class="card card-user">
      <div class="card-body">
                        <p class="text-success">List of All type of crimes identified by the IA algorithms </p>
          <div  v-for="(fruit, index) in this.field.valueOf()" :key="`fruit-${index}`" class="alert crimes" id="box">
            <img src="static/img/crime.png" width="40px" height="40px"/> {{fruit}}
  </div>
    </div>
    </div>
  </div>
  </div>
    </div>

 
</template>

<script>

  import ChartCard from 'src/components/UIComponents/Cards/ChartCard.vue'
  import StatsCard from 'src/components/UIComponents/Cards/StatsCard.vue'
  import Card from 'src/components/UIComponents/Cards/Card.vue'
  import LTable from 'src/components/UIComponents/Table.vue'
  import Checkbox from 'src/components/UIComponents/Inputs/Checkbox.vue'
  import { Bar } from 'src/components/DashBoard/views/BaseCharts'
  import { reactiveData } from 'src/components/DashBoard/views/mixins'
  import BarExample from 'src/components/DashBoard/views/examples/BarExample'
  import LineExample from 'src/components/DashBoard/views/examples/LineExample'
  import DoughnutExample from 'src/components/DashBoard/views/examples/DoughnutExample'
  import PieExample from 'src/components/DashBoard/views/examples/PieExample'
  import RadarExample from 'src/components/DashBoard/views/examples/RadarExample'
  import PolarAreaExample from 'src/components/DashBoard/views/examples/PolarAreaExample'
  import BubbleExample from 'src/components/DashBoard/views/examples/BubbleExample'
  import ReactiveExample from 'src/components/DashBoard/views/examples/ReactiveExample'
  import ReactivePropExample from 'src/components/DashBoard/views/examples/ReactivePropExample'
  import ScatterExample from 'src/components/DashBoard/views/examples/ScatterExample'
  import HorizontalBarExample from 'src/components/DashBoard/views/examples/HorizontalBarExample'
  import CustomLine from 'src/components/DashBoard/views/examples/CustomExample'
import * as d3 from 'd3';

 import axios from 'axios'

  export default {
      name: 'vue-line-chart',

      components: {
      Checkbox,
      Card,
      LTable,
      ChartCard,
      StatsCard,
       BarExample,
      LineExample,
      DoughnutExample,
      CustomLine,
      PieExample,
      RadarExample,
      PolarAreaExample,
      BubbleExample,
      ReactiveExample,
      ReactivePropExample,
      ScatterExample,
      HorizontalBarExample
    },
 data: function () {
    return {
      data: [99, 71, 78, 25, 36, 92],
      line: '',
      nbr:0,
      nbrcrime:0,
      fields:'vide',
      field: [],
      nbrtype:0,
      errors:[],
      dataPoints: null,
        height: 20
    }
  },  methods: {
      increaseHeight () {
        this.height += 10
      },
      getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      },
      fillData () {
        this.dataPoints = {
          labels: ['January' , 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: '#f87979',
              data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
            }
          ]
        }
      }
    },
    computed: {
      myStyles () {
        return {
          height: `${this.height}px`,
          position: 'relative'
        }
      }
    }
  ,
    mounted () {
      setInterval(() => {
        this.fillData()
      }, 2000)
    },
      created: function () {
   axios.get('http://localhost:3000/predictModel/nbrpredict')
      .then(response => { this.nbr = response.data }).catch(e => { this.errors.push(e) }) ,
      axios.get('http://localhost:3000/crime/nbrcrime')
      .then(response => { this.nbrcrime = response.data }).catch(e => { this.errors.push(e) }) ,
   axios.get('http://localhost:3000/predictModel/5abd211cc9684d1c286d9a6b')
      .then(response => { this.fields = Object.keys(response.data);
                          for( var i = 5; i < Object.keys(response.data).length; i++)
                          { 
                          console.log(Object.keys(response.data)[i]);
                          this.nbrtype++;
                          this.field.push(Object.keys(response.data)[i]);
                            
                          }
                          for( var i = 0; i < field.length; i++)
                          { 
                          console.log(field[i]);
                   
                            
                          }
                       
}).catch(e => { this.errors.push(e) }) 
      }
      ,
     


}

</script>

<style>
.bord {
  padding: 20px 40px;
  background: none;
  border: none;
  position: relative;
  font-weight: bold;
  letter-spacing: 3px;
  cursor: pointer;
}
.bord:after, .bord:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border: 2px solid #000;
  -webkit-transition: -webkit-transform 0.2s;
  transition: -webkit-transform 0.2s;
  transition: transform 0.2s;
  transition: transform 0.2s, -webkit-transform 0.2s;
}
.bord:after {
  -webkit-transform: translate(3px, 3px);
          transform: translate(3px, 3px);
}
.bord:before {
  -webkit-transform: translate(-3px, -3px);
          transform: translate(-3px, -3px);
}
.bord:hover:after, .bord:hover:before {
  -webkit-transform: translate(0);
          transform: translate(0);
}

#box{
 margin:4px;
}
/**
 * Slide element content to-and-fro?
 * translateY(0) TO translateY(calc(-100%+100vh))
 */
/* The animation code */
@import url(https://fonts.googleapis.com/css?family=Raleway:300,800);
@-webkit-keyframes scroll-tasks {
  0% {
    -webkit-transform: translateY(calc(-100% + 100vh));
            transform: translateY(calc(-100% + 100vh));
  }
  10% {
    -webkit-transform: translateY(calc(-100% + 100vh));
            transform: translateY(calc(-100% + 100vh));
  }
  90% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
}
@keyframes scroll-tasks {
  0% {
    -webkit-transform: translateY(calc(-100% + 100vh));
            transform: translateY(calc(-100% + 100vh));
  }
  10% {
    -webkit-transform: translateY(calc(-100% + 100vh));
            transform: translateY(calc(-100% + 100vh));
  }
  90% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
}

.board {
  font-family: Raleway;
  position: relative;
  height: 100vh;
  overflow-y: auto;
}
.board__tasks {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  width: 200px;
  height: 100%;
  position: relative;
}

.list {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  width: 200px;
  position: absolute;
  padding: 20px 10px;
  -webkit-animation-name: scroll-tasks;
          animation-name: scroll-tasks;
  -webkit-animation-duration: 5s;
          animation-duration: 5s;
  -webkit-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
  -webkit-animation-direction: alternate;
          animation-direction: alternate;
}
.list__item {
  padding: 3px 6px;
  font-size: 16px;
  background-color: #fdbf2d;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.list__item + .list__item {
  margin-top: 8px;
}
.list__item:nth-child(4n+1) {
  margin-top: 42px;
}
.list__item:first-child {
  margin-top: none;
}

.tutorial {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  overflow: auto;
  padding-left: 216px;
}
.tutorial__card {
  width: 33%;
}
.tutorial__image {
  padding: 8px;
}
.tutorial__image img {
  max-width: 100%;
}
.tutorial__description {
  padding: 0 8px;
  line-height: 1.25;
}
.tutorial__description h2 {
  text-align: center;
  font-weight: bold;
  font-size: 16px;
}
.tutorial__description p {
  margin: 8px 0;
}
.tutorial__description img {
  max-width: 100%;
}
.tutorial__description img.hell-yeah {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  padding: 0 17%;
}
.tutorial__description code {
  font-family: "Courier New", Courier, "Lucida Sans Typewriter", "Lucida Typewriter", monospace;
  opacity: .8;
}
.tutorial__description ul {
  list-style: square inside none;
}
.tutorial__description strong {
  font-weight: bold;
}
.tutorial__description em {
  font-style: italic;
}

.karlisup {
  position: fixed;
  bottom: 8px;
  right: 8px;
  color: #fdbf2d;
  font-family: Raleway;
  text-decoration: none;
  -webkit-transition: opacity .1s ease-in-out;
  transition: opacity .1s ease-in-out;
}
.karlisup:hover {
  opacity: 0.5;
}
svg{  margin: 25px;
}
path{ fill: none;
  stroke: #76BF8A;
  stroke-width:3px;
}
.crimes{
  color:black;
  background: gray; 


}
 
</style>
