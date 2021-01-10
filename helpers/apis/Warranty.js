import Api from './Api'

export default {
    registerWarranty(payload) {
        return Api().post('/create/ewarranty', payload)
    }
}