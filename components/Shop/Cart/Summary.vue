<template>
  <div class="summery-box p-sticky">
    <div class="summery-header">
      <h3>{{ $t("Cart Total") }}</h3>
    </div>

    <div class="summery-contain">
      <ul>
        <li>
          <h4>{{ $t("Subtotal") }}</h4>
          <h4 class="price">
            {{ Number(store.convertCurrency(CartTotal)).toFixed(2) }}
            {{ store.currency.symbol }}
          </h4>
        </li>
        <li class="align-items-start">
          <h4>{{ $t("Shipping") }}</h4>
          <h4 class="price text-end">{{ $t("Cost at Checkout") }}</h4>
        </li>

        <li class="align-items-start">
          <h4>{{ $t("Tax") }}</h4>
          <h4 class="price text-end">{{ $t("Cost at Checkout") }}</h4>
        </li>
      </ul>
    </div>

    <ul class="summery-total">
      <li class="list-total border-top-0">
        <h4>{{ $t("Total") }}</h4>
        <h4 class="price theme-color">
          {{ Number(store.convertCurrency(CartTotal)).toFixed(2) }}
          {{ store.currency.symbol }}
        </h4>
      </li>
    </ul>

    <div class="button-group cart-button">
      <ul>
        <li>
          <nuxt-link to="/checkout">
            <button class="btn btn-animation proceed-btn fw-bold">
              {{ $t("Process To Checkout") }}
            </button></nuxt-link
          >
        </li>

        <li>
          <button
            onclick="location.href = '/collections'"
            class="btn btn-light shopping-button text-dark"
          >
            <Icon name="ri:arrow-left-line" class=""></Icon
            >{{ $t("Return To Shopping") }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { useCurrencyStore } from "@/store/currency";
import { useCartStore } from "@/store/cart";
import { storeToRefs } from "pinia";
let { cart, CartTotal } = storeToRefs(useCartStore());
let store = useCurrencyStore();
store.allCurrency();
</script>
