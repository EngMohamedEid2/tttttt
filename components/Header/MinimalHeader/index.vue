<template>
  <header :class="{ active: stick && sticky }">
    <HeaderElementsTopHeader :themeOptions="themeOptions" v-if="themeOptions?.header?.page_top_bar_enable" />
    <div class="top-nav top-header sticky-header">
      <div class="container-fluid-lg">
        <div class="row">
          <div class="col-12">
            <div class="navbar-top">
              <HeaderElementsNavMenuButton @activeMenu="toggle($event)" :show="active" />
              <HeaderElementsLogo :themeOptions="themeOptions" :logo="logo" />
              <div class="header-nav-middle">
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
                  <!-- <div class="offcanvas-backdrop fade" v-if="active" :class="{ show: active }" @click="toggle(false)">
                  </div> -->
                </div>
              </div>
              <div class="rightside-box">
                <ul class="right-side-menu">
                  <li class="right-side search-icon search-full-icon">
                    <HeaderElementsSearch :style="'berlin'" />
                  </li>
                  <li class="right-side">
                    <HeaderElementsWishlist :style="'basic'" />
                  </li>
                  <li class="right-side">
                    <div class="onhover-dropdown header-badge">
                      <HeaderElementsCart :style="'basic'" />
                    </div>
                  </li>
                  <li class="right-side onhover-dropdown">
                    <HeaderElementsMyAccount :style="'basic'" />
                  </li>
                </ul>
              </div>
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
<style lang="scss" scoped></style>
