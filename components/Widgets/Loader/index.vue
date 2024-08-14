<template>
  <div :class="loaderClass">
    <div>
      <div class="loader"></div>
      <h3>{{ $t("Loading...") }}</h3>
    </div>
  </div>
</template>

<script setup>
let props = defineProps({
  loaderClass: {
    type: String,
    default: "loader-wrapper",
  },
});
</script>

<style lang="scss" scoped></style>
