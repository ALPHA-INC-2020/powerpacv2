<template>
  <div>
    <breadCumb :items="breadCumbItems" />
    <br>

    <div class="titleContainer">
      <span
        class="maintitle"
        data-aos="fade-in"
      > {{ $t('contactUs.header') }}</span>
    </div>
    <br>
    <br>
    <b-container class="text-center">
      <b-row>
        <b-col
          xs="3"
          sm="12"
          md="12"
          lg="3"
        >
          <div class="contactCard">
            <svg
              width="51"
              height="52"
              viewBox="0 0 51 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M23.1418 16.845C24.437 15.0995 24.9015 13.2598 23.4366 11.636C20.1492 7.03607 17.9384 4.19148 16.5516 2.82159C13.9152 0.217254 9.57828 0.569531 7.29496 2.81936C6.06857 4.02777 5.65339 4.44274 4.39415 5.72177C-2.61997 12.7397 1.6576 27.5752 13.029 38.9578C24.3977 50.3377 39.2319 54.6176 46.2608 47.5849C47.4228 46.4647 48.4066 45.4803 49.1825 44.6602C51.4201 42.2952 51.7598 38.1495 49.1678 35.4563C47.8389 34.0755 45.1263 31.9714 40.3328 28.5426C38.8647 27.2298 37.124 27.5143 35.5281 28.5613C34.7604 29.065 34.2018 29.5744 33.1469 30.6304L31.2312 32.5471C30.9789 32.7995 27.5529 31.0838 24.2273 27.7548C20.8998 24.4241 19.1852 20.9979 19.4364 20.7468C19.9542 20.229 20.5932 19.5897 21.3533 18.8288C21.688 18.4938 21.848 18.3316 22.0532 18.1159C22.4807 17.6666 22.8347 17.2588 23.1418 16.845ZM34.7648 36.0827L36.6808 34.1656C37.2614 33.5845 37.6377 33.2272 37.9437 32.9808C42.1429 35.9963 44.5748 37.8924 45.5681 38.9246C46.1645 39.5442 46.0719 40.675 45.5534 41.2229C44.8359 41.9813 43.9038 42.914 42.7599 44.0173C38.2147 48.5643 26.2402 45.1095 16.5633 35.4231C6.88336 25.7336 3.4302 13.7573 7.94098 9.24404C9.19514 7.97027 9.5925 7.57312 10.8014 6.38196C11.2546 5.93534 12.4893 5.83506 13.0407 6.37974C14.1083 7.43442 16.0888 9.9703 19.0023 14.0287C18.8514 14.2159 18.6631 14.4275 18.4338 14.6684C18.2656 14.8453 18.1254 14.9874 17.8189 15.2941C17.0594 16.0544 16.4211 16.6931 15.9039 17.2102C12.646 20.4678 15.4205 26.0121 20.6929 31.2897C25.9617 36.5636 31.5081 39.3412 34.7648 36.0827Z"
                fill="#4685CC"
              />
            </svg>
            <h6 class="contactTitle">
              Phone
            </h6>
            <div class="contactText">
              <span> Phone : +95 9 444 851066 ~ 77 </span>
              <span class="br" />
              <span> Viber : + 95 9 444 851077 </span>
            </div>
          </div>
        </b-col>
        <div class="vl d-none d-md-block" />
        <b-col
          xs="3"
          sm="12"
          md="12"
          lg="3"
        >
          <div class="contactCard">
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M32.7405 45.6386L30 48.0315L27.2595 45.6386C17.4711 37.0915 12.5 29.528 12.5 22.5C12.5 12.5535 20.2587 5 30 5C39.7413 5 47.5 12.5535 47.5 22.5C47.5 29.528 42.5289 37.0915 32.7405 45.6386ZM14.2139 37.0086C15.2404 38.414 16.3838 39.8434 17.6437 41.2975C12.9881 42.3461 10 43.8343 10 45.0001C10 47.0175 18.9479 50.0001 30 50.0001C41.0521 50.0001 50 47.0175 50 45.0001C50 43.8343 47.0119 42.3461 42.3563 41.2975C43.6162 39.8434 44.7596 38.414 45.7861 37.0086C51.4082 38.7146 55 41.451 55 45.0001C55 51.267 43.8007 55.0001 30 55.0001C16.1993 55.0001 5 51.267 5 45.0001C5 41.451 8.59185 38.7146 14.2139 37.0086ZM30 10C37.0094 10 42.5 15.3454 42.5 22.5C42.5 27.6174 38.4317 33.9147 30 41.3901C21.5683 33.9147 17.5 27.6174 17.5 22.5C17.5 15.3454 22.9906 10 30 10ZM30 15C34.1421 15 37.5 18.3579 37.5 22.5C37.5 26.6421 34.1421 30 30 30C25.8579 30 22.5 26.6421 22.5 22.5C22.5 18.3579 25.8579 15 30 15ZM27.5 22.5C27.5 21.1193 28.6193 20 30 20C31.3807 20 32.5 21.1193 32.5 22.5C32.5 23.8807 31.3807 25 30 25C28.6193 25 27.5 23.8807 27.5 22.5Z"
                fill="#4685CC"
              />
            </svg>
            <h6 class="contactTitle">
              Address
            </h6>
            <div class="contactText">
              <span> No.68, Yadanar 1st Street, 68 Quarter, <br> Dagon Seikkan Township Yangon, Myanmar</span>
            </div>
          </div>
        </b-col>
        <div class="vl d-none d-md-block" />
        <b-col
          xs="3"
          sm="12"
          md="12"
          lg="3"
        >
          <div class="contactCard">
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.5 7.5H52.5C55.2614 7.5 57.5 9.73858 57.5 12.5V47.5C57.5 50.2614 55.2614 52.5 52.5 52.5H7.5C4.73858 52.5 2.5 50.2614 2.5 47.5V12.5C2.5 9.73858 4.73858 7.5 7.5 7.5ZM7.5 24.0453V47.5H52.5V24.0463L29.9999 35.2964L7.5 24.0453ZM7.5 18.455L30 29.7062L52.5 18.4562V12.5H7.5V18.455Z"
                fill="#4685CC"
              />
            </svg>
            <h6 class="contactTitle">
              Email
            </h6>
            <div class="contactText">
              <span> sales@unionpowerpac.com.mm</span>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <div class="subtitleContainer">
      <p class="subtitle">
        Get In Touch With us !
      </p>
      <small class="subtitle_small"> If You Got Any Questions <br> Please Do Not Hesitate To Send Us A Message.</small>
    </div>

    <!-- form -->
    <b-container class="p-0">
      <b-row no-gutters>
        <b-col
          xs="12"
          sm="12"
          md="6"
          lg="6"
        >
          <div class="input_container">
            <input
              id="name"
              type="text"
              name="name"
              placeholder="name.."
              v-model="form.name"
              class="contact_input"
            >
            <input
              id="email"
              type="text"
              name="email"
              placeholder="email"
              v-model="form.email"
              class="contact_input"
            >
            <textarea
              id="subject"
              name="subject"
              placeholder="Content"
              style="height:200px"
              v-model="form.content"
              class="contact_input"
            />
            <input
              id="phone"
              type="text"
              name="phone"
              v-model="form.phone_number"
              class="contact_input"
              placeholder="phone number (optional)"
            >
            <Button :loading="loading" @clicked="sendMail()" buttonText="Send" loadingText="Sending Message"/>
            <SuccessAlert success_text="Thanks for contacting us! We will reply you back soon." v-if="isSuccess"/>
            <ErrorAlert error_text="Error on sending message! We are fixing it. Sorry for inconvenience" v-if="hasError"/>
          </div>

        </b-col>
        <b-col
          xs="12"
          sm="12"
          md="6"
          lg="6"
        >
          <div class="input_container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.600282590793!2d96.24977874916544!3d16.846174448986748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c18d3f7b9f0263%3A0x7137102605c14a2e!2sUNION%20POWERPAC%20GROUP%20LTD!5e0!3m2!1sen!2smm!4v1604159941224!5m2!1sen!2smm"
              width="100%"
              height="400px"
              frameborder="0"
              style="border:0;"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>

        </b-col>
      </b-row>

    </b-container>
  </div>
