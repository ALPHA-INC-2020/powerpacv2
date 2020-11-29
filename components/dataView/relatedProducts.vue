<template>
  <b-container>
    <h4 class="sub_title text-center">
      RELATED PRODUCTS
    </h4>
    <hr class="divider">
    <carousel
      :navigation-enabled="true"
      :pagination-enabled="false"
      :navigation-next-label="nextLabel"
      :navigation-prev-label="prevLabel"
      :per-page=1
      pagination-active-color="#4685CC"
      pagination-position="bottom-overlay"
      :scroll-per-page="true"
      :per-page-custom="[[300, 2], [500,2], [991, 5]]"
      class="mt-4 mb-5"
    >
      <slide
        v-for="(product,index) in products"
        :key="index"
      >
        <productCard :products="product" />
      </slide>
    </carousel>
  </b-container>
</template>

<script>
import productCard from '@/components/productCard'

export default {
  components: {
    productCard
  },
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      nextLabel: "<img src='/chevron-right.png' />",
      prevLabel: "<img src='/chevron-left.png' />"
    }
  }
}
</script>
