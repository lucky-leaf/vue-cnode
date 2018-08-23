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
  .navbar {
    display: flex;
    align-items: center;
    color: #303133;
    font-size: 14px;
    height: 60px;
    margin-bottom: 5px;
    box-shadow: 0 2px 2px #f5f5f5;

    .email {
      margin-left: 10px;
      margin-right: auto;
    }

    ul.navbar-menu {
      display: flex;
      margin: 0;
      padding: 0;
      list-style: none;

      .navbar-item {
        padding: 10px 15px;
        &:last-child {
          margin-right: 10px;
        }
      }
    }
  }
</style>
