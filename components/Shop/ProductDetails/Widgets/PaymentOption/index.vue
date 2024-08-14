<template>
<div>
    <div class="paymnet-option" v-if="option?.product?.safe_checkout && product?.safe_checkout">
        <div class="product-title">
            <h4>{{ $t("Guaranteed Safe Checkout") }}</h4>
            <img :src="option?.product?.safe_checkout_image" class="img-fluid payment-img"
                v-if="option?.product?.safe_checkout_image">
        </div>
    </div>
    <div class="secure-site-sec" v-if="option?.product?.secure_checkout && product?.secure_checkout">
        <h4>{{ $t("Secure Checkout") }}</h4>
        <img :src="option?.product?.secure_checkout_image" class="img-fluid payment-img"
            v-if="option?.product?.secure_checkout_image">
    </div>
</div>
</template>

<script setup>
let props = defineProps({
    product: Object,
    option: Object
})
</script>
<style lang="scss" scoped></style>