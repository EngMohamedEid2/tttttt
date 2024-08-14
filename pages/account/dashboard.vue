<template>
     <div>
        <WidgetsBreadcrumb  :breadcrumbs="breadcrumbs"/>
        <AccountWrapper>
            <AccountDashboard  :user="user"/>
        </AccountWrapper>
    </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useUserStore } from "~~/store/user";
let router = useRoute()

var breadcrumbs = { page: "Dashboard", links: [{ name: "Dashboard" }] }
let { User, UserInfo } = storeToRefs(useUserStore())
let user = ref(UserInfo)
</script>

<style lang="scss" scoped></style>