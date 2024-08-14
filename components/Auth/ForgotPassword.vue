<template>
  <section class="log-in-section section-b-space forgot-section">
    <div class="container-fluid-lg w-100">
      <div class="row align-items-center">
        <div class="col-xxl-6 col-xl-5 col-lg-6 d-lg-block d-none ms-auto">
          <div class="image-contain">
            <img src="/images/inner-page/forgot.png" class="img-fluid" alt="image" />
          </div>
        </div>
        <div class="col-xxl-4 col-xl-5 col-lg-6 col-sm-8 mx-auto">
          <!-- <app-alert></app-alert> -->
          <div class="log-in-box">
            <div class="log-in-title">
              <h3>{{ $t("Welcome To Fastkart") }}</h3>
              <h4>{{ $t("Forgot your password") }}</h4>
            </div>
            <div class="input-box">
              <form class="row g-4" @submit.prevent="submit()">
                <div class="col-12">
                  <div class="form-floating log-in-form">
                    <WidgetsInputFieldsEmailField errorMessage="Email is required." :formSubmitted="formSubmitted"
                      classes="form-control" v-model="input.email" id="email" placeholder="Email Adrress" />
                    <label for="email">{{ $t("Email Address") }}</label>
                  </div>
                </div>
                <div class="col-12">
                  <WidgetsButton :id="'forgot_btn'">{{
                    $t("Send")
                  }}</WidgetsButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
let input = ref({
  email: { data: "" },
});
let formSubmitted = ref(false);
async function submit() {
  formSubmitted.value = true;
  if (input.value.email.data) {
    let { data, error } = await useFetch("forgot-password", {
      baseURL: BaseUrl,
      headers: GetHeaders(),
      method: "post",
      body: { email: input.value.email.data },
      async onResponse({ response }) {
        if (response._data.success) {
          useCookie("fpemail").value = input.value.email.data;
          await navigateTo("/auth/otp");
        }
      },
    });
  }
}
</script>

<style lang="scss" scoped></style>
