<template>
  <div :class="classes">
    <img :src="image" class="img-fluid" alt="no-data" v-if="image" />
    <h4>{{ text }}</h4>
    <p>{{ description }}</p>
  </div>
</template>

<script setup>
let props = defineProps({
  classes: { type: String, default: "no-data-added" },
  image: String,
  text: String,
  description: String,
});
</script>
<style lang="scss" scoped></style>
