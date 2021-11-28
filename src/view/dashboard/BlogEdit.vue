<template>
  <div>
    <el-row>
      <el-col :span="4">
        <el-button type="primary" plain @click="$router.go(-1)">存为草稿并退出</el-button>
      </el-col>
      <el-col :span="4">
        <el-button type="success" plain>丢弃</el-button>
      </el-col>
      <el-col :span="4">
        <el-button type="info" plain>我的草稿</el-button>
      </el-col>
    </el-row>
    <el-row>
      <h2>标题</h2>
      <el-input type="text"></el-input>
    </el-row>
    <el-row>
      <h3>博文介绍</h3>
      <el-input type="textarea"></el-input>
    </el-row>
    <mavon-board class="edit-board" :id="id"/>
    <el-row>
      <el-button type="success">发布博客</el-button>
    </el-row>
  </div>
</template>

<script>
import MavonBoard from "../../components/dashboard/MavonBoard";

export default {
  name: "BlogEdit",
  components: {MavonBoard},
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
.edit-board {
  border: 1px solid black;
  margin-top: 100px;
}

.el-button{
  width: 100%;
}
</style>