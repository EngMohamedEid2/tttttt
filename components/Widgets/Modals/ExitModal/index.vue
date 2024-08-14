<template>
<WidgetsModalsCommon :showModal="showModal" modalClass="theme-modal modal-lg exit-modal"  @close="closeModal({ state: false })">
  <div class="modal-header p-0">
    <WidgetsButton :classes="'btn btn-close'"  :id="'profile_modal_close_btn'"
      @onClick="closeModal({ state: false })">
      <Icon name="ri-close-line"></Icon>
    </WidgetsButton>
  </div>
  <div class="modal-box">
    <div class="modal-image">
      <img src="/images/newsletter/3.jpg" class="img-fluid" alt="newsletter">
    </div>
    <div class="modal-content">
      <div>
        <img src="/images/logo/1.png" class="modal-logo" alt="logo">
        <h2 class="text-title">{{ $t("Wait") }}<span class="theme-color">!</span></h2>
        <h5>{{ $t("I am sorry to see you go") }}</h5>
        <p>{{ "In order to earn 10 off your first purchase provide your email address" }}</p>
      </div>
    </div>
  </div>
</WidgetsModalsCommon>
</template>

<script setup>
import Cookies from 'js-cookie';
const showModal = ref(false);

const openModal = () => {
  showModal.value = true;
  Cookies.set('exit', 'true');
};

const closeModal = () => {
  showModal.value = false;
};

const handleMouseOut = (event) => {
  if (event.clientY <= 0) {
    openModal();
    window.removeEventListener('mouseout', handleMouseOut);
  }
};

onMounted(() => {
  const modalShown = Cookies.get('exit');
  if (!modalShown) {
    window.addEventListener('mouseout', handleMouseOut);
  }
});

onUnmounted(() => {
  window.removeEventListener('mouseout', handleMouseOut);
});
</script>

<style lang="scss" scoped>

</style>