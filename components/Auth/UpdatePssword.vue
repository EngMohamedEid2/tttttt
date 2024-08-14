<template>
  <section class="log-in-section background-image-2 section-b-space">
    <div class="container-fluid-lg w-100">
      <div class="row">
        <div class="col-xxl-6 col-xl-5 col-lg-6 d-lg-block d-none ms-auto">
          <div class="image-contain">
            <img src="/images/inner-page/log-in.png" class="img-fluid" alt="" />
          </div>
        </div>
        <div class="col-xxl-4 col-xl-5 col-lg-6 col-sm-8 mx-auto">
          <div class="log-in-box">
            <div class="log-in-title">
              <h3>{{ $t("Welcome to Fastkart") }}</h3>
              <h4>{{ $t("Reset your account password") }}</h4>
            </div>
            <div class="input-box">
              <form class="row g-4" @submit.prevent="submit()">
                <div class="col-12">
                  <div class="form-floating">
                    <WidgetsInputFieldsPasswordField errorMessage="Password is required" :formSubmitted="formSubmitted"
                      v-model="input.password" classes="form-control" id="newPassword" placeholder="password" />
                    <label for="newPassword">{{ $t("New Password") }}</label>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-floating">
                    <WidgetsInputFieldsRePasswordField errorMessage="Confirm Password is required"
                      :formSubmitted="formSubmitted" v-model="input.password_confirmation" classes="form-control"
                      id="password_confirmation" placeholder="Password Confirmation"
                      :passwordToCompere="input.password.data" />
                    <label for="confirmPassword">{{
                      $t("Confirm Password")
                    }}</label>
                  </div>
                </div>
                <div class="col-12">
                  <WidgetsButton :id="'Update_btn'">{{
                    $t("Submit")
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
import formValidator from "@/utils/validators/formValidator";
let input = ref({
  password: { data: "" },
  password_confirmation: { data: "" },
});
let formSubmitted = ref(false);
function submit() {
  formSubmitted.value = true;
  if (formValidator({ formData: input.value })) {
    let { data, error } = useFetch("update-password", {
      baseURL: BaseUrl,
      method: "post",
      body: {
        email: useCookie("fpemail").value,
        token: useCookie("vo").value,
        password: input.value.password.data,
        password_confirmation: input.value.password_confirmation.data,
      },
    });
    if (data?.value?.success) {
      navigateTo("/auth/login");
    }
  }
}
</script>

<style lang="scss" scoped></style>
