<template>
    <WidgetsBreadcrumb :breadcrumbs="breadcrumbs" />
    <section class="cart-section section-b-space">
        <div class="container-fluid-lg">
            <div class="row g-xl-5 g-sm-4 g-3" v-if="cart.length">
                <div class="col-xxl-9 col-xl-8">
                    <ShopCartProducts />
                </div>

                <div class="col-xxl-3 col-xl-4">
                    <ShopCartSummary />
                </div>
            </div>
            <WidgetsNoData
            :classes="'no-data-added'"
            :image="'/svg/empty-items.svg'"
            :text="'No Items Added'"
            :description="'It appears that nothing has been added to your cart.'"
            v-if="!cart?.length">
            </WidgetsNoData>
        </div>
    </section>
</template>
<script setup>
import { useCartStore } from "@/store/cart"
import { storeToRefs } from "pinia";
import { useApiCartStore } from "~~/store/CartWithApi";

var breadcrumbs = { page: "Cart", links: [{ name: "Cart" }] }
let { cart, CartTotal } = storeToRefs(useCartStore())
let { ApiCart } = storeToRefs(useApiCartStore())
if (useCookie('uat').value) {
    useCartStore().GetCartDataFromApi()
}
let ProductImage = ({ product }) => {
    return product.selectedVariant?.variation_image?.original_url || product?.product_thumbnail?.original_url || PlaceholderImage
}
</script>