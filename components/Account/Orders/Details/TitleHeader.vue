<template>
  <div>
    <div class="title-header">
      <div class="d-flex  align-items-center w-100 justify-content-between">
        <h5>{{ $t("Order Number") }}: #{{ order?.order_number }}</h5>
        <div class="right-option">
          <a href="javascript:void(0)" class="btn btn-md fw-bold text-light theme-bg-color" v-if="(order?.payment_status === 'FAILED' || order?.payment_status === 'PENDING')
            && (order?.order_status && order?.order_status?.slug != 'cancelled') && order?.payment_method != 'cod'"
            @click="payModal(order.order_number)">{{ $t("Pay Now") }}<Icon name="ri-refresh-line"></Icon></a>
          <nuxt-link :to="order.invoice_url" class="btn btn-md fw-bold text-light theme-bg-color ms-auto gap-2"
            download="download"
            v-if="order?.invoice_url && order?.payment_status && order?.payment_status === 'COMPLETED'">
            {{ 'Invoice' }} <Icon name="ri:download-2-fill"></Icon>
          </nuxt-link>
        </div>
      </div>
    </div>

    <WidgetsModalsCommon :showModal="payment" @close="payModal({ state: false })">
      <WidgetsModalsPayModal :orderNumber="order_number" @close="payModal({ state: false })" />
    </WidgetsModalsCommon>
  </div>
</template>

<script setup>
let props = defineProps({
  order: Object
})

let payment = ref(false);
let order_number = ref(0)
function payModal(number, state = true) {
  payment.value = state;
  order_number.value = number
}

</script>

<style lang="scss" scoped></style>