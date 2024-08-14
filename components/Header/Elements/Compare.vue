<template>
    <nuxt-link :to="NavigationLinks?.compare" class="header-icon" v-if="style == 'basic'">
        <small class="badge-number badge-light">2</small>
        <Icon name="ri-arrow-left-right-line" size="24"></Icon>
    </nuxt-link>
</template>

<script setup>
let props = defineProps({
    style: { type: [String,Object], default: 'basic' }
})
</script>

<style lang="scss" scoped></style>