<template>
  <div>
    <WidgetsBreadcrumb  :breadcrumbs="breadcrumbs"/>
    <AuthRegister/>
</div>
</template>

<script setup>
var breadcrumbs = { page: "Register", links: [{ name: "Register" }] }
</script>

<style scoped>

</style>