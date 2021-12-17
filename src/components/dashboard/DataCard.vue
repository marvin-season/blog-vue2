<template>
  <div>
    <el-row v-if="me">
      <el-col :span="4">
        <image-uploader @upload="upload"/>
      </el-col>
    </el-row>
    <el-row>
      <el-button type="text" icon="el-icon-chat-dot-round" @click="chatting = !chatting">联系ta</el-button>

      <el-descriptions :column="2">
        <el-descriptions-item label="用户名">{{ me ? getUser.username : friend.username || '' }}</el-descriptions-item>
        <el-descriptions-item label="手机号">{{ me ? getUser.phone : friend.phone || '' }}</el-descriptions-item>
        <el-descriptions-item label="qq号">{{ me ? getUser.qq : friend.qq || '' }}</el-descriptions-item>
        <el-descriptions-item label="微信号">{{ me ? getUser.wx : friend.wx || '' }}</el-descriptions-item>
        <el-descriptions-item label="角色" v-if="me">
          <el-tag size="small">用户</el-tag>
        </el-descriptions-item>
      </el-descriptions>
    </el-row>

    <!--    聊天室-->
    <ChatRoom v-if="chatting" :username="friend.username" :avatar="friend.avatar"/>
  </div>
</template>

<script>
import ImageUploader from "./ImageUploader";
import UserApi from "../../api/user";
import {mapGetters, mapMutations} from "vuex";
import ChatRoom from "./ChatRoom";

export default {
  // 资料卡
  name: "DataCard",
  components: {ChatRoom, ImageUploader},
  data() {
    return {
      userData: {},
      chatting: false
    }
  },
  props: {
    me: {
      type: Number,
      default: 0
    },
    // 当前点击的好友
    friend: {
      type: Object,
      default: () => {
      }
    }
  },
  watch: {
    friend: {
      immediate: true,
      handler() {
        console.log('资料卡组件收到需要渲染的消息：', this.friend)
      }
    }
  },
  computed: {
    ...mapGetters({
      getUser: 'user'
    })
  },
  created() {
    this.chatting = false
  },
  methods: {
    ...mapMutations({
      setUser: 'SET_USER'
    }),
    upload(imageUrl) {
      console.log(imageUrl)
      let currentUser = this.getUser;
      UserApi.updateAvatar({
        id: currentUser.id,
        avatar: imageUrl
      }).then(() => {
        // 同步vuex数据
        currentUser.avatar = imageUrl
        this.setUser(currentUser)
        this.$message({
          type: "success",
          message: '头像修改成功',
          duration: 2000
        })
      }).catch(() => {
        this.$message({
          message: '服务器繁忙，请稍后再试',
          duration: 1000
        })
      })
    }
  }
}
</script>

<style scoped>

</style>