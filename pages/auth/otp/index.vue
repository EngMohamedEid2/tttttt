<template>
  <div>
    <WidgetsBreadcrumb  :breadcrumbs="breadcrumbs"/>
    <AuthOTP/>
</div>
</template>

<script setup>
var breadcrumbs = { page: "Otp", links: [{ name: "Otp" }] }
</script>

<style scoped>

</style>