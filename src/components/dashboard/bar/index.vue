<template>
  <div>
    <el-card>
      <el-menu :default-active="activeIndex" :router="true" mode="horizontal">
        <el-menu-item index="1" route="/dashboard/announcement">公告公知</el-menu-item>
        <el-menu-item index="2" route="/dashboard/message">大众留言</el-menu-item>
        <el-menu-item index="3" route="/dashboard/index">博文精选</el-menu-item>
        <el-menu-item style="float: right">
          <el-button type="text" @click="$router.push({name: 'login'})">登录</el-button>
          <el-button type="text" @click="logout">注销登录</el-button>
        </el-menu-item>
        <el-menu-item style="float: right">
          <el-button type="text">注册</el-button>
        </el-menu-item>
      </el-menu>
    </el-card>
  </div>

</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.el-card{
  border-radius: 10px;
}
</style>
