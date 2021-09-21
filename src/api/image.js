import request from '../utils/request'
import REQUEST_METHOD from '../utils/request-methods'

export default {
    uploadImage(formData) {
        return request({
            method: REQUEST_METHOD.POST,
            url: '/image/upload',
            headers: {'Content-Type': 'multipart/form-data'},
            data: formData
        })
    }
}
