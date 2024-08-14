<template>
<div>
  <div class="modal-header">
      <h3 class="fw-semibold">{{ 'Size Chart' }}</h3>
      <WidgetsButton :classes="'btn btn-close'"  :id="'profile_modal_close_btn'"
          @onClick="() => {emit('close');}">
        <Icon name="ri-close-line"/>
      </WidgetsButton>
  </div>
  <div class="modal-body">
    <img :src="image?.original_url" class="img-fluid" alt="chart">
  </div>
</div>
</template>

<script setup>
let props = defineProps({
  image:Object
})
let emit = defineEmits(['close'])
</script>

<style lang="scss" scoped>

</style>