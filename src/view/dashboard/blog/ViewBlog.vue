<template>
  <div>
    查看博客
  </div>

</template>

<script>
import BlogApi from '../../../api/blog'

export default {
  name: 'ViewBlog',
  data() {
    return {
      blogId: '',
      blog: {}
    }
  },
  methods: {
    async fetchData() {
      this.blog = await BlogApi.getBlogByBlogId(this.blogId);
    }
  },
  created() {
    this.blogId = this.$route.params.id
    this.fetchData()
  }
}
</script>

<style scoped>

</style>
