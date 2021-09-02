<template>
  <div>
    <el-card>
      <el-menu :default-active="activeIndex" :router="true" mode="horizontal">
        <el-menu-item index="1" route="/dashboard/index">首页</el-menu-item>
        <el-menu-item index="3" route="/dashboard/message">留言板</el-menu-item>
        <el-menu-item index="4" route="/dashboard/announcement">公告</el-menu-item>
        <el-menu-item style="float: right">
          <el-button type="text" @click="$router.push({name: 'login'})">登录</el-button>
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
  methods: {}
}
</script>

<style scoped>
.el-card{
  border-radius: 10px;
}
</style>
