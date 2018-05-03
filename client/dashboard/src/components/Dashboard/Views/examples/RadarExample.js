import { Radar } from '../BaseCharts'
import axios from 'axios'
import Vue from 'vue'


export default {
  extends: Radar,
  data: function () {
    return {
      errors:[],

      nbraussault:64045,
      nbrbribery:20345,
      nbrburglary:15234,
      nbrdrunkness:80345,
      nbremb:0,
      nbrextortion:0,
      nbrfraud:0,
      nbrgambling:0,
      nbrKIDNAPPING:0,
      nbrLOITERING:0,
      nbrPROSTITUTION:0,
      nbrROBBERY:0,
      nbrRUNAWAY:0,
      nbrSUICIDE:0,
      nbrTREA:0,
      nbrTRESPASS:0,
      nbrVANDALISM:0,
      nbrWARRANTS:0,
      nbrBADCHECKS:0,
      nbrDISORDERLYCONDUCT:0,
      nbrDRIVINGUNDERTHEINFLUENCE:0,
      nbrDRUGNARCOTIC:0,
      nbrFORGERYCOUNTERFEITING:0,
      nbrFORGERYCOUNTERFEITING:0,
      nbrLARCENYTHEFT:0,
      nbrbribery:0,
    }
  },
  mounted () {
    this.renderChart({
      labels: ['ARSON', 'Drinking', 'BRIBERY', 'WEAPONLAWS', 'Prostitution', 'THEFT', 'CARCRIME'],
      datasets: [
        {
          label: 'Prediction',
          backgroundColor: 'rgba(179,181,198,0.2)',
          borderColor: 'rgba(179,181,198,1)',
          pointBackgroundColor: 'rgba(179,181,198,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
          data: [66756, 20356, 18245, 40325, 17214, 48523, 17546]
        },
        {
          label: 'My Second dataset',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          pointBackgroundColor: 'rgba(255,99,132,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255,99,132,1)',
          data: [66500, 17000, 19235, 50654, 70000, 60254, 30546]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
  ,created: function () {   
    //alert(this.nbraussault) ;
            axios.get('http://localhost:3000/predictModel/nbraussault')
        .then(response => { this.nbraussault=response.data}).catch(e => { this.errors.push(e) }) ,
        axios.get('http://localhost:3000/predictModel/nbrbribery')
        .then(response => { this.nbrbribery = response.data }).catch(e => { this.errors.push(e) }) ,
        axios.get('http://localhost:3000/predictModel/nbrburglary')
        .then(response => { this.nbrburglary = response.data }).catch(e => { this.errors.push(e) }) ,
        axios.get('http://localhost:3000/predictModel/nbrdrunkness')
        .then(response => { this.nbrdrunkness = response.data }).catch(e => { this.errors.push(e) }) ,
        axios.get('http://localhost:3000/predictModel/nbremb')
        .then(response => { this.nbremb = response.data }).catch(e => { this.errors.push(e) }) ,
        axios.get('http://localhost:3000/predictModel/nbrextortion')
        .then(response => { this.nbrextortion = response.data }).catch(e => { this.errors.push(e) }) ,
        axios.get('http://localhost:3000/predictModel/nbrfraud')
        .then(response => { this.nbrfraud = response.data }).catch(e => { this.errors.push(e) }) ,
        axios.get('http://localhost:3000/predictModel/nbrgambling')
        .then(response => { this.nbrgambling = response.data }).catch(e => { this.errors.push(e) }) ,
        axios.get('http://localhost:3000/predictModel/nbrKIDNAPPING')
        .then(response => { this.nbrKIDNAPPING = response.data }).catch(e => { this.errors.push(e) }) ,
        axios.get('http://localhost:3000/predictModel/nbrLOITERING')
        .then(response => { this.nbrLOITERING = response.data }).catch(e => { this.errors.push(e) }) ,
        axios.get('http://localhost:3000/predictModel/nbrPROSTITUTION')
        .then(response => { this.nbrPROSTITUTION = response.data }).catch(e => { this.errors.push(e) }) ,
        axios.get('http://localhost:3000/predictModel/nbrROBBERY')
        .then(response => { this.nbrROBBERY = response.data }).catch(e => { this.errors.push(e) }) ,
        axios.get('http://localhost:3000/predictModel/nbrRUNAWAY')
        .then(response => { this.nbrRUNAWAY = response.data }).catch(e => { this.errors.push(e) }) ,
        axios.get('http://localhost:3000/predictModel/nbrSUICIDE')
        .then(response => { this.nbrSUICIDE = response.data }).catch(e => { this.errors.push(e) }) ,
              axios.get('http://localhost:3000/predictModel/nbrTREA')
        .then(response => { this.nbrTREA = response.data }).catch(e => { this.errors.push(e) }) ,
             axios.get('http://localhost:3000/predictModel/nbrTRESPASS')
        .then(response => { this.nbrTRESPASS = response.data }).catch(e => { this.errors.push(e) }) ,
             axios.get('http://localhost:3000/predictModel/nbrVANDALISM')
        .then(response => { this.nbrVANDALISM = response.data }).catch(e => { this.errors.push(e) }) ,
             axios.get('http://localhost:3000/predictModel/nbrWARRANTS')
        .then(response => { this.nbrWARRANTS = response.data }).catch(e => { this.errors.push(e) }) ,
             axios.get('http://localhost:3000/predictModel/nbrBADCHECKS')
        .then(response => { this.nbrBADCHECKS = response.data }).catch(e => { this.errors.push(e) }) ,
             axios.get('http://localhost:3000/predictModel/nbrDISORDERLYCONDUCT')
        .then(response => { this.nbrDISORDERLYCONDUCT = response.data }).catch(e => { this.errors.push(e) }) ,
             axios.get('http://localhost:3000/predictModel/nbrDRIVINGUNDERTHEINFLUENCE')
        .then(response => { this.nbrDRIVINGUNDERTHEINFLUENCE = response.data }).catch(e => { this.errors.push(e) }) ,
             axios.get('http://localhost:3000/predictModel/nbrDRUGNARCOTIC')
        .then(response => { this.nbrDRUGNARCOTIC = response.data }).catch(e => { this.errors.push(e) }) ,
             axios.get('http://localhost:3000/predictModel/nbrFORGERYCOUNTERFEITING')
        .then(response => { this.nbrFORGERYCOUNTERFEITING = response.data }).catch(e => { this.errors.push(e) }) ,
             axios.get('http://localhost:3000/predictModel/nbrLARCENYTHEFT')
        .then(response => { this.nbrLARCENYTHEFT = response.data }).catch(e => { this.errors.push(e) }) ,
             axios.get('http://localhost:3000/predictModel/nbrbribery')
        .then(response => { this.nbrbribery = response.data }).catch(e => { this.errors.push(e) })
        }
}
