<template>
  <div class="title-header">
    <div class="d-flex align-items-center">
      <h5>{{ $t("My Orders") }}</h5>
    </div>
  </div>
  <div class="total-box mt-0" v-if="order?.data?.length">
    <div class="wallet-table mt-0">
      <div class="table-responsive">
        <table>
          <tbody>
            <tr>
              <th>{{ $t("No") }}</th>
              <th>{{ $t("Order Number") }}</th>
              <th>{{ $t("Date") }}</th>
              <th>{{ $t("Amount") }}</th>
              <th>{{ $t("Payment Status") }}</th>
              <th>{{ $t("Payment Method") }}</th>
              <th>{{ $t("Option") }}</th>
            </tr>
            <tr v-for="(order, index) in order?.data" :key="index">
              <td>{{ index + 1 }}</td>
              <td>
                <span class="fw-bolder">#{{ order.order_number }}</span>
              </td>
              <td>{{ dateFormatter(order?.created_at) }}</td>
              <td>{{ store.currency.symbol }} {{ Number(store.convertCurrency(order?.total)).toFixed(2) }}</td>
              <td>
                <div :class="`status-${order?.payment_status?.toLowerCase()}`">
                  <span>{{ order?.payment_status }}</span>
                </div>
              </td>
              <td>
                {{ order?.payment_method?.toUpperCase() }}
              </td>
              <td>
                <nuxt-link :to="`/account/order/details/${order.order_number}`">
                  <Icon name="ri:eye-line" size="14"></Icon>
                </nuxt-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <nav class="custome-pagination" v-if="order?.data?.length">
      <WidgetsPagination :Data="order" @change-page="(toPage) => ChangePage({ toPage })" />
    </nav>
  </div>
  <WidgetsNoData :class="'no-data-added'" :image="'/svg/empty-items.svg'" :text="'No Orders Found'"
    :description="'No orders have been made yet'" v-if="!order?.data?.length">
  </WidgetsNoData>
</template>

<script setup>
import { useCurrencyStore } from '@/store/currency'

let store = useCurrencyStore();
store.allCurrency();
let paramOrder = ref({ page: 1, paginate: 10 })
let { data: order, pending } = await HandleRequest("order", {
  key: "getAllOrdrsData",
  params: paramOrder,
});

const ChangePage = ({ toPage }) => {
  paramOrder.value.page = toPage;
};
</script>

<style lang="scss" scoped></style>
