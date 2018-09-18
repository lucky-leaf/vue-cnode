<template>
  <div>
    <topic-header/>
    <topic-content/>
    <topic-reply/>
  </div>
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

<style>

</style>
