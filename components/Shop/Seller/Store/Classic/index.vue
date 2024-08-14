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
                    <a class="seller-grid-box">
                        <div class="grid-contain">
                            <div class="seller-contact-details">
                                <ShopSellerWidgetsContectDetails :store="store" />
                            </div>
                            <div class="contain-name">
                                <div>
                                    <ShopSellerWidgetsStoreName :store="store" />
                                    <ShopSellerWidgetsStoreRating :store="store" />
                                    <nuxt-link :to="`/seller/store/${store.slug}`"
                                        class="btn btn-sm theme-bg-color text-white fw-bold">
                                        {{ 'Visit Store' }}
                                        <Icon name="ri-arrow-right-line"></Icon>
                                    </nuxt-link>
                                </div>  
                                <div class="grid-image">
                                    <nuxt-link :to="`/seller/store/${store.slug}`">
                                        <ShopSellerWidgetsStoreLogo :store="store" />
                                    </nuxt-link>
                                </div>
                            </div>
                        </div>
                    </a>
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