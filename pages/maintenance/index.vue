<template>
<section class="coming-soon-section pt-0"
  :style="Settings?.values?.maintenance?.maintenance_image?.original_url">
  <div class="bg-black"></div>
  <div class="container-fluid-lg w-100">
      <div class="row">
          <div class="col-lg-5">
          </div>
          <div class="col-xxl-5 col-xl-6 col-lg-7">
            <div class="coming-box">
                <div>
                    <div class="coming-title">
                        <h2>{{ Settings?.values?.maintenance?.title }}</h2>
                    </div>
                    <p class="coming-text">
                        {{ Settings?.values?.maintenance?.description }}
                    </p>
                </div>
            </div>
          </div>
      </div>
  </div>
</section>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useDataStore } from "~/store/data";
let { Settings } = storeToRefs(useDataStore());

definePageMeta({
  layout: 'custom'
})
</script>

<style lang="scss" scoped>

</style>