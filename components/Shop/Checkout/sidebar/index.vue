<template>
  <div class="col-xxl-4 col-xl-5">
    <div class="card pos-detail-card">
      <div class="card-body">
        <div class="title-header">
          <div class="d-flex align-items-center">
            <h5>{{ $t("Checkout") }}</h5>
          </div>
        </div>
        <div class="product-details">
          <WidgetsNoData
            :class="'empty-cart'"
            :image="'/svg/empty-items.svg'"
            :text="'No items in a cart'"
            v-if="!cart?.length"
          />
          <ul class="cart-listing" v-if="cart?.length">
            <li v-for="item of cart" :key="item">
              <img
                :src="
                  item?.variation && item?.variation?.variation_image
                    ? item?.variation?.variation_image?.original_url
                    : item?.product?.product_thumbnail
                    ? item?.product?.product_thumbnail?.original_url
                    : item.product.image
                "
                class="img-fluid"
                alt="product"
              />
              <div class="cart-content">
                <h4>
                  {{
                    item?.variation
                      ? item?.variation?.name
                      : item?.product?.name
                  }}
                </h4>
                <h5 class="text-theme d-flex justify-content-between">
                  <div>
                    {{
                      Number(
                        store.convertCurrency(
                          item?.variation
                            ? item.variation.sale_price
                            : item.product.retail_price
                        )
                      ).toFixed(2)
                    }}
                    {{ store.currency.symbol }}
                  </div>
                  <div>X {{ item.quantity }}</div>
                </h5>
                <h5 class="price">
                  {{
                    Number(
                      store.convertCurrency(
                        item?.variation
                          ? item.variation.sale_price
                          : item.product.retail_price
                      ) * item.quantity
                    ).toFixed(2)
                  }}
                  {{ store.currency.symbol }}
                </h5>
              </div>
            </li>
          </ul>
        </div>
        <ShopCheckoutSidebarCartSummary :Shipping="Shipping" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useCartStore } from "~~/store/cart";
import { useUserStore } from "~~/store/user";
import { useCurrencyStore } from "@/store/currency";

let props = defineProps({
  Shipping: {
    type: String,
  },
});

let store = useCurrencyStore();
store.allCurrency();
let { cart } = storeToRefs(useCartStore());
let { User, UserInfo } = storeToRefs(useUserStore());
let user = ref(UserInfo);
// console.log(typeof cart);
</script>

<style lang="scss" scoped></style>
