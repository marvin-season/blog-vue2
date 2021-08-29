import request from '../utils/request'
import REQUEST_METHOD from '../utils/request-methods'

export default {
    findPublishedBlog(params) {
        return request({
            method: REQUEST_METHOD.GET,
            url: 'blog/published',
            params
        })
    }
}
