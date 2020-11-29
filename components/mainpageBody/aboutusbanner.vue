<template>
  <b-container class="mt-5 mb-5 title">
    <h4 class="text-center">
      ABOUT US
    </h4>
    <hr class="divider">
    <b-row class="mt-2">
      <b-col v-for="(brand, index) in brands" :key="index" cols="6">
        <div class="brand_card m-0 p-0" data-aos="zoom-in">
          <b-img center :src="brand" alt="" class="brand_image" />
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      brands: ['/brandlogo/powerpac.png', '/brandlogo/ifanlogo.png']
    }
  }
}
</script>
<style scoped>
.title {
    font-family: "Poppins";
}
.divider{
    border: 1px solid #4685CC;
    width: 80px;
    margin: 0 auto;
}
.brand_card{
  background-color: #E7EFF8;
  padding: 0;
  margin: 0;
}
.brand_image{
  width: 50%;
  height: 150px;
  padding: 20px;
  background-color: #E7EFF8;
}
@media screen and (max-width: 991px) {
.brand_image{
  width: 100%;
    height: 100px;
  padding: 10px;

}
}
@media screen and (max-width: 460px) {
.brand_image{
  width: 100%;
  height: 90px;
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