</template>

<script>


import breadCumb from '@/components/mainpageBody/breadCumnb'
import Button from '@/components/general/button'
import Contact from '@/helpers/apis/Contact'
import SuccessAlert from '@/components/general/successAlert.vue'
import ErrorAlert from '@/components/general/errorAlert.vue'

export default {

  components: {
    breadCumb,
    Button,
    SuccessAlert,
    ErrorAlert
  },
  data () {
    return {
      isSuccess: false,
      hasError: false,
      loading: false,
      form: {
              name: '',
              email: '',
              phone_number: '',
              content: '',
      },
      breadCumbItems: [{
        text: 'home',
        link: '/'
      },
      {
        text: 'contact us',
        link: '/collections/allFans',
        active: true
      }]
    }
  },
  head: {
    title: 'Contact Us',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Powerpac MM'
      }
    ]
  },
  methods: {
    setLoading(value) {
      this.loading = value;
    },
    setHasError(value) {
      this.hasError = value;
    },
    setSuccess(value) {
      this.isSuccess = value
    },
    async sendMail () {
      const { name, email, phone_number, content } = this.form;

      if(name == '' || email == '' || phone_number == '' || content == '' ){
        return
      }
        this.setLoading(true);
        var { data } = await Contact.sendMsg(this.form);
        const { success } = await data;
        success ? this.setSuccess(true) : this.hasError(true);
        await this.clearForm();

        await this.setLoading(false)
     
    },
    clearForm () {
      this.form.name = ''
      this.form.email = ''
      this.form.content = ''
      this.form.phone_number = ''
    }
  },
}
</script>

