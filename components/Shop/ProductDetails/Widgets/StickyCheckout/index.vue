<template>
    <div class="sticky-bottom-cart">
        <div class="container-fluid-lg">
            <div class="row">
                <div class="col-12">
                    <div class="cart-content">
                        <div class="product-image">
                            <img :src="selectedVariation && selectedVariation.variation_image
                                ? selectedVariation.variation_image.original_url
                                : product.product_thumbnail
                                    ? product.product_thumbnail.original_url
                                    : '/images/product.png'" class="img-fluid" alt="product">
                            <div class="content">
                                <h5>{{ selectedVariation ? selectedVariation.name : product?.name }}</h5>
                                <h6>{{ store.currency.symbol }} {{ store.convertCurrency(selectedVariation ?
                                    selectedVariation.sale_price : product.sale_price) }}
                                    <del class="text-danger"
                                        v-if="selectedVariation ? selectedVariation.discount : product.discount">
                                        {{ store.currency.symbol }} {{ store.convertCurrency(selectedVariation ?
                                            selectedVariation.price : product.price) }}
                                    </del>
                                    <span v-if="selectedVariation ? selectedVariation.discount : product.discount">
                                        {{ store.currency.symbol }} {{ store.convertCurrency(selectedVariation ?
                                            selectedVariation.discount : product.discount) }}% {{ 'off' }}
                                    </span>
                                </h6>
                            </div>
                        </div> 
                        <div class="selection-section">
                            <div class="form-group mb-0 choose-product">
                                <WidgetsVariantAttributes :product="product" :attributes="product?.attributes || []"
                                    @selectVariation="selectVariation($event)" :isAllVariantStyleDropdown="true"  />
                            </div>
                            <div class="cart_qty qty-box product-qty m-0">
                                <div class="input-group h-100">
                                    <WidgetsButton :classes="'btn qty-left-minus'" :id="'add-to-cart' + product.id"
                                        @onClick="updateQuantity(-1)">
                                        <Icon name="ri-subtract-fill"></Icon>
                                    </WidgetsButton>
                                    <input class="form-control input-number qty-input border-0" type="text" name="quantity"
                                        :value="productQty" readonly>
                                    <WidgetsButton :classes="'btn qty-left-minus'" :id="'qty-left-minus' + product.id"
                                        @onClick="updateQuantity(1)">
                                        <Icon name="ri-add-line"></Icon>
                                    </WidgetsButton>
                                </div>
                            </div>
                        </div>
                        <div class="add-btn">
                            <WidgetsButton :id="'addcartbtnVariationsticky' + product.id"
                                :classes="'btn theme-bg-color text-white'" @onClick="handleAddProduct()" v-if="(selectedVariation && selectedVariation?.stock_status == 'in_stock'
                                    || product?.stock_status == 'in_stock' && product.type === 'simple')">
                                <i class="ri-shopping-cart-line me-1"></i> {{ 'Add to Cart' }}
                            </WidgetsButton>
                            <div v-else>
                                <WidgetsButton :class="'btn theme-bg-color text-white'" :id="'soldoutbtncheckout'"
                                    :disabled="true">
                                    {{ ((selectedVariation?.stock_status == 'out_of_stock' ||
                                        product.stock_status == 'out_of_stock') ? $t("Sold Out") : $t("Add to Cart")) }}
                                </WidgetsButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useCurrencyStore } from "@/store/currency"
import { useCartStore } from "@/store/cart";
let props = defineProps({
    selectedVariation: Object,
    product: Object
})


let productQty = ref(1)
let selectedVariation = ref(null);
let store = useCurrencyStore();
store.allCurrency();

function selectVariation(variation) {
    selectedVariation.value = variation;
}

function updateQuantity(qty) {
    if (1 > productQty.value + (qty)) return;   
    productQty.value = productQty.value + (qty);
}

function handleAddProduct() {
    useCartStore().addToCartProduct({ product: props.product, quantity: productQty?.value, variation_id: selectedVariation?.value?.id, variation:selectedVariation?.value });
}

</script>

<style lang="scss" scoped></style>