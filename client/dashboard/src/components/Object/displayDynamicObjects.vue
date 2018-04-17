<template>
<div class="table">
   <md-table>
      <md-table-header>
         <md-table-row>
            <md-table-head>dateAjout</md-table-head>
         </md-table-row>
      </md-table-header>
      <md-table-body>
         <md-table-row v-for="(data, index) in tableData" :key="data.dateAjout">
            <md-table-cell>{{data.dateAjout}}</md-table-cell>
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
           str:'',
           tableData: []
       }
   },
    /*methods :{
        get : function() {
            var net = require('net');
            var JsonSocket = require('json-socket');
            var port1 = 4545;
            var server = net.createServer();
            server.listen(port1);
            server.on('connection', function(socket) {
                liste=[];
                object={};
                liste.push(socket.remoteAddress);
                //console.log(liste);
                socket = new JsonSocket(socket);
                var n;
                var isRunning = false;
                var streatTimeout;
                socket.on('data', function(data) {
                     str= data.toString();
                    console.log(str);
                    if (str.indexOf('person') > -1)
                    {
                        //send mail here
                        console.log('Detection from Python arrived to NodeJs server')
                    }
                });
            });
        }
    }*/
   created: function () {
       this.streamData =
           StreamDataIo.createEventSource(
               //str,
               'http://localhost:3000/object',
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