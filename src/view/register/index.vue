<template>
  <div>
    <el-form ref="formData" :model="registerUser" label-width="400px">
      <el-form-item label="用户名">
        <el-input v-model="registerUser.username"/>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="registerUser.password"/>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="registerUser.phone"/>
      </el-form-item>
      <el-form-item label="qq">
        <el-input v-model="registerUser.qq"/>
      </el-form-item>
      <el-form-item label="wx">
        <el-input v-model="registerUser.wx"/>
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
        <el-col :span="6">
          <div class="captcha-wrapper" title="刷新验证码" @click="getCaptcha">
            <el-image v-if="captcha.image" class="captcha" :src="captcha.image"/>
          </div>
        </el-col>
      </el-row>
      <el-form-item>
        <el-button @click="register">注册</el-button>
        <el-button type="primary" @click="$router.push({name: 'login'})">去登录</el-button>
      </el-form-item>
    </el-form>

  </div>

</template>

<script>
import CaptchaApi from "../../api/captcha";
import UserApi from "../../api/user";

export default {
  name: 'index',
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
        await this.$router.push({name: 'login'})
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

</style>
