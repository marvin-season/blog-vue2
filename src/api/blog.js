import request from '../utils/request'
import REQUEST_METHOD from '../utils/request-methods'

export default {
    findPublishedBlog(params) {
        return request({
            method: REQUEST_METHOD.GET,
            url: 'blog/published',
            params: params
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
            url: 'blogs',
            params
        })
    }
}
