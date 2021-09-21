<template>
  <div class="container">
    <bar class="bar"/>
    <div class="content">
      <router-view/>
    </div>
  </div>

</template>

<script>
import Bar from '../../components/dashboard/Bar/index'
import UserApi from '../../api/user'
import {mapMutations} from 'vuex'

import {SET_USER} from '../../store/types'


export default {
  name: 'index',
  components: {Bar},
  data() {
    return {}
  },
  computed: {
    key() {
      return this.$route.path
    }
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
    this.getUserInfo()
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
