<template>
  <div>
    <section class="section-b-space">
      <div class="container">
        <div v-html="slug.content"></div>
      </div>
    </section>
  </div>
</template>

<script setup>
let props = defineProps({
  slug: [String, Object],
  ContentData: Object,
});
</script>

<style lang="scss" scoped></style>