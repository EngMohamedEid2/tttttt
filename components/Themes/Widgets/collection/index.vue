<template>
  <div class="slider-4-1 ratio_65 no-arrow product-wrapper">
    <swiper :loop="true" :breakpoints="breakpoints" class="banner-slider" :space-between="15" :slides-per-view="4">
      <swiper-slide v-for="(bundles, index) in data" :key="`product${index}`">
        <div v-if="bundles?.status">
          <div class="product-slider wow fadeInUp">
            <WidgetsImageLink :classes="'b-cl'" :image="bundles" :bgImage="false" />
            <div class="product-slider-detail">
              <div>
                <a href="javascript:void(0)" class="d-block">
                  <h3 class="text-title">{{ bundles?.title }}</h3>
                </a>
                <h5>{{ bundles?.sub_title }}</h5>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
let props = defineProps({
  data: Object
})

let breakpoints = {
  0: {
    slidesPerView: 1
  },
  600: {
    slidesPerView: 2
  },
  1050: {
    slidesPerView: 3
  },
  1440: {
    slidesPerView: 4
  }
}
</script>

<style lang="scss" scoped></style>