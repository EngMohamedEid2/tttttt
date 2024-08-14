<template>
    <div class="container-fluid-lg">
        <div class="row">
            <div class="col-xxl-9 col-xl-8 col-lg-7">
                <div class="row g-4">
                    <div class="col-xl-6">
                        <ShopProductDetailsThumbnailImages :Data="Data" />
                    </div>
                    <div class="col-xl-6">
                        <div class="right-box-contain">
                            <ShopProductDetailsWidgetsProductView :product="Data" :option="option" />
                            <ShopProductDetailsWidgetsProductContain :product="Data" :option="option" />
                            <ShopProductDetailsWidgetsProductAction :product="Data" :option="option" />
                            <ShopProductDetailsWidgetsProductInformation :product="Data" />
                            <ShopProductDetailsWidgetsProductDeliveryInformation :product="Data" />
                            <ShopProductDetailsWidgetsPaymentOption :product="Data" :option="option" />
                            <ShopProductDetailsWidgetsProductSocialShare :product="Data" :option="option" />
                        </div>
                    </div>
                    <div class="col-12 related-product-2"
                        v-if="Data?.cross_sell_products && Data?.cross_sell_products?.length">
                        <ShopProductDetailsWidgetsProductBundle :productData="Data" />
                    </div>
                    <div class="col-12">
                        <ShopProductDetailsWidgetsProductDetailsAccordion :product="Data" :reviews="reviews"
                            :questionAnswers="questionAnswers" />
                    </div>
                </div>
            </div>
            <div class="col-xxl-3 col-xl-4 col-lg-5 d-none d-lg-block">
                <ShopProductDetailsSidebar :product="Data" :option="option" />
            </div>
        </div>
    </div>
</template>

<script setup>
let props = defineProps({
    Data: { type: Object },
    option: { type: Object },
    reviews: Object,
    questionAnswers: Object,
})
</script>
