<template>
  <header class="nav-header">
    <nav class="nav-content">
      <router-link
        to="/"
        class="nav-brand">
        <img
          class="brand"
          src="../../assets/images/cnodejs.svg"
          alt="brand">
      </router-link>

      <el-button
        type="text"
        icon="el-icon-menu"
        @click="$router.push('/')">首页</el-button>

      <el-button
        type="text"
        icon="el-icon-document">关于</el-button>

      <el-button
        type="text"
        icon="el-icon-setting"
        @click="$router.push('/login')">登录</el-button>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="scss" scoped>
  .nav-header {
    background-color: #fff;
    box-shadow: 0 1px rgba(0, 0, 0, 0.25);
  }

  .nav-content {
    display: flex;
    align-items: center;
    max-width: 1024px;
    height: 60px;
    margin: 0 auto;
    padding: 0 10px;

    .nav-brand {
      display: block;
      width: 120px;
      height: 34px;
      margin-right: auto;
    }
  }
</style>
