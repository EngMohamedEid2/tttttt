<template>
  <div class="header-top" :class="{ 'bg-dark': themeOptions?.header?.page_top_bar_dark }">
    <div class="container-fluid-lg">
      <div class="row">
        <div class="col-xxl-3 d-xxl-block d-none">
          <div class="top-left-header">
            <NuxtLink class="text-white" to="" target="_blank">
              <span class="text-white">{{ $t("Become a Seller") }}</span>
            </NuxtLink>
          </div>
        </div>

        <div class="col-xxl-6 col-lg-9 d-lg-block d-none pt-1">
          <div class="header-offer">
            <HeaderElementsTopContent :themeOptions="themeOptions" />
          </div>
        </div>

        <div class="col-lg-3">
          <ul class="about-list right-nav-about">
            <li class="right-nav-list">
              <div class="dropdown theme-form-select">
                <HeaderElementsLanguage />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
let prop = defineProps({
  themeOptions: Object,
});
</script>
<style lang="scss" scoped></style>
