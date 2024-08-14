<template>
<div>
  <input type="text" :class="classes" :id="id" @input="updated($event.target.value)" :value="modelValue?.data"
    :placeholder="placeholder" />
  <p class="text-danger pt-2 m-0" v-if="modelValue?.errorMessage">{{ $t(modelValue?.errorMessage) }}</p>
</div>
</template>

<script setup >
import { validateNonEmptyFields } from "@/utils/validators/inputFieldValidators";
let props = defineProps({
  classes: String,
  id: String,
  placeholder: String,
  modelValue: Object,
  formSubmitted: Boolean,
  validate: {
    default: true,
    type: Boolean
  }
})
let validStatus = ref({})
const emit = defineEmits(["update:modelValue"]);
watch(() => props.formSubmitted, () => { props.formSubmitted && updated(props.modelValue?.data) })
function updated(inputValue) {
  validStatus.value = props.validate ? validateNonEmptyFields({
    value: String(inputValue),
    minLength: props.minLength,
    errorMessage: props.errorMessage
  }) : {}
  emit("update:modelValue", {
    data: props.inputType == 'number' ? Number(inputValue) : inputValue,
    errorMessage: validStatus.value.errorMessage,
  });
}
</script>

<style scoped></style>