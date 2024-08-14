<template>
  <nuxt-link to="/theme/osaka" class="web-logo nav-logo">
    <div>
      <img src="/images/logo/logo2.png" class="img-fluid" alt="" />
    </div>
    <!-- <div v-else>
      <h2 :class="textClass">
        {{
          SiteSettings?.values?.general?.site_title
            ? SiteSettings?.values?.general?.site_title
            : "Logo"
        }}
      </h2>
    </div> -->
  </nuxt-link>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useSiteStore } from "~~/store/site";

let props = defineProps({
  themeOptions: Object,
  textClass: { type: String, default: "text-white f-w-600" },
  logo: String,
});
let headerLogo = ref("");
let route = useRoute();
let router = useRouter();
let { SiteSettings } = storeToRefs(useSiteStore());

function setLogo() {
  if (route.path === "/theme/paris" || route.path === "/theme/osaka") {
    headerLogo.value = "/images/logo/bg.jpg";
  } else if (route.path === "/theme/tokyo") {
    headerLogo.value = "/images/logo/2.png";
  } else if (route.path === "/theme/rome") {
    headerLogo.value = "/images/logo/3.png";
  } else if (route.path === "/theme/madrid") {
    headerLogo.value = "/images/logo/4.png";
  } else if (route.path === "/theme/berlin" || route.path === "/theme/denver") {
    headerLogo.value = "/images/logo/6.png";
  } else {
    headerLogo.value = props?.themeOptions?.logo?.header_logo?.original_url;
  }
}

onMounted(() => {
  setLogo();
  router.afterEach(() => {
    setLogo();
  });
});
</script>

<style lang="scss" scoped></style>
