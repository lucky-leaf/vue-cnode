<template>
  <div class="user-view">
    {{ loginName }}
  </div>
</template>

<script>
export default {
  name: 'UserView',
  props: {
    loginName: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>

</style>
