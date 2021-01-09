<template>
  <div>
    <breadCumb :items="breadCumbItems" />
    <br>
    <div class="titleContainer">
      <span
        class="maintitle"
        data-aos="fade-in"
      > {{ $t('faq.header')}} </span>
    </div>
    <b-container v-if="loading">loading</b-container>
    <b-container class="mt-5 mb-5" v-else>
      <b-row>
        <b-col cols="12">
          <span
            v-for="(faq,index) in allFaqs"
            :key="index"
          >
            <div
              class="quesBox"
              @click="toggleCollapses(`collapse-${faq.id}`)"
            >
              {{ faq.question }}
            </div>

            <!-- Elements to collapse -->
            <b-collapse
              :id="'collapse-'+faq.id"
              class="mt-2"
            >
              <b-card>{{ faq.answer }}</b-card>
            </b-collapse>
          </span>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

import breadCumb from '@/components/mainpageBody/breadCumnb'
import { faqs_en } from '@/static/content/faq_en'
import { faqs_mm } from '@/static/content/faq_mm'
export default {
  components: {
    breadCumb
  },
  created() {
    this.loading = true;
    this.$store.dispatch('faqStore/setAllFaqs').then(() => {
      this.allFaqs = this.$store.getters['faqStore/getFaqs']
      this.loading = false;
    })
  },
  data () {
    return {
      faqs_en,
      faqs_mm,
      loading: false,
      allFaqs: [],
      faqs: this.$i18n.locale === 'mm' ? faqs_mm : faqs_en,
      text: `
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
          brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
          tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
          assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
          wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
          vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
          synth nesciunt you probably haven't heard of them accusamus labore VHS.
        `,
      breadCumbItems: [{
        text: 'home',
        link: '/'
      },
      {
        text: 'faq',
        link: '/collections/allFans',
        active: true
      }]
    }
  },
  methods: {
    toggleCollapses (id) {
      this.$root.$emit('bv::toggle::collapse', id)
    }
  },
  head: {
    title: 'faq',
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
.titleContainer {
  height: 500px;
  background-color: #4685cc;
  text-align: center;
}
.maintitle {
  color: #fff;
  font-size: 25px;
  width: 100%;
  line-height: 500px;
  font-family: "Poppins";
}
.subtitle {
  color: #fff;
  font-size: 20px;
  font-family: "Poppins";
}
.quesBox {
  min-height: 50px;
  width: 100%;
  border: 1px solid #4685cc;
  background-color: #4685cc;
  outline: none;
  cursor: pointer;
  color: white;
  padding: 10px 20px;
  margin-top: 10px;
}
.footer-container {
  height: 300px;
  background-color: #4685cc;
}
.lefttext-container {
  height: 100px;
  padding: 10px 20px 20px;
  font-family: "Poppins";
  color: #fff;
  font-size: 8px;
  background-color: blue;
}
.img-container {
}
.logo_imagebox {
  padding: 0px 45px;
}
.text-box {
  width: 80%;
  height: 80%;
  background-color: pink;
}
@media screen and (max-width: 500px) {
  .logo_imagebox {
    height: 30px;
    padding: 0px 15px;
  }
}
</style>
