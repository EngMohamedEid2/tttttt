<template>
    <div class="right-sidebar-box">
        <ShopProductDetailsWidgetsStoreInformation :store="product.store" v-if="product.store" />
        <ShopProductDetailsWidgetsTrendingProducts :product="product" v-if="option.product.is_trending_product" />
        <ShopProductDetailsWidgetsProductBanner :image="option.product.banner_image_url"
            v-if="option.product.banner_enable && option.product.banner_image_url" />
    </div>
</template>

<script setup>
let props = defineProps({
    product: Object,
    option: Object
})
</script>
<style lang="scss" scoped></style>