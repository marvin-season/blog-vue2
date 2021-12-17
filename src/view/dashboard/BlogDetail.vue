<template>
  <div>
    <el-row type="flex" justify="space-between">
      <el-col :span="2">
        <el-button type="text" @click="$router.go(-1)">返回</el-button>
      </el-col>
      <el-col :span="6">
        <div class="user-info">
          <el-avatar :src="avatar"></el-avatar>
          <el-button v-if="couldLove" type="text" @click="addLove">关注➕</el-button>
          <el-button v-show="user.id !== authorId" v-else type="text" @click="deleteLove">取消关注</el-button>
        </div>
      </el-col>
    </el-row>
    <mavon-board :id="blogId" :is_edit="isEdit"/>
  </div>
</template>

<script>
import MavonBoard from "../../components/dashboard/MavonBoard";
import {mapGetters} from "vuex";
import UserApi from '../../api/user'

export default {
  // 博客展示编辑组件
  name: 'BlogDetail',
  components: {MavonBoard},
  data() {
    return {
      blogId: -1,
      isEdit: false,
      username: '',
      avatar: '',
      authorId: 0,
      couldLove: true,  //当前博主是否可以关注
    }
  },
  created() {
    this.blogId = Number(this.$route.params.id)
    this.authorId = this.$route.params.authorId;
    this.fetchUserInfo()
  },
  computed: {
    ...mapGetters({
      user: 'user'
    })
  },
  methods: {
    deleteLove() {
      this.$confirm(`是否取消关注${this.username}`).then(() => {
        UserApi.deleteLove(this.authorId, this.user.id).then(() => {
          this.$router.go(0)
        }).catch(() => {
          this.$message.error('取关失败，请稍后重试')
        })
      })
    },
    addLove() {
      this.$confirm(`是否关注${this.username}`).then(() => {
            UserApi.addLove(this.authorId, this.user.id).then(() => {
              this.$router.go(0)
            }).catch(() => {
              this.$message.error('关注失败，请稍后重试')
            })
          }
      )

    },
    async fetchUserInfo() {
      //  当前博客博主信息
      let boKeUser = await UserApi.getUserInfo(this.authorId);
      this.username = boKeUser.username
      this.avatar = boKeUser.avatar
      // 关注列表
      let id = this.user.id;
      console.log(id)
      let loves = await UserApi.getLove(id);
      let findRes = loves.find(love => love.id === boKeUser.id);

      // 判断是否可以关注
      if (boKeUser.id === this.user.id || findRes) {
        // 如果是自己 或者 已经关注了
        this.couldLove = false
      }

    }
  }
}
</script>

<style scoped>
.el-page-header__content {
  width: 100%;
}

.user-info {
  display: flex;
  width: 100%;
  justify-content: right;
  padding: 0 20px;
}
</style>
