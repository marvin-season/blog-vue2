<template>
  <div class="mavonEditor">
    <mavon-editor
        :toolbarsFlag="true"
        :subfield="false"
        defaultOpen="preview"
        :toolbars="toolbars"
        v-model="blog.content"
        :scroll-style="true"/>
  </div>
</template>

<script>

import mavonEditor from "mavon-editor";
import Vue from 'vue'

Vue.use(mavonEditor)
import "mavon-editor/dist/css/index.css";
import BlogApi from "../../api/blog";

export default {
  // markdown渲染组件
  name: "MavonBoard",
  data() {
    return {
      blog: {
        content: '#### write here'
      },
      toolbars: {
        bold: this.is_edit, // 粗体
        italic: this.is_edit, // 斜体
        header: this.is_edit, // 标题
        underline: this.is_edit, // 下划线
        strikethrough: this.is_edit, // 中划线
        mark: this.is_edit, // 标记
        superscript: this.is_edit, // 上角标
        subscript: this.is_edit, // 下角标
        quote: this.is_edit, // 引用
        ol: this.is_edit, // 有序列表
        ul: this.is_edit, // 无序列表
        link: this.is_edit, // 链接
        imagelink: this.is_edit, // 图片链接
        code: this.is_edit, // code
        table: this.is_edit, // 表格
        fullscreen: true, // 全屏编辑
        readmodel: this.is_edit, // 沉浸式阅读
        htmlcode: this.is_edit, // 展示html源码
        help: this.is_edit, // 帮助
        /* 1.3.5 */
        undo: this.is_edit, // 上一步
        redo: this.is_edit, // 下一步
        trash: this.is_edit, // 清空
        save: this.is_edit, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: this.is_edit, // 导航目录
        /* 2.1.8 */
        alignleft: this.is_edit, // 左对齐
        aligncenter: this.is_edit, // 居中
        alignright: this.is_edit, // 右对齐
        /* 2.2.1 */
        subfield: this.is_edit, // 单双栏模式
        preview: this.is_edit, // 预览
      }
    }
  },
  props: {
    id: {
      type: Number,
      default: 0
    },
    is_edit: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    id: {
      immediate: true,
      handler() {
        this.fetchData()
      }
    }
  },
  methods: {
    async fetchData() {
      if (Number(this.id) === 0) {
        return
      }
      this.blog = await BlogApi.getBlogByBlogId(this.id);
    }
  }
}
</script>

<style scoped>
.mavonEditor {
  width: 100%;
  height: 100%;
}
</style>