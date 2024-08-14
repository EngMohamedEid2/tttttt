<template>
<div>
    <!-- Search Basic Style -->
    <div class="delivery-login-box" v-if="style == 'basic'">
        <div class="delivery-icon">
            <div class="search-box">
                <Icon name="ri:search-line"></Icon>
            </div>
        </div>
    </div>
    <!-- Search Classic Style -->
    <a href="javascript:void(0)" class="header-icon search-box search-icon" v-if="style == 'classic'">
        <Icon name="ri:search-line"></Icon>
    </a>
</div>
</template>

<script setup>
let props = defineProps({
    style: [String,Object],
})
</script>

<style lang="scss" scoped></style>