<template>
    <div class="slider-bank-3 arrow-slider slick-height">
        <swiper :breakpoints="bankSlider" :loop="true" class="banner-slider" :slides-per-view="3" :space-between="15">
            <swiper-slide v-for="(offer, index) in offers" :key="`product${index}`">
                <div class="bank-offer" v-if="offer?.status">
                    <div class="bank-header">
                        <div class="bank-right w-100">
                            <img :src="offer.image_url" class="img-fluid" alt="">
                        </div>
                    </div>


                    <div class="bank-footer">
                        <h4>{{ $t('Code') }} :
                            <input class="form-control" type="text" :name="offer.coupon_code" v-model="offer.coupon_code">
                        </h4>
                        <WidgetsButton type="button" :classes="'bank-coupon btn'" :id="'coupon_btn'"
                            @click="copyFunction(offer.coupon_code)">{{ $t('Copy Code') }}</WidgetsButton>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template> 

<script setup>
let props = defineProps({
    offers: Object
})
let bankSlider = {
    0: {
        slidesPerView: 1
    },
    735: {
        slidesPerView: 2
    },
    1230: {
        slidesPerView: 3
    }
}

function copyFunction(txt) {
    navigator.clipboard.writeText(txt)
}

</script>

<style lang="scss" scoped></style>