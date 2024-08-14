
<template>
    <div>
    <div class="title-header">
        <div class="d-flex align-items-center">
            <h5>{{ $t("Bank Details") }}</h5>
        </div>
    </div>
    <form class="themeform-auth" @submit.prevent="handleSubmit()">
        <div class="row mb-3 align-items-center">
            <label for="bank_account_no" class="form-label col-xxl-2 col-lg-12 col-md-3">{{ $t("Bank Account No") }}</label>
            <div class="col-xxl-10 col-lg-12 col-md-9">
                <WidgetsInputFieldsNonEmptyField classes="form-control" :validate="false" :formSubmitted="formSubmitted"
                    v-model="input.bank_account_no" id="bank_account_no" placeholder="Enter Bank Account No" />
            </div>
        </div>
        <div class="row mb-3 align-items-center">
            <label for="bank_name" class="form-label col-xxl-2 col-lg-12 col-md-3">{{ $t("Bank Name") }}</label>
            <div class="col-xxl-10 col-lg-12 col-md-9">
                <WidgetsInputFieldsNonEmptyField classes="form-control" :validate="false" :formSubmitted="formSubmitted"
                    v-model="input.bank_name" id="bank_name" placeholder="Enter Bank Name" />
            </div>
        </div>
        <div class="row mb-3 align-items-center">
            <label for="bank_holder_name" class="form-label col-xxl-2 col-lg-12 col-md-3">{{ $t("Holder Name") }}</label>
            <div class="col-xxl-10 col-lg-12 col-md-9">
                <WidgetsInputFieldsNonEmptyField classes="form-control" :validate="false" :formSubmitted="formSubmitted"
                    v-model="input.bank_holder_name" id="bank_holder_name" placeholder="Enter Bank Holder Name" />
            </div>
        </div>
        <div class="row mb-3 align-items-center">
            <label for="swift" class="form-label col-xxl-2 col-lg-12 col-md-3">{{ $t("Swift") }}</label>
            <div class="col-xxl-10 col-lg-12 col-md-9">
                <WidgetsInputFieldsNonEmptyField classes="form-control" :validate="false" :formSubmitted="formSubmitted"
                    v-model="input.swift" id="swift" placeholder="Enter Swift" />
            </div>
        </div>
        <div class="row mb-3 align-items-center">
            <label for="ifsc" class="form-label col-xxl-2 col-lg-12 col-md-3">{{ $t("Ifsc") }}</label>
            <div class="col-xxl-10 col-lg-12 col-md-9">
                <WidgetsInputFieldsNonEmptyField classes="form-control" :validate="false" :formSubmitted="formSubmitted"
                    v-model="input.ifsc" id="ifsc" placeholder="Enter Ifsc" />
            </div>
        </div>
    </form>

    <div class="mb-3 title-header border-custom">
        <div class="d-flex align-items-center">
            <h5>{{ $t("Paypal Details") }}</h5>
        </div>
    </div>
    <form class="themeform-auth" @submit.prevent="handleSubmit()">
        <div class="row mb-3 align-items-center">
            <label for="paypal_email" class="form-label col-xxl-2 col-lg-12 col-md-3">{{ $t("Paypal Email") }}</label>
            <div class="col-xxl-10 col-lg-12 col-md-9">
                <WidgetsInputFieldsEmailField classes="form-control" :validate="false" :formSubmitted="formSubmitted"
                    v-model="input.paypal_email" id="paypal_email" placeholder="Enter Paypal Email" />
            </div>
        </div>
        <div class="text-end">
            <WidgetsButton :classes="'btn btn-animation theme-bg-color btn-md d-inline-block'" :id="'payout_btn'">{{
                $t("Save") }}</WidgetsButton>
        </div>
    </form>
</div>
</template>

<script setup>
import isFormValid from "@/utils/validators/formValidator";
let input = ref({
    bank_account_no: { data: null },
    bank_name: { data: '' },
    bank_holder_name: { data: '' },
    swift: { data: '' },
    ifsc: { data: '' },
    status: { data: 1 },
    paypal_email: { data: '' }
})

async function handleSubmit() {
    let ObjTOSend = { data: {} }
    if (isFormValid({ formData: input.value })) {
        ObjTOSend.data = convertInputData({ data: input.value })
        let { data, error } = await useFetch('paymentAccount', {
            baseURL: BaseUrl,
            headers: GetHeaders(),
            cache: false,
            method: 'post',
            body: ObjTOSend.data,
            key: 'CreatePayment'
        })
    }
}
</script>

<style lang="scss" scoped></style>