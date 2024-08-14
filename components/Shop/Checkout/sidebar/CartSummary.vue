<template>
  <div v-if="cart?.length">
    <form>
      <div class="custom-box-loader">
        <div class="box-loader" v-if="loading">
          <WidgetsLoader :loaderClass="'custom-loader-wrapper blur-bg'" />
        </div>
        <ul class="summary-total">
          <li>
            <h4>{{ $t("Subtotal") }}</h4>
            <h4 class="price">
              <!-- {{ (CheckoutInfo ? (CheckoutInfo?.total?.sub_total) : $t('Not Calculated Yet') ) }} -->
              {{ CheckoutInfo.total.sub_total }}
            </h4>
          </li>
          <li>
            <h4>{{ $t("Shipping") }}</h4>
            <h4 class="price">
              {{ CheckoutInfo.total.shipping_total }}
            </h4>
          </li>
          <li>
            <h4>{{ $t("Tax") }}</h4>
            <h4 class="price">
              {{ CheckoutInfo.total.tax_total }}
            </h4>
          </li>

          <!-- <li v-if="user && CheckoutInfo && user?.point?.balance">
            <h4>
              {{ $t("Points") }}
            </h4>
            <h4 class="price">
              {{
                CheckoutInfo
                  ? CheckoutInfo?.total?.convert_point_amount
                  : $t("Not Calculated Yet")
              }}
            </h4>
          </li> -->

          <!-- <li
            class="border-cls"
            v-if="user && CheckoutInfo && user?.point?.balance"
          >
            <label class="form-check-label m-0" for="ponts">{{
              "Would you prefer to pay using points?"
            }}</label>
            <input
              class="checkbox_animated check-it"
              v-model="useCheckoutStore().CheckoutData.points_amount"
              type="checkbox"
              id="ponts"
            />
          </li> -->
          <li>
            <h4>
              {{ $t("Wallet Balance") }}
            </h4>
            <h4 class="price">
              {{ CheckoutInfo.total.wallet_balance }}
            </h4>
          </li>
          <li class="border-cls">
            <label class="form-check-label m-0" for="wallet">{{
              "Would you prefer to pay using wallet?"
            }}</label>
            <input
              class="checkbox_animated check-it"
              type="checkbox"
              v-model="useCheckoutStore().CheckoutData.wallet_balance"
              id="wallet"
            />
          </li>
          <li class="coupon-sec" v-if="CheckoutInfo">
            <a
              class="promocode-title"
              @click="showCoupon()"
              v-if="!appliedCoupon"
            >
              <h4>{{ "Have a promo code?" }}</h4>
            </a>
            <div class="w-100" v-if="!appliedCoupon">
              <div class="coupon-box mt-2 d-flex w-100">
                <div
                  class="input-group"
                  :class="{ 'coupon-error': useCheckoutStore().couponError }"
                >
                  <input
                    type="text"
                    class="form-control"
                    v-model="coupon"
                    :class="{ 'is-invalid': useCheckoutStore().couponError }"
                    id="coupon"
                  />
                  <WidgetsButton
                    :classes="'btn-apply'"
                    :type="'button'"
                    :id="'coupon_apply'"
                    @click="coupon.length && setCoupon(), applyCoupon()"
                  >
                    {{ $t("Apply") }}
                  </WidgetsButton>
                  <div
                    class="invalid-feedback"
                    v-if="useCheckoutStore().couponError"
                  >
                    {{ useCheckoutStore().couponError }}
                  </div>
                </div>
              </div>
            </div>
            <div class="apply-sec mb-3" v-if="appliedCoupon">
              <div>
                <img
                  src="/images/offer.gif"
                  class="img-fluid"
                  alt="offer gif"
                />
                <h4>
                  {{ $t("You Saved") }}
                  <span>{{ CheckoutInfo.total.coupon_total_discount }}</span>
                  {{ $t("With this code") }} 🎉
                  <p>{{ $t("Coupon Applied") }}</p>
                </h4>
              </div>
              <a href="javascript:void(0)" @click="couponRemove()">{{
                $t("Remove")
              }}</a>
            </div>
          </li>
          <li class="list-total">
            <h4>{{ "Total" }}</h4>
            <h4 class="price">
              <!-- {{
                CheckoutInfo
                  ? CheckoutInfo?.total?.total
                  : $t("Not Calculated Yet")
              }} -->
              {{ CheckoutInfo.total.total }}
            </h4>
          </li>
        </ul>
        <h6
          v-if="PlaceOrderError"
          style="
            color: #d8000c;
            background-color: #ffbaba;
            border: 1px solid #d8000c;
            padding: 10px;
            border-radius: 5px;
            margin-bottom: 10px;
            font-weight: bold;
          "
        >
          {{ PlaceOrderError }}
        </h6>

        <WidgetsButton
          :class="'btn theme-bg-color text-white btn-md w-100 mt-4 fw-bold'"
          :id="'place_order'"
          @click.prevent="PlaceOrder()"
          v-if="Object.keys(CheckoutInfo).length"
        >
          {{ $t("Place Order") }}
        </WidgetsButton>
      </div>
    </form>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useCartStore } from "~~/store/cart";
