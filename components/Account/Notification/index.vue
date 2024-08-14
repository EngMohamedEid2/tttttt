<template>
  <div>
    <div class="title-header">
      <div class="d-flex align-items-center">
        <h5>{{ $t("Notifications") }}</h5>
      </div>
    </div>

    <ul class="notification-list" v-if="Notification?.data.length">
      <li :class="{ 'unread': notification.data.read_at }" v-for="notification in Notification.data" :key="notification">
        <h4>{{ notification?.data?.message }}</h4>
        <h5>
          <Icon name="ri-time-line"></Icon>
          {{ dateFormatter(notification?.created_at) }}
        </h5>
      </li>
    </ul>
    <WidgetsNoData :class="'no-data-added'" :image="'/svg/empty-items.svg'" :text="'No Notifications Found'"
      :description="'You have not received any notification yet'" v-if="!Notification?.data?.length">
      ></WidgetsNoData>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useDataStore } from "@/store/data";
let { Notification } = storeToRefs(useDataStore())
</script>

<style lang="scss" scoped></style>
