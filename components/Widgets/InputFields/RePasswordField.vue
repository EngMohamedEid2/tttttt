<template>
<div>
    <input type="password" :id="id" :placeholder="placeholder || 'Enter Value'" @input="updated($event.target.value)"
        :class="classes" :value="modelValue.data">
    <p class="text-danger pt-2 m-0" v-if="modelValue.errorMessage">{{ $t(modelValue.errorMessage) }}</p>
</div>
</template>

<script setup >
import { validateRePassword } from "@/utils/validators/inputFieldValidators";
let props = defineProps({
    errorMessage: String,
    classes: String,
    id: String,
    placeholder: String,
    modelValue: Object,
    passwordToCompere: String,
    formSubmitted: Boolean
})
let validStatus = ref({})
const emit = defineEmits(["update:modelValue"]);
watch(() => props.formSubmitted, () => { props.formSubmitted && updated(props.modelValue.data) })
function updated(inputValue) {
    validStatus.value = validateRePassword({ value: inputValue, valueToCompare: props.passwordToCompere, minlength: 8, errorMessage: props.errorMessage })
    emit('update:modelValue', { data: inputValue, errorMessage: validStatus.value.errorMessage })
}
</script>

<style scoped></style>