import { useCheckoutStore } from "~~/store/checkout";
import { useSettingsStore } from "~~/store/settings";
import { useUserStore } from "~~/store/user";
import { useCurrencyStore } from "@/store/currency";

import axios from "axios";
let PlaceOrderError = ref("");
let walletBalance = ref();
// let sub_total = ref();
// let tax_total = ref();
// let total = ref();
// let shipping_cost = ref();
let props = defineProps({
  Shipping: {
    type: String,
  },
});
let Discounts = ref();
// let token = ref("");
// let token = JSON.parse(localStorage.getItem("user-data2")).token;
// console.log("this", tax_total);
let { cart, CartTotal } = storeToRefs(useCartStore());

let { CheckoutInfo, loading } = storeToRefs(useCheckoutStore());
let coupon = ref("");
let appliedCoupon = ref(false);
let store = useCurrencyStore();
store.allCurrency();
let { User, UserInfo } = storeToRefs(useUserStore());
let user = ref(UserInfo);
function setCoupon() {
  appliedCoupon.value =
    useCheckoutStore().couponError == undefined ? true : false;
  useCheckoutStore().getCouponCode(coupon.value);
  useCheckoutStore().SetCheckoutInfo();
}
useCheckoutStore().couponError = false;
async function couponRemove() {
  appliedCoupon.value = false;
  coupon.value = null;
  useCheckoutStore().getCouponCode(coupon.value);

  let token = JSON.parse(localStorage.getItem("user-data2")).token;

  // console.log(token);

  const data = {
    address_id: 1,
    checkout: true,
    items: cart.value.map((item) => ({
      id: item.product_id,
      quantity: item.quantity,
    })),
    promotion_code: null,
    wallet: false,
    payment_option: "cash",
    notes: null,
    delivery_date: "2024-08-09 05:55",
  };

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  await axios
    .post("https://alsouq.anevex.com/app/shop-api/order", data, config)
    .then((response) => {
      // console.log(response.data.data.total_taxes);

      CheckoutInfo.value.total.total = response.data.data.total;

      // console.log(response.data.data);
      appliedCoupon.value = false;
      // Discounts.value = response.data.data.promotion_discount;
    })
    .catch((error) => {
      console.log(error);
    });
  useCheckoutStore().couponError = false;
}
let errorPromo = ref(false);
let errorPromoMsg = ref();
async function applyCoupon() {
  // console.log("good");
  if (!coupon.value) {
    // console.log("Please , put your promo code");
    // errorPromo.value = true;
    useCheckoutStore().couponError = "Please , put your promo code";
  } else {
    let token = JSON.parse(localStorage.getItem("user-data2")).token;

    // console.log(token);

    const data = {
      address_id: 1,
      checkout: true,
      items: cart.value.map((item) => ({
        id: item.product_id,
        quantity: item.quantity,
      })),
      promotion_code: coupon.value,
      wallet: false,
      payment_option: "cash",
      notes: null,
      delivery_date: "2024-08-09 05:55",
    };

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    await axios
      .post("https://alsouq.anevex.com/app/shop-api/order", data, config)
      .then((response) => {
        // console.log(response.data.data.total_taxes);

        appliedCoupon.value = true;
        CheckoutInfo.value.total.coupon_total_discount =
          response.data.data.promotion_discount;
        // console.log(CheckoutInfo.value.total.coupon_total_discount);
        CheckoutInfo.value.total.total = response.data.data.total;
      })
      .catch((error) => {
        useCheckoutStore().couponError = "Wrong promo code";
      });
  }
}

