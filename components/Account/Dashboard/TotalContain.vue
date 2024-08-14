<template>
  <div class="row row-cols-xxl-3 g-sm-4 g-3">
    <div>
      <div class="totle-contain">
        <div class="wallet-point-box">
          <img src="/images/svg/wallet.svg" class="img-1" alt="wallet" />
          <img src="/images/svg/wallet.svg" alt="wallet" />
          <div class="totle-detail">
            <h5>{{ $t("Balance") }}</h5>
            <h3>{{ user?.wallet ? user?.wallet?.balance : 0 }}</h3>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="totle-contain">
        <div class="wallet-point-box">
          <img src="/images/svg/coin.svg" class="img-1" alt="coin" />
          <img src="/images/svg/coin.svg" alt="coin" />
          <div class="totle-detail">
            <h5>{{ $t("Total Points") }}</h5>
            <h3>{{ user?.point ? user?.point?.balance : 0 }}</h3>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="totle-contain">
        <div class="wallet-point-box">
          <img src="/images/svg/order.svg" class="img-1" alt="order" />
          <img src="/images/svg/order.svg" alt="order" />
          <div class="totle-detail">
            <h5>{{ $t("Total Orders") }}</h5>
            <h3>{{ user?.orders_count ? user?.orders_count : 0 }}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
let props = defineProps({
  user: Object,
});
</script>

<style lang="scss" scoped></style>
