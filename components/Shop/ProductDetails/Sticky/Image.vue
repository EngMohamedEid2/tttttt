<template>
<div>
    <div class="col-12 wow fadeInUp" v-for="(productImages, index) in Data.product_galleries" :key="index">
        <div class="slider-image">
            <img :src="productImages?.original_url" :id="productImages.id" class="img-fluid" alt="">
        </div>
    </div>
</div>
</template>

<script setup>
let props = defineProps({
    Data: Object,
    GlobalSelectedVariant: Object
})
</script>
