<template>
  <b-container id="nav_wrapper">
    <b-navbar-nav
      id="custom_nav_bar"
      style="padding: 0px"
    >
      <div
        v-for="(navItem,index) in navItems"
        :key="index"
        class="custom_nav_item"
      >
        <div class="nav_link_container">
          <b-nav-item
            :to="!navItem.subProducts ? localePath(navItem.link) : null"
            data-aos="fade-down"
            class="nav_link_item"
            @click="showDrawer(navItem.subProducts)"
          >
            <p class="nav_link">
              {{ navItem.title }} <span v-if="navItem.subProducts">
                <img
                  src="/down-arrow.png"
                  alt=""
                  class="down-arrow"
                >
              </span>
            </p>
          </b-nav-item>
        </div>
        <div>
          <a-drawer
            :bordered="false"
            title="Applicants"
            placement="left"
            :closable="false"
            :visible="visible"
            @close="onClose"
          >
            <a-collapse
              accordion
              v-for="(product,i) in drawerItems"
              :key="i"
            >
              <template #expandIcon="props">
                <a-icon
                  type="caret-right"
                  :rotate="props.isActive ? 90 : 0"
                />
              </template>
              <a-collapse-panel
                :key="i+1"
                :header="product.type"
                :style="customStyle"
              >
                <ul
                  v-for="(product_detail,ind) in product.childContent"
                  :key="ind"
                  class="product_detail_list"
                >
                  <li
                    class="sub_product_list_child"
                    style="color:black"
                    @click="routeToPath(product_detail.link)"
                  >
                    {{ product_detail.name }}
                  </li>

                </ul>

              </a-collapse-panel>
            </a-collapse>
          </a-drawer>
        </div>
        <div
          v-if="navItem.subProducts"
          class="sub_products"
        >
          <div
            v-for="(product,i) in navItem.subProducts"
            :key="i"
            class="product_container"
          >
            <img
              :src="product.imageURL"
              alt=""
              class="product_image"
            >
            <div class="product_content">
              <h6 class="product_header">
                <b> {{ product.type }}</b>
              </h6>
              <span v-if="product.childContent">
                <ul
                  v-for="(product_detail,indextwo) in product.childContent"
                  :key="indextwo"
                  class="product_detail_list"
                >
                  <nuxt-link :to="localePath('/collections/' + product_detail.link)">
                    <li
                      class="sub_product_list_child"
                      style="color:black"
                    >
                      {{ product_detail.name }}
                    </li>
                  </nuxt-link>

                </ul>
              </span>
            </div>
          </div>
        </div>
      </div>
    </b-navbar-nav>
  </b-container>
</template>

