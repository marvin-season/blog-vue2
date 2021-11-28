<template>
  <div>
    <BlogList :options="options"/>
  </div>
</template>

<script>
import BlogList from "../../components/dashboard/blog/BlogList";

export default {
  name: "BlogMe",
  components: {BlogList},
  data() {
    return {
      // 博客查询条件
      options: {
        authorId: 1,
        published: false
      }
    }
  },
}
</script>

<style scoped>

</style>