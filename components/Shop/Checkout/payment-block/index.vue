<template>
  <div class="checkout-detail">
    <div class="row g-sm-4 g-3">
      <div class="col-xxl-6" v-for="(payment, index) in setting" :key="index">
        <div class="payment-option">
          <div class="payment-category w-100">
            <div class="form-check custom-form-check hide-check-box w-100">
              <input
                class="form-check-input"
                type="radio"
                name="payment_method"
                :id="payment.type"
                @change="
                  useCheckoutStore().SetPaymentOption(payment.type, payment.id)
                  // console.log(useCheckoutStore().CheckoutData)
                "
              />
              <label
                class="form-check-label text-capitalize"
                :for="payment.type"
              >
                {{ payment.type }}
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCheckoutStore } from "~~/store/checkout";
let props = defineProps({
  setting: Object,
});
</script>

<style lang="scss" scoped></style>
