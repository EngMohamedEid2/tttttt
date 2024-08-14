<template>
    <div>
        <WidgetsBreadcrumb  :breadcrumbs="breadcrumbs"/>
        <AccountWrapper>
            <AccountBankDetails />
        </AccountWrapper>
    </div>
</template>

<script setup>
var breadcrumbs = { page: "Bank Details", links: [{ name: "Bank Details" }] }
</script>

<style lang="scss" scoped></style>