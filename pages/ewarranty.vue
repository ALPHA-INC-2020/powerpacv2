<template>
  <div>
    <breadCumb :items="breadCumbItems" />
    <div class="e_container">
      <b-container class="p-0">
        <b-row
          no-gutters
          align-v="center"
        >
          <b-col
            xs="12"
            sm="12"
            md="6"
            lg="6"
          >
            <img
              src="/register.png"
              alt=""
              class="image"
              data-aos="fade-right"
            >
          </b-col>
          <b-col
            xs="12"
            sm="12"
            md="6"
            lg="6"
          >
            <div
              class="content_container"
              data-aos="zoom-in"
            >
              <h2 class="title">eWarranty Registration</h2>
              <p class="para">မိသားစုတိုင်းအတွက် အမှန်ကန်ဆုံးသော လိုအပ်ချက် PowerPac</p>
              <div class="demo">
                <a
                  class="button button02"
                  href="https://form.jotform.com/203029280125445"
                  target="_blank"
                >Register Now
                  <rightArrow class="arrow_svg" />
                </a>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>

</template>
<script>
import breadCumb from '@/components/mainpageBody/breadCumnb'
import rightArrow from '@/assets/svg/right-arrow.svg'
export default {
  components: {
    breadCumb,
    rightArrow
  },
  data () {
    return {
      breadCumbItems: [{
        text: 'home',
        link: '/'
      },
      {
        text: 'eWarranty',
        link: '/collections/ewarranty',
        active: true
      }]
    }
  }
}
</script>
<style scoped>
.title {
  font-weight: bold;
  font-family: "Poppins";
}
.image {
  width: 100%;
  height: 100%;
}
.arrow_svg {
  height: 15px;
  width: 15px;
  margin-left: 10px;
}
.content_container {
  padding: 40px;
}
.e_container {
  width: 100%;
  min-height: 500px;
}
.buy_now {
  margin-top: 43px;
  width: 100px;
  height: 50px;
  background: #4685cc;
  color: white;
  border-radius: 3px;
  line-height: 50px;
  text-align: center;
  transition: 0.2s ease-in-out;
  cursor: pointer;
}
.button {
  position: relative;
  display: inline-block;
  margin-top: 20px;
  padding: 0.8em 1em;
  border: 2px solid #4685cc;
  color: #333;
  font-size: 18px;
  font-family: "Poppins";
  font-weight: 400;
  text-align: center;
  text-decoration: none;
  transition: 0.3s;
}
.button::before {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  content: "";
  background: #4685cc;
  transition: transform 0.3s;
}
.button:hover {
  color: #fff;
}
.button:hover .arrow_svg {
  fill: #fff;
}

.button02::before {
  transform-origin: left top;
  transform: scale(0, 1);
}
.button02:hover::before {
  transform-origin: left top;
  transform: scale(1, 1);
}
</style>