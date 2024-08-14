<template>
  <div>
    <WidgetsBreadcrumb :breadcrumbs="breadcrumbs" />
    <ShopCheckout />
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useUserStore } from "@/store/user";
var breadcrumbs = { page: "Checkout", links: [{ name: "Checkout" }] };
// onServerPrefetch(() => {
//   let { User } = storeToRefs(useUserStore());
//   if (!User.value.isLoggedIn) {
//     navigateTo("/auth/login");
//   }
// });
</script>

<style lang="scss" scoped></style>
