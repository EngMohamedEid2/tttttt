<template>
    <div class="dropdown">
        <button class="dropdown-toggle" type="button" :id="dropdownId" data-bs-toggle="dropdown">
            <span>{{ modelValue[displayKey] || 'Select' }}</span>
            <Icon name="ri:arrow-down-s-line"></Icon>
        </button>
        <ul class="dropdown-menu">
            <li v-for="(option, index) in options" :key="`selectOption${index}`">
                <a class="dropdown-item" @click.prevent="handleSelect({ option })" href="javascript:void(0)">{{
                    option.display }}</a>
            </li>
        </ul>
    </div>
</template>

<script setup>
let props = defineProps({
    options: Array,
    modelValue: Object,
    displayKey: {
        default: 'display',
        type: String
    },
    dropdownId: {
        default: 'dropDown',
        type: String
    }
})

let emit = defineEmits(['update:modelValue'])

const handleSelect = ({ option }) => {
    emit('update:modelValue', option)
}
</script>

<style lang="scss" scoped></style>