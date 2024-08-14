<template>
   <div>
     <WidgetsBreadcrumb  :breadcrumbs="breadcrumbs"/>
   <AuthForgotPassword/>
</div>
</template>

<script setup>
var breadcrumbs = { page: "Forgot Password", links: [{ name: "Forgot Password" }] }
</script>

<style scoped>

</style>