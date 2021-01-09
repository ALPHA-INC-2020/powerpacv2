import Api, { wait } from './Api'

export default {
    async getAllFaqs() {
        return await Api().get('/get/faqs')
    },
}