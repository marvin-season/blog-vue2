<template>
  <div>
    <el-card v-for="(blog, index) in blogs" :key="index" class="item">
      <div @click="onclick(blog.id)">
        <el-row>
          <el-col :span="12">
          <span class="title">
            {{ blog.title }}
          </span>
          </el-col>
          <el-col :span="12">
            <el-tag v-for="tag in blog.tags" type="info" :key="tag.id" effect="plain" class="tag">
              {{ tag.tagName }}
            </el-tag>
          </el-col>
        </el-row>
        <el-divider/>
        <el-row @click="onclick">
          <div class="content">
            {{ blog.content }}
          </div>
        </el-row>
      </div>

      <el-divider/>
      <el-row :gutter="20">
        <el-col :span="8">
          <i class="el-icon-time">{{ blog.createTime }}</i>
        </el-col>
        <el-col :span="4">
          <i class="el-icon-view">{{ blog.viewCount }}</i>
        </el-col>
        <el-col :span="4">
          <i class="el-icon-star-on">{{ blog.collectCount }}</i>
        </el-col>
        <el-col :span="4">
          <i class="el-icon-user-solid">{{ blog.authorId }}</i>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import BlogApi from '../../../api/blog'
import {mapState, mapGetters} from 'vuex'

export default {
  name: 'blogItems',
  data() {
    return {
      page: {
        pageNo: 1,
        pageSize: 10
      },
      blogs: [
        {
          id: 1,
          title: 'springboot',
          content: 'hello springboot',
          tags: ['spring']
        }]
    }
  },
  computed: {
    ...mapState({
      user: 'user'
    }),
    ...mapGetters({
      userG: 'user'
    })
  },
  methods: {
    fetchData() {
      BlogApi.findPublishedBlog({
        pageNo: this.page.pageNo,
        pageSize: this.page.pageSize,
        authorId: 1
      }).then(res => {
        this.blogs = res.records
      })
    },
    onclick(id) {
      console.log(id)
      this.$router.push({name: 'view-blog', params: {id: id}})
    }
  },
  created() {
    this.fetchData();
    console.log(this.user)
    console.log(this.userG)
  }
}
</script>

<style scoped>
.item {
  margin-bottom: 20px;
}

.title {
  color: #0e0606;
  font-weight: bold;
  font-size: 16px;
}

.content {
  color: #525050;
  font-size: 13px;
  width: 100%;
  height: 36px;
  overflow: hidden;
}

.el-row {
  margin: 10px 0 10px
}

.tag {
  float: right;
  margin-left: 20px;
}
</style>
