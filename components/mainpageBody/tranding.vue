<template>
  <b-container data-aos="fade-in">
    <h4 class="sub_title text-center">
      TRENDING NOW
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
        v-for="(item,index) in popularProducts"
        :key="index"
      >
        <productCard :products="item" />
      </slide>
    </carousel>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex';
import productCard from '@/components/productCard'

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
    ...mapGetters({popularProducts: 'productStore/getPopularProducts'}),
    checkWindowWidth () {
      return this.window.width < 990
    }
  },
  created () {
    if (process.browser) {
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
