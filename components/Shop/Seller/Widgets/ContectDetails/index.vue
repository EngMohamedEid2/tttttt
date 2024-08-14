<template>
<div>
  <div class="saller-contact">
    <div class="seller-icon">
      <Icon name="ri:smartphone-line"></Icon>
    </div>
    <div class="contact-detail">
      <h5>{{ 'Contact Us' }}: <span>+ {{ store.vendor.phone }}</span></h5>
    </div>
  </div>
  <div class="saller-contact mt-2">
    <div class="seller-icon">
      <Icon name="ri:mail-line"></Icon>
    </div>
    <div class="contact-detail">
      <h5>{{ 'Email' }}: <span> {{ store.vendor.email }}</span></h5>
    </div>
  </div>
</div>
</template>

<script setup>
let props = defineProps({
  store: Object
})
</script>

<style lang="scss" scoped></style>