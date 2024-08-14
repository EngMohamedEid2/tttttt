<template>
<div class="product-rating">
    <NuxtRating :read-only="true" :ratingValue="store.rating_count || 0" :rating-size="'25px'" />
    <h6>({{ store.reviews_count }} {{ 'Review' }})</h6>
</div>

</template>

<script setup>
let props = defineProps({
    store:Object
})
</script>

<style lang="scss" scoped>

</style>