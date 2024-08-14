<template>
<WidgetsCategory 
    :style="style"
    :image="image"
    :theme="theme"
    :title="title"
    :Category="Categories"
    >
</WidgetsCategory>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useDataStore } from '~/store/data';

let props = defineProps({
    style: { type: [String,Object], default:'vertical'},
    image:String,
    theme:String,
    title:String,
})

let { Categories } = storeToRefs(useDataStore())
</script>

<style lang="scss" scoped>

</style>