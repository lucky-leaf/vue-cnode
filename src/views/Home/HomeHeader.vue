<template>
  <header class="nav-header">
    <nav class="nav-content">
      <a
        href="#"
        class="nav-brand">
        <img
          class="brand"
          src="../../assets/images/cnodejs.svg"
          alt="brand">
      </a>

      <el-button
        type="text"
        icon="el-icon-setting">登录</el-button>
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
  .nav-header {
    width: 1024px;
    margin: 0 auto;
  }

  .nav-content {
    display: flex;
    align-items: center;
    height: 60px;
    margin: 0 20px;

    .nav-brand {
      display: block;
      width: 120px;
      height: 34px;
      margin-right: auto;
    }
  }
</style>
