<template>
  <div class="cookie-bar-box" :class="checkCookies ? 'd-none' : ''">
    <div class="cookie-box">
      <div class="cookie-image">
        <img src="/images/cookie-bar.png" alt="" />
        <h2>{{ $t("Cookies") }}!</h2>
      </div>
      <div class="cookie-contain">
        <h5 class="text-content">
          {{ $t("We use cookies to make your experience better") }}
        </h5>
      </div>
    </div>

    <div class="button-group">
      <button class="btn privacy-button">{{ $t("Privacy Policy") }}</button>
      <button class="btn ok-button" @click="handleCookie()">
        {{ $t("OK") }}
      </button>
    </div>
  </div>
</template>

<script setup>
import Cookies from 'js-cookie';

const checkCookies = ref(true);

const initializeCookies = () => {
  const cookieAccept = Cookies.get('CookieAccept');
  if (cookieAccept) {
    checkCookies.value = JSON.parse(cookieAccept);
  } else {
    checkCookies.value = false;
  }
};

const handleCookie = () => {
  Cookies.set('CookieAccept', JSON.stringify(true));
  checkCookies.value = true;
};

onMounted(() => {
  initializeCookies();
});

</script>

<style lang="scss" scoped></style>
