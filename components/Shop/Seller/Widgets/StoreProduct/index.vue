<template>
<ul class="product-image">
    <li v-for="image in store.product_images" :key="image">
        <img :src="image ? image : '/images/product.png'" class="img-fluid" alt="">
    </li>
    <li v-if="store.products_count > 3">+{{ store.products_count - 3 }}</li>
</ul>

</template>

<script setup>
let props = defineProps({
    store:Object
})
</script>

<style lang="scss" scoped>

</style>