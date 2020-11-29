<template>
  <div>
    <breadCumb :items="breadCumbItems" />
    <br />
    <b-container>
      <b-row>
        <b-col
          xs="12"
          sm="12"
          lg="6"
          md="6"
        >
          <div class="image_container">
            <img
              :src="productImage[imageIndex]"
              class="product_image"
            />
          </div>

          <carousel
            class="carousel"
            :navigation-enabled="true"
            :navigation-next-label="nextLabel"
            :navigation-prev-label="prevLabel"
            :per-page=5
            pagination-active-color="#4685CC"
            pagination-position="bottom-overlay"
            :scroll-per-page="true"
            :pagination-enabled="false"
          >
            <slide
              v-for="(singleImage, index) in productImage"
              :key="index"
            >
              <img
                :src="singleImage"
                alt=""
                class="image_slide"
                @click="changeMainImage(index)"
              />
            </slide>
          </carousel>
          <br />
        </b-col>
        <b-col
          xs="12"
          sm="12"
          lg="6"
          md="6"
        >
          <div class="product_detail_text_container">
            <div class="product_header">
              <b-row>
                <b-col cols="10">
                  <h5 class="product_header_content">
                    <b>{{ singleItem.productName }} </b>
                  </h5>
                  <Ewarranty />
                </b-col>
                <b-col cols="2">
                  <productSwitchArrow
                    :prev-product="previousProduct"
                    :next-product="nextProduct"
                  />
                </b-col>
              </b-row>
            </div>
            <div class="product_review">
              <small>
                <b-form-rating
                  id="rating-lg-no-border"
                  v-model="singleItem.rating"
                  readonly
                  no-border
                  variant="warning"
                />
              </small>
            </div>
            <div class="price_row">
              <div
                v-show="singleItem.realPrice != ''"
                class="real_price"
              >
                <p>{{ singleItem.realPrice }} MMK</p>
              </div>
              <div class="promo_price">
                <p>{{ singleItem.promoPrice }} MMK</p>
              </div>
            </div>
            <hr />
            <table class="product_info">
              <tr>
                <td>
                  AVAILABILITY:
                </td>
                <td :class="singleItem.sale ? 'green' : 'grey'">
                  {{ singleItem.sale ? "in stock" : "out off stock" }}
                </td>
              </tr>
              <tr>
                <td>
                  PRODUCT TYPE:
                </td>
                <td>
                  {{ singleItem.productType }}
                </td>
              </tr>
              <tr>
                <td>
                  PRODUCT VENDOR:
                </td>
                <td>
                  {{ singleItem.sale }}
                </td>
              </tr>
            </table>

            <hr />
              <button
                class="buy_now_btn"
                v-if="singleItem.sale == 'onsale' || singleItem.sale == 'preorder'"
                @click="go2Order()"
              >
                <p class="add_cart_text">
                  <shopping class="add_cart_img" />
                  BUY NOW
                </p>
              </button>

              

            <button
              class="buy_now_btn_disable"
              v-if="singleItem.sale != 'onsale' && singleItem.sale != 'preorder'"
            >
              <p class="add_cart_text_disable">
                <empty class="add_cart_img_disable" />
                OUT OF STOCK
              </p>
            </button>

            <hr />
            <ShareNetwork
              network="facebook"
              url="https://news.vuejs.org/issues/180"
              title="test"
              :quote="singleItem.productName"
              hashtags="powerpacmm"
              style="color: black"
            >
              <facebookIcon class="_svg facebook" />
              Share
            </ShareNetwork>
            <ShareNetwork
              class="email_share"
              network="email"
              url="https://news.vuejs.org/issues/180"
              title="test"
              :description="
                'grab' + singleItem.productName + 'on powerpac Myanmar'
              "
              hashtags="powerpacmm"
              style="color: black"
            >
              <email class="_svg" />
              Share
            </ShareNetwork>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <br>
          <div class="detail_header">
            <p>PRODUCT DETAIL</p>
          </div>

          <ul
            v-for="(detail,index) in singleItem.details"
            :key="index"
            class="detail_list"
          >
            <li>
              <detailTick /> <span style="margin-left: 10px"> {{ detail }} </span>
            </li>
          </ul>
          <randomText :product-name="singleItem.productName" />
          <br>
          <br>
          <relatedProducts :products="relatedProducts" />
        </b-col>
      </b-row>
      <p>{{ singleName }}</p>
    </b-container>
  </div>
</template>

<script>
import breadCumb from "@/components/mainpageBody/breadCumnb";
import productSwitchArrow from "@/components/dataView/productSwitchArrow";
import randomText from "@/components/dataView/randomText";
import relatedProducts from "@/components/dataView/relatedProducts";
import Ewarranty from "@/components/mainpageBody/ewarranty";
// importing svg
import shopping from "@/assets/svg/shopping-cart.svg";
import facebookIcon from "@/assets/svg/facebook-app-logo.svg";
import detailTick from "@/assets/svg/detail_tick.svg";
import email from "@/assets/svg/gmail.svg";
import empty from "@/assets/svg/empty.svg";