<script>
export default {
  methods: {
    async routeToPath (link) {
      console.log(link)
      await this.$router.push({ path: this.localePath('/collections/' + link) });
      this.visible = await false;
    },
    showDrawer (value) {
      console.log(this.drawerItems);
      this.drawerItems = value;
      if (this.checkWindowWidth) {
        this.visible = typeof value == 'undefined' ? false : true
      }
    },
    onClose () {
      this.visible = false;
    },
    handleResize () {
      this.width = window.innerWidth
    }
  },
  data () {
    return {
      drawerItems: ['hi there', 'helo'],
      width: 0,
      text: `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`,
      customStyle:
        'background: #f7f7f7;border-radius: 4px;border: none;overflow: hidden',
      visible: false,
      navItems: [
        {
          title: 'Home',
          link: '/'
        },
        {
          title: 'Home Apps',
          link: '/homeApplicants',
          subProducts: [
            {
              type: 'FANS',
              imageURL: '/navitem/fan.jpg',
              childContent: [
                {
                  name: 'All Fans',
                  link: 'fan',
                  filterValue: ''
                },
                {
                  name: 'iFan',
                  link: 'fan',
                  filterValue: 'iFan'
                }, {
                  name: 'powerpac',
                  link: 'fan',
                  filterValue: 'powerpac'
                }
              ]
            },
            {
              type: 'IRON',
              imageURL: '/navitem/iron.webp',
              childContent: [
                {
                  name: 'Irons',
                  link: 'iron'
                }
              ]
            },
            {
              type: 'INSECT REPELLENTS',
              imageURL: '/navitem/repellent.png',
              childContent: [
                {
                  name: 'Insect repellents',
                  link: 'insect_repellent'
                }
              ]
            },
            {
              type: 'vaccum Cleaner',
              imageURL: '/navitem/vacuum.png',
              childContent: [
                {
                  name: 'vaccum Cleaner',
                  link: 'vacuum'
                }
              ]
            }

          ]
        }, {
          title: 'Kitchen Apps',
          link: 'kitchenApplicants',
          subProducts: [
            {
              type: 'Large Kitchen App',
              imageURL: '/navitem/fridge.png',
              childContent: [
                {
                  name: 'Fridge',
                  link: 'fridge'
                }
              ]
            },
            {
              type: 'Kettles',
              imageURL: '/navitem/kettle.png',
              childContent: [
                {
                  name: 'Electric Jug/Kettles',
                  link: 'jug'
                },
                {
                  name: 'AirPot',
                  link: 'airpot'
                }
              ]
            },
            {
              type: 'Rice cooker/steamboat',
              imageURL: '/navitem/ricecooker.png',
              childContent: [
                {
                  name: 'Rice Cooker',
                  link: 'cooker'
                },
                {
                  name: 'Steamboat',
                  link: 'steamboat'
                }
              ]
            },
            {
              type: 'Blender',
              imageURL: '/navitem/blender.png',
              childContent: [
                {
                  name: 'Blender',
                  link: 'blender'
                },
                {
                  name: 'Chopper',
                  link: 'chopper'
                }
              ]
            },
            {
              type: 'Oven/Toaster/Freyer',
              imageURL: '/navitem/oven.png',
              childContent: [
                {
                  name: 'Oven',
                  link: 'oven'
                },
                {
                  name: 'Toaster',
                  link: 'toaster'
                },
                {
                  name: 'Freyer',
                  link: 'fryer'
                }
              ]
            }

          ]
        },
        {
          title: 'Promotions',
          link: 'promotions'
        },
        {
          title: 'FAQ',
          link: 'faq'
        },
        {
          title: 'About Us',
          link: '/aboutus'
        },
        {
          title: 'Information',
          link: 'info'
        },
        {
          title: 'eWarranty',
          link: '/ewarranty'
        },
        {
          title: 'Contact Us',
          link: '/contactus'
        }
      ]
    }
  },
  computed: {
    checkWindowWidth () {
      return this.width < 991
    }
  },
  created () {
    if (process.client) {
      window.addEventListener('resize', this.handleResize)
      this.handleResize()
    }
  },
  destroyed () {
    window.removeEventListener('resize', this.handleResize)
  },
}
</script>

<style scoped>
.nav_link_item:hover {
  background: #0067b9;
  color: yellow;
}
.nav_link_item:hover .nav_link {
  color: yellow;
}
.nav_link_item {
  height: 100%;
  transition: 1s ease-in-out;
}
.down-arrow {
  width: 10px;
  height: 10px;
  margin-left: 5px;
}
.nav_link_container {
  position: relative;
}
.sub_product_list_child {
  transition: 0.3s;
}
.sub_product_list_child:hover {
  padding-left: 10px;
}
.product_header {
  text-align: left;
}
.product_detail_list {
  color: black;
  list-style-type: none;
  text-align: left;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently */
}
.product_container {
  width: 50%;
  float: left;
}
.product_content {
  padding: 10px 50px;
  line-height: 30px;
  cursor: pointer;
}
.product_image {
  width: 80%;
  padding: 30px 30px 30px 0px;
  height: 150px;
}
#custom_nav_bar {
  width: 100%;
}
.nav_link {
  color: white;
  margin-top: 5px;
}
.custom_nav_item {
  width: 20%;
  height: 55px;
  text-align: center;
  font-family: 'Poppins';
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  font-size: 13px;
}

.custom_nav_item .nuxt-link-exact-active {
  background: #4685cc;
  font-weight: bold;
}

.sub_products {
  display: none;
  position: absolute;
  top: 90%;
  left: 0;
  min-width: 1000px;
  min-height: 300px;
  z-index: 1;
  background: #f9f9f9;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.custom_nav_item:hover .sub_products {
  display: flex;
}

.custom_nav_item:hover .sub_products {
  animation: animate 300ms ease-in-out forwards;
  animation-delay: -150ms;
}
@keyframes animate {
  0% {
    opacity: 0;
    transform: rotateX(-270deg);
  }
  50% {
    transform: rotateX(20deg);
  }
  100% {
    transform: rotateX(0deg);
  }
}
@media screen and (max-width: 991px) {
  .custom_nav_item {
    width: 100%;
  }
  .custom_nav_item:hover .sub_products {
    display: none;
  }
}
</style>
