<template>
  <div class="container-fluid-lg">
    <div class="row g-4">
      <div class="col-xl-9 col-lg-8">
        <div class="home-contain h-100 skeleton-banner-xl ratio_52">
          <div class="skeleton-text-wrap">
            <span class="placeholder col-7"></span>
            <span class="placeholder col-5"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-6"></span>
          </div>
          <WidgetsImageLink :image="data?.main_banner" :bgImage="true" />
        </div>
      </div>
      <div class="col-xl-3 col-lg-4 d-lg-inline-block d-none ratio_156">
        <div class="home-contain h-100 skeleton-banner-vertical">
          <div class="skeleton-text-wrap">
            <span class="placeholder col-7"></span>
            <span class="placeholder col-5"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-6"></span>
          </div>
          <WidgetsImageLink :image="data?.sub_banner_1" :bgImage="true" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
let props = defineProps({
  data: Object,
});
</script>

<style lang="scss" scoped></style>
