<template>
  <el-card class="box-card">
    <topic-header/>
    <topic-content/>
    <topic-reply/>
  </el-card>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import TopicHeader from './TopicHeader'
import TopicContent from './TopicContent'
import TopicReply from './TopicReply'

export default {
  name: 'TopicView',
  components: { TopicHeader, TopicContent, TopicReply },
  props: {
    id: {
      type: String,
      default: ''
    }
  },
  computed: {
    ...mapState(['topic', 'mdrender', 'accessToken'])
  },
  created () {
    this.GET_TOPIC({
      id: this.id,
      mdrender: this.mdrender,
      accesstoken: this.accessToken
    })
  },
  beforeRouteUpdate (to, from, next) {
    this.GET_TOPIC({
      id: to.params.id,
      mdrender: this.mdrender,
      accesstoken: this.accessToken
    }).then(() => {
      next()
    })
  },
  methods: {
    ...mapActions(['GET_TOPIC'])
  }
}
</script>

<style lang="scss" scoped>
  .box-card {
    border-radius: 0;
  }
</style>
