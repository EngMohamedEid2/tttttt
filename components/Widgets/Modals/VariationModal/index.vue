<template>
  <div>
    <div class="modal-header">
      <h3 class="name">{{ selectedVariation ? selectedVariation?.name : product?.name }}</h3>
      <WidgetsButton
        :classes="'btn btn-close'"
        :id="'profile_modal_close_btn'"
        @onClick="() => { emit('close'); }">
        <Icon name="ri-close-line"></Icon>
    </WidgetsButton>
    </div>
   
    <div class="modal-body">
      <div class="right-box-contain">
        <div class="price-rating">
          <h3 class="theme-color price">
            {{ store.currency.symbol }} {{ Number(store.convertCurrency(selectedVariation ? selectedVariation?.sale_price.toFixed(2) : product?.sale_price)).toFixed(2) }}
            <del class="text-content" v-if="selectedVariation ? selectedVariation?.discount : product?.discount">
              {{ store.currency.symbol }} {{ Number(store.convertCurrency(selectedVariation ? selectedVariation?.price.toFixed(2) : product?.price)).toFixed(2) }}
            </del>
            <span class="offer-top ms-2" v-if="selectedVariation ? selectedVariation?.discount : product?.discount">
              {{ (selectedVariation ? selectedVariation?.discount : product?.discount) }}% {{ 'off' }}
            </span>
          </h3>
        </div>
        <div class="product-package">
          <WidgetsVariantAttributes :product="product?.product" :attributes="product?.product?.attributes || []"
            @selectVariation="selectVariation($event)" />
        </div>
        <div class="note-box product-package">
          <div class="cart_qty qty-box product-qty as;dn">
            <div class="input-group">
              <WidgetsButton :classes="'btn qty-left-minus'" :id="'add-to-cart' + product.id"
                @OnClick="updateQuantity(-1)">
                <Icon name="ri:subtract-fill"></Icon>
              </WidgetsButton>
              <input class="form-control input-number qty-input" type="text" name="quantity" :value="productQty" readonly>
              <WidgetsButton :classes="'btn qty-left-minus'" :id="'qty-left-minus' + product.id"
                @OnClick="updateQuantity(1)">
                <Icon name="ri:add-line" />
              </WidgetsButton>
            </div>
          </div>
          <WidgetsButton :id="'replacecartbtnVariation' + product.id"
            :classes="'btn btn-md cart-button scroll-button text-white'" @onClick="replaceCart(item?.product)" v-if="(selectedVariation && selectedVariation?.stock_status == 'in_stock'
              || product?.stock_status == 'in_stock' && product?.type === 'simple')">
            <Icon namw="ri-shopping-cart-line"></Icon> {{ $t('Update Item') }}
          </WidgetsButton>
          <template v-else>
            <WidgetsButton :classes="'btn btn-md cart-button scroll-button text-white'" :id="'soldoutbtnreplaceproduct'"
              :disabled="false">
              <Icon name="ri:shopping-cart-line me-1" v-if="selectedVariation?.stock_status == 'in_stock'"></Icon> {{
                ((selectedVariation?.stock_status == 'out_of_stock' ||
                  product?.stock_status == 'out_of_stock') ? 'sold_out' : 'add_to_cart') }}
            </WidgetsButton>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCurrencyStore } from '@/store/currency'
import { useCartStore } from "@/store/cart";
let props = defineProps({
  product: Object
})
let emit = defineEmits(['close'])

let selectedVariation = ref(null);
let productQty = ref(1)
let store = useCurrencyStore();
store.allCurrency();

function selectVariation(variation) {
  selectedVariation.value = variation;
}

function updateQuantity(qty) {
  if (1 > productQty.value + (qty)) return;
  productQty.value = productQty.value + (qty);
}

function replaceCart(){
  useCartStore().addToCartProduct({ product: props?.product, quantity: productQty?.value, variation_id: selectedVariation?.value?.id,variation:selectedVariation?.value });
}
</script>

<style lang="scss" scoped></style>