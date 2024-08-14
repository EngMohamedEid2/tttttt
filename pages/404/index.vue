<template>
    <div>
       <WidgetsBreadcrumb  :breadcrumbs="breadcrumbs"/>
       <PagesError404/>
    </div>
</template>

<script setup>
var breadcrumbs = { page: "404", links: [{ name: "404" }] }
</script>

<style lang="scss" scoped>

</style>