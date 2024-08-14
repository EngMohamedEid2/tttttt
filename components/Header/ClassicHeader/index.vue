<template>
  <header class="header-3" :class="{ 'active': stick && sticky }">
    <div class="top-nav sticky-header sticky-header-2">
      <div class="container-fluid-lg">
        <div class="row">
          <div class="col-12">
            <div class="navbar-top">
              <HeaderElementsNavMenuButton @activeMenu="toggle($event)" :show="active" />
              <HeaderElementsLogo :themeOptions="themeOptions" :textClass="'txt-theme f-w-600'" :logo="logo" />
              <div class="middle-box">
                <div class="center-box">
                  <HeaderElementsSearch :style="'classic'" />
                </div>
              </div>
              <div class="rightside-menu support-sidemenu">
                <HeaderElementsSupport :themeOptions="themeOptions" :style="'classic'" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid-lg">
      <div class="row">
        <div class="col-12 position-relative">
          <div class="main-nav nav-left-align">
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
              <!-- <div class="offcanvas-backdrop fade" v-if="active" :class="{ show: active }" @click="toggle(false)"></div> -->
            </div>
            <div class="rightside-menu">
              <ul class="option-list-2">
                <li>
                  <HeaderElementsSearchBox :style="'classic'" />
                </li>
                <li>
                  <HeaderElementsCompare />
                </li>
                <li>
                  <HeaderElementsWishlist :style="'classic'" />
                </li>
                <li class="onhover-dropdown">
                  <HeaderElementsCarts :style="'classic'" />
                </li>
              </ul>
              <HeaderElementsMyAccount :style="'classic'" />
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

let activeMenu = defineEmits();

let stick = ref(false);
let active = ref(false);

function toggle(val) {
  active.value = val;
}
</script>
