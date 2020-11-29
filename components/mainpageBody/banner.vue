<template>
  <carousel
    :per-page="1"
    :autoplay="true"
    pagination-active-color="#4685CC"
    pagination-position="bottom-overlay"
    @transition-end="onSlide"
    ref="homeCarrousel"
  >
    <slide>
      <img
        src="/banner.jpg"
        alt=""  
        class="banner_image"
        data-index="0"
        data-name="productone"
        pagination-position="bottom-overlay"
      >
    </slide>
    <slide>
      <img
        src="https://i.ibb.co/hcnfBPC/home-banner-one.jpg"
        alt=""
        class="banner_image"
        data-index="0"
        data-name="productone"
        pagination-position="bottom-overlay"
      >
    </slide>
    <slide>
      <img
        src="https://i.ibb.co/PCChBnc/home-banner-two.jpg"
        alt=""
        class="banner_image"
      >
    </slide>
    <slide>
      <img
        src="https://i.ibb.co/QmNX6WV/home-banner-three.jpg"
        alt=""
        class="banner_image"
      >
    </slide>
  </carousel>
</template>

<script>
export default {
  methods: { onSlide () { if (this.$refs.homeCarrousel.currentPage == (this.$refs.homeCarrousel.slideCount - 1)) { this.$refs.homeCarrousel.goToPage(0); } } }

}
</script>

<style scoped>
.banner_image {
  width: 100%;
  height: 600px;
}
@media screen and (max-width: 991px) {
  .banner_image {
    height: 300px;
  }
}
@media screen and (max-width: 460px) {
  .banner_image {
    height: 200px;
  }
}
</style>
