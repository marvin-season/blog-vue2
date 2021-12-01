<template>
  <div>
    <BlogList :options="options"/>
  </div>
</template>

<script>
import BlogList from "../../components/dashboard/blog/BlogList";

export default {
  name: "BlogCollect",
  components: {BlogList},
  data() {
    return {
      // 博客查询条件
      options: {
        authorId: 1,
        collect: true
      }
    }
  },
  created() {

  }
}
</script>

<style scoped>

</style>