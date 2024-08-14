<template>
  <!-- <div class="row g-2">
        <div class="col-12">
            <div class="view-image-slider">
                <swiper :loop="true" class="banner-slider" :autoplay="{ delay: 2500, disableOnInteraction: true }"
                    :modules="modules" @swiper="onSwiper" :slides-per-view="1" :space-between="15" :navigation="true">
                    <swiper-slide v-for="(productImages, index) in Data?.product_galleries" :key="index">
                        <div class="slider-image">
                            <img :src="productImages?.original_url" :id="productImages.id" class="img-fluid" alt="">
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
        <div class="col-12" v-if="Data?.product_galleries?.length">
            <div class="bottom-slider-image left-slider no-arrow slick-top">
                <swiper :loop="true" class="banner-slider" :slides-per-view="3" :space-between="15">
                    <swiper-slide v-for="(productImages, index) in Data?.product_galleries" :key="index"
                        :class="slideId == index ? '' : ''">
                        <div class="slider-image" :class="{ 'active': productImages.id.toString() == slideTo.toString() }">
                            <img :src="productImages ? productImages?.original_url : '/images/product.png'"
                                :id="productImages.id" class="img-fluid" alt="" @click="slideTo(index)">
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div> -->
  <div class="row g-2 text-center p-5">
    <img :src="Data.image" />
  </div>
</template>

<script setup>
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
let props = defineProps({
  Data: Object,
});
console.warn(props.Data);
let slideId = ref(0),
  swiperRef = ref(0),
  modules = [Navigation, Autoplay];

function onSwiper(swiper) {
  swiperRef.value = swiper;
}

function slideTo(index) {
  swiperRef.value.slideTo(index + 1, 0);
  slideId.value = index;
}
</script>
