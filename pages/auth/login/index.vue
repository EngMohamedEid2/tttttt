<template>
    <div>
        <WidgetsBreadcrumb  :breadcrumbs="breadcrumbs"/>
        <AuthLogin />
    </div>
</template>

<script setup>
var breadcrumbs = { page: "Login", links: [{ name: "Login" }] }
</script>

<style lang="scss" scoped>

</style>