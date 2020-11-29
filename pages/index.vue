<template>
  <div>
    <Banner />
    <BrandCard />
    <NewReleaseProductCard />
    <HomeGreat />
    <bannerFull />
    <trendingNow />
    <aboutPowerPac />
    <review />
    <retailers />
  </div>
</template>

<script>
import BrandCard from '@/components/mainpageBody/brandcard'
import NewReleaseProductCard from '@/components/mainpageBody/newreleasedproductcard'
import trendingNow from '@/components/mainpageBody/tranding'
import Banner from '@/components/mainpageBody/banner'
import homeGreat from '@/components/mainpageBody/homeGreat'
import bannerFull from '@/components/mainpageBody/bannerFull'
import aboutPowerPac from '@/components/mainpageBody/aboutPowerPac'
import review from '@/components/mainpageBody/review'
import retailers from '@/components/mainpageBody/retailers'
export default {
  components: {
    BrandCard,
    NewReleaseProductCard,
    Banner,
    homeGreat,
    bannerFull,
    aboutPowerPac,
    review,
    retailers,
    trendingNow
  },
  created () {
    this.$store.dispatch("productStore/setNewReleasedProducts");
    this.$store.dispatch("productStore/setPopularProducts");
    this.$store.dispatch("productStore/setNewReleasedProducts");
  },
  head: {
    title: 'Home',
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
