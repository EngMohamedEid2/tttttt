<template>
<nuxt-link :to="`/seller/store/${store.slug}`">
  <div class="image" v-if="store?.store_logo">
      <img :src="store.store_logo.original_url" alt="" class="img-fluid">
  </div>
  <template v-else>
    <h1 class="vendor-text">{{ store?.store_name?.charAt(0)?.toString()?.toUpperCase() }}</h1>
  </template>
</nuxt-link>
</template>

<script setup>
let props = defineProps({
    store:Object
})
</script>

<style lang="scss" scoped>

</style>