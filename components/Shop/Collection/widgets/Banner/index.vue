<template>
  <div class="banner-contain-2 hover-effect section-b-space" v-if="imageUrl">
    <img src="/images/02.png" class="img-fluid rounded-3" alt="banner" />
  </div>
</template>

<script setup>
let props = defineProps({
  class: {
    type: String,
    default: "banner-contain-2 hover-effect",
  },
  imageUrl: String,
});
</script>
<style lang="scss" scoped></style>
