<template>
  <div>
    <Topheader />
    <Header />
    <Nuxt />
    <footerCustom />

  </div>
</template>
<script>
import Topheader from '@/components/header/topheader'
import Header from '@/components/header/header'
import footerCustom from '@/components/mainpageBody/footer'

export default {
  components: {
    Header,
    Topheader,
    footerCustom

  }
}
</script>
