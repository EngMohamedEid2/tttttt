<template>
    <div>
       <WidgetsBreadcrumb  :breadcrumbs="breadcrumbs"/>
       <PagesOffer :coupon="coupon"/>
    </div>
</template>

<script setup>
var breadcrumbs = { page: "Offer", links: [{ name: "Offer" }] }
let { data: coupon } = await HandleRequest('coupon', { key: 'GetConpon', });
</script>

<style lang="scss" scoped>

</style>