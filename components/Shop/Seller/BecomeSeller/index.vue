<template>
  <div>
    <WidgetsBreadcrumb  :breadcrumbs="breadcrumbs"/>
    <!-- About Section Start -->
    <ShopSellerBecomeSellerAbout :sellerStore="sellerStore.about" />
    <!-- About Section End -->

    <!-- Service Section Start -->
    <ShopSellerBecomeSellerService :sellerStore="sellerStore.services" />
    <!-- Service Section End -->

    <!-- Business Section Start -->
    <ShopSellerBecomeSellerBusiness :sellerStore="sellerStore.steps" />
    <!-- Business Section End -->

    <!-- Selling Section Start -->
    <ShopSellerBecomeSellerSelling :sellerStore="sellerStore.start_selling" />
  </div>
</template>

<script setup>
let props = defineProps({
  sellerStore: Object,
});

var breadcrumbs = { page: "Become Seller", links: [{ name: "Become Seller" }] }
</script>

<style lang="scss" scoped>
</style>