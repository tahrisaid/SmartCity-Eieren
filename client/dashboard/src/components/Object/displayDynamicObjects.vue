<template>
<div class="table">
   <md-table>
      <md-table-header>
         <md-table-row>
            <md-table-head>id</md-table-head>
            <md-table-head>name</md-table-head>
         </md-table-row>
      </md-table-header>
      <md-table-body>
         <md-table-row v-for="(data, index) in tableData" :key="data.id">
            <md-table-cell>{{data.id}}</md-table-cell>
            <md-table-cell>{{data.name}}</md-table-cell>
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
   },
   created: function () {
       this.streamData =
           StreamDataIo.createEventSource(
               //str,
               str,
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