<template>
  <card>
    <h4 slot="header" class="card-title">Add Claim</h4>
     <b-form @submit="onSubmit">
      <div class="row">
        <div class="col-md-6">
          <fg-input type="text"
                    id="email"
                    :state="state"
                    label="Email"
                    placeholder="email"
                    v-model.trim="object.email"
                    required>
          </fg-input>
        </div>
        <div class="col-md-6">
          <fg-input type="text"
                    id="object"
                    :state="state"
                    label="Object"
                    placeholder="object"
                    v-model.trim="object.object"
                    required>
          </fg-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <label>Content</label>
            <textarea rows="5" class="form-control border-input"
                      id="content"
                      v-model="object.content"
                      no-resize=true
                      placeholder="content"
                      required>
              </textarea>
          </div>
        </div>
      </div>
      <div class="text-center">
        <button class="btn btn-info btn-fill float-right" type="submit" variant="primary" @click.stop="notifyVue('bottom', 'right')">
          Add Claim
        </button>
      </div>
      <div class="clearfix"></div>
    </b-form>
  </card>
</template>
<script>
  import Card from 'src/components/UIComponents/Cards/Card.vue'

  import axios from 'axios'

  export default {
    name: 'CreteObject',
    components: {
      Card
    },
    data () {
      return {
        object: {},
        type: ['', 'info', 'success', 'warning', 'danger'],
        notifications: {
          topCenter: false
        }
      }
    },
    methods: {
      onSubmit (evt) {
        evt.preventDefault()
        axios.post(`http://localhost:3000/claim`, this.object)
        .then(response => {
          this.$router.push({
            name: 'display-claims',
            params: { id: response.data._id }
          })
        })
        .catch(e => {
          this.errors.push(e)
        })
      },
      notifyVue (verticalAlign, horizontalAlign) {
        const notification = {
          template: `<span><b>Add Notification</b></br>This claim have been sended succesfully.</span>`
        }
        const color = Math.floor((Math.random() * 4) + 1)
        this.$notifications.notify(
          {
            component: notification,
            icon: 'nc-icon nc-app',
            horizontalAlign: horizontalAlign,
            verticalAlign: verticalAlign,
            type: this.type[color]
          })
      }
    }
  }
</script>



