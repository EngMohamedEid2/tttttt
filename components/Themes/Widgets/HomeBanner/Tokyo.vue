<template>
<div class="container-fluid-lg" v-if="theme == 'tokyo'">
  <div class="row g-4">
    <div class="col-xxl-3 col-lg-4 col-sm-6 ratio_180 d-sm-block d-none">
      <div class="home-contain rounded skeleton-banner-vertical">
        <div class="skeleton-text-wrap">
          <span class="placeholder col-7"></span>
          <span class="placeholder col-5"></span>
          <span class="placeholder col-4"></span>
          <span class="placeholder col-6"></span>
        </div>
        <div class="h-100">
            <WidgetsImageLink  :image="data?.sub_banner_1" :bgImage="true" />
        </div>
      </div>
    </div>
    <div class="col-xxl-6 col-lg-8 order-xxl-0 ratio_87">
      <div class="home-contain rounded skeleton-banner-xl">
        <div class="skeleton-text-wrap">
          <span class="placeholder col-7"></span>
          <span class="placeholder col-5"></span>
          <span class="placeholder col-4"></span>
          <span class="placeholder col-6"></span>
        </div>
        <div class="h-100">
            <WidgetsImageLink  :image="data?.main_banner" :bgImage="true" />
        </div>
      </div>
    </div>
    <div class="col-xxl-3 col-xl-4 col-sm-6 ratio_180 custom-ratio d-xxl-block d-lg-none d-sm-block d-none">
      <div class="home-contain rounded skeleton-banner-vertical">
        <div class="skeleton-text-wrap">
          <span class="placeholder col-7"></span>
          <span class="placeholder col-5"></span>
          <span class="placeholder col-4"></span>
          <span class="placeholder col-6"></span>
        </div>
        <WidgetsImageLink  :image="data?.sub_banner_2" :bgImage="true" />
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
let props = defineProps({
    data:Object,
    theme:String
})
</script>

<style lang="scss" scoped>

</style>