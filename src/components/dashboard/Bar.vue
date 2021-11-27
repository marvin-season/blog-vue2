<template>
  <div>
    <el-card>
      <el-menu :default-active="activeIndex" :router="true" mode="horizontal">
        <el-menu-item index="3" route="/dashboard/blog">博文精选</el-menu-item>
        <el-menu-item style="float: right">
          <el-dropdown>
            <span class="el-dropdown-link">
              {{ user.username }}
              <el-avatar :src="user.avatar" style="margin-left: 10px"/>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <el-button type="text" @click="userDialogVisible = true">个人中心</el-button>
              </el-dropdown-item>
              <el-dropdown-item>
                <el-button type="text" @click="logout">注销登录</el-button>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-menu-item>
        <el-menu-item style="float: right">
          <el-button type="text" icon="el-icon-edit-outline" @click="$router.push({name: 'blog-edit'})">写文章</el-button>
        </el-menu-item>
      </el-menu>
    </el-card>

    <el-dialog
        @dblclick="fullscreen=true"
        :fullscreen="fullscreen"
        :visible.sync="userDialogVisible"
        :custom-class="dialogClass"
        width="80%"
        right>
        <span slot="title">
          <el-button type="text" @click="fullscreen= !fullscreen">
            <svg-icon :icon-class="fullscreen? 'off-screen':'full-screen'"/>
          </el-button>
        </span>
      <user-info/>
    </el-dialog>
  </div>

</template>

<script>
import UserInfo from "../user/UserInfo"
import {mapGetters} from 'vuex'

export default {
  name: 'Bar',
  components: {UserInfo},
  data() {
    return {
      dialogClass: {
      },
      username: '',
      avatar: '',
      icon: 'el-icon-full-screen',
      fullscreen: false,
      userDialogVisible: false,
      activeIndex: '1'
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
      this.$router.push('/')
    }
  },
  computed: {
    ...mapGetters({
      user: 'user'
    })
  }
}
</script>

<style scoped>
.el-card {
  border-radius: 10px;
}
</style>
