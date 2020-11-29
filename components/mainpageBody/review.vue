<template>
  <b-container class="mt-5">
    <h4
      class="sub_title text-center"
      data-aos="fade-in"
    >
      REVIEWS AND COMMENTS
    </h4>
    <hr class="divider">
    <carousel
      :per-page="1"
      pagination-active-color="#4685CC"
      :scroll-per-page="true"
      :per-page-custom="[[300, 1], [500,1], [991, 3]]"
      class="pt-5"
    >
      <slide
        v-for="(review,index) in reviews"
        :key="index"
      >
        <div
          class="review_card"
          data-aos="zoom-in"
        >
          <!--  -->
          <h5 class="reviewer_name">
            {{ review.customerName }}
          </h5>
          <div class="review_text">
            {{ review.reviewContent }}
          </div>
          <div class="review_rating">
            <b-form-rating
              id="rating-lg-no-border"
              v-model="rating"
              readonly
              no-border
              variant="warning"
              class="rating_star"
            />
            <div class="media">
              facebook
            </div>
          </div>
        </div>
      </slide>
    </carousel>
  </b-container>
</template>

<script>
import { reviews } from '@/static/content/review'
export default {
  data () {
    return {
      reviews,
      rating: 5
    }
  }
}
</script>

<style scoped>
.review_rating {
  padding: 0px;
  width: 90%;
  position: absolute;
  bottom: 10px;
  display: flex;
  justify-content: space-between;
}
.rating_star {
  width: 150px;
}
.media {
  height: 40px;
  line-height: 40px;
}

.review_card {
  position: relative;
  width: 95%;
  min-height: 250px;
  border: 1px solid #4685cc;
  margin: 0 auto;
  padding: 30px 15px;
}
.divider {
  border: 1px solid #4685cc;
  width: 80px;
  margin: 0 auto;
}
</style>
