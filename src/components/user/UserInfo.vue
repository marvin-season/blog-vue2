<template>
  <div>
    <el-button type="text" @click="show = !show">{{ show ? '编辑个人信息' : '个人信息' }}</el-button>
    <transition name="el-zoom-in-center">
      <div v-if="show" class="transition-box">
        <image-uploader @upload="upload"/>
        <el-descriptions title="用户信息" :column="3">
          <el-descriptions-item label="用户名">{{ getUser.username }}</el-descriptions-item>
          <el-descriptions-item label="手机号">{{ getUser.phone }}</el-descriptions-item>
          <el-descriptions-item label="qq号">{{ getUser.qq }}</el-descriptions-item>
          <el-descriptions-item label="微信号">{{ getUser.wx }}</el-descriptions-item>
          <el-descriptions-item label="角色">
            <el-tag size="small">用户</el-tag>
          </el-descriptions-item>
        </el-descriptions>
      </div>
    </transition>


    <transition name="el-zoom-in-center">
      <div v-if="!show" class="transition-box">
        <el-form ref="form" :model="form" label-width="100px">
          <el-form-item label="姓名">
            <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="手机号">
            <el-input v-model="form.phone"></el-input>
          </el-form-item>
          <el-form-item label="qq">
            <el-input v-model="form.qq"></el-input>
          </el-form-item>
          <el-form-item label="微信号">
            <el-input v-model="form.wx"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button style="width: 100%" type="success" @click="update">确定</el-button>
          </el-form-item>
        </el-form>
      </div>
    </transition>

  </div>

</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
import UserApi from '../../api/user'
import ImageUploader from '../../components/dashboard/ImageUploader/index'

import {SET_USER} from "../../store/types";

export default {
  name: 'UserInfo',
  components: {ImageUploader},
  data() {
    return {
      imageUrl: '',
      show: true,
      user: {},
      form: {}
    }
  },
  created() {
    this.init()
  },
  methods: {
    ...mapMutations({
      setUser: SET_USER
    }),
    async update() {
      try {
        await UserApi.updateUserInfo(this.form)
        const response = await UserApi.getUserInfo(this.getUser.id);
        this.setUser(response)
        this.$message.success('个人信息修改成功')
      } catch (e) {
        this.$message.error('信息修改失败')
      }
    },
    init() {
      this.form = JSON.parse(JSON.stringify(this.getUser))
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
  },
  computed: {
    ...mapGetters({
      getUser: 'user'
    })
  }
}
</script>

<style scoped>
.transition-box {
  width: 100%;
  height: 70%;
  border-radius: 4px;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
}
</style>
