<template>
     <div>
        <WidgetsBreadcrumb  :breadcrumbs="breadcrumbs"/>
        <AccountWrapper>
            <AccountAddresses />
        </AccountWrapper>
    </div>
</template>

<script setup>
var breadcrumbs = { page: "Saved Address", links: [{ name: "Saved Address" }] }
</script>

<style lang="scss" scoped></style>