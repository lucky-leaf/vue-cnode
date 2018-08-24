<template>
  <div>List Item</div>
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
    },
    to () {
      return '/topic/' + this.item.id
    }
  }
}
</script>

<style scoped>
  .link {
    color: red;

  }
</style>
