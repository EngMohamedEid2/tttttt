<template>
  <!-- <h3>{{ product.name }}</h3> -->
  <div class="product-box" :class="classes">
    <!-- <div class="label-tag sale-tag" v-if="product?.is_sale_enable"><span>{{ $t("SALE") }}</span></div> -->
    <!-- <template v-else>
      <div class="label-tag" v-if="product?.is_featured"><span>{{ $t("FEATURED") }}</span></div>
    </template> -->

    <div class="product-image">
      <nuxt-link :to="`/product/${product?.id}?layout=product_thumbnail`">
        <nuxt-img
          :src="product.image || PlaceholderImage"
          class="img-fluid"
          :alt="product.name"
        />
      </nuxt-link>

      <!-- <div class="product-header-top" v-if="close">
        <WidgetsButton
          :classes="'btn wishlist-button close_button'"
          :id="'close_btn'"
          @click="useWishlistStore().RemoveFromWishlist({ product })"
        >
          <Icon name="ri-close-line"></Icon>
        </WidgetsButton>
      </div> -->

      <!-- <ul class="product-option" v-if="!close"> -->
      <div
        style="width: 35px"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="View"
        v-if="!close"
        class="product-option"
      >
        <a
          href="#"
          @click.prevent="
            () => {
              useCartStore().ToggleModal({ product });
            }
          "
        >
          <Icon name="ri-eye-line" />
        </a>
      </div>

      <!-- <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
          <a
            href="compare.html"
            @click.prevent="useCompareStore().ToggleFromCompare({ product })"
          >
            <Icon
              name="ri-refresh-line"
              v-if="useCompareStore().ExistsInCompare({ product })"
            />
            <Icon name="ri-refresh-line" v-else />
          </a>
        </li> -->

      <!-- <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
          <a
            href="#"
            @click.prevent="useWishlistStore().ToggleFromWishlist({ product })"
            class="notifi-wishlist"
          >
            <Icon
              name="ri-heart-line"
              v-if="useWishlistStore().ExistsInCart({ product })"
            />
            <Icon name="ri-heart-line" v-else />
          </a>
        </li> -->
      <!-- </ul> -->
    </div>
    <div class="product-detail">
      <nuxt-link :to="`/product/${product?.id}`">
        <h6 class="name">{{ product?.name }}</h6>
        <!-- <h6>{{ product.retail_price }} ر.س</h6> -->
      </nuxt-link>
      <!-- <p>{{ product.short_description }}</p> -->
      <!-- <h6 class="unit mt-1" v-if="product?.unit">{{ product?.unit }}</h6> -->
      <h5 class="sold text-content">
        <span class="theme-color price">
          {{ store.convertCurrency(product.retail_price) }}
          {{ store.currency.symbol }}
        </span>
        <!-- <del v-if="product?.discount"
          >{{ store.currency.symbol }}
          {{ store.convertCurrency(product?.retail_price) }}</del
        > -->
      </h5>

      <!-- <div class="product-rating">
        <NuxtRating
          :read-only="true"
          inactiveColor="lightgray"
          :ratingValue="product?.rating_count || 0"
          :rating-size="'25px'"
        />
        <h6 class="theme-color" v-if="product?.stock_status == 'in_stock'">
          {{ transform(product?.stock_status) }}
        </h6>
      </div> -->

      <div class="add-to-cart-box">
        <WidgetsButton
          :id="'add-to-cart' + product.id"
          :classes="'btn btn-add-cart addcart-button'"
          @click.prevent="
            useCartStore().addToCart({ product }),
              useCartStore().cartToggleValue(true)
          "
        >
          {{ $t("Add") }}
          <span class="add-icon">
            <Icon name="ri-add-line"></Icon>
          </span>
        </WidgetsButton>
        <!-- <template v-else>
          <WidgetsButton
            :id="'out-of-stock' + product.id"
            :classes="'btn btn-add-cart addcart-button'"
            :disabled="true"
          >
            {{ $t("Sold Out") }}
          </WidgetsButton>
        </template> -->

        <div
          class="cart_qty qty-box"
          :class="[
            CartItem && !product?.variations?.length && CartItem.quantity > 0
              ? 'open'
              : '',
          ]"
        >
          <div class="input-group">
            <WidgetsButton
              :id="'qty-left-minus' + product.id"
              :classes="'qty-left-minus'"
              @click="useCartStore().ChangeQuantity({ CartItem, quantity: -1 })"
            >
              <Icon name="ri-subtract-line"></Icon>
            </WidgetsButton>
            <input
              class="form-control input-number qty-input"
              type="text"
              name="quantity"
              :value="
                CartItem && CartItem.quantity ? CartItem.quantity : CartItem
              "
              readonly
            />
            <WidgetsButton
              :id="'qty-right-plus' + product.id"
              :classes="'qty-left-plus'"
              @click.prevent="useCartStore().ChangeQuantity({ CartItem })"
            >
              <Icon name="ri-add-fill"></Icon>
            </WidgetsButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "@/store/cart";
import { useCompareStore } from "@/store/compare";
import { useWishlistStore } from "@/store/wishlist";
import { useCurrencyStore } from "@/store/currency";

let props = defineProps({
  product: Object,
  classes: String,
  close: Boolean,
});
let store = useCurrencyStore();
store.allCurrency();
// console.log(store.currency.symbol.value);
let CartItem = computed(() => {
  return IsProductInCart({ product: props.product });
});
</script>

<style lang="scss" scoped></style>
