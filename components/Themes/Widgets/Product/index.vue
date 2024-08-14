<template>
  <div>
    <!-- Vertical Product Box 1 -->
    <!-- <ul
      class="product-list border-0 p-0 sidebar-product d-flex"
      v-if="style == 'vertical'"
    >
      <template v-if="skeletonLoader">
        <li v-for="item of skeletonItems" :key="item">
          <WidgetsProductBoxSkeletonProductBox :style="'vertical'" />
        </li>
      </template>

      <template v-else>
        <li v-for="product in products" :key="product">
          <WidgetsProductBox :product="product" :style="'vertical'" />
        </li>
      </template>
    </ul> -->

    <!-- Vertical Product Box 2 -->
    <!-- <div class="best-selling-slider product-wrapper" v-if="style == 'classic'">
      <div class="position-relative">
        <span class="border-effect"></span>
        <ul class="product-list" :class="skeletonLoader ? 'd-block' : ''">
          <li v-if="skeletonLoader">
            <div v-for="item of skeletonItems" :key="item">
              <WidgetsProductBoxSkeletonProductBox :style="'vertical'" />
            </div>
          </li>
          <template v-else>
            <li v-for="product of products" :key="product">
              <WidgetsProductBox :product="product" :style="'vertical'" />
            </li>
          </template>
        </ul>
      </div>
    </div> -->

    <!-- Horizontal Product Box -->
    <div
      :class="!skeletonLoader ? (productstyle ? productstyle : '') : ''"
      v-if="style == 'horizontal'"
    >
      <div v-if="skeletonLoader">
        <div v-if="style == 'horizontal'" :class="productstyle">
          <div class="row row-cols-5 m-0">
            <div v-for="item of skeletonItems" :key="item">
              <WidgetsProductBoxSkeletonProductBox />
            </div>
          </div>
        </div>
      </div>
      <template v-else>
        <div class="product-box-slider" v-if="slider">
          <!-- Horizontal Product Box With Slider -->

          <swiper
            :loop="true"
            class="banner-slider"
            :spaceBetween="spaceBetween"
            :slides-per-view="sliderPerView"
            :breakpoints="breakpoints"
            :autoplay="{
              delay: 5000,
              pauseOnMouseEnter: true,
            }"
            :modules="modules"
            :navigation="true"
          >
            <swiper-slide
              :autoHeight="true"
              v-for="(product, index) in products"
              :key="`product${index}`"
            >
              <div class="row m-0">
                <div class="col-12 px-0">
                  <WidgetsProductBox
                    :product="product"
                    :style="'horizontal'"
                    :classes="boxClass"
                  />
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>

        <!-- <div v-else>
        <div :class="[showItem === 5 ? 'row g-sm-4 g-3 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2' : '',
        showItem === 6 ? 'row g-sm-4 g-3 row-cols-xl-6 row-cols-lg-5 row-cols-md-4 row-cols-2' : '',
        showItem === 4 ? 'row g-sm-4 g-3 row-cols-xl-4 row-cols-lg-3 row-cols-md-3 row-cols-sm-2 row-cols-2' : '']">
          Horizontal Product Box Without Slider
          <div v-for="product of menuProducts" :key="product">
            <WidgetsProductBox :product="product" :style="'horizontal'" :classes="boxClass" />
          </div>

          <div v-for="product of products" :key="product">
            <WidgetsProductBox :product="product" :style="'horizontal'" :classes="boxClass" />
          </div>
        </div>
      </div> -->
      </template>
    </div>
    <WidgetsNoData
      :classes="'no-data-added bg-light'"
      :text="'No Product Found'"
      v-if="!products?.length"
    >
    </WidgetsNoData>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useDataStore } from "~/store/data";
import { Autoplay, Navigation } from "swiper";

const modules = ref([Autoplay, Navigation]);

// console.log(Autoplay);

let props = defineProps({
  style: { type: [String, Object], default: "vertical" },
  productIds: Array,
  products: Object,
  menuProducts: Array,
  boxClass: String,
  productstyle: { type: String, default: "modern" },
  layout: String,
  sliderPerView: { type: Number, default: 5 },
  slider: Boolean,
  showItem: Number,
  spaceBetween: Number,
});

let breakpoints = {
  0: {
    slidesPerView: 2,
    spaceBetween: 12,
  },
  790: {
    slidesPerView: 3,
    spaceBetween: 16,
  },
  1040: {
    slidesPerView: 4,
  },
  1280: {
    slidesPerView: 5,
  },
  1500: {
    // slidesPerView: 6,
    spaceBetween: 24,
    slidesPerView: props.sliderPerView,
  },
};
const skeletonLoader = ref(true);
let skeletonItems = Array.from({ length: 5 }, (_, index) => index);
onMounted(() => {
  setTimeout(() => {
    skeletonLoader.value = false;
  }, 1000);
});

// let products = computed(() => {
//   return props?.Products?.data?.filter((product) =>
//     props.productIds?.includes(product.id)
//   );
// });
</script>

<style lang="scss" scoped></style>
