<template>
<div>
    <div v-for="menu in menus" :key="menu.id">
        {{ menu.label }}
        <recursive-menu v-if="menu.children" :menus="menu.children"></recursive-menu>
    </div>
</div>
</template>

<script setup>
let props = defineProps({
    menus: Array
})
</script>

<style lang="scss" scoped></style>