<template>
  <div>
    <div class="heading">
      {{ headerContent.title }}
    </div>
    <b-row>
      <b-col lg="6" md="6" sm="12" cols="12">
        <div class="content_image_container">
          <img :src="headerContent.imageURL" alt="" class="content_image">
        </div>
      </b-col>
      <b-col lg="6" md="6" sm="12" cols="12">
        <div class="content_text_cotainer">
          <div class="content_text_header">
            {{ headerContent.header }}
          </div>
          <div class="content_text_para">
            {{ headerContent.content }}
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  props: {
    contentInfo: {
      type: Object,
      required: true
    },
    route: {
      type: String,
      required: true
    }
  },
  computed: {
    headerContent () {
      return this.contentInfo[this.route]
    }
  }
}
</script>

<style scoped>
.heading{
  font-weight: bold;
  font-size: 25px;
}
.content_image_container{
  width: 100%;
  height: 150px;
}
.content_text_cotainer{
  float: left;
  width: 100%;
  height: 100%;
  padding: 14px 10px;
}
.content_image{
  width: 100%;
  height: 100%;
  border-radius: 0px 40px 40px 0px;
}
.content_text_header{
  font-weight: bold;
  padding-bottom: 5px;
}
</style>
