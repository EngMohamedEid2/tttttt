<template>
<div>
    <div class="modal-header">
        <h3 class="fw-semibold">{{ 'Change Password' }}</h3>
        <WidgetsButton :classes="'btn btn-close'" :id="'password_modal_close_btn'" @onClick="() => { emit('close'); }">
            <Icon name="ri-close-line"></Icon>
        </WidgetsButton>
    </div>
    <form @submit.prevent="handleSubmit()">
        <div class="modal-body address-form">
            <div class="row g-4">
                <div class="col-xxl-12">
                    <div>
                        <label for="cpass" class="form-label">{{ 'Current Password' }}</label>
                        <WidgetsInputFieldsPasswordField errorMessage="Current Password is required"
                            :formSubmitted="formSubmitted" v-model="input.current_password" classes="form-control"
                            id="cpass" placeholder="Ente  Current Password" />

                    </div>
                </div>
                <div class="col-12">
                    <div>
                        <label class="form-label" for="npass">{{ 'New Password' }}</label>
                        <WidgetsInputFieldsPasswordField errorMessage="New Password is required"
                            :formSubmitted="formSubmitted" v-model="input.password" classes="form-control" id="npass"
                            placeholder="Enter New Password" />
                    </div>
                </div>
                <div class="col-12">
                    <div>
                        <label class="form-label" for="cnpass">{{ 'Confirm Password' }}</label>
                        <WidgetsInputFieldsRePasswordField errorMessage="Confirm Password is required"
                            :formSubmitted="formSubmitted" v-model="input.password_confirmation" classes='form-control'
                            id="cnpass" placeholder="Enter Confirm Password" :passwordToCompere="input.password.data" />
                    </div>
                </div>
            </div>

            <div class="modal-footer">
                <WidgetsButton :classes="'btn btn-theme-outline btn-md fw-bold'" :type="'button'" :id="'cancel_profile_btn'"
                    @onClick="() => { emit('close'); }">
                    {{ 'Cancel' }}
                </WidgetsButton>
                <WidgetsButton :classes="'btn theme-bg-color btn-md fw-bold text-light'" :id="'submit_profile_btn'">
                    {{ 'Submit' }}
                </WidgetsButton>
            </div>
        </div>
    </form>
</div>
</template>

<script setup>
import isFormValid from "@/utils/validators/formValidator";
let input = ref({
    current_password: { data: '' },
    password: { data: '' },
    password_confirmation: { data: '' }
})

let emit = defineEmits(['close'])
let formSubmitted = ref(false)
async function handleSubmit() {
    formSubmitted.value = true
    let ObjTOSend = { data: {} }
    if (isFormValid({ formData: input.value })) {
        ObjTOSend.data = convertInputData({ data: input.value })
        let { data, error } = await useFetch('updatePassword', {
            baseURL: BaseUrl,
            headers: GetHeaders(),
            cache: false,
            method: 'put',
            body: ObjTOSend.data,
            key: 'UpdateProfile'
        })
    }
}
</script>

<style lang="scss" scoped></style>