<template>
    <button class="custom_btn" :disabled="loading" :class="loading ? 'disable' : null" @click="onClickButton()">{{loading ? loadingText : buttonText}}</button>
</template>

<script>
export default {
    props: {
        buttonText: {
            type: String, 
            required: true
        },
        loading: {
            type: Boolean,
            default: false
        },
        loadingText: {
          type: String,
          default: "Loading"
        }
    },
    methods: {
        onClickButton (event) {
             this.$emit('clicked')
    }
    }
}
</script>

<style scoped>
.custom_btn {
  margin-top: 43px;
  width: 100%;
  height: 50px;
  background: #4685cc;
  color: white;
  border-radius: 3px;
  line-height: 50px;
  text-align: center;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  outline: none;
  border: none;
}
.custom_btn:hover {
  background: #2679d8;

}
.disable {
  opacity: 0.4;
 cursor: not-allowed;

  pointer-events: none;
}
</style>