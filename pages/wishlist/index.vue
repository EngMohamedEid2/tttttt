<template>
    <div>
        <WidgetsBreadcrumb  :breadcrumbs="breadcrumbs"/>
        <ShopWishlist/>
    </div>
</template>
<script setup>
import { storeToRefs } from 'pinia';
import { useWishlistStore } from '~~/store/wishlist';
var breadcrumbs = { page: "Wishlist", links: [{ name: "Wishlist" }] }
let { wishlist } = storeToRefs(useWishlistStore())

if (!wishlist.value.length) {
    useWishlistStore().GetWishlistItems();
}
</script>