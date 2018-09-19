<template>
  <div class="login-view">
    <el-card
      class="box-card"
      shadow="never">
      <form>
        <label class="label">访问令牌:</label>
        <input
          type="text"
          class="x-input"
          placeholder="请输入正确的AccessToken">
        <el-checkbox
          v-model="checked"
          class="remember">
          记住我
        </el-checkbox>
        <span>不是自己的电脑上不要勾选此项</span>
        <el-button
          type="primary"
          class="login">登录</el-button>
      </form>
      <div class="tip">
        <p>如何获取AccessToken？用户登录https://cnodejs.org后，在设置页面可以看到自己的AccessToken</p>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data () {
    return { token: '', checked: false }
  }
}
</script>

<style lang="scss" scoped>
  .login-view {
    display: flex;

    .box-card {
      width: 600px;
      height: 400px;
      margin: auto;
      border-radius: 0;

      .label {
        font-size: 20px;
        font-weight: 700;
      }

      .x-input {
        margin-top: 15px;
        font-size: 18px;
        outline: none;
        border: none;
        height: 48px;
        line-height: 48px;
        border-bottom: 1px solid #ddd;
        box-shadow: 0 1px 0 transparent;
        transition: all 0.3s;
        width: 100%;

        &:focus {
          border-bottom-color: #409eff;
          box-shadow: 0 1px 0 #409eff;
        }
      }

      .remember {
        margin-top: 15px;

        & ~ span {
          color: #bbb;
        }
      }

      .login {
        margin-top: 25px;
        width: 100%;
      }

      .tip {
        padding: 8px 16px;
        background-color: #ecf8ff;
        border-left: 5px solid #50bfff;
        margin: 100px 0;
      }
    }
  }
</style>
