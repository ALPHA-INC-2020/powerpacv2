<template>
  <div>
    <nuxt-link
      v-if="prevProduct"
      :to="localePath('/collections/'+prevProduct.type+'/' + prevProduct.navigator)"
    >
      <doubleArrow
        v-b-tooltip.hover
        class="right_arrow_svg"
        title="Previous"
      />
    </nuxt-link>
    <nuxt-link
      v-if="nextProduct"
      :to="localePath('/collections/'+nextProduct.type+'/' + nextProduct.navigator)"
    >
      <doubleArrow
        v-b-tooltip.hover
        title="Next"
      />
    </nuxt-link>
  </div>
</template>

<script>
import doubleArrow from '@/assets/svg/double-angle-right.svg'

export default {
  components: {
    doubleArrow
  },
  props: {
    prevProduct: {
      required: true
    },
    nextProduct: {
      required: true
    }
  },
}
</script>

<style scoped>
.right_arrow_svg {
  transform: scale(-1, 1);
  margin-right: 10px;
}
</style>
