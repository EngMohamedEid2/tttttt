<template>
    <div class="container-fluid-lg">
        <div class="row g-4">
            <template v-if="skeletonLoader">
                <div class="col-xxl-4 col-md-6" v-for="item in skeletonItems" :key="item">
                    <ShopSellerStoreSekleton />
                </div>
            </template>
            <template v-else>
                <div class="col-xxl-4 col-md-6" v-for="store in stores" :key="store">
                    <div class="seller-grid-box seller-grid-box-1">
                        <div class="grid-image">
                            <ShopSellerWidgetsStoreLogo :store="store" />
                            <div class="contain-name">
                                <div>
                                    <div class="since-number">
                                        <ShopSellerWidgetsStoreRating :store="store" />
                                    </div>
                                    <ShopSellerWidgetsStoreName :store="store" />
                                </div>
                                <ShopSellerWidgetsStoreProductCount :store="store" />
                            </div>
                        </div>
                        <div class="grid-contain">
                            <div class="seller-contact-details">
                                <ShopSellerWidgetsContectDetails :store="store" />
                            </div>
                            <div class="seller-category">
                                <nuxt-link :to="`/seller/store/${store.slug}`"
                                    class="btn btn-sm theme-bg-color text-white fw-bold">
                                    {{ 'Visit Store' }}
                                    <Icon name="ri-arrow-right-line" size="18"></Icon>
                                </nuxt-link>
                                <ShopSellerWidgetsStoreProduct :store="store" />
                            </div>
                        </div>
                    </div>
                </div>
                <WidgetsNoData :classes="'no-data-added collection-no-data'" :image="'/svg/no-product.svg'"
                    :text="'No Store Found'"
                    :description="'I regret to inform you that the Store is currently unavailable.'" v-if="!stores?.length">
                </WidgetsNoData>
            </template>
        </div>
    </div>
</template>

<script setup>
let props = defineProps({
    stores: Object,
    skeletonLoader: Object,
    skeletonItems: Object
})


</script>