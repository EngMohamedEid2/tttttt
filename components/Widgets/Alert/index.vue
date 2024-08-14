<template>
  <div>
  <div class="alert alert-danger login-alert" role="alert" v-if="alert['type'] == 'error'">
    <i class="ri-error-warning-line"></i> {{ alert["message"] }}
  </div>
  <div class="alert alert-success login-alert" role="alert" v-if="alert['type'] == 'success'">
    <i class="ri-check-line"></i>{{ alert["message"] }}
  </div>
</div>
</template>

<script setup>
let alert = ref({
  type: null,
  message: null
});

</script>

<style lang="scss" scoped></style>
