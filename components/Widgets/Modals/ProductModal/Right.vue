<template>
  <div class="col-lg-6">
    <div class="right-sidebar-modal">
      <h4 class="title-name">
        {{ selectedVariation ? selectedVariation?.name : Product?.name }}
      </h4>
      <h4 class="price">
        {{ store.currency.symbol }} {{ Product.retail_price }}
        <del
          v-if="
            selectedVariation ? selectedVariation.discount : Product.discount
          "
          >{{ store.currency.symbol }}
          {{
            Number(
              store.convertCurrency(
                selectedVariation ? selectedVariation?.price : Product?.price
              )
            ).toFixed(2)
          }}</del
        >
        <label
          class="modal-label"
          v-if="
            selectedVariation ? selectedVariation.discount : Product.discount
          "
          >{{
            selectedVariation ? selectedVariation?.discount : Product?.discount
          }}% {{ "off" }}</label
        >
      </h4>

      <div class="product-rating">
        <NuxtRating
          :read-only="true"
          :ratingValue="Product?.reviews_count || 0"
          :rating-size="'25px'"
        />
        <div class="fs-14 ms-2 review">
          {{ Product.reviews_count }} {{ "Reviews" }}
        </div>
      </div>

      <!-- <div class="product-detail mb-2">
        <h4>{{ "Product Details :" }}</h4>
        <p v-html="Product.short_description"></p>
      </div> -->

      <!-- <div class="pickup-box">
        <div class="product-info">
          <ul class="product-info-list product-info-list-2">
            <li v-if="Product.sku">{{ $t("SKU") }}: {{ Product.sku }}</li>
            <li v-if="Product?.stock_status">
              {{ $t("Stock Status") }}: {{ transform(Product?.stock_status) }}
            </li>
            <li v-if="Product.quantity > 0">
              {{ $t("Quantity") }}: {{ Product.quantity }} {{ "Items Left" }}
            </li>
          </ul>
        </div>
      </div> -->

      <!-- <div class="selection-section mt-3" v-if="Product?.attributes?.length">
        <WidgetsVariantAttributes
          :product="Product"
          :attributes="Product?.attributes || []"
          @selectVariation="selectVariation($event)"
        />
      </div> -->

      <div class="modal-button">
        <div class="modal-qty">
          <div class="input-group">
            <button
              type="button"
              class="qty-left-minus"
              @click.prevent="updateQuantity(-1)"
            >
              <Icon name="ri:subtract-line"></Icon>
            </button>
            <input
              class="form-control input-number qty-input"
              :value="productQty"
              type="number"
              name="quantity"
              readonly
            />
            <button
              type="button"
              class="qty-right-plus"
              @click.prevent="updateQuantity(1)"
            >
              <Icon name="ri:add-line"></Icon>
            </button>
          </div>
        </div>

        <button
          class="btn theme-bg-color view-button icon text-white fw-bold btn-md"
          @click="handleAddProduct(), useCartStore().cartToggleValue(true)"
        >
          <Icon name="ri:shopping-cart-line"></Icon> {{ $t("Add to Cart") }}
        </button>
        <!-- <button
          class="btn theme-bg-color view-button icon text-white fw-bold btn-md"
          @click="handleAddProduct()"
          :disabled="true"
        >
          {{
            selectedVariation?.stock_status == "out_of_stock" ||
            Product.stock_status == "out_of_stock"
              ? "Sold Out"
              : "Add to Cart"
          }}
        </button> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCurrencyStore } from "@/store/currency";
import { storeToRefs } from "pinia";
import { useCartStore } from "~~/store/cart";

let { cart } = storeToRefs(useCartStore());
let props = defineProps({
  selectedVariation: Object,
  Product: Object,
  attributes: Array,
  productAvailable: Boolean,
  existingCartItemIndex: Number,
});
let selectedVariation = ref(null);
let productQty = ref(1);
let store = useCurrencyStore();
store.allCurrency();

function selectVariation(variation) {
  selectedVariation.value = variation;
}

function updateQuantity(qty) {
  if (1 > productQty.value + qty) return;
  productQty.value = productQty.value + qty;
}

function handleAddProduct() {
  useCartStore().addToCartProduct({
    product: props.Product,
    quantity: productQty?.value,
    variation_id: selectedVariation?.value?.id,
    variation: selectedVariation?.value,
  });
}
</script>
<style lang="scss" scoped></style>
