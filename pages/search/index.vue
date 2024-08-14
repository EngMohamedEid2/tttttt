<template>
    <div>
        <WidgetsBreadcrumb  :breadcrumbs="breadcrumbs"/>
        <PagesSearch />
    </div>
</template>

<script setup>
var breadcrumbs = { page: "Search", links: [{ name: "Search" }] }
</script>

<style lang="scss" scoped>

</style>