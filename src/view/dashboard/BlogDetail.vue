<template>
  <div>
    <el-row :gutter="10" type="flex" justify="space-between">
      <el-col :span="6">
        <div>
          <el-button plain type="text" style="width: 100%" @click="$router.go(-1)">返回</el-button>
        </div>
      </el-col>
      <el-col :span="18">
        <mavon-board :id="blogId"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MavonBoard from "@/components/dashboard/MavonBoard";

export default {
  // 博客展示编辑组件
  name: 'BlogDetail',
  components: {MavonBoard},
  data() {
    return {
      blogId: -1
    }
  },
  created() {
    this.blogId = this.$route.params.id
  }
}
</script>

<style scoped>

</style>
