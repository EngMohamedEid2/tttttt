<template>
    <section class="product-section pt-0">
        <div class="container-fluid-lg">
            <div class="row g-4">
                <div class="col-xl-6">
                    <div class="product-left-box">
                        <div class="row g-sm-4 g-2">
                            <ShopProductDetailsImage4Image :Data="Data" />
                        </div>
                    </div>
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
                <div class="col-12 related-product-2" v-if="Data?.cross_sell_products && Data?.cross_sell_products?.length">
                    <ShopProductDetailsWidgetsProductBundle :productData="Data" />
                </div>

                <div class="col-12">
                    <ShopProductDetailsWidgetsProductDetailsTabs :product="Data" :reviews="reviews"
                        :questionAnswers="questionAnswers" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
let props = defineProps({
    Data: { type: Object },
    option: { type: Object },
    reviews: Object,
    questionAnswers: Object,
})
</script>