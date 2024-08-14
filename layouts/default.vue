<template>
  <div>
    <WidgetsLoader v-if="loading" />

    <!-- Layout Partial -->
    <Header :logo="setLogo().header_logo" />
    <WidgetsMobileCart />
    <slot />
    <Footer :footer="setLogo().footer" />

    <!-- Widgets -->
    <WidgetsCookie />
    <WidgetsRecentlyPurchasePoppup />
    <WidgetsStickyCart
      v-if="ThemeOptions?.options?.general?.cart_style == 'cart_mini'"
    />
    <WidgetsStickyCompare />
    <div class="theme-option">
      <WidgetsThemeCustomizer />
      <WidgetsBackToTop
        v-if="ThemeOptions?.options?.general?.back_to_top_enable"
      />
    </div>
    <WidgetsModalsNewsletterModal />
    <WidgetsModalsExitModal />
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useDataStore } from "@/store/data";
import { useUserStore } from "@/store/user";

let loading = ref(false);
const route = useRoute();
const router = useRouter();

useDataStore().GetProduct();
useDataStore().GetCategory();
// useDataStore().GetCurrency();
// useDataStore().GetBlog();
useDataStore().GetThemeoption();
useDataStore().GetNotifications();
useDataStore().GetSettings();

let { ThemeOptions } = storeToRefs(useDataStore());

function setLogo() {
  var headerLogo;
  var footerLogo;
  var footerClass;
  if (route.path == "/theme/paris" || route.path == "/theme/osaka") {
    headerLogo = "/images/logo/1.png";
    footerLogo = "/images/logo/1.png";
  } else if (route.path == "/theme/tokyo") {
    headerLogo = "/images/logo/2.png";
    footerLogo = "/images/logo/2.png";
  } else if (route.path == "/theme/rome") {
    headerLogo = "/images/logo/3.png";
    footerLogo = "/images/logo/3.png";
  } else if (route.path == "/theme/madrid") {
    headerLogo = "/images/logo/4.png";
    footerLogo = "/images/logo/4.png";
    footerClass = "footer-section-2 footer-color-2";
  } else if (route.path == "/theme/berlin" || route.path == "/theme/denver") {
    headerLogo = "/images/logo/6.png";
    footerLogo = "/images/logo/4.png";
    footerClass = "footer-section-2 footer-color-3";
  } else {
    headerLogo = ThemeOptions?.value?.options?.logo?.header_logo?.original_url;
    footerLogo = ThemeOptions?.value?.options?.logo?.footer_logo?.original_url;
    footerClass =
      ThemeOptions?.value?.options?.footer?.footer_style === "dark_mode"
        ? "footer-section-2 footer-color-3"
        : "";
  }
  return {
    header_logo: headerLogo,
    footer: { footer_logo: footerLogo, footer_class: footerClass },
  };
}

watch(
  () => route.name,
  (newName, oldName) => {
    if (newName !== oldName) {
      console.log(`تم الانتقال من صفحة ${oldName} إلى صفحة ${newName}`);
      loading.value = true;
      setTimeout(() => {
        loading.value = false;
      }, 4000);
    }
  },
  {
    deep: true,
  }
);

onMounted(() => {
  setLogo();
  router.afterEach(() => {
    setLogo();
  });
});
</script>

<style lang="scss" scoped></style>
