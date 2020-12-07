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
    <div
      class="titleContainer"
      :style="{ 'background-image': 'url(' + banner_background + ')' }"
    >
      <span
        class="maintitle"
        data-aos="fade-in"
      > {{ banner_title }}</span>
    </div>
    <span class="br" />
    <b-container>
      <div
        v-for="(item, index) in allPromotions"
        :key="index"
      >
        <b-row
          no-gutters
          align-v="center"
          class="mt-5"
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
              <div
                class="image_box"
                v-for="(imageSrc, index) in item.imageURLs"
                :key="index"
              >
                <img
                  :src="imageSrc"
                  class="promo_image"
                  alt=""
                  @click="viewImage(imageSrc)"
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
              <h3 style="line-height: 40px">{{ item.title}}</h3>
              <p
                style="padding: 10px"
                v-html="item.content"
              >

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
      </div>

      <b-row
        no-gutters
        class="mt-5"
      >
        <b-col
          xs="12"
          sm="12"
          md="6"
          lg="6"
        >
          <div class="image_container">
            <img
              data-aos="zoom-in"
              src="/info_page/deli.png"
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
import Promotion from '@/helpers/apis/Promotions'


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
      banner_background: '',
      banner_title: 'POWEPAC MYANMAR',
      allPromotions: [],
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
  mounted () {
    Promotion.getBanner().then(res => {
      if (res.status === 200) {
        this.banner_title = res.data.banner_title;
        this.banner_background = res.data.image

      }
    })

    Promotion.getAllActivePromotions().then(res => {
      if (res.status === 200) {
        this.allPromotions = res.data
      }
    })
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
  font-family: 'Poppins';
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
  content: '';
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
  font-family: 'Poppins';
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
  text-align: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-color: #4685cc;
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
  font-family: 'Poppins';
  line-height: 500px;
  text-transform: uppercase;
  font-weight: bolder;
}
p {
  font-family: 'Poppins';
}
.subtitle {
  color: #fff;
  font-size: 20px;
  font-family: 'Poppins';
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
