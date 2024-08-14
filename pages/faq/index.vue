<template>
    <div>
       <WidgetsBreadcrumb  :breadcrumbs="breadcrumbs"/>
       <PagesFaq/>
    </div>
</template>

<script setup>
var breadcrumbs = { page: "FAQ's", links: [{ name: "FAQ's" }] }
</script>

<style lang="scss" scoped>

</style>