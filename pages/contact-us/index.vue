<template>
    <div>
        <WidgetsBreadcrumb  :breadcrumbs="breadcrumbs"/>
        <PagesContactUs/>
    </div>
</template>

<script setup>
var breadcrumbs = { page: "Contact Us", links: [{ name: "Contact Us" }] }
</script>

<style lang="scss" scoped>

</style>