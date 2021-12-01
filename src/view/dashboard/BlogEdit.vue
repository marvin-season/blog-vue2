<template>
  <div>
  </div>
</template>

<script>
// import MavonBoard from "../../components/dashboard/MavonBoard";
// TODO 博客添加页面
export default {
  name: "BlogEdit",
  components: {},
  data() {
    return {
      id: 0,
    }
  },
  created() {
    this.id = this.$route.params.id;
  }
}
</script>

<style scoped>

</style>