async function PlaceOrder() {
  let token = JSON.parse(localStorage.getItem("user-data2")).token;

  // console.log(token);

  const data = {
    address_id: useCheckoutStore().CheckoutData.billing_address_id,
    checkout: false,
    items: cart.value.map((item) => ({
      id: item.product_id,
      quantity: item.quantity,
    })),
    promotion_code: coupon.value,
    wallet: false,
    //  useCheckoutStore().CheckoutData.wallet_balance
    payment_option: "cash",
    notes: null,
    delivery_date: "2024-08-09 05:55",
    payment_methods: [
      {
        payment_method_id: useCheckoutStore().CheckoutData.payment_method_id,
        amount: CheckoutInfo.value.total.total,
        type: String(useCheckoutStore().CheckoutData.payment_method),
      },
    ],
  };
  // console.log(useCheckoutStore().CheckoutData.payment_method_id);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  await axios
    .post("https://alsouq.anevex.com/app/shop-api/order", data, config)
    .then((response) => {
      // console.log(response.data.data.total_taxes);

      // appliedCoupon.value = true;
      // CheckoutInfo.value.total.coupon_total_discount =
      //   response.data.data.promotion_discount;
      // console.log(CheckoutInfo.value.total.coupon_total_discount);
      // CheckoutInfo.value.total.total = response.data.data.total;
      PlaceOrderError.value = "";
      console.log(response.data.data);
    })
    .catch((error) => {
      PlaceOrderError.value = error.response.data.api_message.message;
      console.log(error);
    });
}

onMounted(async () => {
  let { cart, CartTotal } = storeToRefs(useCartStore());

  let token = JSON.parse(localStorage.getItem("user-data2")).token;

  // get wallet balance

  await axios
    .get("https://alsouq.anevex.com/app/shop-api/wallet-data", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      // console.log("response", response.data.data.balance);
      // CheckoutData.value.wallet_balance = ;
      CheckoutInfo.value.total.wallet_balance = response.data.data.balance;
      // console.log("this", response);
    })
    .catch((error) => {
      console.log(error);
    });

  // get subtotal and total

  const data = {
    address_id: 1,
    checkout: true,
    items: cart.value.map((item) => ({
      id: item.product_id,
      quantity: item.quantity,
    })),
    promotion_code: null,
    wallet: false,
    payment_option: "cash",
    notes: null,
    delivery_date: "2024-08-09 05:55",
  };

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  await axios
    .post("https://alsouq.anevex.com/app/shop-api/order", data, config)
    .then((response) => {
      // console.log(response.data.data.total_taxes);
      CheckoutInfo.value.total.shipping_total =
        response.data.data.shipping_cost;
      CheckoutInfo.value.total.sub_total = response.data.data.subtotal;
      CheckoutInfo.value.total.tax_total = response.data.data.total_taxes;
      CheckoutInfo.value.total.total = response.data.data.total;
      // console.log(response.data.data);
    })
    .catch((error) => {
      console.log(error);
    });
  // console.log(CheckoutInfo.value.total.total);
});
</script>

<style lang="scss" scoped></style>