import turn2Real from "@/mixins/turn2Real"

export default {
  mixins: [turn2Real],
  components: {
    breadCumb,
    shopping,
    email,
    facebookIcon,
    detailTick,
    productSwitchArrow,
    randomText,
    relatedProducts,
    Ewarranty,
    empty
  },
  data () {
    return {
      nextLabel: "<img src='/chevron-right.png' />",
      prevLabel: "<img src='/chevron-left.png' />",
      singleName: "",
      imageIndex: 0,
      singleItem: "",
      products: [],
      productImage: '',
      productIndex: ''
    };
  },
  computed: {
    relatedProducts () {
      const relatedP = []
      this.products.forEach((element) => {
        if (element.type === this.singleItem.type) {
          relatedP.push(element)
        }
      })

      return relatedP
    },

    breadCumbItems () {
      return [
        {
          text: "Home",
          link: "/"
        },
        {
          text: `${this.turn2Real(this.singleItem.type)}`,
          link: `/collections/${this.singleItem.type}`
        },
        {
          text: `${this.singleItem.productName}`,
          link: '/collections/',
          active: true
        }
      ];
    },
    previousProduct () {
      return this.productIndex !== 0 ? this.products[this.productIndex - 1] : null
    },
    nextProduct () {
      return this.productIndex < this.products.length ? this.products[this.productIndex + 1] : null
    }
  },
  head () {
    return {
      title: this.$store.getters['dataStore/getRouteName'],
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Powerpac Myanmar'
        }
      ],
    }
  },

  created () {
    this.$store.dispatch("productStore/setProducts").then(() => {
      this.products = this.$store.getters["productStore/getProducts"](
        this.$route.params.dataName
      );

    }).then(() => {
      this.singleItem = this.products.find(
        element => element.navigator == this.$route.params.singleData
      );

    }).then(() => {
      this.$store.dispatch('dataStore/setRouteName', this.singleItem.productName)

      this.turn2Array(this.singleItem.imageURLs);
      this.productIndex = this.products.findIndex(x => x.id === this.singleItem.id);
    })
  },
  methods: {
    async turn2Array (imagestring) {
      this.productImage = await imagestring;
    },
    changeMainImage (index) {
      this.imageIndex = index
    },
    go2Order() {
      let route_param = this.singleItem.model.split(' ').join('_');
      this.$router.push({ path: `/order/${route_param}` })

    }
  }
}
</script>

<style scoped>
.product_header {
  width: 100%;
}
.detail_list {
  list-style-type: none;
}
.detail_header {
  width: 150px;
  height: 40px;
  background: black;
  color: white;
  margin-bottom: 30px;
}
.detail_header p {
  font-size: 15px;
  text-align: center;
  line-height: 40px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
}
.carousel {
  margin: 0px 20px;
}
.image_slide {
  height: 100px;
  width: 90px;
  cursor: pointer;
}
.email_share {
  margin-left: 10px;
}
._svg {
  width: 15px;
  height: 15px;
}
.facebook {
  fill: blue;
}
.buy_now_btn {
  width: 100%;
  height: 40px;
  background-color: #006cdd;
  margin-top: 20px;
  cursor: pointer;
  transition: 0.3s;
  outline: none;
  border: none;
}
.buy_now_btn_disable {
  width: 100%;
  height: 40px;
  background-color: rgba(128, 128, 128, 0.5);
  margin-top: 20px;
  cursor: default;
  outline: none;
  border: none;
}
.buy_now_btn:hover {
  background-color: #1884f8;
}

.add_cart_img {
  width: 19px;
  height: 19px;
  fill: yellow;
}
.add_cart_text {
  text-align: center;
  height: 40px;
  line-height: 40px;
  color: yellow;
  font-weight: bold;
}
.add_cart_img_disable {
  width: 19px;
  height: 19px;
  fill: grey;
}
.add_cart_text_disable {
  text-align: center;
  height: 40px;
  line-height: 40px;
  color: grey;
  font-weight: bold;
}

td {
  padding: 6px;
}
.green {
  color: green;
}
.grey {
  color: grey;
}
.image_container {
  width: 100%;
  height: 500px;
  padding: 10px;
}
.product_image {
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.product_detail_text_container {
  width: 100%;
  height: 500px;
  padding: 0px 10px;
}
.price_row {
  display: flex;
  justify-content: space-between;
  width: 300px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
}
.real_price {
  font-size: 30px;
  text-decoration: line-through;
}
.promo_price {
  font-size: 30px;
  color: #fc6f3c;
}
.product_review {
  width: 90px;
}
@media screen and (max-width: 500px) {
  .product_image {
    margin-top: 50px;
    width: 100%;
    height: 70%;
  }
}
</style>
