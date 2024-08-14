<template>
    <div class="mb-md-4 mb-3 custom-form">
        <label class="form-label" :for="label">{{ label }}</label>
        <div class="custom-input">
            <input :disabled="disabled" :type="inputType" :value="modelValue.data ? modelValue.data : ''" :id="label"
                :placeholder="$t(placeholder || 'Enter Value')" v-on:input="updated($event.target.value)"
                :class="[props.classes, inputClasses]" class="form-control" />
            <i :class="[IconClass]"></i>
        </div>
        <p class="error-message" v-if="modelValue.errorMessage">{{ $t(modelValue.errorMessage) }}</p>
    </div>
</template>
  
<script setup>
import { validateNonEmptyFields } from "@/utils/validators/inputFieldValidators";

var props = defineProps({
    classes: { type: String, default: 'form-control' },
    FormSubmitted: Boolean,
    inputId: String,
    label: String,
    minLength: Number,
    disabled: Boolean,
    modelValue: [Object, String],
    placeholder: String,
    IconClass: [Object, String],
    errorMessage: String,
    inputType: {
        default: 'text',
        type: String
    },
    checkValidation: { type: Boolean, default: true }
});

let inputClasses = ref(""),
    validStatus = ref({}),
    changed = ref(false);

watch(() => props.FormSubmitted, () => { props.FormSubmitted && updated(props.modelValue.data || '') }, { deep: true })

const emit = defineEmits(["update:modelValue"]);

function updated(inputValue) {
    changed.value = true;
    validStatus.value = props.checkValidation ? validateNonEmptyFields({
        value: String(inputValue),
        errorMessage: props.errorMessage
    }) : { valid: true };
    // validStatus.value.valid
    //     ? (inputClasses.value = `is-valid`)
    //     : (inputClasses.value = `is-invalid`);
    emit("update:modelValue", {
        data: props.inputType == 'number' ? Number(inputValue) : inputValue,
        errorMessage: validStatus.value.errorMessage,
    });
}
</script>
<style  scoped>
.error-message {
    color: red;
    width: 100%;
    margin: 4px 0 0;
    font-size: 14px;
}
</style>

  