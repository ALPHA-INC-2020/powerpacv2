<template>
  <div>
    <breadCumb :items="breadCumbItems" />
    <br>
    <div class="titleContainer">
      <span
        class="maintitle"
        data-aos="fade-in"
      > {{ $t('info.header') }}</span>
    </div>
    <span class="br" />
    <b-container>

      <div
        class="text_container"
        data-aos="zoom-in"
      >
        <p class="main_title text-center">
          {{ $t('info.warranty_period')}}
        </p>
        <p
          class="term_c"
          @click="showModal"
        >terms and conditions</p>
      </div>

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
              src="/info_page/warranty.png"
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
            <h3>Warranty Service Information</h3>
            <p>
              {{ $t('info.WSI')}}
            </p>
          </div>
        </b-col>
      </b-row>
      <br>
      <b-row no-gutters>
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
            <h3>Refund</h3>
            <p>
              {{ $t('info.refund')}}
            </p>
          </div>
        </b-col>
        <b-col
          xs="12"
          sm="12"
          md="6"
          lg="6"
        >
          <div class="image_container">
            <img
              data-aos="zoom-in"
              src="/info_page/refund.png"
              alt=""
              class="image"
            >
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
    <a-modal
      v-model="visible"
      title=" In these Terms & Conditions, the following words have the following meanings:"
      @ok="handleOk"
    >
      <template slot="footer">
        <a-button
          key="submit"
          type="primary"
          :loading="loading"
          @click="handleOk"
        >
          OK
        </a-button>
      </template>
      <p>
        {{$t('info.term')}}
      </p>
    </a-modal>
  </div>
</template>

<script>
import breadCumb from '@/components/mainpageBody/breadCumnb'

export default {
  components: {
    breadCumb
  },
  data () {
    return {
      visible: false,
      breadCumbItems: [{
        text: 'home',
        link: '/'
      },
      {
        text: 'Information',
        link: '/collections/info',
        active: true
      }]
    }
  },
  methods: {
    showModal () {
      this.visible = true;
    },
    handleOk (e) {
      console.log(e);
      this.visible = false;
    },
  },
  head: {
    title: 'Information',
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
.term_c {
  color: grey;
  font-size: 10px;
  text-decoration: underline;
  cursor: pointer;
  text-align: center;
  transition: 0.3s ease-in-out;
}
.term_c:hover {
  color: black;
}
.main_title {
  color: green;
  font-weight: bold;
  font-size: 30px;
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
  background-color: #4685cc;
  text-align: center;
}
.image_container {
  height: 300px;
  width: 100%;
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
  .cardContainer {
    width: 100%;
    height: 100%;
    padding: 10px;
    flex-direction: column;
  }
  .aboutCard {
    width: 100%;
    margin-top: 10px;
    padding: 10px;
  }
}
</style>
