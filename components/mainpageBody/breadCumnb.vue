<template>
  <div class="bread_cumb_container">
    <div class="container">
      <a-breadcrumb class="ant-bread">
        <a-breadcrumb-item
          v-for="(item,index) in items"
          :key="index"
        >
          <nuxt-link
            :to="localePath(item.link)"
            class="link_text"
          >
            {{ item.text }}
          </nuxt-link>
        </a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <!-- <b-breadcrumb :items="items" class="container bg-light" /> -->
  </div>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.bread_cumb_container {
  width: 100%;
  min-height: 30px;
  background: #f8f9fa;
}
li {
  height: 100%;
  float: left;
  padding: 0px;
}
.active {
  color: black;
}
.ant-bread {
  padding-top: 5px;
}
.link_text {
  font-size: 12px;
}
</style>
