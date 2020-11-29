<template>
  <div class="top_header">
    <b-container
      fluid
      style="padding:0px;margin:0px"
    >
      <b-container>
        <b-navbar
          toggleable="lg"
          variant="faded"
          type="light"
          class="searchbarContainer"
        >
          <b-navbar-brand
            href="#"
            class="logo_imagebox"
          >
            <img
              src="/logo.png"
              height="100"
              alt=""
              class="logo_imagebox"
            >
          </b-navbar-brand>
          <button
            class="navbar-toggler collapsed"
            target="nav-collapse"
          >
            <span class="line" />
            <span class="line" />
            <span class="line" />
          </button>
          <b-navbar-toggle target="nav-collapse">
            <span class="navbar-toggler-icon">
              <i
                class="fas fa-bars"
                style="color:#fff; font-size:28px;"
              />
            </span>
          </b-navbar-toggle>

          <b-collapse
            id="nav-collapse"
            is-nav
          >
            <MiddleBanner class="ml-auto d-none d-lg-block" />
            <!-- <Search class="ml-auto d-none d-md-block d-lg-block" /> -->
            <!-- Right aligned nav items -->
            <SearchBox class="d-none d-lg-block mr-5" />
            <p class="mr-1">
              {{ $i18n.locale }}
            </p>

            <nuxt-link :to="$i18n.locale == 'mm'? switchLocalePath('en') : switchLocalePath('mm')">
              <img
                :src="$t('icon')"
                alt=""
                class="lang_switch_icon ml-auto"
              >
            </nuxt-link>
          </b-collapse>
        </b-navbar>
      </b-container>
      <b-navbar
        toggleable="lg"
        variant="faded"
        type="light"
        :class="{ fixedContainer: navfix}"
      >
        <b-collapse
          id="nav-collapse"
          is-nav
        >
          <b-container
            fluid
            style="padding:0px;margin:0px;background:#4685CC"
          >
            <NavItem class="ml-auto" />
          </b-container>
        </b-collapse>
      </b-navbar>
      <MiddleBanner class="ml-auto d-sm-block d-xs-block d-md-none" />
      <SearchBox class="d-sm-block d-xs-block d-md-none" />
    </b-container>
  </div>
</template>
<script>
/* eslint-disable no-console */

import NavItem from '@/components/header/navitem'
import MiddleBanner from '@/components/header/middleBanner'
import SearchBox from '@/components/header/searchbox'
export default {
  components: {
    NavItem,
    MiddleBanner,
    SearchBox
  },
  data () {
    return {
      navfix: false
    }
  },
  created () {
    if (process.browser) {
      // eslint-disable-next-line nuxt/no-globals-in-created
      window.addEventListener('scroll', this.handleScroll)
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      if (window.scrollY > window.innerHeight - 200 && window.innerWidth >= 800) {
        this.navfix = true
      } else {
        this.navfix = false
      }
    }
  }
}
</script>
<style scoped>
.navbar {
  padding: 0px;
  padding-top: 10px;
}
.lang_switch_icon {
  width: 40px;
  height: 40px;
  cursor: pointer;
}
.navbar-toggler {
  width: 47px;
  height: 34px;
  outline: none;
  border: none;
}
.navbar-toggler .line {
  width: 100%;
  float: left;
  height: 3px;
  background-color: #fff;
  margin-bottom: 5px;
}
.fixedContainer {
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  background-color: #fff;
  padding-top: 0px;
}
.searchbarContainer {
  padding: 0px;
}
.logo_imagebox {
  padding: 0px;
}
@media screen and (max-width: 500px) {
  .logo_imagebox {
    height: 100px;
  }
}
</style>
