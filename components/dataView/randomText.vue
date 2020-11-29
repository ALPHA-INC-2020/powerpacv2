<template>
  <p>
    {{ productName }} {{ getRandomtext }}
  </p>
</template>

<script>
export default {
  props: {
    productName: {
      required: true
    }
  },
  data () {
    return {
      text: ['is a sensational customer favorite, and we hope you like it just as much.', 'was built with people like you in mind. Something to keep you happy. Every. Single. Day.', "is the product you didn't think you need, but once you have it, something you won't want to live without.", 'Be happy. Be Content. Be Satisfied. Live is too short to live without this.']
    }
  },
  computed: {
    getRandomtext () {
      return this.text[Math.floor(Math.random() * Math.floor(4))]
    }
  }
}
</script>
