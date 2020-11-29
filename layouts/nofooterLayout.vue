<template>
  <div>
    <Topheader />
    <Header />
    <Nuxt />
  </div>
</template>
<script>
import Topheader from '@/components/header/topheader'
import Header from '@/components/header/header'
export default {
  components: {
    Header,
    Topheader
  }
}
</script>
