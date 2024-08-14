<template>
    <div>
        <WidgetsBreadcrumb  :breadcrumbs="breadcrumbs"/>
        <AccountWrapper>
            <AccountRefund />
        </AccountWrapper>
    </div>
</template>

<script setup>
var breadcrumbs = { page: "Refund", links: [{ name: "Refund" }] }
</script>

<style lang="scss" scoped></style>