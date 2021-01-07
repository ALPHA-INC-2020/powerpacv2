import Api, { wait } from './Api'

export default {
  async getAllProducts() {
    // await wait(10000)
    return await Api().get('/get/product')
  },
  getAllPopularProducts() {
    return Api().get('/get/product/popular')
  },
  getNewReleasedProducts() {
    return Api().get('/get/product/newReleased')
  },
  async orderProduct(id, payload) {
    await wait(2000)
    return await Api().post(`/order/product/${id}`, payload)
  }
}
