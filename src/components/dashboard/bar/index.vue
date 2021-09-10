<template>
  <div>
    <el-card>
      <el-menu :default-active="activeIndex" :router="true" mode="horizontal">
        <el-menu-item index="1" route="/dashboard/announcement">公告公知</el-menu-item>
        <el-menu-item index="2" route="/dashboard/message">大众留言</el-menu-item>
        <el-menu-item index="3" route="/dashboard/index">博文精选</el-menu-item>
        <el-menu-item style="float: right">
          <el-dropdown>
            <span class="el-dropdown-link">
              {{ $store.getters.user.username }}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <el-button type="text" @click="userDialogVisible = true">个人中心</el-button>
              </el-dropdown-item>
              <el-dropdown-item>
                <el-button type="text" @click="$router.push({name: 'login'})">登录</el-button>
              </el-dropdown-item>
              <el-dropdown-item>
                <el-button type="text" @click="logout">注销登录</el-button>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-menu-item>
      </el-menu>
    </el-card>

    <el-dialog
        @dblclick="fullscreen=true"
        :fullscreen="fullscreen"
        :visible.sync="userDialogVisible"
        width="70%"
        right>
        <span slot="title">
          <el-button type="text" @click="fullscreen= !fullscreen">
            <svg-icon :icon-class="fullscreen? 'off-screen':'full-screen'"/>
          </el-button>
        </span>
      <user-info/>
      <span slot="footer" class="dialog-footer">
          <el-button type="text" @click="userDialogVisible = false">确 定</el-button>
        </span>
    </el-dialog>
  </div>

</template>

<script>
import UserInfo from "../../user/UserInfo"

export default {
  name: 'index',
  components: {UserInfo},
  data() {
    return {
      user: {},
      icon: 'el-icon-full-screen',
      fullscreen: false,
      userDialogVisible: false,
      activeIndex: '1'
    }
  },
  created() {

  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.el-card {
  border-radius: 10px;
}
</style>
