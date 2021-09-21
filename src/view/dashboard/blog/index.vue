<template>
  <div>
    <el-row :gutter="20" type="flex" justify="space-between">
      <el-col :span="18">
        <blog-items/>
      </el-col>
      <el-col :span="6">
        <blog-relations/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BlogItems from '../../../components/dashboard/Blog/blogItems'
import BlogRelations from "../../../components/dashboard/Blog/blogRelations";

export default {
  name: 'index',
  components: {BlogRelations, BlogItems},
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped>
</style>
