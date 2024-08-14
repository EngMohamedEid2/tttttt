<template>
     <div>
        <WidgetsBreadcrumb  :breadcrumbs="breadcrumbs"/>
        <AccountWrapper>
            <AccountNotification />
        </AccountWrapper>
    </div>
</template>

<script setup>
var breadcrumbs = { page: "Notifications", links: [{ name: "Notifications" }] }
</script>

<style lang="scss" scoped></style>