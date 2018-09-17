<template>
  <div>
    <topic-header/>
    <topic-content/>
    <topic-reply/>
  </div>
</template>

<script>
import TopicHeader from './TopicHeader'
import TopicContent from './TopicContent'
import TopicReply from './TopicReply'

export default {
  name: 'TopicView',
  components: { TopicHeader, TopicContent, TopicReply }
}
</script>

<style>

</style>
