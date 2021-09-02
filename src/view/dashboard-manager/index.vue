<template>
  <div>
    <el-container>
      <el-aside class="aside" style="height: 100vh">
        <admin-menu/>
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>

</template>

<script>
import AdminMenu from './menu/index'

export default {
  name: 'index',
  components: {AdminMenu},
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
