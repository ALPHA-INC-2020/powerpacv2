<template>
  <div>
    <breadCumb :items="breadCumbItems" />
    <div v-if="isComplete">
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
              <p class="h2">EWarranty Registration Complete!</p><br>
              <small class="text-muted">We will contact you back as soon as we find your registration</small> <br>
              <nuxt-link :to=" localePath('/')">
                <b-button
                  variant="light"
                  class="mt-5"
                >Back to home</b-button>
              </nuxt-link>
            </div>

          </b-col>
        </b-row>

      </b-container>
    </div>
    <div class="e_container" v-else>
      <b-container class="p-0">
        <b-row
          no-gutters
          align-v="center"
        >
        
          <b-col
              col="12"
          >
            <div
              class="mx-3 mt-3"
              data-aos="zoom-in"
            >
              <h2 class="title">eWarranty Registration</h2>
              <p class="para">မိသားစုတိုင်းအတွက် အမှန်ကန်ဆုံးသော လိုအပ်ချက် PowerPac <br> <br> eWarranty register လုပ်ရန် လိုအပ်ကို အချက်အလက်များဖြည့်ပါ</p>
              <input type="text" placeholder="Name" class="warranty_input" v-model="form.name">
               <b-form-datepicker class="warranty_input birthday_input py-1" v-model="form.birthday" placeholder="Select your birth date"></b-form-datepicker>
    <vue-tel-input
              v-model="form.phone_number"
              class="warranty_input_phone mt-3  mb-2 py-1"
              placeholder="Phone"
              required
            ></vue-tel-input>
   
              <input type="text" placeholder="Address" class="warranty_input" v-model="form.address">
              <input type="text" placeholder="Township (eg. Yangon)" class="warranty_input" v-model="form.township">
              <input type="text" placeholder="Start Buying Date" class="warranty_input" v-model="form.start_buying_date">
              <input type="text" placeholder="Where did you purchase from?" class="warranty_input" v-model="form.purchase_from">
              <input type="text" placeholder="Product Model Number" class="warranty_input" v-model="form.product_model_no">
              <input type="text" placeholder="Product Serial Number" class="warranty_input" v-model="form.product_serial_no">

                <label for="file-upload" class="upload_container_img mt-2" v-if="!url">
              <form>
                  <p class="upload-text">Upload Warranty Card Image</p>
                <input id="file-upload" name='upload_cont_img' type="file" style="display:none;" @change="onFileChange">
              </form>
                </label>

              <form class="preview_container" v-else>
                <label for="file-upload">
   <img :src="url" alt="" v-if="url" class="preview_img">
                </label>
           
      <input id="file-upload" name='upload_cont_img' type="file" style="display:none;" @change="onFileChange">
              </form>

              <Button buttonText="Register" :loading="loading" @clicked="registerWarranty()"/>

              <ErrorAlert error_text="Error on registering warranty! We are fixing, sorry for inconvenience" v-if="hasError"/>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>

</template>
<script>
import breadCumb from '@/components/mainpageBody/breadCumnb'
import rightArrow from '@/assets/svg/right-arrow.svg'
import cloudinaryMixin from '@/mixins/cloudinaryMixin'
import Warranty from '@/helpers/apis/Warranty'
import ErrorAlert from '@/components/general/errorAlert'
import Button from '@/components/general/button'
export default {

  mixins: [
    cloudinaryMixin
  ],
  components: {
    breadCumb,
    rightArrow,
    ErrorAlert, Button
  },
  data () {
    return {
      hasError : false,
      isComplete: false,
      loading: false,
      url: '',
      breadCumbItems: [{
        text: 'home',
        link: '/'
      },
      {
        text: 'eWarranty',
        link: '/collections/ewarranty',
        active: true
      }],
      form : {
        name: '',
        birthday: '',
        phone_number: '',
        township: '',
        address: '',
        start_buying_date: '',
        purchase_from: '',
        product_model_no: '',
        product_serial_no: '',
        warranty_card_img: ''
      }
    }
  },

  methods: {
    setloading(value) {
      this.loading = value;
    },
    setComplete(value) {
      this.isComplete = value;
    },
    setError(value) {
      this.hasError = value;
    },
    registerWarranty() {
      const { name, birthday, phone_number, township, address, start_buying_date, purchase_from, product_model_no, product_serial_no, warranty_card_img} = this.form;

      if(name == '' || birthday == '' || phone_number == '' || township == '' || address == '' || start_buying_date == '' || purchase_from == '' || product_model_no == '' || product_serial_no == '' || warranty_card_img == '') {
        return;
      }
      this.setloading(true);
      this.uploadFileToCloudinary(warranty_card_img, 'ewarranty').then(res => {
          this.form.warranty_card_img = res
          Warranty.registerWarranty(this.form).then(({status}) => {
            if(status === 200) {
              this.setloading(false);
              this.setComplete(true);
            }
          }).catch(err => {
            this.setloading(false)
            this.setError(true)
          })
       
      }).catch(err => {
        this.setloading(false);
        this.setError(true);
        console.log('error on uploading warranty image' + err)
      })

    
    },
    onFileChange(e) {
      const file = e.target.files[0];
      this.form.warranty_card_img = file;
      this.url = URL.createObjectURL(file);
    }
  },
}
</script>
<style scoped>
.order_confirm_photo {
  width: 100%;
  height: 400px;
}

.upload-text{
  height: 250px;
  line-height: 250px;
  text-align: center;
  cursor: pointer;
  font-size: 17px;
}
.upload_container_img{
  width: 100%;
  border-radius: 10px;
  height: 250px;
  background: rgb(179, 175, 175);
}
.preview_container {
  width: 100%;
}
.preview_img {
  width: 100%;
  height: 250px;
  cursor: pointer;
}

.warranty_input {
  width: 100%;
  height: 40px;
  border: none;
  outline: none;
  border: 1px solid #4685cc;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 20px;
  margin: 10px 0px;
}
.warranty_input.birthday_input {
  padding: 0px;
}

.warranty_input_phone {
  border: 1px solid #4685cc;
}

.title {
  font-weight: bold;
  font-family: "Poppins";
}
.image {
  width: 100%;
  height: 100%;
}
.arrow_svg {
  height: 15px;
  width: 15px;
  margin-left: 10px;
}
.e_container {
  width: 100%;
  min-height: 500px;
}
.buy_now {
  margin-top: 43px;
  width: 100px;
  height: 50px;
  background: #4685cc;
  color: white;
  border-radius: 3px;
  line-height: 50px;
  text-align: center;
  transition: 0.2s ease-in-out;
  cursor: pointer;
}
.button {
  position: relative;
  display: inline-block;
  margin-top: 20px;
  padding: 0.8em 1em;
  border: 2px solid #4685cc;
  color: #333;
  font-size: 18px;
  font-family: "Poppins";
  font-weight: 400;
  text-align: center;
  text-decoration: none;
  transition: 0.3s;
}
.button::before {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  content: "";
  background: #4685cc;
  transition: transform 0.3s;
}
.button:hover {
  color: #fff;
}
.button:hover .arrow_svg {
  fill: #fff;
}

.button02::before {
  transform-origin: left top;
  transform: scale(0, 1);
}
.button02:hover::before {
  transform-origin: left top;
  transform: scale(1, 1);
}
</style>