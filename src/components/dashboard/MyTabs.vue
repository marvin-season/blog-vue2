<template>
  <div>
    <el-tabs :tab-position="options.tabPosition"
             :before-leave="beforeLeave"
             active-name="我的资料"
             style="height: 200px;">
      <el-tab-pane lazy label="我的资料" name="我的资料">
        <!--        me 用来在DataCard页面区分我的好友还是我-->
        <DataCard :me="1"/>
      </el-tab-pane>
      <el-tab-pane lazy label="我的关注" name="我的关注">
        <!--        没有携带me,  DataCard页面是我的关注/粉丝-->
        <!--        who:表示告诉子组件拉取love关注列表-->
        <UserFriend who="love"/>
      </el-tab-pane>
      <el-tab-pane lazy label="我的粉丝" name="我的粉丝">
        <!--        who:表示告诉子组件拉取love粉丝列表-->
        <UserFriend who="fans"/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import DataCard from "./DataCard";
import UserFriend from "./UserFriend";

export default {
  name: "MyTabs",
  components: {UserFriend, DataCard},
  props: {
    options: {
      type: Object,
      default: () => {
        return {
          tabPosition: 'right',
          tabs: []
        }
      }
    }
  },
  methods: {
    beforeLeave() {
    }
  }
}
</script>

<style scoped>
.el-tabs {
  height: 100% !important;
}

.el-tab-pane {
  padding-left: 20px;
}
</style>