<template>
  <div class="otp-content">
    <h2 class="otp-header">Verify your number</h2>
    <p class="otp-desc">Enter the 4-digit code we sent to you</p>
    <input
      @input="wrongOTP = false"
      class="otp-form"
      type="number"
      v-model="otp"
    />
    <div class="text-danger mb-1" v-if="wrongOTP">
      {{ errorMsg }}
    </div>
    <button class="otp-button btn btn-success m-auto" @click="check()">
      Check
    </button>
  </div>
</template>

<script setup>
// import axios from '~/plugins/axios';
import axios from "axios";
import { useUserStore } from "~/store/user";

let otp = ref();
let wrongOTP = ref(false);
let errorMsg = ref("");
let check = () => {
  let data = JSON.parse(localStorage.getItem("user-data"));
  console.log(data["Contact Id"]);
  axios
    .post(
      `https://alsouq.anevex.com/app/shop-api/check-otp?otp=${otp.value}&contact_id=${data["Contact Id"]}`
    )
    .then((res) => {
      console.log(res.data.data.token);
      let userData2 = {
        token: res.data.data.token,
        userId: res.data.data.user.id,
        userName: res.data.data.user.name,
        userEmail: res.data.data.user.email,
        userMobile: res.data.data.user.mobile,
      };
      localStorage.setItem("user-data2", JSON.stringify(userData2));
      console.log(userData2);
      navigateTo({
        path: "/",
      });

      useCookie("isLoggedin").value = true;
    })
    .catch((err) => {
      errorMsg.value = err.response.data.api_message.message;
      wrongOTP.value = true;
    });

  // console.log("done");
};
</script>

<style>
.otp-content {
  background-color: #f8f8f8;
  padding: 30px;
  text-align: center;
  margin-bottom: 80px;
}
.otp-header {
  margin-bottom: 30px;
}
.otp-desc {
  font-weight: bold;
}
.otp-form {
  text-align: center;
  border-radius: 9px;
  margin-bottom: 10px;
  border: 1px solid #999;
}
.otp-button {
  background-color: #0da487;
}
</style>
