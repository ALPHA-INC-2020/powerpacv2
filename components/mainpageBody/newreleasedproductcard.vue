<template>
  <b-container data-aos="fade-in">
    <h4 class="sub_title text-center">
      NEW RELEASED
    </h4>
    <hr class="divider">
    <carousel
      :navigation-enabled="!checkWindowWidth"
      :pagination-enabled="checkWindowWidth"
      :navigation-next-label="nextLabel"
      :navigation-prev-label="prevLabel"
      :per-page="1"
      pagination-active-color="#4685CC"
      :scroll-per-page="true"
      :per-page-custom="[[300, 2], [500,2], [991, 5]]"
      class="mt-4 mb-5"
    >
      <slide
        v-for="(newRelease,index) in newReleases"
        :key="index"
      >
        <productCard :products="newRelease" />
      </slide>
    </carousel>
  </b-container>
</template>

<script>

import productCard from '@/components/productCard'
import { mapGetters } from 'vuex'

export default {
  components: {
    productCard
  },
  data () {
    return {
      nextLabel: "<img src='/chevron-right.png' />",
      prevLabel: "<img src='/chevron-left.png' />",
      window: {
        width: 0
      }
    }
  },
  computed: {
    ...mapGetters({ newReleases: 'productStore/getNewReleasedProducts' }),
    checkWindowWidth () {
      return this.window.width < 990
    }
  },
  created () {
    if (process.browser) {
      // eslint-disable-next-line nuxt/no-globals-in-created
      window.addEventListener('resize', this.handleResize)
      this.handleResize()
    }
  },
  destroyed () {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize () {
      this.window.width = window.innerWidth
    }
  }
}

</script>

<style scoped>
.divider {
  border: 1px solid #4685cc;
  width: 80px;
  margin: 0 auto;
}
</style>
