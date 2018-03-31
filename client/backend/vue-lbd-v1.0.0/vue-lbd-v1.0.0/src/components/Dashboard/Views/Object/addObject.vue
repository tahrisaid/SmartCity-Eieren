<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-8">
          <add-object-form>
          </add-object-form>
        </div>
        <div class="col-md-4">
          <user-card>
          </user-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import addObjectForm from './addObjectForm.vue'
  import UserCard from '../UserProfile/UserCard.vue'
  export default {
    components: {
      addObjectForm,
      UserCard
    }
  }
</script>
<style>
</style>
