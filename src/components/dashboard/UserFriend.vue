<template>
  <div class="container">
    <el-row>
      <el-col :span="8">
        <UserFriendList class="list" @select="handleSelect"/>
      </el-col>
      <el-col :span="16">
        <DataCard :user-id="currentSelectedId"/>
      </el-col>

    </el-row>
  </div>
</template>

<script>
import UserFriendList from "./UserFriendList";
import DataCard from "./DataCard";

export default {
  // 用户好友
  name: "UserFriend",
  components: {DataCard, UserFriendList},
  data() {
    return {
      currentSelectedId: 18
    }
  },
  methods: {
    handleSelect(id) {
      this.currentSelectedId = id
    }
  }
}
</script>

<style scoped>
</style>