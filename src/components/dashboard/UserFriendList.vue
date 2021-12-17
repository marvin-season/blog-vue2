<template>
  <div>

    <el-card>
      <div slot="header">
        <span>好友列表</span>
      </div>
      <div v-for="item in friends" :key="item.id" @click="handleClick(item)" class="item">
        <el-avatar :src="item.avatar"></el-avatar>
        <span class="username">{{ item.username }}</span>
        <i class="el-icon-chat-dot-round msg" v-show="item.id === friend.id"></i>
      </div>
    </el-card>
  </div>
</template>

<script>
import UserApi from '../../api/user'
import {mapGetters} from "vuex";

export default {
  // 好友列表
  name: "UserFriendList",
  data() {
    return {
      friend: {}, // 当前选中
      friends: [],
      peerToFriends: [],
      lastId: -1,
    }
  },
  props: {
    // 定义一个flag， 区分查找 粉丝或者关注
    who: {
      type: String,
      default: ''
    }
  },
  created() {
    this.fetchData()
  },
  computed: {
    ...mapGetters({
      user: 'user'
    })
  },
  methods: {
    // 获取好友列表
    fetchData() {
      let promise;
      if (this.who === 'fans') {
        promise = UserApi.getFans(this.user.id);
      } else if (this.who === 'love') {
        promise = UserApi.getLove(this.user.id);
      }

      promise.then(data => {
        if (data) {
          this.friends = data

          // 默认点击了第一个好友
          this.handleClick(data[0])
          return
        }
        this.$message.warning('还没有粉丝或关注哦')

      })
    },
    handleClick(friend) {
      this.friend = friend
      // 向父组件抛出点击当前数据事件
      this.$emit('select', friend)
    }
  }
}
</script>

<style scoped>
.item {
  margin: 5px 10px;
  height: 50px;
  line-height: 50px;
}

.item:hover{
  cursor: pointer;
}

.username, .msg{
  display: inline-block;
  height: 50px;
  line-height: 20px;
  margin-left: 20px;
  margin-top: -10px;
}
</style>