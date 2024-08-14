<template>
<nuxt-link :to="`/seller/store/${store.slug}`">
  <span class="product-label">{{ store.products_count }} {{ 'Products' }}</span>
</nuxt-link> 

</template>

<script setup>
let props = defineProps({
    store:Object
})
</script>

<style lang="scss" scoped>

</style>