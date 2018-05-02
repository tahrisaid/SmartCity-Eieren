<template>
  <card class="card-user">
    <img slot="image" src="https://thd.tn/wp-content/uploads/2018/04/Smart-City-2-1080x675.jpg" alt="..."/>
    <div class="author">
      <a href="#">
        <img class="avatar border-gray" src="static/img/vue-logo.gif" alt="..."/>

        <h4 class="title">I'm Eiren<br />
          <small>if you need help just click on this button below</small>
        </h4>
      </a>
      <a href="http://localhost:8081"><button type="submit" class="btn btn-info btn-fill">
         Eiren Bot
      </button></a>
    </div>




  </card>
</template>
<script>
  import Card from 'src/components/UIComponents/Cards/Card.vue'
  export default {
    components: {
      Card
    },
    data () {
      return {
        details: [
          {
            title: '12',
            subTitle: 'Files'
          },
          {
            title: '2GB',
            subTitle: 'Used'
          },
          {
            title: '24,6$',
            subTitle: 'Spent'
          }
        ]
      }
    },
    methods: {
      getClasses (index) {
        var remainder = index % 3
        if (remainder === 0) {
          return 'col-md-3 col-md-offset-1'
        } else if (remainder === 2) {
          return 'col-md-4'
        } else {
          return 'col-md-3'
        }
      }
    }
  }

</script>
<style>

</style>
