<template>
  <card>
    <h4 slot="header" class="card-title">Sign Up</h4>
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
          <fg-input type="text"
                    id="username"
                    :state="state" 
                    label="username"
                    placeholder="username"
                    v-model.trim="account.username"
                    required>
          </fg-input>
          <fg-input type="text"
                    id="password"
                    :state="state" 
                    label="password"
                    placeholder="password"
                    v-model.trim="account.password"
                    required>
          </fg-input>
          <fg-input type="text"
                    id="passwordConf"
                    :state="state" 
                    label="passwordConf"
                    placeholder="passwordConf"
                    v-model.trim="account.passwordConf"
                    required>
          </fg-input>
        </div>
      </div>
             <div class="text-center">
        <button class="btn btn-info btn-fill float-right" type="submit"  @click.stop variant="primary">
          Add object
        </button>
      </div>
      <div class="clearfix"></div>
    </b-form>
  </card>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'SignUp',
    data() {
      return {
        account: {},
      }
    },
     methods: {
      onSubmit (evt) {
        evt.preventDefault()
        axios.post(`http://localhost:3000/account`, this.account)
        .then(response => {
        })
        .catch(e => {
          this.errors.push(e)
        })
      }
      }
  }
</script>

