<template>
  <div>
    <el-upload
        class="uploader"
        accept="image/gif,image/png,image/jpeg"
        action="none"
        :show-file-list="false"
        :multiple="false"
        :before-upload="beforeUpload"
        :http-request="upload"
    >
      <img v-if="getUser.avatar" :src="getUser.avatar" class="avatar" alt="">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
  </div>
</template>

<script>
import ImageUploadApi from '../../api/image'
import {mapGetters} from 'vuex'

export default {
  name: 'index',
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      getUser: 'user'
    })
  },
  methods: {
    beforeUpload(file) {
      console.debug(file)
      const sizeValid = file.size <= 1024 * 1024
      if (!sizeValid) {
        this.$message.warning('图片大小超过限制，最大1MB')
      }
      return sizeValid
    },
    async upload(params) {
      console.log('原图属性：', params.file)
      const form = new FormData()
      // 对应后台的参数名 : multipartFile
      form.append('multipartFile', params.file)

      const image = await ImageUploadApi.uploadImage(form);
      console.log('图片上传成功: ', image)
      this.$emit('upload', image.imageUrl)
    }
  }
}
</script>

<style lang="scss" scoped>
.uploader {
  display: block;
  overflow: hidden;
  border-radius: 8px;

  .uploader-icon {
    cursor: pointer;
  }

  &:hover {
    border-color: #409eff;
  }

  .el-upload .el-upload--text {
    display: block;
  }

  .avatar{
    height: 100%;
    width: 100%;
  }
}

</style>
