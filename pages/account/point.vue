<template>
    <div>
        <WidgetsBreadcrumb  :breadcrumbs="breadcrumbs"/>
        <AccountWrapper>
            <AccountPoint />
        </AccountWrapper>
    </div>
</template>

<script setup>
var breadcrumbs = { page: "Points", links: [{ name: "Points" }] }
</script>

<style lang="scss" scoped></style>