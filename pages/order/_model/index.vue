<template>
  <div>
    <breadCumb :items="breadCumbItems" />
    <div v-if="isOrdered">
      <b-container>
        <b-row>
          <b-col
            cols="12"
            lg="6"
            md="6"
            sm="12"
          >
            <img
              src="/order.png"
              alt=""
              class="order_confirm_photo"
            >
          </b-col>
          <b-col
            cols="12"
            lg="6"
            md="6"
            sm="12"
          >
            <div class="pt-5">
              <p class="h2">Your Order Has Been Placed!</p><br>
              <small class="text-muted">We will contact you back as soon as we find your order</small> <br>
              <nuxt-link :to=" localePath('/collections/fan')">
                <b-button
                  variant="light"
                  class="mt-5"
                >Continue Shopping</b-button>
              </nuxt-link>
            </div>

          </b-col>
        </b-row>

      </b-container>
    </div>
    <b-container
      class="mt-5"
      v-if="!isOrdered"
    >
      <b-row class="mb-3">
        <b-col
          order="2"
          order-md="1"
          cols="12"
          lg="8"
          md="8"
          sm="12"
        >
          <div class="order_form_container">
            <input
              type="text"
              class="order_input my-2"
              placeholder="Name"
              v-model="form.customer_name"
            >
            <small
              class="error_text"
              v-show="error.name"
            >Name is required</small>

            <input
              type="email"
              class="order_input my-2"
              placeholder="Email (optional)"
              v-model="form.customer_email"
            >

            <vue-tel-input
              v-model="form.phone_no"
              class="order_input_phone my-2"
              placeholder="Phone"
              required
            ></vue-tel-input>
            <small
              class="error_text"
              v-if="error.phone_no"
            >Phone Number is required</small>

            {{form.phone_no}}
            <textarea
              class="order_input text_area_custom my-2"
              placeholder="Full Address"
              v-model="form.customer_address"
            ></textarea>
            <small
              class="error_text"
              v-show="error.customer_address"
            >Address is required</small>

            <textarea
              class="order_input text_area_custom my-2"
              placeholder="Note (optional)"
              v-model="form.note"
            ></textarea>

          </div>
        </b-col>
        <b-col
          order="1"
          order-md="2"
          cols="12"
          lg="4"
          md="4"
          sm="12"
        >
          <div
            v-if="!loading"
            class="product_container mb-3 mx-auto my-auto"
          >
            <productCard
              :products="singleItem[0]"
              :clickAble="false"
            />
          </div>
          <hr class="mx-auto w-75">

        </b-col>
      </b-row>
      <b-row class="text-left">
        <b-col
          cols="12"
          lg="4"
          md="4"
          sm="12"
        >
          <div class="purchase_box">
            <div class="purchase_title">
              Purchase Method
            </div>
            <ul class="purchase_list mt-3 ml-1">
              <li>
                <b-form-radio
                  value="KBZ Pay"
                  v-model="form.purchase_type"
                >KBZ Pay</b-form-radio>
              </li>
              <li>
                <b-form-radio
                  value="CB Pay"
                  v-model="form.purchase_type"
                >CB Pay</b-form-radio>
              </li>
              <li>
                <b-form-radio
                  value="Wave Money"
                  v-model="form.purchase_type"
                >Wave Money</b-form-radio>
              </li>
              <li>
                <b-form-radio
                  value="AYA Pay"
                  v-model="form.purchase_type"
                >AYA Pay</b-form-radio>
              </li>
              <li>
                <b-form-radio
                  value="Cash On Deli"
                  v-model="form.purchase_type"
                >Cash On Deli</b-form-radio>
              </li>
            </ul>
          </div>
        </b-col>
        <b-col
          cols="12"
          lg="8"
          md="8"
          sm="12"
        >
          <div class="price_box w-100 mx-auto border border-info mt-sm-0 mt-md-4 px-3 py-2 rounded-sm ">
            <div class="d-flex justify-content-between mt-2">
              <p>Product Price</p>
              <h6 v-if="!loading">{{singleItem[0].promoPrice}} mmk</h6>
            </div>
            <div class="d-flex justify-content-between">
              <p>Delivery Fee</p>
              <h6 v-if="!loading">0 mmk</h6>
            </div>
            <div class="d-flex justify-content-between">
              <p>Discount Fee</p>
              <h6 v-if="!loading">- 0 mmk</h6>
            </div>
            <div class="footer mt-5">
              <div class="d-flex justify-content-between">
                <h4 class="pt-1">Total Amount</h4>
                <div
                  class="bg-warning w-50 rounded-lg d-flex justify-content-center align-items-center font-weight-bold h5"
                  v-if="!loading"
                >
                  {{singleItem[0].promoPrice}} mmk
                </div>
              </div>

            </div>
          </div>
        </b-col>
      </b-row>
      <br>
      <b-alert
        show
        class="d-flex justify-content-around"
      >
        <img
          :src="purchaseServicePhoto[0].image"
          alt=""
          class="purchase_method"
        >
        <span v-if="purchaseServicePhoto[0].name != 'Cash On Deli'">Transfer to {{purchaseServicePhoto[0].account_no}} and we will confirm with phone call on you</span>
        <span v-else>We will take fee when delivery send your product</span>
      </b-alert>

      <Button @clicked="orderProduct()" buttonText="Order Now" :loading="isButtonLoading"/>
      <small
        class="text-center error_text"
        v-show="error.button_errortext"
      >complete your information</small>
    </b-container>
  </div>
