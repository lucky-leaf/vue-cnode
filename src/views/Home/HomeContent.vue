<template>
  <div class="tile is-ancestor is-marginless">
    <div class="tile is-8 is-child">
      <div class="box is-radiusless is-paddingless">
        <div class="tabs">
          <ul>
            <li>
              <a
                class="is-active"
                @click="getUserInfo">
                全部
              </a>
            </li>
            <li><a>精华</a></li>
            <li><a>分享</a></li>
            <li><a>问答</a></li>
            <li><a>招聘</a></li>
            <li><a>测试</a></li>
          </ul>
        </div>

        <article
          v-for="n in 10"
          :key="n"
          class="message is-danger is-radiusless">
          <div class="message-body is-radiusless">
            {{ n }}
          </div>
        </article>
      </div>
    </div>

    <div class="tile is-child">
      <div class="card">
        <div class="card-header">
          <div class="card-header-title">个人信息</div>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img
                  src="https://bulma.io/images/placeholders/96x96.png"
                  alt="Placeholder image">
              </figure>
            </div>
            <div class="media-right">
              <p class="title is-4">lucky-leaf</p>
            </div>
          </div>
          <div class="content">
            <p>积分: 15</p>
            <p>"这家伙很懒，什么个性签名都没有留下。"</p>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import axios from 'axios'

export default {
  name: 'HomeContent',
  methods: {
    getUserInfo () {
      axios.get('https://cnodejs.org/api/v1/user/lucky-leaf')
        .then((response) => {
          console.log(response)
        })
    }
  }
}
</script>

<style scoped>
  .message {
    cursor: pointer;
  }
</style>
