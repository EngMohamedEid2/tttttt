<template>
  <div class="pt-25" v-if="relatedProducts?.length">
    <!-- <div class="category-menu">
            <h3>{{ $t("Trending Products") }}</h3>
            <ul class="product-list border-0 p-0 sidebar-product d-flex">
                <li v-for="(product, index) in relatedProducts?.slice(0, 4)" :key="index">
                    <WidgetsProductBox :product="product" :style="'vertical'" />
                </li>
            </ul>
        </div> -->
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useDataStore } from "~/store/data";
let props = defineProps({
  product: Object,
  themeOptions: Object,
});

let relatedProducts = ref([]);
let { Products } = storeToRefs(useDataStore());
relatedProducts.value = Products?.value?.data?.filter((product) =>
  props?.product?.related_products?.includes(product.id)
);
</script>
<style lang="scss" scoped></style>
