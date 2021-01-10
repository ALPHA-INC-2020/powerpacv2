import Api from './Api'

export default {
    getBanner() {
        return Api().get('/get/banner/active')
    },
    getAllActivePromotions() {
        return Api().get('/get/promotion/active')
    }
}