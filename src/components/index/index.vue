<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="18">
        <blog-items/>
      </el-col>
      <el-col :span="6">
        <blog-right-relations/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BlogItems from '../blog/blogItemsLeft'
import BlogRightRelations from "../blog/blogRelationsRight";

export default {
  name: 'index',
  components: {BlogRightRelations, BlogItems},
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped>
</style>
