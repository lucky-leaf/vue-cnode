<template>
  <header>
    <nav class="navbar has-shadow">
      <div class="container">
        <div class="navbar-brand">
          <a
            href="https://cnodejs.org"
            class="navbar-item">
            <img
              src="../../assets/images/cnodejs.svg"
              alt="CNode"
              width="150"
              height="70">
          </a>
          <router-link
            class="navbar-item"
            to="/">
            主页
          </router-link>
          <a
            href="https://github.com"
            class="navbar-item">
            GITHUB
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style>

</style>
