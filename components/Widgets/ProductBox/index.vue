<template>
    <div>
        <WidgetsProductBoxHorizontal :product="product" v-if="style == 'horizontal'" :classes="classes" :close="close" />
        <WidgetsProductBoxVertical :product="product" v-if="style == 'vertical'" />
    </div>
</template>

<script setup>

let props = defineProps({
    style: [String, Object],
    classes: String,
    close: Boolean,
    product: Object
})

</script>

<style lang="scss" scoped></style>