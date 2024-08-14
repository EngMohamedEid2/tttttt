<template>
    <div>
        <WidgetsBreadcrumb  :breadcrumbs="breadcrumbs"/>
        <AccountWrapper>
            <AccountWallet />
        </AccountWrapper>
    </div>
</template>

<script setup>
var breadcrumbs = { page: "My Wallet", links: [{ name: "My Wallet" }] }
</script>

<style lang="scss" scoped></style>