<template>
  <div id="app">
    <header class="navbar">
      <span class="navbar-text"> Image moderation with VueJs, NodeJs and
        <a href="https://sightengine.com/">Sightengine</a>
      </span>
    </header>

    <div class="container">
      <div style="display:flex; flex-direction: column;">
          <img :src="imageSrc" class="image">
          <span class="btn btn-default btn-file">
              Browse <input @change="uploadImage" type="file" name="image" accept="image/*">
          </span>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'app',
  data () {
    return {
      imageSrc: 'http://nahmdong.com/vitalhill/img/default.png'
    }
  },
  methods: {
    uploadImage: function(e) {
      var files = e.target.files;
      if(!files[0]) {
        return;
      }
      var data = new FormData();
      data.append('image', files[0]);
      var reader = new FileReader();
      reader.onload = (e) => {
        this.imageSrc = e.target.result;
      };
      axios.post('/uploads', data, {headers: { 'Content-Type': 'multipart/form-data' } }).then(function (response) {
        reader.readAsDataURL(files[0]);
      }).catch(function (error) {
        console.log(error) // catch your error
      });
    }
  }
}
</script>

<style>
body {
  margin: 0;
}
.image {
  width: 100%;
  height: 100%;
  margin-bottom:40px;
}
.container {
  margin: 0 auto;
  width: 600px;
}
.navbar {
  width: 100%;
  cursor: default;
  background-color: #2CA8E5;
  height: 65px;
  display: flex;
  align-items: center;
  padding-left: 35px;
  margin-bottom:50px;
}
.navbar-text {
  color: white;
  font-weight: bold;
}
.navbar-text a {
  color: white;
}
.btn {
  border-radius: 98px;
  cursor: pointer;
  display: inline-block;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  font-size: 17px;
  padding: 12px 25px;
  min-width: 150px;
  position: relative;
}
.btn-default {
  color: #fff;
  background: #7eb530;
  border-color:#7eb530;;
}
.btn-file input[type=file] {
  position: absolute;
  top: 0;
  right: 0;
  min-width: 100%;
  min-height: 100%;
  font-size: 100px;
  text-align: right;
  filter: alpha(opacity=0);
  opacity: 0;
  outline: none;
  background: white;
  cursor: inherit;
}
</style>
view rawApp.vue hosted with ❤ by GitHub