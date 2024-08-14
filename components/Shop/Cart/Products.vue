<template>
  <div class="cart-table">
    <div class="table-responsive-xl">
      <table class="table">
        <tbody>
          <tr
            class="product-box-contain"
            v-for="item in cart"
            :key="`cartItem${item.product?.name}`"
          >
            <td class="product-detail">
              <div class="product border-0">
                <nuxt-link
                  :to="`/product/${item.product.id}?layout=product_thumbnail`"
                  class="product-image"
                >
                  <img
                    :src="ProductImage({ product: item.product })"
                    class="img-fluid"
                    alt=""
                  />
                </nuxt-link>
                <div class="product-detail">
                  <ul>
                    <li class="name">
                      <nuxt-link :to="`/product/${item.product.id}`">{{
                        item.variation
                          ? item.variation.name
                          : item.product?.name
                      }}</nuxt-link>
                    </li>
                    <li class="text-content">
                      <span class="text-title"> {{ "Sold By:" }}</span
                      >{{ "Fastkart" }}
                    </li>
                    <!-- <li
                      class="text-content"
                      v-if="item.product && item.product?.unit"
                    >
                      <span class="text-title">{{ "Unit: " }}</span
                      >{{ item.product?.unit }}
                    </li>
                    <li>
                      <h5 class="text-content d-inline-block">
                        {{ "Price :" }}
                      </h5>
                      <span>
                        {{
                          Number(
                            store.convertCurrency(
                              item?.variation
                                ? item.variation.sale_price
                                : item.product?.retail_price
                            )
                          ).toFixed(2)
                        }}
                        {{ store.currency.symbol }}
                      </span>
                      <span class="text-content" v-if="item.product?.discount"
                        >{{ store.currency.symbol }}
                        {{
                          Number(
                            store.convertCurrency(
                              item.variation
                                ? item.variation.price
                                : item.product?.price
                            )
                          ).toFixed(2)
                        }}</span
                      >
                    </li>

                    <li v-if="item.product?.discount">
                      <h5 class="saving theme-color">
                        {{ "Saving :" }}
                        {{
                          Number(
                            (item.variation
                              ? item.variation.price
                              : item.product?.price) -
                              (item.variation
                                ? item.variation.sale_price
                                : item.product?.sale_price)
                          ).toFixed(2)
                        }}
                      </h5>
                    </li>

                    <li class="quantity-price-box">
                      <div class="cart_qty">
                        <div class="input-group">
                          <button
                            type="button"
                            class="btn qty-left-minus"
                            data-type="minus"
                            data-field=""
                            @click.prevent="
                              useCartStore().ChangeQuantity({
                                CartItem: item,
                                quantity: -1,
                              })
                            "
                          >
                            <Icon name="ri:subtract-line"></Icon>
                          </button>
                          <input
                            class="form-control input-number qty-input"
                            type="text"
                            name="quantity"
                            :value="item.quantity"
                          />
                          <button
                            type="button"
                            class="btn qty-right-plus"
                            data-type="plus"
                            data-field=""
                            @click.prevent="
                              useCartStore().ChangeQuantity({ CartItem: item })
                            "
                          >
                            <Icon name="ri:add-line" class="ms-0"></Icon>
                          </button>
                        </div>
                      </div>
                    </li>

                    <li>
                      <h5>
                        {{ "Total:" }}
                        {{
                          Number(
                            item.variation
                              ? item.variation.sale_price
                              : item.product?.sale_price * item.quantity
                          ).toFixed(2)
                        }}
                      </h5>
                    </li> -->
                  </ul>
                </div>
              </div>
            </td>

            <td class="price">
              <h4 class="table-title text-content">{{ "Price" }}</h4>
              <h5>
                {{
                  Number(
                    store.convertCurrency(
                      item?.variation
                        ? item.variation.sale_price
                        : item.product?.retail_price
                    )
                  ).toFixed(2)
                }}
                {{ store.currency.symbol }}
                <!-- <del class="text-content" v-if="item.product?.discount">
                  {{ store.currency.symbol }}
                  {{
                    Number(
                      store.convertCurrency(
                        item.variation
                          ? item.variation.price
                          : item.product?.price
                      )
                    ).toFixed(2)
                  }}
                </del> -->
              </h5>
              <!-- <h6 class="theme-color" v-if="item.product?.discount">
                {{ "You Save :" }} {{ store.currency.symbol }}
                {{
                  Number(
                    store.convertCurrency(
                      item.variation
                        ? item.variation.price
                        : item.product?.price
                    ) -
                      (item.variation
                        ? item.variation.sale_price
                        : item.product?.sale_price)
                  ).toFixed(2)
                }}
              </h6> -->
            </td>

            <td class="quantity">
              <h4 class="table-title text-content">{{ "Quantity" }}</h4>
              <div class="quantity-price">
                <div class="cart_qty">
                  <div class="input-group">
                    <button
                      type="button"
                      class="btn qty-left-minus"
                      data-type="minus"
                      data-field=""
                      @click.prevent="
                        useCartStore().ChangeQuantity({
                          CartItem: item,
                          quantity: -1,
                          qty: quantity - 1,
                        })
                      "
                    >
                      <Icon name="ri:subtract-line"></Icon>
                    </button>
                    <input
                      class="form-control input-number qty-input"
                      type="text"
                      name="quantity"
                      :value="item.quantity"
                    />

                    <button
                      type="button"
                      class="btn qty-right-plus"
                      data-type="plus"
                      data-field=""
                      @click.prevent="
                        useCartStore().ChangeQuantity({ CartItem: item })
                      "
                    >
                      <Icon name="ri:add-line" class="ms-0"></Icon>
                    </button>
                  </div>
                </div>
              </div>
            </td>

            <td class="subtotal">
              <h4 class="table-title text-content">{{ "Total" }}</h4>
              <h5>
                {{
                  Number(
                    store.convertCurrency(
                      item.variation
                        ? item.variation.sale_price
                        : item.product?.retail_price
                    ) * item.quantity
                  ).toFixed(2)
                }}
                {{ store.currency.symbol }}
              </h5>
            </td>

            <td class="save-remove">
              <h4 class="table-title text-content">{{ "Action" }}</h4>
              <!-- <nuxt-link
                to="javascript:void(0)"
                class="save close_button"
                @click.prevent="cartAction(item)"
                >{{ "Save for later" }}</nuxt-link
              ><br /> -->
              <nuxt-link
                to="javascript:void(0)"
                class="remove close_button"
                @click.prevent="
                  useCartStore().RemoveFromCart({ CartItem: item })
                "
                >{{ "Remove" }}</nuxt-link
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
import { useCurrencyStore } from "@/store/currency";
import { useCartStore } from "@/store/cart";
import { useWishlistStore } from "@/store/wishlist";
import { storeToRefs } from "pinia";
import { useApiCartStore } from "~~/store/CartWithApi";
let { cart, CartTotal } = storeToRefs(useCartStore());
let { ApiCart } = storeToRefs(useApiCartStore());
if (useCookie("uat").value) {
  useCartStore().GetCartDataFromApi();
}
let ProductImage = ({ product }) => {
  return (
    product?.selectedVariant?.variation_image?.original_url ||
    product?.product_thumbnail?.original_url ||
    product?.image
  );
};
const productObjects = cart.value.map((product) => product);
let CartItem = computed(() => {
  return IsProductInCart({ product: productObjects });
});

let store = useCurrencyStore();
store.allCurrency();

function cartAction(item) {
  useWishlistStore().AddToWishlist({ product: item.product });
  useCartStore().RemoveFromCart({ CartItem: item });
}
</script>
