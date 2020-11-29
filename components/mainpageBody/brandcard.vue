<template>
  <b-container
    class="mt-5 mb-5 title"
    data-aos="fade-in"
  >
    <h4 class="text-center">
      OUR BRANDS
    </h4>
    <hr class="divider">

    <carousel
      :pagination-enabled="true"
      :navigation-next-label="nextLabel"
      :navigation-prev-label="prevLabel"
      :per-page="1"
      pagination-active-color="#4685CC"
      :scroll-per-page="true"
      :per-page-custom="[[300, 2], [500,2], [991, 3]]"
      class="mt-4 mb-5"
    >
      <slide
        v-for="(brand,index) in brands"
        :key="index"
      >
        <div class="brand_card m-1 p-0">
          <b-img
            center
            :src="brand"
            alt=""
            class="brand_image"
          />
        </div>
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
      brands: ['/brandlogo/pp.webp', '/brandlogo/ifanlogo.png', '/brandlogo/mychoice.webp'
      ]
    }
  }
}
</script>
<style scoped>
.title {
  font-family: "Poppins";
}
.divider {
  border: 1px solid #4685cc;
  width: 80px;
  margin: 0 auto;
}
.brand_card {
  height: 100px;
  border: 1px solid #e8e9eb;
  padding: 0;
  margin: 0;
}
.brand_image {
  width: 50%;
  height: 100%;
  padding: 20px;
}
@media screen and (max-width: 991px) {
  .brand_image {
    width: 50%;
    height: 100px;
    padding: 10px;
  }
}
@media screen and (max-width: 460px) {
  .brand_image {
    width: 95%;
    height: 100px;
    padding: 10px;
  }
}
/* .brand_cardcontainer{
  display: flex;
  padding-left: 190px;
  padding-right: 190px;
}

.sub_title{
  padding:40px;
  text-align: center;
  font-family: 'Poppins';
  font-size: 30px;
}
.price_textbox{
  justify-content: space-around;
}
.card_text{
  font-size: 14px;
  text-align: center;
}
.promo_text{
  font-size: 14px;
  color: #C4C4C4;
  text-decoration: line-through;
} */
</style>
