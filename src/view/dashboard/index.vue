<template>
  <div class="container">
    <bar class="bar"/>
    <div class="content">
      <router-view/>
    </div>
  </div>

</template>

<script>
import Bar from '../../components/bar/index'
import BlogApi from '../../api/blog'

export default {
  name: 'index',
  components: {Bar},
  data() {
    return {}
  },
  computed: {
    key() {
      return this.$route.path
    }
  },
  methods: {
    onClick() {
      BlogApi.findPublishedBlog({name: '张三'}).then(res => {
        console.log(res)
      })
    }
  },
  created() {
  }
}
</script>

<style scoped>
.content {
  margin: 20px 20px 0;
}

.container {
  margin: 20px 20px 0;
}
</style>
