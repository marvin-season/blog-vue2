<template>
  <div>
    <el-descriptions title="用户信息">
      <el-descriptions-item label="用户名">{{ user.username() }}}</el-descriptions-item>
      <el-descriptions-item label="手机号">{{ user.phone }}</el-descriptions-item>
      <el-descriptions-item label="qq号">{{ user.qq }}</el-descriptions-item>
      <el-descriptions-item label="微信号">{{ user.wx }}</el-descriptions-item>
      <el-descriptions-item label="角色">
        <el-tag size="small">用户</el-tag>
      </el-descriptions-item>
    </el-descriptions>
  </div>

</template>

<script>
export default {
  name: 'UserInfo',
  data() {
    return {
      user: {}
    }
  },
  created() {
    this.user = this.$store.getters.user
  },
  methods: {}
}
</script>

<style scoped>

</style>
