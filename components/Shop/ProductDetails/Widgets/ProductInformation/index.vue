<template>
    <div class="pickup-box">
        <div class="product-title">
            <h4>{{ $t("Product Information") }}</h4>
        </div>
        <div class="product-info">
            <ul class="product-info-list product-info-list-2">
                <li v-if="product?.sku">{{ $t("SKU") }}: {{ product?.sku }}</li>
                <li v-if="product?.unit">{{ $t("SKU") }}: {{ product?.unit }}</li>
                <li v-if="product?.sku">
                    {{ $t("Weight") }}: {{ product?.weight }} {{ $t("Gms") }}
                </li>
                <li v-if="product?.stock_status" class="text- capitalize">
                    {{ $t("Stock Status") }}: {{ transform(product?.stock_status) }}
                </li>
                <li v-if="product?.quantity > 0">
                    {{ $t("Quantity") }}: {{ product?.quantity }} {{ $t("Items Left") }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
let props = defineProps({
    product: Object,
});
</script>

<style lang="scss" scoped></style>
