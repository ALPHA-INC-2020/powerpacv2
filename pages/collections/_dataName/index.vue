<template>
  <div>
    <breadCumb :items="breadCumbItems" />
    <br />
    <b-container>
      <b-row>
        <b-col
          lg="3"
          md="3"
          sm="0"
          cols="0"
          class="d-none d-lg-block d-md-block"
        >
          <filterBoxWithBrand :filter-items="filterItemBrand" />
          <br />
          <filterBoxWithProductType :filter-items="filterItemProductType" />
          <popularBox data-aos="fade-in" />
        </b-col>
        <b-col
          lg="9"
          md="9"
          sm="12"
          cols="12"
        >
          <b-sidebar
            id="sidebar-1"
            width="250px"
            shadow
          >
            <div class="mx-4 py-2">
              <filterBoxWithBrand :filter-items="filterItemBrand" />
              <br />
              <filterBoxWithProductType :filter-items="filterItemProductType" />
            </div>
          </b-sidebar>
          <div class="allFanContent">
            <categoryHeader
              :content-info="headingData"
              :route="this.$route.params.dataName"
            />
            <b-row align-h="start">
              <div
                v-b-toggle.sidebar-1
                class="filter_mobile_bar d-block d-md-none"
              >
                <filtersvg class="filter_svg" /> FILTERS
              </div>
              <div class="productListHeader mt-3 mt-lg-5 mb-3">
                <div class="listgridChanger mt-1">
                  <img
                    class="list_grid grid"
                    src="/grid.png"
                    :class="{ active: view == 'grid' }"
                    @click="changeView('grid')"
                  />
                  <img
                    class="list_grid list"
                    src="/list.png"
                    :class="{ active: view == 'list' }"
                    @click="changeView('list')"
                  />
                </div>
                <!-- <small class="mt-3">showing {{ startId }} - {{ stopId }} of {{ lengthOfProducts }}</small> -->
                <select
                  id="sortBy"
                  v-model="selectedSortOption"
                  @change="changeSortValue($event.target.value)"
                >
                  <option
                    v-for="(option, index) in options"
                    :key="index"
                    :value="option"
                  >
                    {{ option }}
                  </option>
                </select>
              </div>

              <b-col
                v-for="item in products"
                :key="item.id"
                :lg="view == 'grid' ? 3 : null"
                :md="view == 'grid' ? 4 : null"
                :sm="view == 'grid' ? 3 : null"
                :cols="view == 'grid' ? 6 : 12"
                class="p-1"
              >
                <ProductCard
                  v-show="view == 'grid'"
                  :products="item"
                />
                <ProductCardList
                  v-show="view == 'list'"
                  :products="item"
                />
                <hr v-show="view == 'list'" />

                <br />
              </b-col>
            </b-row>
            <!-- <a-pagination
              v-model="current"
              :total="totalPages"
              show-less-items
            /> -->
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
import breadCumb from "@/components/mainpageBody/breadCumnb";
import headingData from "@/static/content/headingInfo";
import ProductCard from "@/components/productCard";
import ProductCardList from "@/components/productCardList";
import filterBoxWithBrand from "@/components/dataView/filterBoxWithBrand";
import filterBoxWithProductType from "@/components/dataView/filterBoxWithProductType";
import popularBox from "@/components/dataView/popularProducts";
import categoryHeader from "@/components/productView/categoryHeader";

import filter from "@/mixins/filter";
import sort from "@/mixins/sort";
import turn2Real from "@/mixins/turn2Real";

import filtersvg from "@/assets/svg/filter.svg";

import Product from "@/helpers/apis/Products";

export default {
  layout: "nofooterLayout",
  mixins: [sort, filter, turn2Real],
  components: {
    breadCumb,
    ProductCard,
    filterBoxWithBrand,
    filterBoxWithProductType,
    categoryHeader,
    ProductCardList,
    popularBox,
    filtersvg
  },
  head () {
    return {
      title: this.turn2Real(this.$store.getters['dataStore/getRouteName']),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Powerpac MM'
        }
      ]
    }
  },
  data () {
    return {
      isDataLoading: false,
      view: "grid",
      products: [],
      filterItemBrand: [],
      filterItemProductType: [],
      headingData,
      breadCumbItems: [
        {
          text: "Home",
          link: "/"
        },
        {
          text: this.turn2Real(this.$route.params.dataName),
          link: `/collections/${this.$route.params.dataName}`,
          active: true
        }
      ]
    };
  },
  methods: {
    changeView (viewValue) {
      this.view = viewValue;
    }
  },

  created () {
    // console.log('created')
    // $nuxt.$emit('loading-data-event', true)
    this.$store.dispatch('dataStore/setRouteName', this.$route.params.dataName)
    this.$store.dispatch("productStore/setProducts").then(() => {
      this.products = this.$store.getters["productStore/getProducts"](
        this.$route.params.dataName
      );
      console.log(this.products)
      this.getFilterItemfromMainData(this.products);
    })
    this.$store.dispatch("productStore/setPopularProducts");

  },

};
</script>

<style scoped>
.filter_svg {
  width: 12px;
  height: 12px;
  fill: white;
}
select {
  border: 0px;
  outline: 0px;
  background: white;
}
.grid {
  width: 25px;
  height: 25px;
  cursor: pointer;
  opacity: 0.5;
}
.list {
  width: 35px;
  height: 38px;
  cursor: pointer;
  opacity: 0.5;
}
.active {
  opacity: 1;
}
.list_grid:hover {
  opacity: 1;
}
.col {
  padding: 0px;
}

.allFanContent {
  height: 200px;
  width: 100%;
  padding: 10px;
}
.row {
  justify-content: space-between;
}

.productListHeader {
  width: 100%;
  height: 50px;
  border-top: 1px solid rgba(128, 128, 128, 0.3);
  border-bottom: 1px solid rgba(128, 128, 128, 0.3);
  display: flex;
  justify-content: space-between;
}
.filter_mobile_bar {
  width: 100%;
  height: 35px;
  background: #4686cd;
  cursor: pointer;
  outline: none;
  text-align: center;
  line-height: 35px;
  color: white;
}
.filter_mobile_bar:focus {
  background: #3f6896;
}
</style>
