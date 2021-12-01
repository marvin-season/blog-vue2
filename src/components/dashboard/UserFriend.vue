<template>
  <div class="container">
    <el-row :gutter="40">
      <el-col :span="8">
        <UserFriendList :who="who" class="list" @select="handleSelect"/>
      </el-col>
      <el-col :span="16">
        <DataCard :friend="currentFriend"/>
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
      currentFriend: {},
    }
  },
  props: {
    // 定义一个flag， 区分查找 粉丝或者关注
    who: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleSelect(friend) {
      this.currentFriend = friend
    }
  }
}
</script>

<style scoped>
</style>