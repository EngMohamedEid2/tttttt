<template>
  <header class="header-2" :class="{ active: stick && sticky }">
    <HeaderElementsTopHeader :themeOptions="themeOptions" v-if="themeOptions?.header?.page_top_bar_enable" />
    <div class="top-nav top-header sticky-header sticky-header-3">
      <div class="container-fluid-lg">
        <div class="row">
          <div class="col-12">
            <div class="navbar-top">
              <HeaderElementsNavMenuButton @activeMenu="toggle($event)" :show="active" />
              <HeaderElementsLogo :themeOptions="themeOptions" :textClass="'txt-theme f-w-600'" :logo="logo" />
              <div class="middle-box">
                <div class="center-box">
                  <div class="searchbar-box order-xl-1 d-none d-xl-block">
                    <HeaderElementsSearch :style="'standard'" />
                  </div>
                </div>
              </div>
              <div class="rightside-menu">
                <div class="option-list">
                  <ul>
                    <li>
                      <HeaderElementsMyAccount :style="'standard'" />
                    </li>
                    <li>
                      <HeaderElementsSearchBox :style="'standard'" />
                    </li>
                    <li>
                      <HeaderElementsCompare />
                    </li>
                    <li class="onhover-dropdown">
                      <HeaderElementsWishlist :style="'classic'" />
                    </li>
                    <li class="onhover-dropdown">
                      <HeaderElementsCarts :style="'classic'" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid-lg">
      <div class="row">
        <div class="col-12">
          <div class="main-nav">
            <div class="header-nav-left">
              <HeaderElementsCategory :data="themeOptions" />
            </div>
            <div class="main-nav navbar navbar-expand-xl navbar-light navbar-sticky">
              <div class="offcanvas offcanvas-collapse order-xl-2" id="primaryMenu" :class="{ show: active }">
                <div class="offcanvas-header navbar-shadow">
                  <h5>{{ $t("Menu") }}</h5>
                  <button :type="'button'" :id="'toggle_menu_btn'" @click="toggle(false)" :class="'btn-close lead'">
                    <Icon name="ri:close-fill" />
                  </button>
                </div>
                <div class="offcanvas-body">
                  <ul class="navbar-nav">
                    <li v-for="(menu, index) in Menu" :key="index" :class="[
                      menu.type == 'sub' && menu.children
                        ? 'nav-item dropdown'
                        : 'nav-item',
                      menu.megaMenu ? 'dropdown-mega' : '',
                      { 'new-nav-item': menu.badge },
                    ]">
                      <HeaderElementsMenuList  :show="true" :menu="menu" />
                    </li>
                  </ul>
                </div>
              </div>
              <!-- <div class="offcanvas-backdrop fade" :class="active ? 'show' : ''"></div> -->
            </div>
            <div class="right-nav">
              <HeaderElementsSupport :themeOptions="themeOptions" :style="'standard'" />
              <HeaderElementsTodayDeal  :style="'standard'" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { Menu } from "@/data/menu";
let props = defineProps({
  themeOptions: Object,
  logo: String,
  sticky: Boolean,
});

const stick = ref(false);
const active = ref(false);
const activeMenu = defineEmits();
</script>
