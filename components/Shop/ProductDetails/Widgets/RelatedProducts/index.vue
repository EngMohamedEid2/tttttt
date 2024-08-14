<template>
    <div class="container-fluid-lg" v-if="relatedProducts?.length">
        <WidgetsTitle :title="'You May Also Like'" />
        <div class="row g-3">
            <div class="col-xxl-2 col-lg-3 col-md-4 col-6 product-box-contain" v-for="product in relatedProducts"
                :key="product">
                <WidgetsProductBox :product="product" :classes="'product-box-3'" :style="'horizontal'" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useDataStore } from '~/store/data';
let props = defineProps({
    product: Object,
})

let relatedProducts = ref([])
let { Products } = storeToRefs(useDataStore())
relatedProducts.value = Products?.value?.data?.filter(product => props?.product?.related_products?.includes(product.id))
</script>

<style lang="scss" scoped></style>