<template>
  <div>
    <div v-for="item in friends" :key="item.id" @click="handleClick(item.id)">
      {{ item.nickname }}
    </div>
  </div>
</template>

<script>
export default {
  // 好友列表
  name: "UserFriendList",
  data() {
    return {
      friends: []
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    // 获取好友列表
    fetchData() {
      this.friends = [
        {
          id: 1,
          nickname: '人生如戏',
        },
        {
          id: 2,
          nickname: '晨曦陨梦',
        }]
    },
    handleClick(id) {
      this.$emit('select', id)
    }
  }
}
</script>

<style scoped>

</style>