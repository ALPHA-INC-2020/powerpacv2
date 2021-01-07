<template>
  <div class="search-container mt-3">
    <input
      type="text"
      class="search"
      v-model="search"
    />
    <cancel
      class="cancel_svg"
      @click="search = ''"
      v-show="search != ''"
    />
    <div class="click_icon">
      <search />
    </div>
    <div class="search_result">
      <!-- <div
        v-show="search != ''"
        v-for="(item, index) in filteredList.length > 10
          ? filteredList.slice(0, 10)
          : filteredList"
        :key="index"
        class="search_result_item fade-in"
        @click="routeToPath(item.type, item.navigator)"
      >
        <img
          :src="'/homeapplicant/' + item.type + '/' + item.id + '/1.png'"
          alt=""
          class="search_image"
        />
        <span style="font-size: 13px">{{
          item.productName.toLowerCase()
        }}</span>
        <hr v-show="filteredList.length > 1" />
      </div> -->
      <!-- <div
        v-if="search != '' && filteredList.length < 1"
        class="search_result_item"
      >
        no product found!
      </div> -->
      <!-- <div
        class="see_all"
        v-if="search != '' && filteredList.length > 10"
      >
        <p class="see_all_text">
          see all results ( {{ filteredList.length }} )
        </p>
      </div> -->
    </div>
  </div>
</template>
<script>
import search from "@/assets/svg/search.svg";
import cancel from "@/assets/svg/cancel.svg";

export default {
  data () {
    return {
      search: "",
      bindedArray: []
    };
  },
  components: {
    search,
    cancel
  },
  created () {

    console.log(this.$store.getters)
    // this.bindedArray = [
    //   ...fan,
    //   ...iron,
    //   ...insect_repellent,
    //   ...vacuum,
    //   ...fridge,
    //   ...jug,
    //   ...cooker,
    //   ...steamboat,
    //   ...blender,
    //   ...chopper,
    //   ...oven,
    //   ...toaster,
    //   ...fryer,
    //   ...airpot
    // ];
  }
  // methods: {
  //   async routeToPath(type, navigator) {
  //     await this.$router.push({
  //       path: this.localePath("/collections/" + type + "/" + navigator)
  //     });
  //     this.search = "";
  //   }
  // },
  // computed: {
  //   filteredList() {
  //     return this.bindedArray.filter(product => {
  //       return product.productName
  //         .trim()
  //         .toLowerCase()
  //         .includes(this.search.toLowerCase().trim());
  //     });
  //   }
  // }
};
</script>
<style scoped>
.cancel_svg {
  width: 12px;
  height: 12px;
  position: absolute;
  right: 20%;
  top: 18px;
  cursor: pointer;
}
hr {
  margin: 4px;
}
.fade-in {
  animation: fadeIn ease 0.3s;
  -webkit-animation: fadeIn ease 0.3s;
  -moz-animation: fadeIn ease 0.3s;
  -o-animation: fadeIn ease 0.3s;
  -ms-animation: fadeIn ease 0.3s;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-moz-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-o-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-ms-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.see_all_text {
  padding: 0px 10px;
  font-weight: bolder;
}
.search_image {
  width: 20%;
  float: left;
  height: 100%;
  padding-right: 10px;
}
.search_result_item {
  width: 100%;
  height: auto;
  padding: 2px 10px;
  cursor: pointer;
  float: left;
  transition: 0.2s ease-in-out;
}
.search_result {
  z-index: 999;
  height: auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 300px;
  position: absolute;
  background: white;
  top: 70%;
}
.search_result_item:hover {
  background: rgb(212, 208, 208);
}
.search-container {
  width: 98%;
  height: 100%;
  display: flex;
  padding-bottom: 30px;
  margin: 0 auto;
  position: relative;
}
.search {
  width: 85%;
  float: left;
  border: none;
  border: 1px solid grey;
  height: 50px;
  outline: none;
  padding: 10px;
  font-family: 'Poppins';
  position: relative;
}
.click_icon {
  text-align: center;
  line-height: 50px;
  height: 50px;
  width: 15%;
  color: white;
  float: left;
  background-color: #f5dd0091;
  cursor: pointer;
}
.click_icon:hover {
  background: #f5de00;
}
</style>
