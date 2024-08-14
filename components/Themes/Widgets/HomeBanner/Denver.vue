<template>
<div class="container-fluid p-0 ratio_30">
  <div class="row">
    <div class="col-12">
      <div class="slider-animate ">
        <div>
        <WidgetsImageLink  :image="data?.main_banner" :bgImage="true" :classes="'home-contain rounded-0 p-0'" />
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<script setup>
let props = defineProps({
    data:Object,
})
</script>

<style lang="scss" scoped>

</style>