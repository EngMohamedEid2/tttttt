<template>
  <div>
    <!-- Banner Horizontal Style-->
    <div
      class="container-fluid-lg"
      v-if="banners?.length && style == 'horizontal'"
    >
      <div class="banner-slider">
        <swiper
          :breakpoints="breakpoints"
          :loop="true"
          :slidesPerView="4"
          :spaceBetween="15"
        >
          <swiper-slide v-for="(banner, index) in banners" :key="index">
            <div v-if="banner?.status" class="banner-contain hover-effect">
              <WidgetsImageLink
                :classes="'banner-contain'"
                :image="banner"
                :bgImage="false"
                :saleclass="saleclass"
              />
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <!-- Banner Horizontal-3 Style-->
    <div
      class="container-fluid-lg"
      v-if="banners?.length && style == 'horizontal-3'"
    >
      <div class="banner-slider">
        <swiper
          :modules="modules"
          :autoplay="{ delay: 1200, pauseOnMouseEnter: true }"
          :breakpoints="bannerSlider3"
          :loop="true"
          :slides-per-view="3"
          :space-between="15"
        >
          <swiper-slide v-for="(banner, index) in banners" :key="index">
            <div v-if="banner?.status" class="banner-contain hover-effect">
              <WidgetsImageLink
                :classes="'banner-contain'"
                :image="banner"
                :bgImage="false"
                :saleclass="saleclass"
                :height="height"
              />
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <!-- Banner Vertical Style-->
    <div :class="classes" v-if="banners?.image_url && style == 'vertical'">
      <div class="home-contain hover-effect">
        <WidgetsImageLink
          :classes="'banner-contain'"
          :image="banners"
          :bgImage="false"
          :saleclass="saleclass"
        />
      </div>
    </div>
    <!-- Banner Full Width Style-->
    <div v-if="banners?.image_url && style == 'full_width'">
      <WidgetsImageLink
        :classes="'banner-contain sale-banner'"
        :image="banners"
        :bgImage="false"
        :saleclass="saleclass"
      />
    </div>
  </div>
</template>

<script setup>
import { Autoplay } from "swiper";
let modules = [Autoplay];
let props = defineProps({
  style: {
    type: String,
    default: "horizontal",
  },
  classes: String,
  contentClass: String,
  banners: Object,
  sliderPerView: Number,
  saleclass: String,
});
let bannerSlider3 = {
  0: {
    slidesPerView: 1,
  },
  800: {
    slidesPerView: 2,
  },
  1200: {
    slidesPerView: 3,
  },
};

let breakpoints = {
  0: {
    slidesPerView: 2,
  },
  576: {
    slidesPerView: 2,
  },
  850: {
    slidesPerView: 3,
  },
  1399: {
    slidesPerView: 4,
  },
};
</script>

<style lang="scss" scoped></style>
