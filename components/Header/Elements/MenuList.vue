<template>
  <a
    class="nav-link dropdown-toggle"
    v-if="menu.type === 'sub'"
    @click="toggle(menu.title)"
  >
    {{ menu.title }}
    <label v-if="menu.badge" class="new-dropdown">{{ menu.badge }}</label>
  </a>
  <nuxt-link
    class="dropdown-item"
    :class="showdefalut == menu.title ? 'show' : ''"
    :to="{ path: `${menu.path}`, query: menu.params }"
    v-if="menu.type === 'link'"
    >{{ menu.title }}
    <label class="menu-label" :class="menu.labelClass" v-if="menu.label">{{
      menu.label
    }}</label>
  </nuxt-link>
  <div
    class="dropdown-menu dropdown-menu-2"
    :class="showdefalut == menu.title ? 'show' : ''"
    v-if="menu.megaMenu && menu.megaMenuType === 'link'"
  >
    <div class="row">
      <div
        class="dropdown-column col-xl-3"
        v-for="megaMenu of menu.children"
        :key="megaMenu"
      >
        <div v-for="link of megaMenu.children" :key="link">
          <h5
            class="dropdown-header {{ link.class }}"
            v-if="link.type === 'sub'"
          >
            {{ link.title }}
          </h5>

          <nuxt-link
            class="dropdown-item"
            :to="{ path: `${link.path}`, query: link.params }"
            v-if="link.type === 'link'"
          >
            {{ link.title }}
            <label
              class="menu-label"
              :class="link.labelClass"
              v-if="link.label"
              >{{ link.label }}</label
            >
          </nuxt-link>
          <nuxt-link
            :to="link.path"
            class="dropdown-item"
            v-if="link.type === 'external_link'"
            target="_blank"
          >
            {{ link.title }}
            <label
              class="menu-label"
              :class="link.labelClass"
              v-if="link.label"
              >{{ link.label }}</label
            >
          </nuxt-link>
        </div>
      </div>
      <!-- <div
        class="dropdown-column col-xl-6 d-xl-block d-none"
        v-if="menu.slider === 'product'"
      >
        <div class="menu-product-slider">
          <div class="row"> -->
      <!-- {{products }} -->
      <!-- <div class="col-6" v-for="product in products" :key="product">
              <WidgetsProductBoxHorizontal
                :product="product"
                :classes="'product-box-3'"
                :style="'horizontal'"
              />
            </div> -->
      <!-- </div>
        </div>
        <WidgetsNoData
          :class="'menu-no-data'"
          :text="'No Product Found'"
          v-if="!products?.length"
        ></WidgetsNoData> -->
      <!-- </div> -->
      <div
        class="dropdown-column col-xl-3 d-xl-block d-none"
        v-if="menu.slider === 'banner'"
      >
        <!-- <div class="menu-img-banner">
          <a href="/product/deliciously-sweet-watermelon" class="text-title">
            <img src="/images/mega-menu.png" alt="" class="img-fluid" />
          </a>
        </div> -->
      </div>
      <div
        class="dropdown-column col-xl-12 d-xl-block d-none"
        v-if="menu.slider === 'banner_landscape'"
      >
        <div class="menu-img-banner rounded overflow-hidden mx-0 mt-3 mb-0">
          <img src="/images/mega-menu2.png" class="img-fluid" />
        </div>
      </div>
      <!-- <div
        class="dropdown-column col-xl-9 d-xl-block d-none"
        v-if="menu.slider === 'blog'"
      >
        <div class="row">
          <div class="col-6" v-for="(blog, index) in blogs" :key="index">
            <div class="blog-box sticky-blog">
              <div class="blog-box-image">
                <nuxt-link :to="`/blog/${blog?.slug}`" class="blog-image">
                  <img
                    :src="blog?.blog_thumbnail?.original_url"
                    class="img-fluid"
                    :alt="blog?.title"
                  />
                </nuxt-link>
              </div>
              <nuxt-link
                :to="`'/blog/${blog?.slug}`"
                class="blog-detail"
                tabindex="0"
              >
                <h6>{{ dateFormatter(blog.created_at) }}</h6>
                <h5>{{ blog.title }}</h5>
              </nuxt-link>
            </div>
          </div>
        </div>
        
        <WidgetsNoData
          :class="'menu-no-data'"
          :text="'No Blog Found'"
          v-if="!blogs?.length"
        ></WidgetsNoData>
      </div> -->
    </div>
  </div>
  <div
    class="dropdown-menu dropdown-menu-2 dropdown-image"
    :class="showdefalut == menu.title ? 'show' : ''"
    v-if="menu.megaMenu && menu.megaMenuType === 'image'"
  >
    <div class="dropdown-column">
      <nuxt-link
        class="dropdown-item"
        v-for="imageMenu of menu.children"
        :key="imageMenu"
        :to="imageMenu.path"
      >
        <img :src="imageMenu.image" class="img-fluid" alt="imageMenu.title" />
        <span>{{ imageMenu.title }}</span>
      </nuxt-link>
    </div>
  </div>
  <ul
    class="dropdown-menu"
    v-if="menu.children && !menu.megaMenu"
    :class="showdefalut == menu.title ? 'show' : ''"
  >
    <li
      class="nav-item"
      :class="child.children ? 'dropdown' : ''"
      v-for="(child, index) in menu?.children"
      :key="child.title + index"
    >
      <HeaderElementsMenuList :menu="child" />
    </li>
  </ul>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useDataStore } from "~/store/data";
import { HandleRequest } from "~~/composables/HandleRequest";

let props = defineProps({
  menu: Object,
  show: Boolean,
});

let { Products, Blogs } = storeToRefs(useDataStore());
let products = ref([]);
let blogs = ref([]);
onMounted(async () => {
  products.value = Products?.value?.data?.slice(0, 2);
  blogs.value = Blogs?.value?.data?.slice(0, 2);
});

let showdefalut = ref("");
function toggle(menu) {
  showdefalut.value = showdefalut.value != menu ? menu : "";
}
</script>

<style lang="scss" scoped></style>
