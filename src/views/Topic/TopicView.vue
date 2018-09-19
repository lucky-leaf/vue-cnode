<template>
  <div>
    <el-card
      class="box-card"
      shadow="never">
      <topic-header slot="header" />
      <topic-content />
    </el-card>
    <el-card
      class="box-card replies"
      shadow="never">
      <topic-reply />
    </el-card>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

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
    ...mapState(['mdrender', 'accessToken'])
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
  beforeRouteLeave (to, from, next) {
    this.SET_TOPIC({ data: {} })
    next()
  },
  methods: {
    ...mapMutations(['SET_TOPIC']),
    ...mapActions(['GET_TOPIC'])
  }
}
</script>

<style lang="scss" scoped>
  .box-card {
    border-radius: 0;
  }

  .replies {
    margin-top: 10px;
  }
</style>
