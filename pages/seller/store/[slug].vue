<template>
  <div>
    <WidgetsBreadcrumb :breadcrumbs="breadcrumbs" />
    <ShopSellerDetailsBasic :store="store"></ShopSellerDetailsBasic>
  </div>
</template>

<script setup>
let StoreParams = ref({ paginate: 9, page: 1, search: '' });
let { data: store } = await HandleRequest(`store/slug/${useRoute().params.slug}`, { key: 'GetStore', params: StoreParams.value }, { initialCache: false });
let breadcrumbs = { page: store.value.store_name, links: [{ name: 'Sellers Store' }, { name: store.value.store_name }] }
</script>

<style lang="scss" scoped></style>