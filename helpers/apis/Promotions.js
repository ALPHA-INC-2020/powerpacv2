import Api, { wait } from './Api'

export default {
  async getBanner() {
    await wait(2000)
    return await Api().get('/get/banner/active')
  }
}
