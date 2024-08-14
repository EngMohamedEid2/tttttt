<template>
    <div>
       <WidgetsBreadcrumb  :breadcrumbs="breadcrumbs"/>
       <PagesAboutUs />
    </div>
</template>

<script setup>
var breadcrumbs = { page: "About Us", links: [{ name: "About Us" }] }
</script>

<style lang="scss" scoped>

</style>