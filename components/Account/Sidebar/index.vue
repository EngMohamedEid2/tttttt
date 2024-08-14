<template>
  <div class="dashboard-left-sidebar">
    <div class="close-button d-flex d-lg-none">
      <WidgetsButton :classes="'close-sidebar'" :style="'button'" :id="'close_sidebar_btn'" @onClick="closeSidebar()">
        <Icon name="ri-close-fill"></Icon>
      </WidgetsButton>
    </div>
    <div class="profile-box">
      <div class="cover-image">
        <img src="/images/inner-page/cover-img.jpg" class="img-fluid" alt="cover-img" />
      </div>

      <div class="profile-contain">
        <div class="profile-image">
          <div class="position-relative">
            <img :src="user?.profile_image?.original_url" class="update_img" alt="profile"
              v-if="user?.profile_image && user?.profile_image?.original_url" />
            <div class="user-round" v-else>
              <h4>{{ user?.name?.charAt(0)?.toString()?.toUpperCase() }}</h4>
            </div>
          </div>
        </div>

        <div class="profile-name">
          <h3>{{ UserInfo.name }}</h3>
          <h6 class="text-content">{{ UserInfo.email }}</h6>
        </div>
      </div>
    </div>
    <AccountSidebarNavLink />
  </div>
</template>

<script setup>
let props = defineProps({
  user: Object,
  UserInfo: Object,
});
let emit = defineEmits(["close"])
function closeSidebar() {
  emit('close')
}
</script>

<style lang="scss" scoped></style>
