<template>
  <div>
    <!--    <el-container>-->
    <!--      <el-aside style="height: 100vh">-->
    <admin-menu/>
    <!--      </el-aside>-->
    <!--      <el-main>-->
    <router-view/>
    <!--      </el-main>-->
    <!--    </el-container>-->
  </div>

</template>

<script>
import AdminMenu from '../../components/menu/index'

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

</style>
