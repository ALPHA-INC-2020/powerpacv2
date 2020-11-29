<template>
  <div class="filter_box">
    <div class="title">
      <h6>FILTER BY TYPE</h6>
    </div>
    <div class="filter_content">
      <div class="content_child">
        <a-radio-group v-model="value" @change="onChange">
          <div
            v-for="(filterItem, index) in filterItems"
            :key="index"
            class="brand_radio"
          >
            <a-radio :value="filterItem">
              {{ filterItem }}
            </a-radio>
            <br />
          </div>
        </a-radio-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    filterItems: {
      required: true,
      type: Array
    }
  },
  data() {
    return {
      value: "all"
    };
  },
  methods: {
    onChange(e) {
      $nuxt.$emit("filterData", e.target.value, "productType");
    }
  }
};
</script>
<style scoped>
.filter_box {
  width: 100%;
  min-height: 250px;
  border: 1px solid #f5f5f5;
}
.title {
  background: #f5f5f5;
  padding: 8px;
}
.content_child {
  padding: 20px;
}
.col {
  padding: 0px;
}
.brand_radio {
  padding: 10px;
}
</style>
