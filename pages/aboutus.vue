<template>
  <div>
    <breadCumb :items="breadCumbItems" />
    <br>
    <div class="titleContainer">
      <p
        class="maintitle"
        data-aos="fade-in"
      > {{ $t('aboutUs.header') }}
      </p>
      <span class="br" />

    </div>
    <span class="br" />
    <b-container>
      <b-row align-h="center">
        <b-col
          sm="12"
          xs="12"
          lg="5"
          md="5"
        >
          <img
            src="/aboutus.png"
            alt=""
            class="aboutius_illu"
            data-aos="fade-right"
          >
        </b-col>
        <b-col
          sm="12"
          xs="12"
          lg="7"
          md="7"
        >
          <div
            class="aboutUs_textContainer"
            data-aos="zoom-in"
          >
            <h4 class="titleText">
              Why Choose Us?
            </h4>
            <div class="child_text_container">
              <b-row style="min-height: 70px;">
                <b-col cols="2">
                  <company class="_svg" />
                </b-col>
                <b-col cols="10">
                  <p class="text_para">
                    {{ $t('aboutUs.about') }}
                  </p>
                </b-col>
              </b-row>
              <b-row style="min-height: 70px;">
                <b-col cols="2">
                  <mission class="_svg" />
                </b-col>
                <b-col cols="10">
                  <p class="text_para">
                    {{ $t('aboutUs.mission') }}
                  </p>
                </b-col>
              </b-row>
              <b-row style="min-height: 70px;">
                <b-col cols="2">
                  <story class="_svg" />
                </b-col>
                <b-col cols="10">
                  <p class="text_para">
                    {{ $t('aboutUs.story') }}
                  </p>
                </b-col>
              </b-row>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import breadCumb from '@/components/mainpageBody/breadCumnb'
import company from '@/assets/svg/company.svg'
import mission from '@/assets/svg/mission.svg'
import story from '@/assets/svg/story.svg'
export default {
  components: {
    breadCumb,
    company,
    mission,
    story
  },
  data () {
    return {
      breadCumbItems: [{
        text: 'home',
        link: '/'
      },
      {
        text: 'about us',
        link: '/collections/allFans',
        active: true
      }]
    }
  },
  head: {
    title: 'About Us',
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
.child_text_container {
  padding: 50px;
}
.aboutius_illu {
  width: 100%;
  height: 300px;
}
._svg {
  fill: #4685cc;
  height: 40px;
  width: 40px;
}
.aboutUs_textContainer {
  width: 100%;
  min-height: 500px;
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
.maintitle {
  color: #fff;
  font-size: 45px;
  font-family: "Poppins";
  line-height: 500px;
}
.subtitle {
  color: #fff;
  font-size: 20px;
  font-family: "Poppins";
}
.cardContainer {
  height: 600px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 10%;
}
.aboutCard {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 100%;
  height: 300px;
  background-color: #4685cc;
  text-align: center;
  padding-top: 20px;
}
.aboutusText {
  font-size: 16px;
  padding-top: 30px;
  color: #fff;
}
.titleText {
  padding-top: 10px;
  text-align: center;
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
  .maintitle {
    font-size: 23px;
  }
}
</style>
