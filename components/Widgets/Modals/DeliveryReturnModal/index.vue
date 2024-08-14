<template>
<div>
  <div class="modal-header">
      <h3 class="fw-semibold">{{ 'Delivery Return'  }}</h3>
      <WidgetsButton :classes="'btn btn-close'"  :id="'profile_modal_close_btn'"
        @onClick="() => { emit('close')}">
             <Icon name="ri-close-line"/>
 </WidgetsButton>
  </div>
  <div>
    <div class="modal-body policy-body">
      <p  v-html="policy"></p>
    </div>
  </div>
</div>
</template>

<script setup>
let props = defineProps({
    policy:Object
})

let emit = defineEmits(['close'])
</script>

<style lang="scss" scoped>

</style>