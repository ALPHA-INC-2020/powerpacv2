<template>
  <b-container
    class="mt-5 mb-5 title"
    data-aos="fade-in"
  >
    <h4 class="text-center">
      WE MAKE YOUR HOME GREAT
    </h4>
    <hr class="divider">

    <carousel
      :navigation-enabled="true"
      :pagination-enabled="false"
      :navigation-next-label="nextLabel"
      :navigation-prev-label="prevLabel"
      :pagination-padding="10"
      :per-page="1"
      pagination-active-color="#4685CC"
      pagination-position="bottom-overlay"
      :scroll-per-page="true"
      :per-page-custom="[[300, 2], [500,2], [991, 4]]"
      class="mt-4 mb-5 mx-4"
    >
      <slide
        v-for="(product,index) in products"
        :key="index"
      >
        <nuxt-link :to="localePath(product.link)">
          <div class="slide_image_container">
            <img
              :src="product.image"
              alt=""
              class="slide_image"
            >
          </div>
        </nuxt-link>
      </slide>
    </carousel>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      nextLabel: "<img src='/chevron-right.png' />",
      prevLabel: "<img src='/chevron-left.png' />",
      products: [{
        image: '/homegreat/fan_cooler.webp',
        link: '/collections/fan'
      }, {
        image: '/homegreat/home_living.webp',
        link: '/collections/iron'
      }, {
        image: '/homegreat/kitchen_applicant.webp',
        link: '/collections/cooker'
      }, {
        image: '/homegreat/large_kitchen.webp',
        link: '/collections/fridge'
      }
      ]
    }
  }
}
</script>
<style scoped>
.slide_image_container {
  width: 95%;
  height: 100%;
  border: 1px solid grey;
  border-radius: 2px;
  margin: 0 auto;
}
.slide_image {
  height: 100px;
  width: 100%;
  padding: 10px;
}
.title {
  font-family: "Poppins";
}
.divider {
  border: 1px solid #4685cc;
  width: 80px;
  margin: 0 auto;
}
.products_card {
  background-color: #e7eff8;
  padding: 0;
  margin: 0;
}
.products_types {
  width: 262px;
  height: 108px;
  padding: 20px;
  background-color: #e7eff8;
}
@media screen and (max-width: 991px) {
  .products_types {
    width: 100%;
    height: 100px;
    padding: 10px;
  }
}
@media screen and (max-width: 460px) {
  .products_types {
    width: 100%;
    height: 90px;
    padding: 10px;
  }
}
</style>
