<!-- <template>
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
              <h3>{{ $t("Welcome To Fastkart") }}</h3>
              <h4>{{ $t("Log In Your Account") }}</h4>
            </div>
            <div class="input-box">
              <AuthCommonFormLoginForm />
            </div>
            <div class="other-log-in">
              <h6>{{ $t("or") }}</h6>
            </div>
            <div class="sign-up-box">
              <h4>{{ $t("Don't have an account") }}?</h4>
              <nuxt-link :to="NavigationLinks?.signUp">{{ $t("Sign Up") }}</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style lang="scss" scoped></style> -->

<template>
  <section class="log-in-section section-b-space">
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
              <h3>{{ $t("Welcome To Our Store") }}</h3>
              <h4>{{ $t("Create New Account") }}</h4>
            </div>
            <div class="input-box">
              <AuthCommonFormRegisterForm
                @handleRegister="handleRegister()"
                :input="input"
                :formSubmitted="formSubmitted"
              />
            </div>

            <!-- <div class="other-log-in">
              <h6>{{ $t("or") }}</h6>
            </div> -->

            <!-- <div class="sign-up-box">
              <h4>{{ $t("Already have an account") }}?</h4>
              <nuxt-link :to="'/auth/login'">{{ $t("Log In") }}</nuxt-link>
            </div> -->
          </div>
        </div>
        <div class="col-xxl-7 col-xl-6 col-lg-6"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useUserStore } from "../../store/user";
import isFormValid from "@/utils/validators/formValidator";
// import axios from "~/plugins/axios";
import axios from "axios";

let input = ref({
  // name: { data: "" },
  // email: { data: "" },
  phone: { data: "01234567890" },
  // password: { data: "" },
  // password_confirmation: { data: "" },
  // country_code: { data: "" },
});
let formSubmitted = ref(false);
async function handleRegister() {
  formSubmitted.value = true;
  // console.log(input.value.phone.data);

  if (
    input.value.phone.data &&
    input.value.phone.data.toString().length == 11
  ) {
    let { data, error } = await HandleRequest(
      "https://alsouq.anevex.com/app/shop-api/log-in?mobile=01503818118",
      {
        headers: GetHeaders(),
        baseURL: BaseUrl,
        method: "post",
        body: {
          mobile: input.value.phone.data,
        },
      }
    );
    // console.log("Response Data:", data.value.data);
    // localStorage.setItem("user-data", JSON.stringify(data.value.data));
    // useUserStore().SetUser({
    //   isLoggedIn: true,
    //   phone: input.value.phone.data,
    //   // uat: login?.access_token,
    // });
    //  let logging = (useUserStore().User.isLoggedIn) ;
    const userData = {
      ...data.value.data,
      phone: input.value.phone.data,
    };
    localStorage.setItem("user-data", JSON.stringify(userData));
    // localStorage.setItem("isLoggedIn", JSON.stringify(true));
    // useCookie("isLoggedin").value = true;
    // return;
    // useUserStore().SetUser({
    //   isLoggedIn: true,
    //   phone: input.value.phone.data,
    //   // uat: "950|ymQRD5qdiWikHpWyio5NN1Zw1ot5bTYnUxgGrXJCf980d31d",
    // });

    // useCookie("uat").value = JSON.stringify(userData);
    // console.log(useUserStore().User);
    // console.log(useUserStore().UserInfo);

    navigateTo("/check-otp");
    // useUserStore().UpdateUserInfo();
    console.log(localStorage.getItem("user-data"));
  } else {
    console.error("Form validation failed. Please fill all required fields.");
  }
}

// async function sendTN() {
//   try {
//     const response = await fetch(
//       "https://alsouq.anevex.com/app/shop-api/log-in?mobile=01234567891",
//       {
//         method: "POST",
//         headers: {
//           "cache-control": "no-cache, private",
//           "content-type": "application/json",
//         },
//       }
//     );

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// onMounted(async () => {
//   // const axios = require('axios');
//   // const FormData = require('form-data');
//   // let data = new FormData();
//   // data.append('mobile', '01234567897');
//   // let config = {
//   //   method: 'post',
//   //   maxBodyLength: Infinity,
//   //   url: 'https://alsouq.anevex.com/app/shop-api/log-in',
//   //   headers: {
//   //     'Cookie': 'efhas_pos_session=wEa4w90XYj45A2D0jNI0dNPPy7OugufmNmk3kOVG',
//   //     ...data.getHeaders()
//   //   },
//   //   data : data
//   // };
//   // axios.request(config)
//   // .then((response) => {
//   //   console.log(JSON.stringify(response.data));
//   // })
//   // .catch((error) => {
//   //   console.log(error);
//   // });
//   // axios
//   //   .post("https://alsouq.anevex.com/app/shop-api/log-in?mobile=01234567897")
//   //   .then((response) => {
//   //     console.log("استجابة:", response.data);
//   //   })
//   //   .catch((error) => {
//   //     console.error("خطأ:", error);
//   //   });
// });
</script>

<style lang="scss" scoped></style>
