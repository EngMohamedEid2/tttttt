<template>
  <div>
    <WidgetsButton
      :type="'button'"
      :classes="'btn p-0 position-relative header-wishlist'"
      :id="'cart_sidebar_btn'"
      @click="cartStyle == 'cart_sidebar' && cartStore.cartToggleValue(true)"
      v-if="style == 'basic'"
    >
      <Icon name="ri-shopping-cart-line"></Icon>
      <span
        class="position-absolute top-0 start-100 translate-middle badge"
        v-if="cart?.length"
      >
        {{ cart?.length }}
        <span class="visually-hidden">{{ "Unread Messages" }}</span>
      </span>
    </WidgetsButton>

    <a
      href="javascript:void(0)"
      class="header-icon swap-icon"
      @click="cartStyle == 'cart_sidebar' && cartToggle(true)"
      v-if="style == 'classic'"
    >
      <small class="badge-number badge-light" v-if="cart?.length">
        {{ cart?.length }}
      </small>
      <Icon name="ri-shopping-cart-line"></Icon>
    </a>

    <!-- Cart On Hover -->
    <div
      class="onhover-div"
      :class="{
        'fixed-cart': cartStyle == 'cart_sidebar',
        show: cartStore.cartToggle,
      }"
    >
      <div class="cart-title">
        <h4>{{ $t("Shopping Cart") }}</h4>
        <a href="javascript:void(0)" @click="cartStore.cartToggleValue(false)">
          <Icon name="ri-close-line"></Icon>
        </a>
      </div>
      <div class="pere-text-box success-box" v-if="cart?.length">
        <p v-if="shippingFreeAmt > CartTotal">
          {{ "Spend" }}
          <span class="shipping"
            >{{ store.currency.symbol }}
            {{
              Number(
                store.convertCurrency(shippingFreeAmt - CartTotal)
              ).toFixed(2)
            }}</span
          >
          {{ "More and Enjoy" }}
          <span class="shipping">{{ $t("Free Shipping") }}!</span>
        </p>
        <template v-else>
          <p>
            <span class="shipping">{{ $t("Congratulations") }}!</span>
            {{ $t("Enjoy free shipping on us") }}!
          </p>
        </template>

        <div class="progress" role="progressbar">
          <div
            class="progress-bar progress-bar-striped progress-bar-animated"
            :class="{
              'danger-progress': shippingCal <= 30,
              'warning-progress': shippingCal >= 31 && shippingCal <= 80,
            }"
            :style="{ width: shippingCal + '%' }"
          >
            <div class="progress-icon">
              <Icon name="ri:truck-line"></Icon>
            </div>
          </div>
        </div>
      </div>
      <ul class="cart-list" v-if="cart?.length">
        <li class="product-box-contain" v-for="item in cart" :key="item">
          <div class="drop-cart">
            <a href="javascript:void(0)" class="drop-image">
              <img
                :src="
                  item?.variation && item?.variation?.variation_image
                    ? item?.variation?.variation_image?.original_url
                    : item?.product?.image
                    ? item?.product?.image
                    : '/images/product.png'
                "
                class="img-fluid"
                :alt="item?.product?.name"
              />
            </a>
            <div class="drop-contain">
              <a href="javascript:void(0)">
                <h5>
                  {{
                    item?.variation
                      ? item?.variation?.name
                      : item?.product?.name
                  }}
                </h5>
              </a>
              <h6>
                {{
                  item?.variation
                    ? Number(
                        store.convertCurrency(item.variation.sale_price)
                      ).toFixed(2)
                    : Number(
                        store.convertCurrency(item.product.retail_price)
                      ).toFixed(2)
                }}
                {{ store.currency.symbol }}
              </h6>
              <h5 class="gram" v-if="item?.variation">
                <pre>{{ item?.variation?.attribute_values[0]?.value }}</pre>
              </h5>
              <div class="cart_qty qty-box product-qty">
                <div class="input-group h-100">
                  <WidgetsButton
                    :classes="'btn qty-left-minus'"
                    :id="'add-to-cart' + item.product.id"
                    @onClick="
                      useCartStore().ChangeQuantity({
                        CartItem: item,
                        quantity: -1,
                      })
                    "
                  >
                    <Icon
                      name="ri-subtract-line"
                      v-if="item.quantity > 1"
                    ></Icon>
                    <Icon
                      name="ri-delete-bin-line"
                      v-if="item.quantity <= 1"
                      @click="useCartStore().RemoveFromCart({ CartItem: item })"
                    ></Icon>
                  </WidgetsButton>
                  <input
                    class="form-control input-number qty-input"
                    type="number"
                    name="quantity"
                    :value="item?.quantity"
                    readonly
                  />
                  <WidgetsButton
                    :classes="'btn qty-left-minus'"
                    :id="'qty-left-minus' + item.product.id"
                    @onClick="useCartStore().ChangeQuantity({ CartItem: item })"
                  >
                    <Icon name="ri-add-line"></Icon>
                  </WidgetsButton>
                </div>
              </div>
              <div>
                <div class="header-button-group">
                  <WidgetsButton
                    :classes="'edit-button close_button'"
                    :id="'cart_item_edit_btn' + item.product.id"
                    @onClick="variationProductModal(item)"
                    v-if="item?.variation"
                  >
                    <Icon name="ri-pencil-line"></Icon>
                  </WidgetsButton>
                  <WidgetsButton
                    :classes="'delete-button close_button'"
                    :id="'cart_item_delete_btn' + item.product.id"
                    @onClick="useCartStore().RemoveFromCart({ CartItem: item })"
                  >
                    <Icon name="ri-delete-bin-line"></Icon>
                  </WidgetsButton>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div class="empty-cart-box" v-if="!cart?.length">
        <i class="ri-shopping-cart-line"></i>
        <h5>{{ $t("Your cart is currently empty") }}</h5>
      </div>
      <div class="bottom-box" v-if="cart?.length">
        <p class="free">
          {{
            $t("  Discounts , shipping and taxes are calculated at checkout")
          }}
        </p>
        <div class="price-box">
          <h5>{{ $t("Total") }}:</h5>
          <h4 class="fw-bold">
            {{ Number(store.convertCurrency(CartTotal)).toFixed(2) }}
            {{ store.currency.symbol }}
          </h4>
        </div>
        <div class="button-group">
          <nuxt-link
            to="/cart"
            class="btn btn-sm cart-button"
            @click="cartStore.cartToggleValue(false)"
          >
            {{ $t("View Cart") }}
          </nuxt-link>
          <nuxt-link
            to="/checkout"
            class="btn btn-sm cart-button theme-bg-color text-white"
            @click="cartToggle(false)"
          >
            {{ $t("Checkout") }}
          </nuxt-link>
        </div>
      </div>
    </div>
    <div
      class="bg-overlay"
      :class="{ show: cartStore.cartToggle && cartStore.cartToggle }"
      @click="cartStyle == 'cart_sidebar' && cartStore.cartToggleValue(false)"
    ></div>
    <!-- Free Shipping Celebration -->
    <div
      class="confetti-wrapper"
      :class="{ show: confetti == 1 && cartStore.cartToggle }"
    >
      <div v-for="item in confettiItems" :key="item">
        <div :class="`confetti-${item}`"></div>
      </div>
    </div>
    <!-- Variation Customize -->
    <WidgetsModalsCommon
      :showModal="variationModal"
      @close="variationProductModal(item)"
      :modalClass="'variation-modal'"
    >
      <WidgetsModalsVariationModal
        :product="singleVeriationProduct"
        @close="variationProductModal(item)"
      />
    </WidgetsModalsCommon>
  </div>
