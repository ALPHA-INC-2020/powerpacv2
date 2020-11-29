<template>
  <div>
    <div
      class="image_view_box"
      :style="viewImageURL != ''? 'display : flex': 'display: none'"
    >

      <img
        :src="viewImageURL"
        alt=""
        class="view_image"
      >
      <div class="close_icon">
        <cancel @click="viewImageURL = ''" />
      </div>
    </div>
    <breadCumb :items="breadCumbItems" />
    <br>
    <div class="titleContainer">
      <span
        class="maintitle"
        data-aos="fade-in"
      > {{ $t('promotion.header') }}</span>
    </div>
    <span class="br" />
    <b-container>
      <b-row
        no-gutters
        align-v="center"
      >
        <b-col
          xs="12"
          sm="12"
          md="6"
          lg="6"
        >
          <div
            class="image_container"
            data-aos="zoom-in"
          >
            <div class="image_box">
              <img
                src="/promotions/tadingyut/promo_one.jpg"
                class="promo_image"
                alt=""
                @click="viewImage('/promotions/tadingyut/promo_one.jpg')"
              >
            </div>
            <div class="image_box">
              <img
                src="/promotions/tadingyut/promo_two.jpg"
                class="promo_image"
                alt=""
                @click="viewImage('/promotions/tadingyut/promo_two.jpg')"
              >
            </div>
            <div class="image_box">
              <img
                src="/promotions/tadingyut/promo_three.jpg"
                class="promo_image"
                alt=""
                @click="viewImage('/promotions/tadingyut/promo_three.jpg')"
              >
            </div>
            <div class="image_box">
              <img
                src="/promotions/tadingyut/promo_four.jpg"
                class="promo_image"
                alt=""
                @click="viewImage('/promotions/tadingyut/promo_four.jpg')"
              >

            </div>

          </div>
        </b-col>
        <b-col
          xs="12"
          sm="12"
          md="6"
          lg="6"
        >
          <div
            class="text_container"
            data-aos="zoom-in"
          >
            <h3 style="line-height: 40px">သီတင်းကျွတ်အထူးပရိုမိုးရှင်းအစီအစဥ်လေးနဲ့ဘယ်သူတွေကို ဂါရဝပြုလက်ဆောင်ပို့ပေးရင်ကောင်းမလဲ ?</h3>
            <p style="padding: 10px">
              မေမေ၊ဖေဖေ၊ ဘိုးဘိုး၊ဖွားဖွား ၊ ဆရာသမားတို့ကိုနှစ်စဥ်နှစ်တိုင်း အစဥ်အလာမပြတ်
              ဂါရဝပြုကန်တော့လာတာ 🙏🙏🙏
              ဒီနှစ်တော့အဝေးရောက်နေလို့ ဂါရဝပြုဖို့
              အခက်တွေ့နေပြီလား? <br><br>
              ကိုယ်ရဲ့ ဂါရဝပြု လက်ဆောင်ကို 🤔
              သဘောကျ နှစ်သက်ပါ့မလားဆိုပြီး
              စဥ်းစားရခက်နေပြီလား?
              <br><br>
              ဒါဆိုရင်တော့ ပျော်ရွှင်စရာ သီတင်းကျွတ်အချိန်အခါ သမယမှာ PowerPac က
              သင်တို့နှင့်အတူရှိနေမှာ ဖြစ်လို့
              စိတ်မပူပါနဲ့တော့နော်.... 😘
              <br><br>
              တန်မှတန် သီတင်းကျွတ်အထူးပရိုမိုးရှင်းအစီအစဥ်
              လေးမှာ ဝယ်ယူအားပေးကြသူတိုင်းအတွက်
              PowerPac Myanmar မှ အထူးအစီအစဥ်အနေဖြင့်
              <br>
              <br>
            <ul>
              <li>လက်ဆောင်ခြင်း တစ်ခြင်း အပိုပေးခြင်း</li>
              <li>ပါကင်လှလှ ထုတ်ပိုးပေးခြင်း</li>
              <li>ဂါရဝပြု စာသားများအား ကဒ်လှလှလေးပေါ်တွင် တစ်ပါတည်း ရေးသားဖော်ပြပေးခြင်း</li>
              <li>Delivery Free( ပို့ဆောင်ခ အခမဲ့) အပြင်
                ကိုယ်စားဂါရဝပြုပေးခြင်း စတဲ့ ဝန်ဆောင်မှုတွေပါ
                ပေးအပ်သွားမှာဖြစ်ပါတယ်။</li>
            </ul>

            </p>
            <div class="demo">
              <a
                class="button button02"
                href="https://www.facebook.com/powerpac.myanmar"
                target="_blank"
              >See More
                <rightArrow class="arrow_svg" />
              </a>
            </div>
          </div>
        </b-col>
      </b-row>
      <br>
      <b-row
        no-gutters
        align-v="center"
      >
        <b-col
          xs="12"
          sm="12"
          md="6"
          lg="6"
        >
          <div
            class="text_container"
            data-aos="zoom-in"
          >
            <h3 style="line-height: 40px">တန်တယ် 😍 သီတင်းကျွတ် အထူးပရိုမိုးရှင်း
              လာပြီနော် 📢📢📢</h3>
            <p style="padding: 10px">
              မိမိချစ်ခင်ရသူတွေကို သီတင်းကျွတ်အခါသမယမှာကျေးဇူးဆပ် ဂါရဝ ပြုချင်တယ် 🙏🙏🙏
              ပျော်စေချင်တယ်😚.....ကိုယ်ပေးလိုက်တဲ့
              လက်ဆောင်ကလည်း အသုံးတည့်ပြီး
              ကျေနပ်မှု အပြည့်ရစေချင်တယ်ဆိုရင်
              တန်တယ်_သီတင်းကျွတ်အထူးပရိုမိုးရှင်းအစီအစဥ်ကနေ အခုပဲ မှာယူလိုက်ပါတော့နော်
              <br><br>
              PowerPacက အာမခံဘယ်လောက်ပေးလဲ ? အရည်အသွေးကော ကောင်းမွန်စိတ်ချရပါ့မလား?
              <br><br>
              PowerPac Myanmar မှအိမ်သုံး၊မီးဖိုချောင်သုံး
              လျှပ်စစ်ပစ္စည်းများကို အာမခံ ၂ နှစ်ဖြင့်
              မြန်မာနိုင်ငံတစ်ဝန်းလုံးသို့ ဖြန့်ချီရောင်းချပေးလျက်ရှိပါတယ်နော်။
              <br>
              Powerpac Brand က စင်ကာပူနိုင်ငံရဲ့
              နံပါတ်တစ်အမှတ်တံဆိပ်ဖြစ်တဲ့အပြင်
              သုံးစွဲသူများရဲ့ချစ်ခင်အားပေးမှုကို
              ၂၂ နှစ်တိုင်အောင် ရရှိထားတာကြောင့်အပြည့်အဝ ယုံကြည်အားပေးနိုင်ပါတယ်။

              <br>
              <br>
              သီတင်းကျွတ်အထူးအစီအစဥ်က ဘယ်လိုမျိုးလဲ?
              <br><br>
              မိမိကြိုက်နှစ်သက်ရာ Set အလိုက်
              သီတင်းကျွတ် အထူးလျော့စျေးဖြင့်ဝယ်ယူနိုင်မည့်အပြင် #လက်ဆောင်ပါကင်လှလှလေး ထုတ်ပိုးပေးခြင်း ၊ #Delivery_Freeဖြင့် ပို့ဆောင်ပေးခြင်းတွေအပြင် ချစ်ခင်ရသူများအား သိစေလိုသော
              #သတင်းစကားများကိုလည်း လက်ဆောင်ကဒ်လှလှလေးပေါ်တွင် ထည့်သွင်းရေးသားပေးခြင်းတို့ဖြစ်ပါတယ်။
            <ul>
              <li>လက်ဆောင်ခြင်း တစ်ခြင်း အပိုပေးခြင်း</li>
              <li>ပါကင်လှလှ ထုတ်ပိုးပေးခြင်း</li>
              <li>ဂါရဝပြု စာသားများအား ကဒ်လှလှလေးပေါ်တွင် တစ်ပါတည်း ရေးသားဖော်ပြပေးခြင်း</li>
              <li>Delivery Free( ပို့ဆောင်ခ အခမဲ့) အပြင်
                ကိုယ်စားဂါရဝပြုပေးခြင်း စတဲ့ ဝန်ဆောင်မှုတွေပါ
                ပေးအပ်သွားမှာဖြစ်ပါတယ်။</li>
            </ul>

            </p>
            <div class="demo">
              <a
                class="button button02"
                href="https://www.facebook.com/powerpac.myanmar"
                target="_blank"
              >See More
                <rightArrow class="arrow_svg" />
              </a>
            </div>
          </div>
        </b-col>
        <b-col
          xs="12"
          sm="12"
          md="6"
          lg="6"
        >
          <div
            class="image_container"
            data-aos="zoom-in"
          >
            <div class="image_box">
              <img
                src="/promotions/tadingyut/second_promo_one.jpg"
                class="promo_image"
                alt=""
                @click="viewImage('/promotions/tadingyut/second_promo_one.jpg')"
              >
            </div>
            <div class="image_box">
              <img
                src="/promotions/tadingyut/second_promo_two.jpg"
                class="promo_image"
                alt=""
                @click="viewImage('/promotions/tadingyut/second_promo_two.jpg')"
              >
            </div>
            <div class="image_box">
              <img
                src="/promotions/tadingyut/second_promo_three.jpg"
                class="promo_image"
                alt=""
                @click="viewImage('/promotions/tadingyut/second_promo_three.jpg')"
              >
            </div>
            <div class="image_box">
              <img
                src="/promotions/tadingyut/second_promo_four.jpg"
                class="promo_image"
                alt=""
                @click="viewImage('/promotions/tadingyut/second_promo_four.jpg')"
              >

            </div>

          </div>
        </b-col>
      </b-row>
      <b-row no-gutters>
        <b-col
          xs="12"
          sm="12"
          md="6"
          lg="6"
        >
          <div class="image_container">
            <img
              data-aos="zoom-in"
              src="/info_page/deli.jpg"
              alt=""
              class="image"
            >
          </div>
        </b-col>
        <b-col
          xs="12"
          sm="12"
          md="6"
          lg="6"
        >
          <div
            class="text_container"
            data-aos="zoom-in"
          >
            <h1>Shipping</h1>
            <p>
              {{ $t('info.deli')}}
            </p>

            <p class="deli_free">
              <span
                class="first_text"
                style="font-weight: bolder;font-family: 'Poppins';color: green;font-size: 20px"
              >{{$t('info.deli_free')}}</span> <span>( {{ $t('info.deli_region')}} ) </span>
            </p>

          </div>
        </b-col>
      </b-row>

    </b-container>
  </div>
