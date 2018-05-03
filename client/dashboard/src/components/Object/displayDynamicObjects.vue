<template>
<div class="table">
   <md-table class="table" border="2">
      <md-table-header>
         <md-table-row>
            <md-table-head>Title</md-table-head>

            <md-table-head>Company</md-table-head>

            <md-table-head>Ticker</md-table-head>

            <md-table-head>Price</md-table-head>

            <md-table-head>Volume</md-table-head>
         </md-table-row>
      </md-table-header>
      <md-table-body>
          <md-table-row v-for="(data, index) in tableData" :key="data.title">
             <md-table-cell>{{data.title}}</md-table-cell>

            <md-table-cell>{{data.company}}</md-table-cell>

            <md-table-cell>{{data.ticker}}</md-table-cell>

            <md-table-cell>{{data.last}}</md-table-cell>

            <md-table-cell>{{data.volume}}</md-table-cell>>
         </md-table-row>
      </md-table-body>
   </md-table>
   <h5 style="text-align: right; font-style: italic;">Disclaimer: data is emulated and does not reflect the actual market data.</h5>
   </div>
</template>
<script>
 
import { StreamDataIo } from 'streamdataio-js-sdk'
import * as jsonpatch from 'fast-json-patch'

export default {
   name: 'stockmarket',
   data() {
       return {
           streamData: null,
           tableData: []
       }
   }
   ,mounted:function(){
        
   },
   created: function () {
       this.streamData =
           StreamDataIo.createEventSource(
               //str,
               'http://stockmarket.streamdata.io/v2/prices',
               'M2UwMGUxMWMtMTE4Ny00MGZhLTkxMjItMzAzMzBhOWIxZjk3',
               []);
       this.streamData.onData(data => {
           console.log('Received data');
           this.tableData = data;
           console.table(this.tableData);
       }, this).onPatch(patch => {
           // update the data with the provided patch
           console.log('received patch %o', patch);
           jsonpatch.applyPatch(this.tableData, patch);
           console.table(this.tableData);
       }, this).onError(error => {
           // do whatever you need in case of error
           console.log('error: %o', error);
      },this).onOpen(() => {
         this.isConnected = true;
         // you can also add custom behavior when the stream is opened
         console.log('open');
       }, this);
       this.streamData.open();
   },
   destroyed: function () {
       this.streamData.close();
   }
}
</script>