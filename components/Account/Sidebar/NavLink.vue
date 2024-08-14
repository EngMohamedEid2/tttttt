<template>
  <div>
    <ul class="nav nav-pills user-nav-pills" id="pills-tab" role="tablist">
      <li class="nav-item" role="presentation">
        <nuxt-link
          class="nav-link"
          :to="'/account/dashboard'"
          :class="route.fullPath == '/account/dashboard' ? 'active' : ''"
        >
          <Icon name="ri-home-line"></Icon> {{ $t("Dashboard") }}
        </nuxt-link>
      </li>
      <li class="nav-item" role="presentation">
        <nuxt-link
          class="nav-link"
          to="/account/notifications"
          :class="route.fullPath == '/account/notifications' ? 'active' : ''"
        >
          <Icon name="ri-notification-line"></Icon> {{ $t("Notification") }}
          <span class="notification-count" v-if="unreadNotificationCount">{{
            unreadNotificationCount
          }}</span>
        </nuxt-link>
      </li>
      <li class="nav-item" role="presentation">
        <nuxt-link
          class="nav-link"
          to="/account/bank-details"
          :class="route.fullPath == '/account/bank-details' ? 'active' : ''"
        >
          <Icon name="ri-bank-line"></Icon> {{ $t("Bank Details") }}
        </nuxt-link>
      </li>
      <li class="nav-item" role="presentation">
        <nuxt-link
          class="nav-link"
          to="/account/wallet"
          :class="route.fullPath == '/account/wallet' ? 'active' : ''"
        >
          <Icon name="ri-wallet-line"></Icon> {{ $t("My Wallet") }}
        </nuxt-link>
      </li>
      <li class="nav-item" role="presentation">
        <nuxt-link
          class="nav-link"
          to="/account/point"
          :class="route.fullPath == '/account/point' ? 'active' : ''"
        >
          <Icon name="ri-coin-line"></Icon> {{ $t("Earning Points") }}
        </nuxt-link>
      </li>
      <li class="nav-item" role="presentation">
        <nuxt-link
          class="nav-link"
          to="/account/order"
          :class="route.fullPath == '/account/order' ? 'active' : ''"
        >
          <Icon name="ri-file-text-line"></Icon> {{ $t("My Orders") }}
        </nuxt-link>
      </li>
      <li class="nav-item" role="presentation">
        <nuxt-link
          class="nav-link"
          to="/account/refund"
          :class="route.fullPath == '/account/refund' ? 'active' : ''"
        >
          <Icon name="ri-money-dollar-circle-line"></Icon>
          {{ $t("Refund History") }}
        </nuxt-link>
      </li>
      <li class="nav-item" role="presentation">
        <nuxt-link
          class="nav-link"
          to="/account/addresses"
          :class="route.fullPath == '/account/addresses' ? 'active' : ''"
        >
          <Icon name="ri-map-pin-line"></Icon> {{ $t("Saved Address") }}
        </nuxt-link>
      </li>
      <li class="nav-item logout-cls" role="presentation">
        <a
          href="javascript:void(0)"
          class="btn gap-1"
          @click="
            (data) => {
              toggleModal({ data });
            }
          "
        >
          <Icon name="ri-logout-box-r-line"></Icon> {{ $t("Logout") }}
        </a>
      </li>
    </ul>

    <WidgetsModalsCommon
      :showModal="modals.logout"
      @close="toggleModal({ state: false })"
    >
      <WidgetsModalsConfrmationModal
        @close="toggleModal({ state: false })"
        @confirm="useUserStore().LogoutUser()"
      />
    </WidgetsModalsCommon>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useDataStore } from "@/store/data";
import { useUserStore } from "@/store/user";
let route = useRoute();
let modals = ref({ logout: false });
let unreadNotificationCount = ref();
let { Notification } = storeToRefs(useDataStore());
async function toggleModal({ state = true }) {
  modals.value.logout = state;
}
// unreadNotificationCount.value = Notification?.value?.data?.filter(item => !item.read_at)?.length;
</script>
<style lang="scss" scoped></style>
