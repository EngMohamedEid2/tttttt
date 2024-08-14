<template>
<p v-html="store.description"></p>
</template>

<script setup>
let props = defineProps({
    store:Object
})
</script>

<style lang="scss" scoped>

</style>