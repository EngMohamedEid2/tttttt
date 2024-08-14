<template>
    <div class="related-product bundle-sec" v-if="crossSellProducts?.length">
        <div class="product-title-2">
            <h4>{{ $t("Frequently bought together") }}</h4>
        </div>

        <div class="related-box">
            <div class="related-image">
                <ul>
                    <li v-for="crossSellproduct in crossSellProducts" :key="crossSellproduct">
                        <div class="product-box product-box-bg wow fadeInUp">
                            <div class="product-image">
                                <NuxtLink :to="`/product/${crossSellproduct.slug}`">
                                    <img :src="crossSellproduct.product_thumbnail ? crossSellproduct?.product_thumbnail?.original_url : '/images/product.png'"
                                        class="img-fluid" alt="">
                                </NuxtLink>
                            </div>
                            <div class="product-detail">
                                <NuxtLink :to="`/product/${crossSellproduct.slug}`">
                                    <h6 class="name">
                                        {{ crossSellproduct.name }}
                                    </h6>
                                </NuxtLink>

                                <h5 class="sold text-content">
                                    <span class="theme-color price">{{ store.currency.symbol }} {{
                                        Number(store.convertCurrency(crossSellproduct.sale_price)).toFixed(2) }}</span>
                                    <del v-if="crossSellproduct?.discount">{{ store.currency.symbol }} {{
                                        Number(store.convertCurrency(crossSellproduct.price)).toFixed(2)
                                    }}</del>
                                </h5>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="budle-list">
                <ul>
                    <li v-for="crossSellproduct in crossSellProducts" :key="crossSellproduct">
                        <div class="form-check">
                            <input class="checkbox_animated" type="checkbox" @change="select($event)"
                                :value="crossSellproduct.id" :id="crossSellproduct.id">
                            <label class="form-check-label" :for="crossSellproduct.id">
                                <span class="color color-1">{{ crossSellproduct.name }}
                                    <span>{{ store.currency.symbol }} {{
                                        Number(store.convertCurrency(crossSellproduct.sale_price)).toFixed(2)
                                    }}</span></span>
                            </label>
                        </div>
                    </li>

                    <li class="contant">
                        <h5>{{ $t("Product Selected for") }}</h5>
                        <h4 class="theme-color">{{ store.currency.symbol }} {{
                            Number(store.convertCurrency(total)).toFixed(2) }}</h4>
                        <WidgetsButton :classes="'btn text-white theme-bg-color btn-md mt-sm-4 mt-3 fw-bold'"
                            :id="'addcartAllbtn'" :disabled="!total" :iconClass="'fa-solid fa-cart-shopping ms-2'"
                            @onClick="AddToCartAll()">
                            {{ $t(" Add All To Cart") }}
                        </WidgetsButton>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useDataStore } from "@/store/data"
import { useCartStore } from "~~/store/cart"
import { useCurrencyStore } from '@/store/currency'
let props = defineProps({
    productData: Object
})

let store = useCurrencyStore();
store.allCurrency();

await useDataStore().GetProduct()
let { Products } = storeToRefs(useDataStore());
let crossSellProducts = Products?.value.data?.filter(product => props.productData?.cross_sell_products?.includes(product.id))

let total = ref(0);
let selectedProductIds = ref([]);
let crossSellproducts = ref([]);
let selectedProduct = ref([]);

const select = (event) => {
    const inputValue = event?.target?.value;
    const index = selectedProductIds?.value?.indexOf(Number(inputValue));
    if (event?.target?.checked) {
        selectedProductIds.value.push(Number(inputValue))
    } else {
        selectedProductIds.value.splice(index, 1)
    }
    const products = crossSellProducts;
    selectedProduct.value = products.filter(product => selectedProductIds.value.includes(product?.id));
    total.value = selectedProduct.value.reduce((sum, item) => sum + item.sale_price, 0);
}

const AddToCartAll = () => {
    selectedProduct.value.forEach(product => {
        if (product) {
            useCartStore().addToCartProduct({
                product: product ? product : null,
                quantity: 1,
                variation: null,
                variation_id: null,
            });
        }
    })
}
</script>
<style lang="scss" scoped></style>