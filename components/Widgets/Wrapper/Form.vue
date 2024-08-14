<template>
    <form @submit.prevent="HandleSubmit" :class="Classes">
        <slot :FormData="FormData" :submit="HandleSubmit" :FormSubmitted="FormData.IsSubmitted" />
    </form>
</template>

<script setup>
let props = defineProps({
    OnSubmit: Function,
    Inputs: Object,
    NotRequiredFields: { type: Array, default: [] },
    InitialData: Object,
    Classes: String
});
let FormData = ref({ IsValid: false, data: {}, IsSubmitted: false });

props.InitialData && setInitialValues({ initialValues: props.InitialData, inputs: props.Inputs });
const HandleSubmit = () => {
    FormData.value.IsSubmitted = true;
    if (formValidator({ FormData: props.Inputs, notRequired: props.NotRequiredFields })) {
        FormData.value.IsValid = true;
        FormData.value.data = convertInputData({ data: props.Inputs })
        props.OnSubmit && props.OnSubmit(FormData.value.data);
    }
}
defineExpose({
    HandleSubmit
})
</script>

<style lang="scss" scoped></style>