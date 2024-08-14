<template>
<div>
  <div class="title-header">
    <div class="d-flex align-items-center">
      <h5>{{ $t("Points") }}</h5>
    </div>
  </div>
  <div class="total-box mt-0" v-if="point?.transactions?.data?.length">
    <div class="row">
      <div class="col-12">
        <div class="totle-contain wallet-bg">
          <div class="wallet-point-box">
            <img src="/images/svg/coin.svg" alt="coin" class="img-fluid" />
            <div class="totle-detail">
              <h5>{{ $t("Total Points") }}</h5>
              <h3>{{ point ? point?.balance : 0 }}</h3>
            </div>
          </div>
          <div class="point-ratio">
            <h3 class="counter">
              <Icon class="me-2" name="ri:information-line" />
              {{ $t("1 Point") }} =
              {{ Number(1 / (Settings?.values?.wallet_points?.point_currency_ratio)).toFixed(2) }}
              {{ $t("Balance") }}
            </h3>
          </div>
        </div>
      </div>
    </div>
    <div class="wallet-table">
      <h4 class="user-dashboard-title">{{ $t("Transactions") }}</h4>
      <table>
        <tbody>
          <tr>
            <th>{{ $t("No") }}.</th>
            <th>{{ $t("Date") }}</th>
            <th>{{ $t("Amount") }}</th>
            <th>{{ $t("Remark") }}</th>
            <th>{{ $t("Status") }}</th>
          </tr>
          <tr v-for="(transaction, index) in point?.transactions?.data" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ dateFormatter(transaction?.created_at) }}</td>
            <td>{{ transaction?.amount }}</td>
            <td>{{ transaction?.detail }}</td>
            <td>
              <div :class="`status-${transaction?.type}`">
                <span>{{ transform(transaction?.type) }}</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <nav class="custome-pagination" v-if="point?.transactions?.data?.length">
      <WidgetsPagination :Data="point.transactions" @change-page="(toPage) => ChangePage({ toPage })" />
    </nav>
  </div>
  <WidgetsNoData :class="'no-data-added'" :image="'/svg/empty-items.svg'" :text="'No Transaction Found'"
    :description="'You have not earned any points yet'" v-if="!point?.transactions?.data?.length">
  </WidgetsNoData>
</div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useDataStore } from "@/store/data"
let Pointparams = ref({ paginate: 10, page: 1 });
let { Settings } = storeToRefs(useDataStore())
let { data: point, pending } = await HandleRequest("points/consumer", {
  key: "getAllPoints",
  params: Pointparams,
});

const ChangePage = ({ toPage }) => {
  Pointparams.value.page = toPage;
};
</script>

<style lang="scss" scoped></style>
