<!-- <template>
  <form class="row g-4" @submit.prevent="HandleLogin()">
    <div class="col-12">
      <div class="form-floating log-in-form">
        <WidgetsInputFieldsEmailField
          classes="form-control"
          v-model="input.email"
          :formSubmitted="formSubmitted"
          id="email"
          placeholder="Email Address"
        />
        <label for="email">{{ $t("Email Address") }}</label>
      </div>
    </div>
    <div class="col-12">
      <div class="form-floating log-in-form">
        <WidgetsInputFieldsPasswordField
          classes="form-control"
          v-model="input.password"
          :formSubmitted="formSubmitted"
          id="password"
          placeholder="Password"
        />
        <label for="password">{{ $t("Password") }}</label>
      </div>
    </div>
    <div class="col-12">
      <div class="forgot-box">
        <div class="form-check ps-0 m-0 remember-box">
          <input
            class="checkbox_animated check-box"
            type="checkbox"
            id="remeberme"
          />
          <label class="form-check-label" for="remeberme">{{
            $t("Remember me")
          }}</label>
        </div>
        <nuxt-link to="/auth/forgot-password" class="forgot-password">{{
          $t("Forgot Password ?")
        }}</nuxt-link>
      </div>
    </div>
    <div class="col-12">
      <WidgetsButton :id="'login_btn'">{{ $t("Log In") }}</WidgetsButton>
    </div>
  </form>
</template>

<script setup>
import { useCartStore } from "~~/store/cart";
import { useUserStore } from "~~/store/user";
let input = ref({
  email: { data: "john.customer@example.com" },
  password: { data: "123456789" },
});
let formSubmitted = ref(false);
var breadcrumbs = { page: "Log In", links: [{ name: "Log In" }] };

const HandleLogin = async () => {
  formSubmitted = true;
  if (input.value.email.data != "" && input.value.password.data != "") {
    let login = {
      email: input.value.email.data,
      password: input.value.password.data,
      access_token: "950|ymQRD5qdiWikHpWyio5NN1Zw1ot5bTYnUxgGrXJCf980d31d",
    };
    let userData = {
      isLoggedIn: true,
      email: input?.value?.email?.data,
      uat: login?.access_token,
    };

    localStorage.setItem("usersAccount", JSON.stringify(userData));
    useCookie("uat").value = login?.access_token;

    useUserStore().GetUserInfo();
    useUserStore().SetUser({
      isLoggedIn: true,
      email: input.value.email.data,
      uat: login?.access_token,
    });
    useCartStore().GetCartDataFromApi();
    navigateTo(NavigationLinks.user_Dashboard);
  }
};
</script>
<style lang="scss" scoped></style> -->

<template>
  <form class="row g-4" @submit.prevent="handleRegister()">
    <!-- <div class="col-12">
      <div class="form-floating log-in-form">
        <WidgetsInputFieldsNonEmptyField classes="form-control" :formSubmitted="formSubmitted" v-model="input.name"
          id="name" placeholder="name" />
        <label for="name">{{ $t("Full Name") }}</label>
      </div>
    </div>
    <div class="col-12">
      <div class="form-floating log-in-form">
        <WidgetsInputFieldsEmailField classes="form-control" :formSubmitted="formSubmitted" v-model="input.email"
          id="email" placeholder="Email Address" />
        <label for="email">{{ $t("Email Address") }}</label>
      </div>
    </div> -->
    <div class="col-12 phone-field">
      <div class="form-floating log-in-form">
        <div class="d-flex row">
          <!-- <span class="col-4 pe-0 adshjahkjsdh">
            <WidgetsInputFieldsSearchDropdown
              :formSubmitted="formSubmitted"
              :select-first="true"
              getValueKey="id"
              display-key="name"
              v-model="input.country_code"
              :form-submitted="formSubmitted"
              :options="AllCountryCode"
            />
          </span> -->
          <span class="col-8 ps-0">
            <div class="form-floating d-flex">
              <WidgetsInputFieldsNumberField
                type="number"
                :formSubmitted="formSubmitted"
                classes="form-control"
                errorMessage="phone number is required."
                v-model="input.phone"
                id="phone"
                placeholder="Write your phone number"
              />
              <label for="phone">{{ $t(" Phone number ") }}</label>
            </div>
          </span>
        </div>
      </div>
    </div>
    <!-- <div class="col-12">
      <div class="form-floating log-in-form">
        <WidgetsInputFieldsPasswordField classes="form-control" :formSubmitted="formSubmitted" v-model="input.password"
          id="password" placeholder="password" />
        <label for="password">{{ $t("Password") }}</label>
      </div>
    </div> -->
    <!-- <div class="col-12">
      <div class="form-floating log-in-form">
        <WidgetsInputFieldsRePasswordField errorMessage="Confirm Password is required" :formSubmitted="formSubmitted"
          v-model="input.password_confirmation" classes="form-control" id="password_confirmation"
          placeholder="password_confirmation" :passwordToCompere="input.password.data" />
        <label for="password_confirmation">{{ $t("Password Confirmation") }}</label>
      </div>
    </div> -->
    <!-- <div class="col-12">
      <div class="forgot-box">
        <div class="form-check ps-0 m-0 remember-box">
          <input
            class="checkbox_animated check-box"
            type="checkbox"
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault"
            >{{ $t("I agree with") }} <span>{{ $t("Terms") }}</span>
            {{ $t("and") }} <span>{{ $t("Privacy") }}</span></label
          >
        </div>
      </div>
    </div> -->
    <div class="col-12">
      <WidgetsButton :id="'sign_up'">{{ $t("Sign in") }}</WidgetsButton>
    </div>
  </form>
</template>

<script setup>
import { AllCountryCode } from "@/data/country_code";
let props = defineProps({ input: Object, formSubmitted: Boolean });
let emit = defineEmits(["handleRegister"]);
function handleRegister() {
  emit("handleRegister");
}
</script>
<style lang="scss" scoped></style>
