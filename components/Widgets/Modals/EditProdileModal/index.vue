<template>
    <div>
        <div class="modal-header">
            <h3 class="fw-semibold">{{ 'Edit Profile' }}</h3>
            <WidgetsButton :classes="'btn btn-close'" :id="'profile_modal_close_btn'" @onClick="() => { emit('close'); }">
                <Icon name="ri-close-line"></Icon>
            </WidgetsButton>
        </div>
        <form>
            <div class="modal-body address-form">
                <div class="row g-4">
                    <div class="col-xxl-12">
                        <div class="">
                            <label class="form-label" for="name">{{ 'Full Name' }}</label>
                            <WidgetsInputFieldsNonEmptyField classes="form-control" :formSubmitted="formSubmitted"
                                v-model="input.name" id="name" placeholder="Enter Name" />
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="">
                            <label for="email" class="form-label">{{ 'Email Address' }}</label>
                            <WidgetsInputFieldsEmailField classes="form-control" :formSubmitted="formSubmitted"
                                :readonly="true" v-model="input.email" id="email" placeholder="Enter Email Address" />

                        </div>
                    </div>
                    <div class="col-12 phone-field">
                        <div class="">
                            <div class="d-flex row">
                                <label class="form-label" for="phone">{{ 'Phone Number' }}</label>
                                <span class="col-3 pe-0">
                                    <WidgetsInputFieldsSearchDropdown :formSubmitted="formSubmitted" :select-first="true"
                                        :country="true" getValueKey="id" display-key="name" :form-submitted="formSubmitted"
                                        v-model="input.country_code" :options="AllCountryCode" />
                                </span>
                                <span class="col-9 ps-0">
                                    <WidgetsInputFieldsNumberField type="number" v-model="input.phone"
                                        :formSubmitted="formSubmitted" classes="form-control"
                                        errorMessage="phone number is required." id="phone" placeholder="phone" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <WidgetsButton :classes="'btn btn-theme-outline btn-md fw-bold'" :id="'cancel_profile_btn'"
                        @OnClick="() => { emit('close') }">
                        {{ 'Cancel' }}
                    </WidgetsButton>
                    <WidgetsButton :classes="'btn theme-bg-color btn-md fw-bold text-light'" type="submit"
                        @click="handleSubmit()" :id="'submit_profile_btn'">
                        {{ 'Submit' }}
                    </WidgetsButton>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup>
import { AllCountryCode } from '@/data/country_code'
import isFormValid from "@/utils/validators/formValidator";
let props = defineProps({
    initialData: Object
})
let emit = defineEmits(['close'])
let input = ref({
    name: { data: '' },
    email: { data: '' },
    country_code: { data: '' },
    phone: { data: '' },
    status: { data: 1 }
})
let formSubmitted = ref(false)
function setInitialValues(initialValues) {
    Object.keys(initialValues).forEach((key) => {
        input.value[key].data = initialValues[key]
    })
}
props.initialData && setInitialValues(props.initialData);

async function handleSubmit() {
    input.value.country_code.data = '1'
    formSubmitted.value = true
    let ObjTOSend = { data: {} }
    if (isFormValid({ formData: input.value })) {
        ObjTOSend.data = convertInputData({ data: input.value })
        let { data, error } = await useFetch('updateProfile', {
            baseURL: BaseUrl,
            headers: GetHeaders(),
            cache: false,
            method: 'put',
            body: ObjTOSend.data,
            key: 'updatePassword'
        })
    }
}
</script>

<style lang="scss" scoped></style>