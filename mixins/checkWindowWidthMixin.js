/* eslint-disable no-console */
/* eslint-disable space-before-function-paren */
export default {
  data() {
    return {
      window: {
        width: 0
      }
    }
  },
  computed: {
    checkWindowWidth() {
      return this.window.width < 990
    }
  },
  created() {
    console.log('here')
    // eslint-disable-next-line nuxt/no-globals-in-created
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth
    }
  }
}
