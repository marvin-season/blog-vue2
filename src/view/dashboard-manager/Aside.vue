<template>
  <div>
    <el-menu
        router
        :default-active="defaultActive"
        class="el-menu-vertical-demo"
        @select="handlerSelect"
        @open="handlerOpen"
        @close="handlerClose">
      <el-menu-item index="home">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="user">
        <i class="el-icon-menu"></i>
        <span slot="title">用户</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>

export default {
  name: "Aside",
  data: function () {
    return {
      defaultActive: ''
    }
  },
  components: {},
  methods: {
    handlerOpen() {

    },
    handlerClose() {

    },
    handlerSelect(index) {
      this.defaultActive = index
    }
  },
  created() {
  }
}
</script>

<style scoped>
.el-menu {
  width: 200px;
  min-height: calc(100vh - 58px)
}
</style>