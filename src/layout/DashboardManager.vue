<template>
  <div>
    <Header/>
    <el-divider/>
    <div class="body">
      <Aside></Aside>
      <router-view/>
    </div>
  </div>

</template>

<script>

import Header from "../view/dashboard-manager/Header";
import Aside from "../view/dashboard-manager/Aside";

export default {
  name: 'index',
  components: {Aside, Header},
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped>
.el-divider {
  margin: 0;
}
.body{
  display: flex;
  width: 100%;
}
</style>
