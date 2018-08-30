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

      <!-- visible如果不用sync修饰符，则需要监听close函数 -->
      <el-dialog
        :visible.sync="dialogVisible"
        title="登录">
        <el-form>
          <el-form-item
            label="AccessToken"
            label-width="formLabelWidth">
            <el-input v-model="form.token"/>
          </el-form-item>
        </el-form>
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
      dialogVisible: false,
      form: {
        token: ''
      },
      formLabelWidth: '120px'
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
