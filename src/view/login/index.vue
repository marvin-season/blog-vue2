<template>
  <div>
    <el-form ref="formData" :model="loginUser" label-width="400px">
      <el-form-item label="用户名">
        <el-input v-model="loginUser.username"/>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="loginUser.password"/>
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
        <el-col :span="6">
          <div class="captcha-wrapper" title="刷新验证码" @click="getCaptcha">
            <el-image v-if="captcha.image" class="captcha" :src="captcha.image"/>
          </div>
        </el-col>
      </el-row>
      <el-form-item>
        <el-button @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
import UserApi from '../../api/user'

export default {
  name: 'index',
  data() {
    return {
      loginUser: {
        username: '马文澍',
        password: '15623192717',
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
        await UserApi.verify({
          ...this.loginCaptcha
        })
      } catch (e) {
        console.error("验证码验证失败")
        return
      }

      console.log("用户信息验证")
      await this.$store.dispatch('login', {
        ...this.loginUser,
      })

      await this.$router.push({name: 'announcement'})

    },
    getCaptcha() {
      UserApi.getCaptcha().then(res => {
        this.captcha = res
        this.loginCaptcha.id = this.captcha.id
      })
    }
  }
}
</script>

<style scoped>

</style>
