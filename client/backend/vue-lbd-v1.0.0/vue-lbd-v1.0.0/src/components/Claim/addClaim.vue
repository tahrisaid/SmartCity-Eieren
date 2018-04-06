<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-8">
          <add-claim-form>
          </add-claim-form>
        </div>
        <div class="col-md-4">

        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import addClaimForm from './addClaimForm.vue'
  import UserCard from './UserCard.vue'
  export default {
    components: {
      addClaimForm,
      UserCard
    }
  }
</script>
<style>
</style>
