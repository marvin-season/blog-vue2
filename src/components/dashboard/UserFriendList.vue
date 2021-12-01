<template>
  <div class="friend-container">
    <label class="title">好友列表</label>
    <div class="item-container">
      <div v-for="item in friends" :key="item.id" @click="handleClick(item)">
        <div class="item" v-bind:class="{selected: isActive(item.id)}">
          <el-avatar :src="item.avatar"></el-avatar>
          <span class="item-text">{{ item.username }}</span>
        </div>
      </div>
    </div>
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
          // 额外的工作
          this.peerToFriends = this.friends.map(v => {
            return {id: v.id, flag: false}
          })

          // 默认点击了第一个好友
          this.lastId = this.peerToFriends[0].id
          this.handleClick(data[0])
          return
        }
        this.$message.warning('no')

      })
    },
    handleClick(friend) {
      // 向父组件抛出点击当前数据事件
      this.$emit('select', friend)

      // 设置点击效果
      let lastClick = this.peerToFriends.find(v => v.id === this.lastId);

      // lastClick.flag = false 同下面这条语句
      this.$set(lastClick, 'flag', false);
      // 当前点击的好友
      this.peerToFriends.find(v => v.id === friend.id).flag = true
      this.lastId = friend.id
    },
    isActive(id) {
      // return false
      return this.peerToFriends.find(value => value.id === id).flag
    }
  }
}
</script>

<style scoped>
.friend-container {
  border-radius: 6px;
  border: 1px solid forestgreen;
  background: #f8f6f4;
  padding: 10px 10px;
}

.title {
  display: inline-block;
  font-size: 20px;
  color: #222222;
  font-family: "Andale Mono", sans-serif;
  margin: 10px 0 10px;
}

.item-container {
  overflow: scroll;
  padding: 20px 10px;
  height: 200px;

}

.item {
  display: flex;
  background-color: #d1d1d1;
  border-radius: 4px;
  padding: 3px 5px;
  margin-top: 20px;
}

.item:hover {
  cursor: pointer;
}

.selected {
  border: 1px solid gold;
}

.item-text{
  margin-top: 10px;
  margin-left: 20px;
}
</style>