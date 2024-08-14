<template>
  <div class="footer-logo-contain">
    <p v-if="data?.footer?.footer_about">{{ data?.footer?.footer_about }}</p>
    <ul class="address">
      <li v-if="data?.footer?.about_address">
        <Icon name="ri:home-line" />
        <NuxtLink>{{ data?.footer?.about_address }}</NuxtLink>
      </li>
      <li v-if="data?.footer?.about_email">
        <Icon name="ri:mail-line" />
        <NuxtLink>{{ data?.footer?.about_email }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
let props = defineProps({
  data: Object,
});
</script>
<style lang="scss" scoped></style>
