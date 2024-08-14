<template>
  <ul>
    <li v-for="link in links" :key="link">
      <NuxtLink :to="`/${link.link}`" class="text-content text-capitalize">{{ link.label }}</NuxtLink>
    </li>
  </ul>
</template> 

<script setup>
let props = defineProps({
  links: Object
})
</script>

<style lang="scss" scoped></style>