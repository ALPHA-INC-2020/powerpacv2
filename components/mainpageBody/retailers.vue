<template>
  <b-container class="mt-5">
    <h4 class="sub_title text-center">
      ONLINE RETAILERS
    </h4>
    <hr class="divider">
    <carousel
      :per-page="1"
      pagination-active-color="#4685CC"
      :scroll-per-page="true"
      :per-page-custom="[[300, 2], [500,2], [991, 5]]"
      class="pt-5"
    >
      <slide
        v-for="(retailer,index) in retailers"
        :key="index"
      >
        <div class="retail_card">
          <a
            :href="retailer.link"
            target="_blank"
          >
            <img
              :src="retailer.imageURL"
              alt="retailer"
              class="retail_image"
            >
          </a>
        </div>
      </slide>
    </carousel>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      retailers: [
        {
          imageURL: 'http://laz-img-cdn.alicdn.com/images/ims-web/TB1C8nrfCzqK1RjSZFpXXakSXXa.png',
          link: 'https://www.shop.com.mm/catalog/?q=powerpac&_keyori=ss&from=input&spm=a2a0e.home.search.go.672a7fe4miNoab'
        }, {
          imageURL: 'https://www.rgo47.com/assets/images/logo.png',
          link: 'https://www.rgo47.com/product-list?search=powerpac'
        }, {
          imageURL: 'https://d3k3oay9szw8o1.cloudfront.net/images/new_images/logo.png',
          link: 'https://spree.com.mm/index.php?ctl=store&id=812'
        }, {
          imageURL: 'https://i.ibb.co/8z691sd/omyanamr-logo-14525932511.jpg',
          link: 'http://www.omyanmar.com/en/search?controller=search&orderby=position&orderway=desc&search_query_cat=0&search_query=powerpac&submit_search='
        }, {
          imageURL: 'https://www.iloveshopping.com.mm/logo.png',
          link: 'http://iloveshopping.com.mm/products/search?keywords=powerpac'
        }
      ]
    }
  }
}
</script>

<style scoped>
.retail_card {
  margin: 0 auto;
  width: 80%;
  height: 100px;
  padding: 20px;
  border: 1px solid rgba(128, 128, 128, 0.507);
  border-radius: 2px;
  cursor: pointer;
}
.retail_card:hover .retail_image {
  opacity: 0.8;
}
.retail_image {
  width: 100%;
  height: 100%;
  transition: 0.3s ease-in-out;
}
</style>
