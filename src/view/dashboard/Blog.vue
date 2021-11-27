<template>
  <div>
    <el-row :gutter="20" type="flex" justify="space-between">
      <el-col :span="18">
        <blog-list/>
      </el-col>
      <el-col :span="6">
        <div>推荐列表</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BlogList from '../../components/dashboard/blog/BlogList'

export default {
  name: 'Blog',
  components: {BlogList},
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped>
</style>
