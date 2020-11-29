<template>
  <div class="product_card" data-aos="fade-in">
    <div class="product_image_container">
      <img :src="productImage" alt="" class="product_image" />
      <div v-if="product_detail.sale" class="sale_badge">
        sale
      </div>
      <div v-else class="out_off_stock">
        out of stock
      </div>
    </div>
    <div class="product_info">
      <div class="product_content mt-2">
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
      <div class="price_row">
        <div v-show="product_detail.realPrice != ''" class="real_price pr-3">
          {{ product_detail.realPrice }} MMK
        </div>
        <div class="promo_price">{{ product_detail.promoPrice }} MMK</div>
      </div>
      <nuxt-link
        :to="
          localePath(
            '/collections/' +
              product_detail.type +
              '/' +
              product_detail.navigator
          )
        "
        class="d-block d-md-none"
      >
        <div class="buy_now mobile">
          Buy Now
        </div>
      </nuxt-link>
    </div>
    <div class="actions d-none d-md-block">
      <div class="buy_now">
        Buy Now
      </div>
      <nuxt-link
        :to="
          localePath(
            '/collections/' +
              product_detail.type +
              '/' +
              product_detail.navigator
          )
        "
      >
        <div class="quick_view">
          Quick View
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      productImage: ""
    };
  },
  computed: {
    product_detail() {
      return this.products;
    }
  },
  methods: {
    async turn2Array(imagestring) {
      this.productImage = await imagestring[0];
    },
    route2singleview(productName) {
      this.$router.push({
        name: "singleData",
        params: { singleData: "hello" }
      });
    }
  },
  created() {
    this.turn2Array(this.product_detail.imageURLs);
  }
};
</script>

<style scoped>
.buy_now {
  margin-top: 43px;
  width: 100%;
  height: 50px;
  background: #4685cc;
  color: white;
  border-radius: 3px;
  line-height: 50px;
  text-align: center;
  transition: 0.2s ease-in-out;
  cursor: pointer;
}
.buy_now.mobile {
  margin-top: 10px;
}
.quick_view {
  margin-top: 10px;
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border: 1px solid #4685cc;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  border-radius: 3px;
}
.quick_view:hover {
  border: 1px solid #4685ccc2;
}
.buy_now:hover {
  background: #82acdd;
}
.actions {
  flex: 3;
  height: 100%;
}
.product_card {
  width: 100%;
  min-height: 230px;
  display: flex;
}
.product_image_container {
  flex: 4;
  height: 100%;
  position: relative;
}
.product_info {
  height: 100%;
  flex: 5;
  padding-left: 30px;
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
  font-family: "Poppins";
  text-transform: uppercase;
}
.out_off_stock {
  position: absolute;
  width: 100px;
  height: 22px;
  line-height: 22px;
  background: grey;
  color: #fff;
  text-align: center;
  right: 10px;
  bottom: 0;
  font-family: "Poppins";
  text-transform: unset;
}
.product_image {
  width: 100%;
  height: 100%;
  padding: 5px;
}
.product_content {
  min-height: 30px;
  width: 100%;
  padding: 10px 0px;
  font-weight: bold;
}
.price_row {
  display: flex;
}
.product_rating {
  height: 50px;
  width: 30%;
}
.real_price {
  font-size: 14px;
  color: #c4c4c4;
  text-decoration: line-through;
}
.promo_price {
  color: #fc6f3c;
}
</style>
