<template>
<div>
  <OnClickOutside class="btn-group" @trigger="() => { showDropDown = false; search = selectedValue }">
    <div class="custom-select-box">
      <input type="text" :placeholder="placeholder" v-model="search" @input="updateSearch($event.target.value)"
        @click.prevent="(showDropDown = !showDropDown)" class="form-control form-select" />
      <!-- <span  role="presentation" class="cross" v-if="!disableClearButton && modelValue.selected" @click.prevent="ClearInput">x</span> -->
      <div class="box-content" v-if="showDropDown">
        <ul v-if="valuesToShow.length" class="custom-scroll">
          <li @click.prevent="handleSelect(option)" v-for="(option, index) in valuesToShow" :key="index" class="w-100">
            <div class="country d-flex align-items-center justify-content-start gap-2">
              <div class="flag-box">
                <div class="iti-flag" :class="option?.data?.class"></div>
              </div><span class="dial-code">{{ option[props.displayKey] }}</span>
            </div>
            <!-- <a href="javascript:void(0)">{{ option[props.displayKey] }}</a> -->
          </li>
        </ul>
        <ul v-else>
          <li>
            <a href="javascript:void(0)" @click.prevent="() => NewRecordLink && useRouter().push(NewRecordLink)">No
              Records Found! <span v-if="NewRecordLink">click to Add New records</span></a>
          </li>
        </ul>
      </div>
    </div>
  </OnClickOutside>
  <p class="error-message" v-if="formSubmitted && !isValid">{{ errormessage }}</p>
  <p class="help-text" v-if="helptext">*{{ helptext }}</p>
</div>
</template>

<script setup>
import { OnClickOutside } from '@vueuse/components'
import { useDebounceFn } from '@vueuse/core'
let props = defineProps({
  displayValue: String, modelValue: Object, options: Array, formSubmitted: Boolean, initialData: {
    type: [Object, Boolean],
    default: false
  }, placeholder: { default: 'Select', type: String }, NewRecordLink: { type: String }, disableClearButton: Boolean,
  displayKey: {
    default: 'name',
    type: String
  },
  getValueKey: String, selectFirst: [Boolean, Number, String],
  checkValidation: { type: Boolean, default: true },
  errormessage: String,
  helptext: String,
  holdKey: Boolean
})
let emit = defineEmits(['update:modelValue', 'vendersearch']), selectedValue = ref('')
let showDropDown = ref(false), valuesToShow = ref([]), search = ref(''), isValid = ref(false);
let objToEmit = props.modelValue
objToEmit.type = 'dropdown'
emit('update:modelValue', objToEmit)

!props.initialData && props.selectFirst && props?.options?.length && handleSelect(props?.options[0])

function handleSelect(option) {
  isValid.value = true
  selectedValue.value = option[props.displayKey]
  let emitValues = props.modelValue;
  emitValues.data = props.getValueKey ? option[props.getValueKey] : option,
    emitValues.errorMessage = isValid.value ? 0 : 'Please Select An Option',
    emitValues.selected = option
  search.value = selectedValue.value
  showDropDown.value = false
  emit('update:modelValue', emitValues)
}
let modelData = props.modelValue.selected
modelData && handleSelect(modelData)
props.initialData && handleSelect(props.initialData)
props.modelValue?.data && (isValid.value = true)
valuesToShow.value = props.options || [];

const CheckValidation = () => {
  let objToEmit = props.modelValue;
  (props.formSubmitted && !isValid.value) ? objToEmit.errorMessage = "Please Select An Option" : objToEmit.errorMessage = false
  emit('update:modelValue', objToEmit)
}

const ClearInput = () => {
  selectedValue.value = '';
  search.value = '';
  isValid.value = false;
  emit('update:modelValue', {})
}

const updateSearch = useDebounceFn((value) => {
  let valueToEmit = props.modelValue;
  valueToEmit.search = value;
  emit("update:modelValue", valueToEmit);
}, 500, { maxWait: 2000 })

watch(() => props.modelValue?.selected, () => {
  props.modelValue.selected && handleSelect(props.modelValue.selected)
}, { deep: true })

watch(() => [props.formSubmitted, props.modelValue], () => {
  CheckValidation();
}, { deep: true })

watch(() => props.modelValue?.displayValue, () => {
  if (props.modelValue?.displayValue) {
    search.value = props.modelValue?.displayValue;
    selectedValue.value = props.modelValue?.displayValue;
  }
}, { deep: true })
watch(() => props.options, () => { valuesToShow.value = props.options; }, { deep: true })
watch(() => showDropDown, () => { showDropDown.value && (search.value = '') }, { deep: true })
watch(() => search, () => {
  valuesToShow.value = props.options?.filter(item => item[props.displayKey]?.toLowerCase().includes(search.value?.toLowerCase()))
}, { deep: true })

defineExpose({ ClearInput })

</script>

<style lang="scss" scoped>
.dropdown-menu {
  top: 47px;
  width: 100%;
  max-height: 130px;
  overflow: auto;
}

.cross {
  position: absolute;
  cursor: pointer;
  right: 36px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 20px;

}
</style>