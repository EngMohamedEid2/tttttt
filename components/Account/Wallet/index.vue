<template>
<div>
  <div class="title-header">
    <div class="d-flex align-items-center">
      <h5>{{ $t("My Wallet") }}</h5>
    </div>
  </div>
  <div class="total-box mt-0" v-if="wallet?.transactions?.data?.length">
    <div class="row">
      <div class="col-12">
        <div class="totle-contain wallet-bg">
          <div class="wallet-point-box">
            <img src="/images/svg/wallet.svg" alt="wallet" />
            <div class="totle-detail">
              <h5>{{ $t("Wallet Balance") }}</h5>
              <h3>{{ store.currency.symbol }} {{ Number(store.convertCurrency(wallet ? wallet?.balance : 0)).toFixed(2) }}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="wallet-table">
      <h4 class="user-dashboard-title">{{ $t("Transactions") }}</h4>
      <div class="table-responsive">
        <table>
          <tbody>
            <tr>
              <th>{{ $t("No") }}.</th>
              <th>{{ $t("Date") }}</th>
              <th>{{ $t("Amount") }}</th>
              <th>{{ $t("Remark") }}</th>
              <th>{{ $t("Status") }}</th>
            </tr>
            <tr v-for="(transaction, index) in wallet?.transactions?.data" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ dateFormatter(transaction?.created_at) }}</td>
              <td>{{ store.currency.symbol }} {{ Number(store.convertCurrency(transaction?.amount)).toFixed(2) }}</td>
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
    </div>
    <nav class="custome-pagination" v-if="wallet?.transactions?.data?.length">
      <WidgetsPagination :Data="wallet.transactions" @change-page="(toPage) => ChangePage({ toPage })" />
    </nav>
  </div>
  <WidgetsNoData :class="'no-data-added'" :image="'/svg/empty-items.svg'" :text="'No Transaction Found'"
    :description="'No wallet balance activity detected'" v-if="!wallet?.transactions?.data?.length">
  </WidgetsNoData>
</div>
</template>

<script setup>
import { useCurrencyStore } from '@/store/currency'

let store = useCurrencyStore();
store.allCurrency();
let Walletparams = ref({ paginate: 10, page: 1 });
let { data: wallet, pending } = await HandleRequest("wallet/consumer", {
  key: "getAllWallet",
  params: Walletparams,
});

const ChangePage = ({ toPage }) => {
  Walletparams.value.page = toPage;
};
</script>

<style lang="scss" scoped></style>
