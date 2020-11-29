<template>
  <div class="popular_box">
    <div class="title">
      <h6>Popular Products</h6>
    </div>
    <div class="popular_content">
      <div class="content_child">
        <carousel
          :navigation-enabled="true"
          :navigation-next-label="nextLabel"
          :navigation-prev-label="prevLabel"
          per-page=1
          pagination-active-color="#4685CC"
          pagination-position="bottom-overlay"
          :scroll-per-page="true"
          :pagination-enabled="false"
        >
          <slide
            v-for="(popular,index) in popularProducts"
            :key="index"
          >
            <productCard :products="popular" />
          </slide>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from '@/components/productCard'
import { mapGetters } from 'vuex'
export default {
  components: {
    ProductCard
  },
  computed: {
    ...mapGetters({ popularProducts: 'productStore/getPopularProducts' }),

  },
  data () {
    return {
      value: 'all',
      nextLabel: "<img src='/chevron-right.png' />",
      prevLabel: "<img src='/chevron-left.png' />"
    }
  },
  methods: {
    onChange (e) {
      $nuxt.$emit('my-custom-event', e.target.value)
    }
  }
}

</script>
<style scoped>
.popular_box {
  width: 100%;
  height: 250px;
  border: 1px solid #f5f5f5;
}
.title {
  background: #f5f5f5;
  padding: 8px;
}
.col {
  padding: 0px;
}
.brand_radio {
  padding: 10px;
}
</style>
