<template>
       <div>
        <WidgetsBreadcrumb  :breadcrumbs="breadcrumbs"/>
        <AccountWrapper>
            <AccountOrders />
        </AccountWrapper>
    </div>
</template>

<script setup>
var breadcrumbs = { page: "My Orders", links: [{ name: "My Orders" }] }
</script>

<style lang="scss" scoped></style>