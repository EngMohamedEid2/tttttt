<template>
  <header class="pb-md-4 pb-0" :class="{ active: stick && sticky }">
    <HeaderElementsTopHeader
      :themeOptions="themeOptions"
      v-if="themeOptions?.header?.page_top_bar_enable"
    />
    <div class="top-nav top-header sticky-header">
      <div class="container-fluid-lg">
        <div class="row">
          <div class="col-12">
            <div class="navbar-top">
              <div class="d-xl-none d-inline-flex">
                <HeaderElementsNavMenuButton
                  @activeMenu="toggle($event)"
                  :show="active"
                />
              </div>
              <HeaderElementsLogo
                :themeOptions="themeOptions"
                :textClass="'txt-theme f-w-600'"
                :logo="logo"
              />
              <div class="middle-box">
                <!-- <div class="location-box">
                  <ThemesWidgetsCategories :style="'input_dropdown'" />
                </div> -->
                <div class="search-box">
                  <HeaderElementsSearch />
                </div>
              </div>
              <div class="rightside-box">
                <ul class="right-side-menu">
                  <li class="right-side">
                    <HeaderElementsSearchBox />
                  </li>
                  <li
                    class="right-side"
                    v-if="themeOptions?.header?.support_number"
                  >
                    <HeaderElementsSupport :themeOptions="themeOptions" />
                  </li>
                  <!-- <li class="right-side">
                    <HeaderElementsWishlist />
                  </li> -->
                  <li class="right-side">
                    <div class="onhover-dropdown header-badge">
                      <HeaderElementsCarts />
                    </div>
                  </li>
                  <li class="right-side onhover-dropdown">
                    <HeaderElementsMyAccount />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid-lg">
      <div class="row">
        <div class="col-12">
          <div class="header-nav">
            <div class="header-nav-left">
              <HeaderElementsCategory :data="themeOptions" />
            </div>
            <div class="header-nav-middle">
              <div
                class="main-nav navbar navbar-expand-xl navbar-light navbar-sticky"
              >
                <div
                  class="offcanvas offcanvas-collapse order-xl-2"
                  id="primaryMenu"
                  :class="{ show: active }"
                >
                  <div class="offcanvas-header navbar-shadow">
                    <h5>{{ $t("Menu") }}</h5>
                    <button
                      :type="'button'"
                      :id="'toggle_menu_btn'"
                      @click="toggle(false)"
                      :class="'btn-close lead'"
                    >
                      <Icon name="ri:close-fill" />
                    </button>
                  </div>
                  <div class="offcanvas-body">
                    <ul class="navbar-nav">
                      <li
                        v-for="(menu, index) in Menu"
                        :key="index"
                        :class="[
                          menu.type == 'sub' && menu.children
                            ? 'nav-item dropdown'
                            : 'nav-item',
                          menu.megaMenu ? 'dropdown-mega' : '',
                          { 'new-nav-item': menu.badge },
                        ]"
                      >
                        <HeaderElementsMenuList :show="true" :menu="menu" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  class="offcanvas-backdrop"
                  v-if="active"
                  :class="{ show: active }"
                  @click="toggle(false)"
                ></div>
              </div>
            </div>

            <div
              class="header-nav-right"
              v-if="themeOptions?.header?.today_deals.length"
            >
              <HeaderElementsTodayDeal />
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

let stick = ref(false);
let active = ref(false);

function toggle(value) {
  active.value = value;
}

const onWindowScroll = () => {
  let number =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;
  if (number >= 150 && window.innerWidth > 400) {
    stick.value = true;
  } else {
    stick.value = false;
  }
};

onMounted(() => {
  window.addEventListener("scroll", onWindowScroll);
});
</script>
