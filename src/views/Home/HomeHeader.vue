<template>
  <header>
    <nav class="navbar">
      <span class="email">Email: shunkie@qq.com</span>
      <ul class="navbar-menu">
        <li class="navbar-item"><el-button type="text">主页</el-button></li>
        <li class="navbar-item"><el-button type="text">未读消息</el-button></li>
        <li class="navbar-item"><el-button type="text">设置</el-button></li>
        <li class="navbar-item"><el-button type="text">关于</el-button></li>
        <li class="navbar-item"><el-button type="text">登录</el-button></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HomeHeader',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
