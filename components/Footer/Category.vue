<template>
    <ul>
        <li v-for="category in data" :key="category">
            <NuxtLink :to="{ path: '/collections', query: { category: category?.value?.slug } }" class="text-content">{{
                category?.value?.name }} </NuxtLink>
        </li>
    </ul>
</template>

<script setup>
let props = defineProps({
    data: Object
})
</script>

<style lang="scss" scoped></style>