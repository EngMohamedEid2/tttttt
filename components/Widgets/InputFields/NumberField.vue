<template>
  <div>
    <input
      class="number"
      :type="type"
      :class="classes"
      :id="id"
      :value="modelValue?.data"
      @input="updated($event.target.value)"
      placeholder="write your phone number"
    />
    <p class="text-danger pt-2 m-0" v-if="modelValue?.errorMessage">
      {{ $t(modelValue?.errorMessage) }}
    </p>
  </div>
</template>

<script setup>
import { validateNonEmptyFields } from "@/utils/validators/inputFieldValidators";
let props = defineProps({
  type: String,
  classes: String,
  id: String,
  placeholder: String,
  modelValue: Object,
  errorMessage: String,
  formSubmitted: Boolean,
});
// console.log(props.errorMessage);
const emit = defineEmits(["update:modelValue"]);
let validStatus = ref({});
watch(
  () => props.formSubmitted,
  () => {
    props.formSubmitted && updated(props.modelValue?.data);
  }
);
function updated(inputValue) {
  validStatus.value = validateNonEmptyFields({
    value: String(inputValue),
    minLength: props.minLength,
    errorMessage: props.errorMessage,
  });
  emit("update:modelValue", {
    data: props.inputType == "number" ? Number(inputValue) : inputValue,
    errorMessage: validStatus.value.errorMessage,
  });
}
</script>

<style scoped></style>