</template>

<script>
import breadCumb from '@/components/mainpageBody/breadCumnb'
import productCard from '@/components/productCard'
import Product from '@/helpers/apis/Products'
import Button from '@/components/general/button'
export default {
  components: {
    breadCumb,
    productCard,
    Button
  },
  data () {
    return {
      isOrdered: false,
      isButtonLoading: false,
      error: {
        name: false,
        phone_no: false,
        note: false,
        customer_address: false,
        button_errortext: false
      },
      form: {
        total_cost: '',
        customer_name: '',
        customer_email: '',
        phone_no: '',
        customer_address: '',
        note: '',
        order_status: 'pending',
        purchase_type: 'Cash On Deli',
        product_id: ''
      },
      singleItem: '',
      loading: false,
      breadCumbItems: [{
        text: 'home',
        link: '/'
      },
      {
        text: 'faq',
        link: '/collections/allFans',
        active: true
      }],
      purchaseImages: [
        {
          name: 'KBZ Pay',
          image: 'https://is2-ssl.mzstatic.com/image/thumb/Purple114/v4/fa/f1/f2/faf1f280-18d7-9b27-1309-6fd392f94b3a/AppIcon-1x_U007emarketing-0-5-0-0-85-220.png/1024x1024bb.png',
          account_no: '09878787'
        },
        {
          name: 'CB Pay',
          image: 'https://thutatravel.com/wp-content/uploads/2019/09/CBPay-by-Thuta-Travel.jpg',
          account_no: '76767676'
        }, {
          name: 'Wave Money',
          image: 'https://play-lh.googleusercontent.com/rPq4GMCZy12WhwTlanEu7RzxihYCgYevQHVHLNha1VcY5SU1uLKHMd060b4VEV1r-OQ',
          account_no: '87878787'
        }, {
          name: 'AYA Pay',
          image: 'https://play-lh.googleusercontent.com/t4ur8SEt6O2RgZCDC1l62lB6elFPxYySoh-bZqozC8O38xP9WQBhnXt-H0W4w9MyN2I',
          account_no: '8787878'
        }, {
          name: 'Cash On Deli',
          image: 'https://cdn4.vectorstock.com/i/thumb-large/53/33/cash-on-delivery-flat-vector-21645333.jpg',
          account_no: '65656565'
        },
      ]
    }
  },
  created () {
    this.loading = true;
    this.$store.dispatch("productStore/setProducts").then(() => {

      let productData = this.$store.getters["productStore/getProductByModel"](
        this.$route.params.model
      );
      this.singleItem = productData
      if (this.singleItem) {
        this.loading = false;
      }
    })
  },
  methods: {
    orderProduct () {

      const { phone_no, customer_name, customer_address } = this.form;

      if (phone_no == '' || customer_name == '' || customer_address == '') {

        this.error.phone_no = phone_no == '' ? true : false;
        this.error.name = customer_name == '' ? true : false;
        this.error.customer_address = customer_address == '' ? true : false;
        this.error.button_errortext = true;

      } else {
        this.isButtonLoading = true;
        this.form.total_cost = parseInt(this.singleItem[0].promoPrice);

        Product.orderProduct(this.singleItem[0].id, this.form).then((res) => {
          if (res.status == 200) {
            this.isButtonLoading = false;
            this.isOrdered = true;
          }
        })
      }


    }
  },
  computed: {
    purchaseServicePhoto () {
      return this.purchaseImages.filter(element => this.form.purchase_type == element.name)
    }
  }
}
</script>

<style scoped>
.margin-b {
  margin-bottom: 20px;
}
.order_confirm_photo {
  width: 100%;
  height: 400px;
}
.purchase_method {
  height: 30px;
  width: 30px;
}
.error_text {
  color: red;
  text-align: left;
  margin: 0px 10px;
}
h3,
p,
h6 {
  font-family: 'Poppins';
}
.order_form_container {
  height: auto;
  width: 100%;
}
.order_input {
  width: 100%;
  height: 50px;
  border: none;
  outline: none;
  border: 1px solid #4685cc;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 20px;
}
.order_input_margin {
  margin: 10px 0px;
}
.order_input_phone {
  border: 1px solid #4685cc;
}
.text_area_custom {
  height: 90px;
}
.product_container {
  height: auto;
  width: 180px;
}
.purchase_box {
  height: auto;
  width: 100%;
  padding: 0px 30px;
}
.purchase_title {
  font-size: 25px;
  font-family: 'Poppins';
}
.purchase_list {
  list-style-type: none;
}
.purchase_list > li {
  padding: 10px 0px;
}
</style>