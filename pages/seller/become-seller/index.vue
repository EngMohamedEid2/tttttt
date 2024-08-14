<template>
    <div>
        <ShopSellerBecomeSeller :sellerStore="ThemeOptions.options.seller" />
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useDataStore } from '@/store/data';
let { ThemeOptions } = storeToRefs(useDataStore())
</script>

<style lang="scss" scoped></style>