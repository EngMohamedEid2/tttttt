<template>
    <div>
        <WidgetsBreadcrumb  :breadcrumbs="breadcrumbs"/>
        <ShopCollection />
    </div>
</template>

<script setup>
var breadcrumbs = { page: "Collection", links: [{ name: "Collection" }] }
</script>

<style lang="scss" scoped></style>
