<template>
    <div>
        <div class="title d-xxl-none d-block">
            <h2>{{$t("Contact Us")}}</h2>
        </div>
        <WidgetsWrapperForm ref="Form" :OnSubmit="Submit" :Inputs="inputs" v-slot="{ FormSubmitted }">
            <div class="right-sidebar-box">
                <div class="row">
                    <div class="col-12">
                        <WidgetsInputFieldsCommonTextInput v-model="inputs.name" label="Full Name" errorMessage="Name is required"
                            :FormSubmitted="FormSubmitted" placeholder="Enter Full Name" :IconClass="'fa-solid fa-user'" />
                    </div>

                    <div class="col-xxl-6 col-lg-12 col-sm-6">
                        <WidgetsInputFieldsCommonEmailInput v-model="inputs.email" label="Email" errorMessage="Email is required"
                            :FormSubmitted="FormSubmitted" placeholder="Enter Email Address"
                            :IconClass="'fa-solid fa-envelope'" />
                    </div>

                    <div class="col-xxl-6 col-lg-12 col-sm-6">
                        <WidgetsInputFieldsCommonTextInput v-model="inputs.phone" label="Phone Number" errorMessage="Phone is required"
                            inputType="phone" :FormSubmitted="FormSubmitted" placeholder="Enter Your Phone Number"
                            :IconClass="'fa-solid fa-mobile-screen-button'" />
                    </div>

                    <div class="col-12">
                        <WidgetsInputFieldsCommonTextInput v-model="inputs.subject" label="Subject" errorMessage="Subject is required"
                            :FormSubmitted="FormSubmitted" placeholder="Enter Subject" :IconClass="'fa-solid fa-user'" />
                    </div>

                    <div class="col-12">
                        <WidgetsInputFieldsCommonLargeTextInput v-model="inputs.message" label="Message" errorMessage="Message is required"
                            :FormSubmitted="FormSubmitted" placeholder="Enter Your Message"
                            :IconClass="'fa-solid fa-message'" />
                    </div>
                </div>
                <button type="button" class="btn btn-animation btn-md fw-bold ms-auto">Send Message</button>
            </div>
        </WidgetsWrapperForm>
    </div>
</template>

<script setup>
let inputs = ref({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
})

let Form = ref("");

const HandleSubmit = () => {
    Form.value.HandleSubmit()
};

const Submit = async (Data) => {
    let { data, error } = await HandleRequest('contact-us', {
        headers: GetHeaders(),
        baseURL: BaseUrl,
        method: 'post',
        body: Data
    })
    inputs.value = ""

}
defineExpose({ HandleSubmit })
</script>

<style lang="scss" scoped></style>