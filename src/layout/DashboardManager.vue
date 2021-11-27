<template>
  <div>
    <el-container>
      <el-aside>
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>

</template>

<script>

export default {
  name: 'index',
  components: {},
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped>

.el-aside{
  background: rgb(84, 92, 100);
}

.el-menu{
  border-right: unset;
}

</style>
