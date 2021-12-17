<template>
  <div class="header-container">
    <div class="title">博客管理后台</div>
    <div class="white-space"></div>
    <div class="drop-down">
      <el-dropdown>
        <div class="el-dropdown-link userinfo">
          <span class="username">{{ user.username }}</span>
          <el-avatar :src="user.avatar" style="margin-left: 10px"/>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <el-button type="text" @click="$router.push('/dashboard/')">博客中心</el-button>

          </el-dropdown-item>
          <el-dropdown-item>
            <el-button type="text" @click="logout">注销登录</el-button>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>

import {mapGetters} from "vuex";

export default {
  name: "Header",
  components: {},
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    logout() {
      this.$store.dispatch('logout').then(res => {
        console.log(res)
        this.$router.push('/')
      })
    }
  }
}
</script>

<style scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  padding: 20px 20px 0;
}

.white-space {
  flex: 1;
}

.title {
  font-size: 26px;
  color: #4d80ee;
  font-weight: bolder;
}

.userinfo{
  position: relative;
}

.username {
  position: relative;
  left: -10px;
  top: -15px;
}
</style>