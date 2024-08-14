<template>
  <div class="container-fluid-lg">
  <div class="row g-4">
    <div class="col-xxl-6 col-md-8">
      <div class="home-contain ratio_65 h-100 skeleton-banner-xl">
        <div class="skeleton-text-wrap">
          <span class="placeholder col-7"></span>
          <span class="placeholder col-5"></span>
          <span class="placeholder col-4"></span>
          <span class="placeholder col-6"></span>
        </div>
        <WidgetsImageLink  :image="data?.main_banner" :bgImage="true" />
      </div>
    </div>
    <div class="col-xxl-3 col-md-4 ratio_medium d-md-block d-none">
      <div class="home-contain home-small h-100 skeleton-banner-vertical">
        <div class="h-100">
          <div class="skeleton-text-wrap">
            <span class="placeholder col-7"></span>
            <span class="placeholder col-5"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-6"></span>
          </div>
        <WidgetsImageLink  :image="data?.sub_banner_1" :bgImage="true" />
        </div>
      </div>
    </div>
    <div class="col-xxl-3 ratio_65 d-xxl-block d-none">
      <div class="row g-3">
        <div class="col-xxl-12 col-sm-6">
          <div class="home-contain skeleton-banner-sm">
            <div class="skeleton-text-wrap">
              <span class="placeholder col-7"></span>
              <span class="placeholder col-5"></span>
              <span class="placeholder col-4"></span>
              <span class="placeholder col-6"></span>
            </div>
        <WidgetsImageLink  :image="data?.sub_banner_2" :bgImage="true" />
          </div>
        </div>
        <div class="col-xxl-12 col-sm-6">
          <div class="home-contain skeleton-banner-sm">
            <div class="skeleton-text-wrap">
              <span class="placeholder col-7"></span>
              <span class="placeholder col-5"></span>
              <span class="placeholder col-4"></span>
              <span class="placeholder col-6"></span>
            </div>
        <WidgetsImageLink  :image="data?.sub_banner_3" :bgImage="true" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
let props = defineProps({
    data:Object,
    theme:Object
})
</script>

<style lang="scss" scoped>

</style>