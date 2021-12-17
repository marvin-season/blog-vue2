<template>
  <div class="register-container">
    <div class="title">注册中心</div>
    <el-form ref="formData" :model="registerUser">
      <el-form-item>
        <el-input clearable v-model="registerUser.username" placeholder="用户名"/>
      </el-form-item>
      <el-form-item>
        <el-input clearable v-model="registerUser.password" placeholder="密码"/>
      </el-form-item>
      <el-form-item>
        <el-input show-word-limit clearable v-model="registerUser.phone" placeholder="电话号" maxLength="11"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input clearable v-model="registerUser.qq" type="text" placeholder="QQ号" maxLength="10" show-word-limit/>
      </el-form-item>
      <el-form-item>
        <el-input clearable v-model="registerUser.wx" placeholder="微信号"/>
      </el-form-item>
      <el-row>
        <el-col :span="18">
          <el-form-item prop="captcha">
            <el-input
                v-model="registerCaptcha.code"
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
        <el-button type="success" @click="register">注册</el-button>
      </el-form-item>
    </el-form>

  </div>

</template>

<script>
import CaptchaApi from "../api/captcha";
import UserApi from "../api/user";

export default {
  name: 'Register',
  data() {
    return {
      registerUser: {},
      registerCaptcha: {},
      captcha: {}
    }
  },
  created() {
    this.getCaptcha()
  },
  methods: {
    async register() {
      // 验证码验证
      console.log("验证码验证")
      try {
        await CaptchaApi.verify({
          ...this.registerCaptcha
        })
      } catch (e) {
        console.error("验证码验证失败")
        return
      }
      console.log(this.registerUser)
      try {
        await UserApi.registry(this.registerUser)
        await this.$router.push('/')
      } catch (e) {
        this.$message.error('注册用户失败')
      }
    },
    getCaptcha() {
      CaptchaApi.getCaptcha().then(res => {
        this.captcha = res
        this.registerCaptcha.id = this.captcha.id
      })
    }
  }
}
</script>

<style scoped>
.register-container {
  width: 100%;
  height: 100%;
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
