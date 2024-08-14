<template>
<section>
    <div class="col" v-for="(product, index) in compare"  :key="index">
        <div class="compare-part">
            <div class="img-section">
                <div>
                    <img :src="product?.product_thumbnail ? product?.product_thumbnail?.original_url : 'images/product.png'"
                        class="img-fluid" :alt="product?.name" />
                </div>
                <a href="javascript:void(0)" tabindex="0">
                    <h5 class="text-title">{{ product?.name }}</h5>
                </a>
            </div>
            <div class="detail-part">
                <div class="title-detail">
                    <h5>{{ $t("Discount") }}</h5>
                </div>
                <div class="inner-detail">
                    <p>{{ product?.discount ? product?.discount : "-" }}</p>
                </div>
            </div>
            <div class="detail-part">
                <div class="title-detail">
                    <h5>{{ $t("Price") }}</h5>
                </div>
                <div class="inner-detail">
                    <p>{{ store.currency.symbol }}{{ Number(store.convertCurrency(product?.sale_price)).toFixed(2) }}</p>
                </div>
            </div>
            <div class="detail-part">
                <div class="title-detail">
                    <h5>{{ $t("Availability") }}</h5>
                </div>
                <div class="inner-detail">
                    <p>{{ transform(product?.stock_status) }}</p>
                </div>
            </div>
            <div class="detail-part">
                <div class="title-detail">
                    <h5>{{ $t("Rating") }}</h5>
                </div>
                <div class="inner-detail">
                    <div class="compare-rating">
                        <NuxtRating :read-only="true" :ratingValue="product?.rating_count || 0" :rating-size="'25px'" />
                        <span class="text-content rating-text">({{ product?.reviews_count }} {{ $t("Review") }})</span>
                    </div>
                </div>
            </div>
            <div class="detail-part">
                <div class="title-detail">
                    <h5>{{ $t("Weight") }}</h5>
                </div>
                <div class="inner-detail">
                    <p>{{ product?.weight ? product?.weight : "-" }}</p>
                </div>
            </div>
            <div class="btn-part">
                <button class="btn btn-animation btn-sm" @click.prevent="moveToCart(product),useCartStore().cartToggleValue(true)">
                    {{ $t("Move To Cart") }}
                </button>
            </div>
            <div class="remove-part">
                <a href="javascript:void(0)" class="text-content remove_column"
                    @click.prevent="useCompareStore().RemoveFromCompare({ product })"><i
                        class="fa-solid fa-trash-can me-2"></i>{{ $t("Remove") }}</a>
            </div>
        </div>
    </div>
</section>
</template>

<script setup>
import { useCartStore } from "@/store/cart";
import { useCompareStore } from "@/store/compare";
import { useCurrencyStore } from "@/store/currency";

let props = defineProps({
    compare:Object
})

let store = useCurrencyStore();
store.allCurrency();


function moveToCart(product) {
    useCartStore().addToCartProduct({ product: product, quantity: 1, variation_id: null,product_id:product.id,variation:selectedVariation?.value,id:null});
    useCompareStore().RemoveFromCompare({product})
}
</script>
<style lang="scss" scoped></style>
