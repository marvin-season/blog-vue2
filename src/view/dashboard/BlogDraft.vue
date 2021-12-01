<template>
  <div>
    <BlogList :options="options"/>
  </div>
</template>

<script>
import BlogList from "../../components/dashboard/blog/BlogList";

export default {
  name: "BlogDraft",
  components: {BlogList},
  data() {
    return {
      // 博客查询条件
      options: {
        authorId: 1,
        draft: true,
      }
    }
  },
}
</script>

<style scoped>

</style>