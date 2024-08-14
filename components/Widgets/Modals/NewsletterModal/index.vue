<template>
  <WidgetsModalsCommon :showModal="showModal" modalClass="newsletter-modal modal-lg" @close="closeModal({ state: false })">
    <div class="modal-header p-0">
      <WidgetsButton :classes="'btn btn-close'" :id="'profile_modal_close_btn'" @onClick="closeModal({ state: false })">
        <Icon name="ri-close-line"></Icon>
      </WidgetsButton>
    </div>
    <div class="modal-box">
      <div class="modal-image">
        <img src="/images/newsletter/3.jpg" class="img-fluid" alt="newsletter">
      </div>
      <div class="modal-content content-padding">
        <div>
          <img src="/images/logo/1.png" class="modal-logo" alt="logo">
          <h2>{{ '15%' }} <span>{{ 'off' }}</span></h2>
          <h5>{{ 'Want to make your purchase' }}?</h5>
          <p>{{ 'Plus early access to new arrivals exclusive sales lots more' }}?</p>
          <form class="modal-form">
            <div class="input-group modal-form-box">
              <input type="email" class="form-control" placeholder="Your email here">
              <WidgetsButton :classes="'input-group-text'" :id="'submit_newsletter_btn'" @click@="submit(emailVal.value)">
                {{ 'Submit' }}</WidgetsButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  </WidgetsModalsCommon>
</template>
  
<script setup>
let showModal = ref(false)

onMounted(() => {
  if (localStorage.getItem('showModel') !== 'newsletter') {
    showModal.value = true
    localStorage.setItem('showModel', 'newsletter')
  }
})

function closeModal() {
  showModal.value = false
}
</script>
  
<style lang="scss" scoped></style>