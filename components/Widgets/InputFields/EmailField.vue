<template>
<div>
    <input type="email" :class="classes" @input="Updated($event.target.value)" :id="id" :value="modelValue?.data"
        :placeholder="$t(placeholder || 'Enter Value')" :disabled="readonly">
    <p class="text-danger pt-2 m-0" v-if="modelValue?.errorMessage">{{ $t(modelValue?.errorMessage) }}</p>
</div>
</template>

<script setup>
import { validateEmail } from '@/utils/validators/inputFieldValidators'
let props = defineProps({
    classes: String,
    id: String,
    placeholder: String,
    modelValue: Object,
    minLength: Number,
    errorMessage: String,
    formSubmitted: Boolean,
    readonly: {
        default: false,
        type: Boolean
    },
    validate: {
        default: true,
        type: Boolean
    }
})
let validStatus = ref({})
const emit = defineEmits(["update:modelValue"]);
watch(() => props.formSubmitted, () => { props.formSubmitted && Updated(props.modelValue?.data) })
function Updated(inputValue) {
    validStatus.value = props.validate ? validateEmail({
        value: String(inputValue),
        minLength: props.minLength,
        errorMessage: props.errorMessage
    }) : inputValue
    validStatus.value = validateEmail(inputValue);
    emit('update:modelValue', { data: inputValue, errorMessage: validStatus.value.errorMessage })
}
</script>

<style scoped></style>