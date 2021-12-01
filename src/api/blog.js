import request from '../utils/request'
import REQUEST_METHOD from '../utils/request-methods'

export default {
    deleteBlogById(id){
      return request({
          method: REQUEST_METHOD.DELETE,
          url: `/blog/${id}`
      })
    },
    saveOrUpdate(data){
        return request({
            method: REQUEST_METHOD.POST,
            url: '/blog/saveOrUpdate',
            data
        })
    },
    getBlogByBlogId(id) {
        return request({
            method: REQUEST_METHOD.GET,
            url: `blog/${id}`
        })
    },
    // 根据条件筛选博客
    findBlogByOptions(params) {
        return request({
            method: REQUEST_METHOD.GET,
            url: '/blog/findBlogByOptions',
            params
        })
    }
}
