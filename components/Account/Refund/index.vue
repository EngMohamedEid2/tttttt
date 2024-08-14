<template>
<div>
  <div class="title-header">
    <div class="d-flex align-items-center">
      <h5>{{ $t("Refund") }}</h5>
    </div>
  </div>
  <div class="total-box mt-0" v-if="refund?.data?.length">
    <div class="wallet-table mt-0 refund-table">
      <table>
        <tbody>
          <tr>
            <th>{{ $t("No") }}</th>
            <th>{{ $t("Order") }}</th>
            <th>{{ $t("Status") }}</th>
            <th>{{ $t("Reason") }}</th>
            <th>{{ $t("Created At") }}</th>
          </tr>
          <tr v-for="(refund, index) in refund?.data" :key="index">
            <td>{{ index + 1 }}</td>
            <td>
              <span class="fw-bolder">#{{ refund?.order?.order_number }}</span>
            </td>
            <td>
              <div :class="`status-${refund?.status}`">
                <span>{{ transform(refund?.status) }}</span>
              </div>
            </td>
            <td>{{ refund?.reason }}</td>
            <td>{{ dateFormatter(refund?.created_at) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <nav class="custome-pagination" v-if="refund?.data?.length">
      <WidgetsPagination :Data="refund" @change-page="(toPage) => ChangePage({ toPage })" />
    </nav>
  </div>
  <WidgetsNoData :class="'no-data-added'" :image="'/svg/empty-items.svg'" :text="'No Refunds Found'"
    :description="'You have no refunds processed yet'" v-if="!refund?.data?.length">
  </WidgetsNoData>
</div>
</template>

<script setup>
import { dateFormatter } from "@/utils/formators/date";

let Refundparams = ref({ paginate: 10, page: 1 });

let { data: refund, pending } = await HandleRequest("refund", {
  key: "getAllHomeRefund",
  params: Refundparams,
});

const ChangePage = ({ toPage }) => {
  Refundparams.value.page = toPage;
};
</script>

<style lang="scss" scoped></style>
