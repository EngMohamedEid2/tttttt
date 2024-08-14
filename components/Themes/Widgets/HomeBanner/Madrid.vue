<template>
<div class="container-fluid p-0 ratio_30">
  <div class="row">
    <div class="col-12">
      <div class="slider-animate skeleton-banner-xl">
        <div>
          <WidgetsImageLink  :image="data?.main_banner" :bgImage="true" />
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<script setup>
let props = defineProps({
  data:Object
})
</script>

<style lang="scss" scoped>

</style>