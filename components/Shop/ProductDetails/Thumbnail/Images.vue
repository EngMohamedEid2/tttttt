<template>
  <!-- <div class="product-left-box">
        <div class="row g-2">
            <div class="col-12">
                <div class="product-main-1">
                    <div class="product-label-group">
                        <div class="product-label-tag" v-if="Data?.is_sale_enable">{{ $t('SALE') }}</div>
                        <template v-else>
                            <div class="product-label-tag warning-label-tag" v-if="Data?.is_featured">{{ $t('FEATURED') }}
                            </div>
                        </template>
                    </div>
                    <swiper :autoplay="{ delay: 2500, disableOnInteraction: true }" :modules="modules" :navigation="true"
                        :loop="true" class="banner-slider" @swiper="onSwiper" :slides-per-view="1" :space-between="15">
                        <swiper-slide v-for="(productImages, index) in Data?.product_galleries" :key="index">
                            <div class="slider-image">
                                <img :src="productImages?.original_url" :id="productImages.id" class="img-fluid" alt=""
                                    v-if="!Data?.product_galleries?.length">
                                <ClientOnly>
                                <vue-image-zoomer :regular="productImages?.original_url"
                                    img-class="img-fluid w-100 image_zoom_cls-0" hover-message="Click once on image"
                                    :zoom-amount="5" />
                                </ClientOnly> 
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>

            <div class="col-12">
                <div class="bottom-slider-image left-slider slick-top">
                    <swiper :loop="true" class="banner-slider" :breakpoints="thumbnailProductSlider" :slides-per-view="4"
                        :space-between="15">
                        <swiper-slide v-for="(productImages, index) in Data?.product_galleries" :key="index"
                            :class="slideId == index ? '' : ''">
                            <div class="slider-image">
                                <img :src="productImages?.original_url" :id="productImages.id" class="img-fluid" alt=""
                                    @click="slideTo(index)">
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
    </div> -->
  <img :src="props.Data.data[0].image" style="width: 300px" />
</template>

<script setup>
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
let props = defineProps({
  Data: Object,
});
let thumbnailProductSlider = {
  0: {
    slidesPerView: 3,
  },
  530: {
    slidesPerView: 4,
  },
  1399: {
    slidesPerView: 3,
  },
  1430: {
    slidesPerView: 4,
  },
};
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
