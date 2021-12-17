<template>
  <div class="container">
    <el-button class="btn" @click="isLogin = !isLogin">{{ isLogin ? '去注册':'去登录' }}</el-button>

    <transition name="fade" mode="out-in" class="login">
      <Login class="login" v-show="isLogin"/>
    </transition>

    <transition name="fade" mode="out-in" class="register">
      <Register class="register" v-show="!isLogin"/>
    </transition>
  </div>
</template>

<script>
import Login from "./Login";
import Register from "./Register";

export default {
  name: "index",
  data: function () {
    return {
      isLogin: true
    }
  },
  components: {Register, Login}
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: all 1s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}

.fade-enter {
  transform: translateX(100%);
}

.fade-leave-active {
  transform: translateX(-100%);
}


.container {
  position: relative;
  width: 30%;
  height: 70%;
  left: 50%;
  top: 50%;
  margin-top: -410px;
  margin-left: -220px;
}

.container .login,
.container .register {
  position: absolute;
}

.btn{
  margin-bottom: 60px;
  position: fixed;
  right: 0%;
}
</style>