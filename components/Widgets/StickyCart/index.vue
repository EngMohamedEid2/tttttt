<template>
  <div>
  <div class="button-item" v-if="cart?.length">
    <WidgetsButton :classes="'item-btn btn text-white'" :id="'open_cart_btn'" :type="'button'" @onClick="openCart(true)">
      <Icon name="ri-shopping-cart-2-line"></Icon>
    </WidgetsButton>
  </div>
  <div class="item-section" :class="{ active: isOpen && cart?.length }">
    <WidgetsButton :classes="'close-button'" :id="'close_cart_btn'" :type="'button'" @onClick="openCart(false)">
     <Icon name="ri-close-line"/>
    </WidgetsButton>
    <h6>
      <Icon name="ri-shopping-cart-2-line"></Icon>
      <span>{{ cart?.length }} {{ $t("Items") }}</span>
    </h6>
    <ul class="items-image">
      <li v-for="item in cart.slice(0, 2)" :key="item">
        <img :src="item?.variation && item?.variation?.variation_image
            ? item?.variation?.variation_image?.original_url
            : item?.product?.product_thumbnail
              ? item?.product?.product_thumbnail?.original_url
              : '/images/product.png'
          " alt="product" />
      </li>
      <li v-if="cart?.length > 2">+ {{ cart?.length - 2 }}</li>
    </ul>
    <nuxt-link to="/cart" class="btn item-button btn-sm fw-bold">{{ store.currency.symbol }}
      {{ Number(store.convertCurrency(CartTotal)).toFixed(2) }}</nuxt-link>
  </div>
</div>
</template>

<script setup>
import { useCartStore } from "@/store/cart";
import { useCurrencyStore } from "@/store/currency";
let { cart, CartTotal } = storeToRefs(useCartStore());
let store = useCurrencyStore();
store.allCurrency();
let isOpen = ref(false);
function openCart(isOpen) {
  isOpen = isOpen;
}
</script>

<style lang="scss" scoped></style>
