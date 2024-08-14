<template>
  <div>
    <h2 class="name">
      {{ thisProduct.name }}
    </h2>
    <div class="price-rating">
      <h3 class="theme-color price">
        {{ store.currency.symbol }}
        {{ thisProduct.retail_price }}

        <del class="text-content">
          {{ store.currency.symbol }}
          {{ 20.0 }}
        </del>
        <span class="offer-top"> {{ 5 }}% {{ "off" }} </span>
      </h3>
      <!-- <div class="product-rating custom-rate">
        <NuxtRating
          :read-only="true"
          :ratingValue="product?.rating_count || 0"
          :rating-size="'25px'"
        />
        <span class="review"
          >{{ product?.reviews_count }} {{ $t("Review") }}</span
        >
      </div> -->
    </div>
    <!-- <div class="product-contain" v-if="product?.short_description">
      <p v-html="product?.short_description"></p>
    </div> -->

    <!-- <div class="product-package">
      <WidgetsVariantAttributes
        :product="product"
        :attributes="product?.attributes"
        @selectVariation="selectVariation($event)"
      />
    </div> -->
    <!-- <ShopProductDetailsWidgetsSaleTimer
      :startDate="product?.sale_starts_at"
      :endDate="product?.sale_expired_at"
      v-if="product?.sale_starts_at && product?.sale_expired_at"
    /> -->

    <div class="note-box product-package">
      <div class="cart_qty qty-box product-qty">
        <div class="input-group">
          <button
            :classes="'btn qty-left-minus'"
            @click.prevent="updateQuantity(-1)"
          >
            <Icon name="ri-subtract-fill"></Icon>
          </button>
          <input
            class="form-control input-number qty-input"
            type="text"
            name="quantity"
            :value="productQty"
            readonly
          />
          <button
            :classes="'btn qty-left-minus'"
            @click.prevent="updateQuantity(1)"
          >
            <Icon name="ri-add-line"></Icon>
          </button>
        </div>
      </div>
      <!-- <div class="wishlist-btn-group">
        <WidgetsButton
          :classes="'wishlist-button btn'"
          id="'wishlist_btn'"
          @click="useWishlistStore().ToggleFromWishlist({ product })"
        >
          <Icon name="ri-heart-line"></Icon>
        </WidgetsButton>
        <WidgetsButton
          :classes="'wishlist-button btn'"
          id="'compare_btn'"
          @click="useCompareStore().ToggleFromCompare({ product })"
        >
          <Icon name="ri-refresh-line"></Icon>
        </WidgetsButton>
      </div> -->
    </div>

    <div class="dynamic-checkout">
      <WidgetsButton
        :id="'addcartbtnVariation' + thisProduct.id"
        :classes="'btn btn-md bg-theme scroll-button'"
        @click="handleAddProduct(), useCartStore().cartToggleValue(true)"
      >
        <Icon name="ri-shopping-cart-line"></Icon> {{ $t("Add to Cart") }}
      </WidgetsButton>
      <!-- <template v-else>
        <WidgetsButton
          :classes="'btn btn-md bg-theme scroll-button disabled'"
          :id="'soldoutbtnproductcontain'"
          :disabled="true"
        >
          <Icon
            class="ri-shopping-cart-line me-1"
            v-if="selectedVariation?.stock_status == 'in_stock'"
          ></Icon>
          {{
            selectedVariation?.stock_status == "out_of_stock" ||
            product?.stock_status == "out_of_stock"
              ? $t("Sold Out")
              : $t("Add to Cart")
          }}
        </WidgetsButton>
      </template> -->
      <WidgetsButton
        :classes="'btn btn-md border-theme-color'"
        :id="'buynowbtn' + thisProduct.id"
        @click="handleAddProduct(true)"
      >
        {{ "Buy Now" }}
      </WidgetsButton>
    </div>
  </div>
  <!-- <h2>hello from cont</h2> -->
</template>

<script setup>
import { useCartStore } from "@/store/cart";
import { useCompareStore } from "@/store/compare";
import { useWishlistStore } from "@/store/wishlist";
import { useCurrencyStore } from "@/store/currency";
// import product from "~/server/api/product";

let store = useCurrencyStore();
// store.allCurrency();
let productQty = ref(1);
let selectedVariation = ref(null);
const cartItem = ref(null);
let buyNow = ref(false);

// function selectVariation(variation) {
//   selectedVariation.value = variation;
// }

let CartItem = computed(() => {
  return IsProductInCart({ product: props.product });
});

function updateQuantity(qty) {
  if (1 > productQty.value + qty) return;
  productQty.value = productQty.value + qty;
  // checkStockAvailable();
}

// function checkStockAvailable() {
//   if (selectedVariation.value) {
//     selectedVariation.value["stock_status"] =
//       selectedVariation?.value?.quantity < productQty.value
//         ? "out_of_stock"
//         : "in_stock";
//   } else {
//     props.product["stock_status"] =
//       props.product?.quantity < productQty.value ? "out_of_stock" : "in_stock";
//   }
// }

function handleAddProduct(buyNow) {
  useCartStore().addToCartProduct({
    product: thisProduct.value,
    quantity: productQty?.value,
    variation_id: selectedVariation?.value?.id,
    variation: selectedVariation?.value,
  });
  if (buyNow) {
    useRouter().push("/checkout");
  }
}
let props = defineProps({
  product: { type: Object },
});
let thisProduct = ref(props.product.data[0]);
console.log("thisProduct", props.product.data[0]);
</script>

<style lang="scss" scoped></style>
