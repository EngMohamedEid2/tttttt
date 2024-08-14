<template>
    <div class="delivery-info"
        v-if="product?.estimated_delivery_text || (product?.return_policy_text && product?.is_return)">
        <div class="product-title">
            <h4>{{ $t("Delivery Details") }}</h4>
        </div>
        <ul>
            <li v-if="product?.estimated_delivery_text">
                <Icon name="ri:truck-line"></Icon> {{ product?.estimated_delivery_text }}
            </li>
            <li v-if="product?.return_policy_text">
                <Icon name="ri:arrow-left-right-line"></Icon> {{ product?.return_policy_text }}
            </li>
        </ul>
    </div>
</template>

<script setup>
let props = defineProps({
    product: Object
})
</script>

<style lang="scss" scoped></style>