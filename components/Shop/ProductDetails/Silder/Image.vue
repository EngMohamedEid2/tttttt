<template>
    <div>
        <div class="row">
            <div class="col-12">
                <div class="slider-3-product product-wrapper">
                    <swiper :loop="true" class="banner-slider" :slides-per-view="4" :space-between="15">
                        <swiper-slide v-for="(productImages, index) in Data.product_galleries" :key="index"
                            :class="slideId == index ? '' : ''">
                            <div class="product-slider-image">
                                <img :src="productImages?.original_url" :id="productImages.id" class="img-fluid">
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
let props = defineProps({
    Data: Object,
})
</script>

<style lang="scss" scoped></style>