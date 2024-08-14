<template>
  <div class="container-fluid-lg">
    <div class="row g-4">
      <div class="col-xl-8 ratio_65" v-if="data?.main_banner?.image_url">
        <div class="home-contain h-100 skeleton-banner-xl">
          <div class="skeleton-text-wrap">
            <span class="placeholder col-7"></span>
            <span class="placeholder col-5"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-6"></span>
          </div>
          <WidgetsImageLink
            class="b-left"
            :image="data?.main_banner"
            :bgImage="true"
          />
        </div>
      </div>
      <div
        class="col-xl-4 ratio_65"
        v-if="data?.sub_banner_1?.image_url && data?.sub_banner_2?.image_url"
      >
        <div class="row g-4">
          <div
            class="col-xl-12 col-md-6 skeleton-banner-sm"
            v-if="data?.sub_banner_1?.image_url"
          >
            <div class="home-contain">
              <div class="skeleton-text-wrap">
                <span class="placeholder col-7"></span>
                <span class="placeholder col-5"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-6"></span>
              </div>
              <WidgetsImageLink
                class="b-left"
                :image="data?.sub_banner_1"
                :bgImage="true"
              />
            </div>
          </div>
          <div
            class="col-xl-12 col-md-6 skeleton-banner-sm"
            v-if="data?.sub_banner_2?.image_url"
          >
            <div class="home-contain">
              <div class="skeleton-text-wrap">
                <span class="placeholder col-7"></span>
                <span class="placeholder col-5"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-6"></span>
              </div>
              <WidgetsImageLink
                class="b-left"
                :image="data?.sub_banner_2"
                :bgImage="true"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
let props = defineProps({
  data: Object,
  theme: Object,
});
</script>

<style lang="scss" scoped></style>
