<template>
  <div>
    <el-row>
      <el-col :span="4">
        <image-uploader @upload="upload"/>
      </el-col>
      <el-button>打个招呼</el-button>
    </el-row>
    <el-row>
      <el-descriptions :column="2">
        <el-descriptions-item label="用户名">{{ me ? getUser.username : userData.username || '' }}</el-descriptions-item>
        <el-descriptions-item label="手机号">{{ me ? getUser.phone : userData.phone || '' }}</el-descriptions-item>
        <el-descriptions-item label="qq号">{{ me ? getUser.qq : userData.qq || '' }}</el-descriptions-item>
        <el-descriptions-item label="微信号">{{ me ? getUser.wx : userData.wx || '' }}</el-descriptions-item>
        <el-descriptions-item label="角色">
          <el-tag size="small">用户</el-tag>
        </el-descriptions-item>
      </el-descriptions>
    </el-row>
  </div>
</template>

<script>
import ImageUploader from "./ImageUploader";
import UserApi from "../../api/user";
import {mapGetters} from "vuex";

export default {
  // 资料卡
  name: "DataCard",
  components: {ImageUploader},
  data() {
    return {
      userData: {},
    }
  },
  props: {
    me: {
      type: Number,
      default: 0
    },
    userId: {
      type: Number,
      default: 0
    }
  },
  watch: {
    userId: {
      immediate: true,
      handler() {
        this.fetchUserData()
      }
    }
  },
  computed: {
    ...mapGetters({
      getUser: 'user'
    })
  },
  methods: {
    // TODO API 根据用户id获取用户信息
    fetchUserData() {
      console.log(`正在拉取好友${this.userId}信息`)
      const demoData = [
        {
          id: 1,
          username: '陈江龙',
          phone: '112321421',
          qq: '1241241214',
          wx: 'wx1642367424'
        },
        {
          id: 2,
          username: '马文澍',
          phone: '89216492',
          qq: '90127421',
          wx: 'wx1642367424'
        }
      ]
      this.userData = demoData.find(item => item.id === this.userId)
    },
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