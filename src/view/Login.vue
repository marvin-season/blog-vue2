<template>
  <div class="login-container">
    <div class="title">登录中心</div>
    <div class="header">

      <el-switch
          title="lll"
          v-model="isAdmin"
          active-color="blue"
          inactive-color="gray">
      </el-switch>
      <span>管理员</span>
    </div>

    <el-form ref="formData" :model="loginUser">
      <el-form-item>
        <el-input clearable v-model="loginUser.username" placeholder="用户名"/>
      </el-form-item>
      <el-form-item>
        <el-input clearable v-model="loginUser.password" placeholder="密码"/>
      </el-form-item>
      <el-row>
        <el-col :span="18">
          <el-form-item prop="captcha">
            <el-input
                v-model="loginCaptcha.code"
                clearable
                placeholder="验证码"
                auto-complete="on"
                type="text"
                prefix-icon="el-icon-picture-outline-round"
            />
          </el-form-item>
        </el-col>
        <el-col :span="4" :offset="2">
          <div class="captcha-wrapper" title="刷新验证码" @click="getCaptcha">
            <el-image v-if="captcha.image" class="captcha" :src="captcha.image"/>
          </div>
        </el-col>
      </el-row>
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
import CaptchaApi from '../api/captcha'

export default {
  name: 'index',
  data() {
    return {
      isAdmin: false,
      loginUser: {
        username: '梅宇新',
        password: '18871325942',
      },
      captcha: {},
      loginCaptcha: {
        id: '',
        code: ''
      }
    }
  },
  created() {
    this.getCaptcha()
  },
  methods: {
    async login() {
      // 验证码验证
      console.log("验证码验证")
      try {
        await CaptchaApi.verify({
          ...this.loginCaptcha
        })
      } catch (e) {
        console.error("验证码验证失败")
        return
      }

      console.log("用户信息验证")
      await this.$store.dispatch('login', {
        data: this.loginUser,
        isAdmin: this.isAdmin,
      })

      // await this.$router.push({name: 'blog-recommend'})

    },
    getCaptcha() {
      CaptchaApi.getCaptcha().then(res => {
        this.captcha = res
        this.loginCaptcha.id = this.captcha.id
      })
    }
  }
}
</script>

<style scoped lang="scss">
.login-container {
  width: 100%;
  height: 100%;
}

.header {
  margin-bottom: 20px;

  span {
    display: inline-block;
    margin-left: 20px;
    font-size: 17px;
    color: gray;
  }

  display: flex;
  justify-content: right;
}

.title {
  font-size: 28px;
  color: #1482f0;
  font-weight: bold;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>
