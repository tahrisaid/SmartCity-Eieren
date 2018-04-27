<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <add-object-form>
          </add-object-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import addObjectForm from './addObjectForm.vue'
  import UserCard from './UserCard.vue'
  export default {
    components: {
      addObjectForm,
      UserCard
    }
  }
</script>
<style>
</style>
