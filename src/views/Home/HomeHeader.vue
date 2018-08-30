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
        icon="el-icon-menu">首页</el-button>

      <el-button
        type="text"
        icon="el-icon-document">关于</el-button>

      <el-button
        type="text"
        icon="el-icon-setting"
        @click="dialogVisible = true">登录</el-button>

      <el-dialog
        :visible="dialogVisible"
        :before-close="handleClose"
        title="登录"
        width="30%">
        <span>登录消息</span>
        <span slot="footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button
            type="primary"
            @click="dialogVisible = false">确认</el-button>
        </span>
      </el-dialog>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HomeHeader',
  data () {
    return {
      dialogVisible: false
    }
  },
  methods: {
    handleClose (done) {
      done()
    }
  }
}
</script>

<style lang="scss" scoped>
  .nav-header {
    box-shadow: 0 1px rgba(0, 0, 0, 0.25);
  }

  .nav-content {
    display: flex;
    align-items: center;
    width: 1024px;
    height: 60px;
    margin: 0 auto;

    .nav-brand {
      display: block;
      width: 120px;
      height: 34px;
      margin-right: auto;
    }
  }
</style>
