<template>
  <div>
    <el-menu
        :router="true"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        :default-active="2"
        active-text-color="#ffd04b">
      <el-menu-item index="1" route="/admin/index">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="2" route="/admin/">
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item>
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>

</template>

<script>
export default {
  name: 'index',
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped>

</style>
