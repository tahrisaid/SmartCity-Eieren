<template>
   <div class="container">
      <header>
        <h1><center><strong>Smart City app</strong></center></h1>
      </header>
      <div id="app" class="signup">
         <transition name="fade" mode="out-in">
            <component :is="compname" @change_comp="swapcomp($event)"></component>
         </transition>
         <template id="signup-form">
          
            <b-form @submit="onSubmit">
               <br><br><br>
               <div class="form-group">
                  <input type="text" id="email"
                     :state="state"
                     placeholder="Email"
                     v-model.trim="account.email"
                     required />
                  <span v-show="msg1">{{ pwd1_msg }}</span>
               </div>
               <br>
               <div class="form-group">
                  <input type="password"  id="password"
                     :state="state"
                     placeholder="Password"
                     v-model.trim="account.password"
                     required />
                  <span v-show="msg1">{{ pwd1_msg }}</span>
               </div>
               <br>
               <div class="form-group">
                  <button :class="{active: disable_btn}" type="submit"  @click.stop>
                  Sign In
                  </button>
                   <router-link :to="{ name: 'signUp'}">Sign Up</router-link>
               </div>
            </b-form>
         </template>
      </div>
   </div>
</template>
<style lang="scss">
   @import url('https://fonts.googleapis.com/css?family=Roboto');
   $green-dark: #79CB0A;
   $green-light: #B5D020;
   $orange-dark: #FF8700;
   $orange-light: #FFB100;
   $red: #FF3400;
   $grey: #8F949B;
   * {
   box-sizing: border-box;
   }
   body {
   height: 100%;
   font-family: 'Roboto', sans-serif;
    
    color:white;
     background:url("https://www.walldevil.com/wallpapers/a85/cityscapes-artwork-cities-art-fantasy-wallpapers-futuristic-wallpaper.jpg") no-repeat;

   }
   .container {
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   }
   header {
   margin: 30px 0;
   text-align: center;
   h2 {
   text-transform: uppercase;
   margin: 0;
   }
   p {
   font-size: 1em;
   }
   a {
   text-decoration: none;
   border-bottom: 2px dotted $orange-dark;
   color: inherit;
   }
   }
   .signup {
   width: 700px;
   height: 460px;
   position: relative;
   overflow: hidden;
   box-shadow: 10px 10px 60px rgba(0, 0, 0, .4);
   display: flex;
   justify-content: flex-end;
   align-items: center;
   border-radius: 5px;
   }
   .signup:before {
   content: "";
   position: absolute;
   width: 100%;
   height: 100%;
   transform: scaleX(-1);
   z-index: -1;
   //background: url(https://source.unsplash.com/Qmox1MkYDnY/900x500)   no-repeat;
   background-color:#c2d1ff;
   }
   form {
   width: 90%;
   height: 80%;
   padding: 20px 50px 20px 20px;
   }
   form .form-group {
   display: flex;
   flex-direction: column;
   margin:  0px 0px 20px  0px;
   color: $grey;
   font-size: .9em;
   label {
   margin: 0 0 16px 0;
   }
   span {
   font-size: .8em;
   color: $red;
   }
   span#characters {
   font-size: .8em;
   color: $grey;
   }
   }
   .form-group input[type="text"],
   .form-group input[type="password"] {
   border: none;
   outline: none;
   background: transparent;
   padding: 0 0 10px 0;
   font-size: 1em;
   border-bottom: 1px dotted $grey;
   }
   .form-group input[type="password"] {
   color: $red;
   }
   form .form-group:last-child {
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   margin: 40px 0 0 0;
   button {
   border: none;
   background: linear-gradient(to left, $orange-dark , $orange-light);
   padding: 10px 30px;
   border-radius: 20px;
   color: #FFFFFF;
   font-size: .8em;
   font-weight: bold;
   letter-spacing: 1px;
   cursor: pointer;
   }
   button.active {
   opacity: .5;
   cursor: default;
   }
   a {
   color: $grey;
   text-decoration: dotted;
   font-size: .8em;
   }
   }
   .results, .terms {
   width: 50%;
   height: 80%;
   padding: 20px 50px 20px 20px;
   }
   .fade-enter-active, .fade-leave-active {
   transition: all .8s;
   }
   .fade-enter, .fade-leave-active {
   opacity: 0;
   transform: translateX(-40px);
   }
   
</style>
<script>
   import axios from 'axios'
    export default {
      name: 'SignIn',
      data() {
        return {
          account: {},
        }
      },
       methods: {
        onSubmit (evt) {
          evt.preventDefault()
          axios.post(`http://localhost:3000/account/login`,this.account)
          .then(response => {
            this.$router.push({
            name: 'Overview',
            params: { id: response.data._id },
          })
          })
          .catch(e => {
              alert("Invalid credentials! Pelase try again.")
          })
        }
        }
    }
</script>
