<template>
  <div>
    <el-card v-for="(blog, index) in blogs" :key="index" class="item">
      <div @click="onclick(blog.id, blog.authorId)">
        <el-row class="item-header">
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
        <el-row @click="onclick" class="item-body">
          <div class="summary">
            {{ blog.summary }}
          </div>
        </el-row>
      </div>

      <el-divider/>
      <!--      底角-->
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
          <i class="el-icon-user-solid">{{ blog.username }}</i>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import BlogApi from '../../../api/blog'
import {mapGetters} from 'vuex'

export default {
  name: 'BlogList',
  data() {
    return {
      page: {
        pageNo: 1,
        pageSize: 10
      },
      blogs: []
    }
  },
  props: {
    options: {
      type: Object,
      default: () => {
        return {
          hasAuthorId: false,
          isCollect: false,
          isRecommend: false,
          isDraft: false
        };
      }
    }
  },
  filters: {},
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    fetchData() {
      this.options.hasAuthorId && this.$set(this.options, 'authorId', this.user.id)

      const params = {
        pageNo: this.page.pageNo,
        pageSize: this.page.pageSize,
        authorId: this.options.authorId,
        collect: this.options.isCollect,
        recommend: this.options.isRecommend,
        draft: this.options.isDraft
      }

      BlogApi.findBlogByOptions(params).then(res => {
        this.blogs = res.records
      })

    },
    onclick(id, authorId) {
      this.$router.push({
        name: 'blog-detail',
        params: {authorId, id, edit: this.options.isDraft},
      })
    }
  },
  created() {
    this.fetchData();
  }
}
</script>

<style scoped>
.item {
  background-color: #fcf5e1;
  margin-bottom: 20px;
  height: 200px;
  border-radius: 15px;
}

.item .item-header {
  height: 10px;
}

.item .item-body {
  height: 10px;
}

.title {
  color: #0e0606;
  font-weight: bold;
  font-size: 16px;
}

.summary {
  color: #525050;
  font-size: 13px;
  width: 100%;
  height: 30px;
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
