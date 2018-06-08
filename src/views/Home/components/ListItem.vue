<template>
  <article
    class="message is-dark is-radiusless">
    <div class="message-body is-radiusless">
      <div class="level">
        <div class="level-left">
          <div class="level-item">
            <figure class="image is-32x32">
              <img
                :src="item.author.avatar_url"
                alt="avatar">
            </figure>
          </div>
          <div class="level-item">
            <strong>{{ item.reply_count }}</strong>/{{ item.visit_count }}
          </div>
          <div class="level-item">
            <div class="tags">
              <span
                v-if="item.top"
                class="tag is-info">
                置顶
              </span>
              <span
                v-if="item.good"
                class="tag is-success">精华</span>
              <span class="tag">
                {{ type }}
              </span>
            </div>
          </div>
          <div class="level-item">
            <p>{{ item.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    item: {
      type: Object,
      default: () => {
        return {
          title: ''
        }
      }
    }
  },
  data () {
    return {
      types: {
        dev: '测试',
        share: '分享',
        ask: '问答',
        job: '招聘',
        good: '精华'
      }
    }
  },
  computed: {
    type () {
      return this.types[this.item.tab]
    }
  }
}
</script>

<style>

</style>
