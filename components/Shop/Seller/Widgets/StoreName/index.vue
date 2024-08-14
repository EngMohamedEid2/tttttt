<template>
<nuxt-link :to="`/seller/store/${store.slug}`">
  <h3>{{ store.store_name }}</h3>
</nuxt-link>

</template>

<script setup>
let props = defineProps({
    store:Object
})
</script>

<style lang="scss" scoped>

</style>