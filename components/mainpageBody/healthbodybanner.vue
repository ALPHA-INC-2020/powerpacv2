<template>
  <carousel per-page="1" pagination-active-color="#4685CC" pagination-position="bottom-overlay">
    <slide>
      <img
        src="/frezzer.png"
        alt=""
        class="banner_image"
        data-index="0"
        data-name="productone"
        @slideclick="handleSlideClick"
      >
    </slide>
    <slide>
      <img src="/frezzer.png" alt="" class="banner_image">
    </slide>
    <slide>
      <img src="/frezzer.png" alt="" class="banner_image">
    </slide>
  </carousel>
</template>

<script>
export default {
  methods: {
    handleSlideClick (dataset) {
    }
  }
}
</script>

<style scoped>
.banner_image{
  width: 100%;
  height: 600px;
}
@media screen and (max-width: 991px) {
  .banner_image{
    height: 300px;
}
}
@media screen and (max-width: 460px) {
  .banner_image{
    height: 200px;
}
}
</style>
