<template>
  <div class="user-view">
    <user-info />
    <topic-created />
    <topic-replied />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import UserInfo from './UserInfo'
import TopicCreated from './TopicCreated'
import TopicReplied from './TopicReplied'

export default {
  name: 'UserView',
  components: { UserInfo, TopicCreated, TopicReplied },
  props: {
    loginName: {
      type: String,
      default: ''
    }
  },
  created () {
    this.GET_USER(this.loginName)
  },
  methods: {
    ...mapActions(['GET_USER'])
  }
}
</script>

<style lang="scss" scoped>

</style>