<style scoped>
.contact_input {
   width: 100%;
  height: 40px;
  border: none;
  outline: none;
  border: 1px solid #4685cc;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 20px;
  margin: 10px 0px;
}
.send_button_disable {
  opacity: 0.8;
}
.br {
  display: block;
  margin: 20px 0;
}
.divider {
  border: 1px solid #ffde00;
  width: 80px;
  margin: 0 auto;
}
.vl {
  border: 0.5px solid rgba(0, 0, 0, 0.472);
  height: 275px;
  left: 30%;
  top: 30;
}
.titleContainer {
  height: 500px;
  background-color: #4685cc;
  text-align: center;
  width: 100%;
}
.maintitle {
  color: #fff;
  font-size: 45px;
  font-family: "Poppins";
  line-height: 500px;
}
.subtitleContainer {
  height: 200px;
  text-align: center;
  padding-top: 5%;
}
.subtitle {
  color: #000;
  font-size: 20px;
  font-family: "Poppins";
}
.subtitle_small {
  color: grey;
  font-family: "Poppins";
}
.contactContainer {
  height: 350px;
  width: 100%;
  word-wrap: break-word;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.contactCard {
  transition: 0.3s;
  height: 300px;
  width: 100%;
  text-align: center;
  padding-top: 20px;
}
.contactTitle {
  padding-top: 10px;
  color: #000;
}
.contactText {
  padding-top: 35px;
  color: #000;
  font-size: 16px;
}
/* form */
* {
  box-sizing: border-box;
  justify-content: center;
}
.input_container {
  width: 90%;
  padding: 10px;
  margin: 0 auto;
  height: auto;
  padding-top: 50px;
}
.input {
  width: 100%;
  padding: 12px;
  border: 1px solid #4685cc;
  outline: none;
  margin-bottom: 10px;
}
.container {
  border-radius: 5px;
  width: 100%;
  align-items: center;
}

@media screen and (max-width: 500px) {
  .contactContainer {
    height: 100%;
    width: 100%;
    flex-direction: column;
  }
  .contactCard {
    transition: 0.3s;
    height: 300px;
    text-align: center;
    padding-top: 20px;
    width: 100%;
  }
  .subtitleContainer {
    height: 100px;
    text-align: center;
    padding-top: 10%;
  }
  .content {
    width: 80%;
    height: 200px;
    border: none;
    border: 1px solid #4685cc;
    outline: none;
    padding: 10px;
    font-family: "Poppins";
  }
}
</style>