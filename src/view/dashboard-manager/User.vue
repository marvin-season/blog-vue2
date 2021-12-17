<template>
  <div class="container">

    <el-table
        :data="users"
        style="width: 100%">
      <el-table-column
          sortable
          fixed
          prop="id"
          label="序号"
          width="80">
      </el-table-column>
      <el-table-column
          fixed
          prop="username"
          label="姓名"
          width="180">
      </el-table-column>
      <el-table-column
          prop="wx"
          label="微信号"
          width="130">
      </el-table-column>
      <el-table-column
          prop="qq"
          label="QQ号"
          width="180">
      </el-table-column>
      <el-table-column
          prop="phone"
          label="电话号"
          width="180">
      </el-table-column>
      <el-table-column
          prop="mail"
          label="邮箱"
          width="180">
      </el-table-column>
      <el-table-column
          label="身份"
          width="180">
        <template v-slot="{row}">
          <el-tag
              :type="(role ? (role.roleName === 'ADMIN'? 'primary': 'success'):'info')"
              v-for="(role, index) in row.roles" :key="index">
            {{ role ? role.roleName : '用户' }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column>
        <template v-slot="{row}">
          <el-button v-if="row.locked" type="success">解封</el-button>
          <el-button v-else type="danger">封禁</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageReq.pageNo"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="pageReq.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
    </el-pagination>
  </div>
</template>

<script>
import UserApi from '../../api/user'

export default {
  name: "User",
  data() {
    return {
      list: [],
      total: 0,
      users: [
        {
          roleName: 'ADMIN'
        }
      ],
      options: {
        wx: 'wx',
        // ...
        username: '马文澍'
      },
      pageReq: {
        pageSize: 10,
        pageNo: 1
      }
    }
  },
  created() {
    this.fetchData()
  },
  filters: {},
  watch: {
    pageReq: {
      handler() {
        this.fetchData()
      },
      deep: true
    }
  },
  methods: {
    async fetchData() {
      this.options = {}
      const params = {
        ...this.pageReq,
        ...this.options
      }

      console.log(params)
      let resp = await UserApi.findAll(params);
      console.log(resp)
      this.users = resp.records
      this.total = resp.total
    },
    handleSizeChange(pageSize) {
      this.pageReq.pageSize = pageSize
    },
    handleCurrentChange(pageNo) {
      this.pageReq.pageNo = pageNo
    },

  }
}
</script>

<style scoped>
.container {
  padding: 20px 20px;
}
</style>