<template>
  <div>
    <nuxt-link
      v-for="(image,index) in images"
      :key="index"
      :to="localePath(image.link)"
    >
      <img
        :src="image.imageURL"
        alt=""
        class="image"
        data-aos="fade-in"
      >
      <br>
      <br>
      <h4 data-aos="fade-in">
        -----------------------------------
      </h4>
      <br>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      images: [
        {
          imageURL: 'https://i.ibb.co/8ssg67F/IMG-4355.jpg',
          link: '/collections/insect_repellent'
        },
        {
          imageURL: '/fulllbanner_one.png',
          link: '/collections/fridge'
        }
      ]
    }
  }
}
</script>

<style scoped>
h4 {
  text-align: center;
}
.image {
  width: 100%;
  height: 500px;
}
@media screen and (max-width: 991px) {
  .image {
    height: 210px;
  }
}
@media screen and (max-width: 460px) {
  .image {
    height: 200px;
  }
}
</style>