</template>

<script>
import breadCumb from '@/components/mainpageBody/breadCumnb'
import cancel from '@/assets/svg/cancel.svg'
import rightArrow from '@/assets/svg/right-arrow.svg'


export default {
  components: {
    breadCumb,
    cancel,
    rightArrow
  },
  data () {
    return {
      viewImageURL: '',
      visible: false,
      breadCumbItems: [{
        text: 'home',
        link: '/'
      },
      {
        text: 'Promotions',
        link: '/promotions',
        active: true
      }]
    }
  },
  methods: {
    viewImage (url) {
      this.viewImageURL = url
    }
  },
  head: {
    title: 'Promotion',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Powerpac MM'
      }
    ]
  }
}
</script>

<style scoped>
.arrow_svg {
  height: 15px;
  width: 15px;
  margin-left: 10px;
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
.image_view_box {
  position: fixed;
  top: 0;
  left: 0;
  background: #534e4ec5;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.view_image {
  width: 55%;
  height: 90%;
}
.close_icon {
  width: 30px;
  height: 30px;
  position: absolute;
  top: 30px;
  right: 40px;
  cursor: pointer;
}
.promo_image {
  width: 100%;
  height: 100%;
}
h1,
h3 {
  font-family: "Poppins";
  font-weight: bolder;
}
.text_container {
  padding: 10px;
}
.br {
  display: block;
  margin: 40px 0;
}
.titleContainer {
  height: 500px;
  background-image: url("/promotions/tadingyut/background.jpg");
  text-align: center;
}
.image_container {
  height: auto;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.image_box {
  width: 47%;
  height: 215px;
  margin: 5px;
  cursor: pointer;
}
.image {
  height: 100%;
  width: 100%;
}
.maintitle {
  color: #fff;
  font-size: 45px;
  font-family: "Poppins";
  line-height: 500px;
  text-transform: uppercase;
  font-weight: bolder;
}
p {
  font-family: "Poppins";
}
.subtitle {
  color: #fff;
  font-size: 20px;
  font-family: "Poppins";
}

.divider {
  border: 1px solid #ffde00;
  width: 80px;
  margin: 0 auto;
}
@media screen and (max-width: 500px) {
  .maintitle {
    font-size: 25px;
  }
  .image_box {
    width: 47%;
    height: 190px;
    margin: 5px;
    background: green;
    margin: 2px;
  }
  .view_image {
    width: 100%;
    height: 55%;
  }
}
</style>