</template>

<script setup>
import { HandleRequest } from "~~/composables/HandleRequest";
import { storeToRefs } from "pinia";
import { useCartStore } from "@/store/cart";
import { useDataStore } from "@/store/data";
import { useCurrencyStore } from "@/store/currency";
let props = defineProps({
  style: { type: [String, Object], default: "basic" },
});

let store = useCurrencyStore();
store.allCurrency();

let { Settings, ThemeOptions } = storeToRefs(useDataStore());

let { cart, CartTotal } = storeToRefs(useCartStore());
let cartStore = useCartStore();
let cartStyle = ref("cart_sidebar");
let shippingFreeAmt = ref(0);
let cartTotal = ref(0);
let shippingCal = ref(0);
let confetti = ref(0);
let confettiItems = Array.from({ length: 150 }, (_, index) => index);
let singleVeriationProduct = ref({});
let variationModal = ref(false);

function variationProductModal(item) {
  if (variationModal.value == false) {
    variationModal.value = true;
    singleVeriationProduct.value = item;
  } else {
    variationModal.value = false;
  }
}

function cartToggle(value) {
  cartStore.cartToggle = value;
}

watch(CartTotal, () => {
  const setting = Settings.value;
  // shippingFreeAmt.value = setting?.values?.general?.min_order_free_shipping;
  shippingFreeAmt.value = 100;

  shippingCal.value = (CartTotal.value * 100) / shippingFreeAmt.value;

  if (shippingCal.value > 100) {
    shippingCal.value = 100;
    if (confetti.value == 0) {
      confetti.value = 1;
      setTimeout(() => {
        confetti.value = 2;
      }, 2500);
    }
  } else {
    confetti.value = 0;
  }
});

onMounted((total) => {
  cartStyle.value = ThemeOptions.value.options?.general?.cart_style;
  const setting = Settings.value;
  shippingFreeAmt.value = setting?.values?.general?.min_order_free_shipping;
});
</script>

<style lang="scss" scoped></style>
