<template>
  <nuxt-link :to="clickAble? localePath('/collections/'+product_detail.type+'/' + product_detail.navigator) : localePath(this.$router.currentRoute)">
    <div
      class="product_card"
      data-aos="fade-in"
    >
      <div class="product_image_container">
        <img
          :src="productImage"
          alt=""
          loading="lazy"
          class="product_image"
        >

        <div
          class="overlay"
          v-if="clickAble"
        >
          Click to buy
        </div>
        <div
          v-if="product_detail.sale == 'onsale'"
          class="sale_badge"
        >
          SALE
        </div>
        <div
          v-if="product_detail.sale == 'preorder'"
          class="pre_order"
        >
          PRE ORDER
        </div>
        <div
          v-if="product_detail.sale == 'outstock'"
          class="out_off_stock"
        >
          OUT OF STOCK
        </div>
      </div>

      <div class="product_content">
        {{ product_detail.productName }}
      </div>
      <div class="product_rating">
        <b-form-rating
          id="rating-lg-no-border"
          v-model="product_detail.rating"
          readonly
          no-border
          variant="warning"
        />
      </div>
      <div class="row pl-3 pr-3">
        <div
          v-show="product_detail.realPrice != ''"
          class="real_price"
        >
          {{ product_detail.realPrice }} MMK
        </div>
        <div class="promo_price">
          {{ product_detail.promoPrice }} MMK
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    products: {
      type: Object,
      required: true
    },
    clickAble: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      productImage: '',
      isLoadingData: false
    }
  },
  computed: {
    product_detail () {

      return this.products
    }
  },
  methods: {
    async turn2Array (imagestring) {
      this.productImage = await imagestring[0]
    },
    route2singleview (productName) {
      this.$router.push({ name: 'singleData', params: { singleData: 'hello' } })
    }
  },
  created () {
    this.$nuxt.$on('loading-data-event', (val) => {
      this.isLoadingData = val;
      console.log(this.isLoadingData)
    })
    this.turn2Array(this.product_detail.imageURLs);
  }
}
</script>

<style scoped>
.product_card {
  width: 100%;
  min-height: 300px;
  transition: 3s;
}
.product_card:hover {
  border: 1px solid red;
}
.product_image_container {
  width: 100%;
  height: 60%;

  position: relative;
}
.product_image_container:hover .overlay {
  opacity: 1;
}
.overlay {
  position: absolute;
  bottom: 0;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5); /* Black see-through */
  color: #f1f1f1;
  width: 90%;
  height: 90%;
  transition: 0.5s ease;
  opacity: 0;
  color: white;
  font-size: 20px;
  padding: 80px 30px 30px 30px;
  text-align: center;
  margin: 10px;
  cursor: pointer;
}

.sale_badge {
  position: absolute;
  width: 50px;
  height: 22px;
  line-height: 22px;
  background: #ff708e;
  color: #fff;
  text-align: center;
  right: 0;
  bottom: 0;
  font-family: 'Poppins';
}
.out_off_stock {
  position: absolute;
  width: 110px;
  height: 22px;
  line-height: 22px;
  background: grey;
  color: #fff;
  text-align: center;
  right: 10px;
  bottom: 0;
  font-family: 'Poppins';
  text-transform: uppercase;
}
.pre_order {
  position: absolute;
  width: 110px;
  height: 22px;
  line-height: 22px;
  background: rgb(72, 124, 238);
  color: #fff;
  text-align: center;
  right: 10px;
  bottom: 0;
  font-family: 'Poppins';
  text-transform: uppercase;
}
.product_image {
  width: 100%;
  height: 100%;
  padding: 5px;
}

.product_content {
  min-height: 80px;
  width: 100%;
  padding: 10px;
  text-align: center;
  color: black;
}
.product_rating {
  height: 50px;
  width: 80%;
  margin: 0 auto;
}
.row {
  display: flex;
  justify-content: space-around;
}
.real_price {
  font-size: 14px;
  color: #c4c4c4;
  text-decoration: line-through;
}
.promo_price {
  color: #fc6f3c;
}
@media screen and (max-width: 991px) {
  .product_image_container {
    height: 50%;
  }
}
@media screen and (max-width: 460px) {
  .brand_image {
    width: 50%;
  }
}
</style>
