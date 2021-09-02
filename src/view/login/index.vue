<template>
  <div>
    login
    <el-button @click="login">登录</el-button>
  </div>

</template>

<script>
// import UserApi from '../../api/user'

export default {
  name: 'index',
  data() {
    return {}
  },
  methods: {
    login() {
      // const res = await UserApi.login({
      //   username: "马文澍",
      //   password: "666"
      // });
      this.$router.push({name: 'dashboard-index'})
    }
  }
}
</script>

<style scoped>

</style>
