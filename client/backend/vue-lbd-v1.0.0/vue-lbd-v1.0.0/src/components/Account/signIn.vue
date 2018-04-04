<template>
  <card>
    <h4 slot="header" class="card-title">Sign In</h4>
     <b-form @submit="onSubmit">
      <div class="row">
        <div class="col-md-6">


           <fg-input type="text"
                    id="email"
                    :state="state" 
                    label="email"
                    placeholder="email"
                    v-model.trim="account.email"
                    required>
          </fg-input>
        </div>
      </div>
<div class="row">
        <div class="col-md-6">
                <fg-input type="password"
                    id="password"
                    :state="state" 
                    label="password"
                    placeholder="password"
                    v-model.trim="account.password"
                    required>
          </fg-input>
         </div>
      </div>
        <button type="submit"  @click.stop>Login</button>

      </b-form>

  </card>

</template>

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
        axios.post(`http://localhost:3000/account/login`, this.account.email)
        .then(response => {
        })
        .catch(e => {
        
        })
      }
      }
  }
</script>