<template>
  <section class="log-in-section otp-section section-b-space">
    <div class="container-fluid-lg w-100">
      <div class="row align-items-center">
        <div class="col-xxl-6 col-xl-5 col-lg-6 d-lg-block d-none ms-auto">
          <div class="image-contain">
            <img src="/images/inner-page/otp.png" class="img-fluid" alt="image" />
          </div>
        </div>
        <div class="col-xxl-4 col-xl-5 col-lg-6 col-sm-8 mx-auto">
          <div class="log-in-box">
            <div class="log-in-title">
              <h3 class="text-title">
                {{
                  $t("Please enter the one time password to verify your account")
                }}
              </h3>
              <h5 class="text-content">
                {{ $t("A code has been sent to") }} <span>{{ $t("email") }}</span>
              </h5>
            </div>
            <form  @submit.prevent="HandleOTP()">
              <div class="outer-otp">
                <div id="otp" class="inner-otp">
                  <input type="text" formControlName="otp" maxlength="5"
                    oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                    v-model="input.token.data" @input="updated($event.target.value)" />
                  <p class="text-danger pt-2 m-0">
                    {{ input.token.errorMessage }}
                  </p>
                </div>
              </div>
              <WidgetsButton :id="'validate'">{{
                $t("Validate")
              }}</WidgetsButton>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
let input = ref({
  token: { data: "" },
});
function updated(inputValue) {
  if (inputValue.length == 5) return false;
}
async function HandleOTP() {
  input.value.token.errorMessage =
    input.value.token.data.length != 5 ? "Please Enter Otp" : "";
  if (input.value.token.data.length == 5) {
    let { data, error } = await useFetch("verify-token", {
      baseURL: BaseUrl,
      method: "post",
      body: {
        email: useCookie("fpemail").value,
        token: input.value.token.data,
      },
      onResponse({ response }) {
        if (response._data.success) {
          useCookie("vo").value = input.value.token.data;
          navigateTo("/auth/update");
        }
      },
    });
  }
}
onMounted(() => {
  let mail = useCookie("fpemail").value;
  if (mail == undefined) {
    navigateTo("/auth/forgot-password");
  }
});
</script>

<style lang="scss" scoped></style>
