<template>
  <div class="container">
    <bar class="bar"/>
    <div class="content">
      <router-view/>
    </div>
  </div>

</template>

<script>
import Bar from '../components/dashboard/Bar'
import UserApi from '../api/user'
import {mapGetters, mapMutations} from 'vuex'

import {SET_USER} from '../store/types'


export default {
  name: 'index',
  components: {Bar},
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['user', 'token'])
  },
  methods: {
    getUserInfo() {
      UserApi.getPrincipal().then(res => {
        UserApi.getUserInfo(res.id).then(result => {
          this.setUser(result)
        })
      })
    },
    ...mapMutations({
      setUser: SET_USER
    })
  },
  created() {
    // this.getUserInfo()
  }
}
</script>

<style scoped>
.content {
  margin: 20px 20px 0;
}

.container {
  margin: 20px 20px 0;
}
</style>
