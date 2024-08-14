<template>
  <div>
    <WidgetsBreadcrumb  :breadcrumbs="breadcrumbs"/>
    <AuthUpdatePssword/>
</div>
</template>

<script setup>
var breadcrumbs = { page: "Update Password", links: [{ name: "Update Password" }] }
</script>

<style scoped>

</style>