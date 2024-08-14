<template>
  <div class="tab-pane fade show active">
    <div class="dashboard-home">
      <div class="title-header">
        <div class="d-flex align-items-center">
          <h5>{{ $t("My Dashboard") }}</h5>
        </div>
      </div>
      <div class="dashboard-user-name">
        <h6 class="text-content">
          {{ $t("Hello") }}, <b class="text-title">{{ user?.name }}</b>
        </h6>
        <p class="text-content">
          {{
            $t("Welcome to your personalized My Account Dashboard. Here, you have the power to manage your entire e-commerce  experience in one place.Whether you're exploring the latest products, checking your wallet balance, or updating  your profile, everything is at your fingertips"
            )
          }}
        </p>
      </div>
      <div class="total-box">
        <AccountDashboardTotalContain :user="user" />
      </div>
      <div class="profile-about dashboard-bg-box">
        <AccountDashboardProfileInformation :user="user" />
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

