<template>
  <div>
  <HeaderBasicHeader
    v-if="style == 'basic_header'"
    :sticky="sticky"
    :logo="logo"
    :themeOptions="ThemeOptions?.options"
  />
  <HeaderClassicHeader
    v-if="style == 'classic_header'"
    :themeOptions="ThemeOptions?.options"
    :sticky="sticky"
    :logo="logo"
  />
  <HeaderStandardHeader
    v-if="style == 'standard_header'"
    :themeOptions="ThemeOptions?.options"
    :sticky="sticky"
    :logo="logo"
  />
  <HeaderMinimalHeader
    v-if="style == 'minimal_header'"
    :themeOptions="ThemeOptions?.options"
    :sticky="sticky"
    :logo="logo"
  />
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useDataStore } from "~/store/data";
import { HandleRequest } from "~~/composables/HandleRequest";

let props = defineProps({
  logo: String,
});

let style = ref("basic_header");
let sticky = ref(true);
let route = useRoute();
let router = useRouter();

let { ThemeOptions } = storeToRefs(useDataStore());

function setHeader() {
  if (route.path === "/theme/rome") {
    style.value = "standard_header";
  } else if (route.path === "/theme/madrid") {
    style.value = "classic_header";
  } else if (route.path === "/theme/berlin") {
    style.value = "minimal_header";
  } else if (route.path === "/theme/denver") {
    style.value = "minimal_header";
  } else {
    style.value = ThemeOptions?.value?.options?.header
      ? ThemeOptions?.value?.options?.header?.header_options
      : "basic_header";
    sticky.value =
      ThemeOptions?.value?.options?.header &&
      ThemeOptions?.value?.options?.header?.sticky_header_enable
        ? true
        : false;
  }
}

onMounted(() => {
  setHeader();
  router.afterEach(() => {
    setHeader();
  });
});
</script>
<style lang="scss" scoped></style>
