<template>
  <div>
    <CommonBreadCrumb :title="slug" :currentPage="slug" formPage="Pages" />
    <PagesContent :slug="data"/>
  </div>
</template>

<script setup>
let route = useRoute();
let slug = ref(route.params.slug);

let { data, error } = await HandleRequest(`page/slug/${slug.value}`, { key: "getProductTopToSave",});


</script>   

<style lang="scss" scoped>
</style>  