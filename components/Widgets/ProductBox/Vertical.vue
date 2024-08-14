<template>
    <div class="offer-product">
        <nuxt-link :to="`/product/${product.slug}`" class="offer-image">
            <nuxt-img :src="product?.product_thumbnail ? product?.product_thumbnail?.original_url : '/images/product.png'"
                alt="product" />
        </nuxt-link>
        <div class="offer-detail">
            <div>
                <nuxt-link :to="`/product/${product.slug}`" class="text-title">
                    <h6 class="name">{{ product.name }}</h6>
                </nuxt-link>
                <span v-if="product.unit">{{ product.unit }}</span>
                <div class="vertical-price">
                    <h5 class="price theme-color"> {{ store.currency.symbol }}
                        {{ store.convertCurrency(product?.sale_price) }}</h5>
                    <del class="text-content" v-if="product.discount"> {{ store.currency.symbol }}
                        {{ store.convertCurrency(product?.price) }}</del>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useCurrencyStore } from '@/store/currency'
let props = defineProps({
    product: Object,
    class: String
});
let store = useCurrencyStore();
store.allCurrency();
</script>

<style lang="scss" scoped></style>