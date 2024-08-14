<template>
<div>
    <input type="password" :class="classes" :placeholder="$t(placeholder || 'Enter Value')"
        @input="Updated($event.target.value)" :value="modelValue?.data">
    <p class="text-danger pt-2 m-0" v-if="modelValue?.errorMessage">{{ $t(modelValue?.errorMessage) }} </p>
</div>
</template>

<script setup >
import { validatePassword } from "@/utils/validators/inputFieldValidators";
let props = defineProps({
    classes: String,
    modelValue: Object,
    placeholder: String,
    id: String,
    minLength: Number,
    errorMessage: String,
    formSubmitted: Boolean,
})
let validStatus = ref({})
const emit = defineEmits(["update:modelValue"]);
watch(() => props.formSubmitted, () => { props.formSubmitted && Updated(props.modelValue?.data) })
function Updated(inputValue) {
    validStatus.value = validatePassword({ value: inputValue, minLength: 8, errorMessage: props.errorMessage })
    emit('update:modelValue', { data: inputValue, errorMessage: validStatus.value.errorMessage })
}
</script>

<style scoped></style>