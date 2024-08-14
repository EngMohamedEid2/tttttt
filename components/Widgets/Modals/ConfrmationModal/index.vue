<template>
  <div class="modal-body text-center p-3">
    <Icon name="ri:question-line" class="icon-box wo-bg"></Icon>
    <h5 class="modal-title">{{ $t("Confirmation") }}</h5>
    <p>{{ $t("Are you sure you want to proceed?") }}?</p>
    <div class="button-box">
      <WidgetsButton
        :classes="'btn btn-md fw-bold btn-theme-outline'"
        :id="'confirm_no_btn'"
        @Click="
          () => {
            emit('close');
          }
        "
      >
        {{ $t("No") }}
      </WidgetsButton>
      <WidgetsButton
        :classes="'btn theme-bg-color btn-md fw-bold text-light'"
        :id="'confirm_yes_btn'"
        @Click="
          () => {
            emit('confirm');
          }
        "
      >
        {{ $t("Yes") }}
      </WidgetsButton>
    </div>
  </div>
</template>

<script setup>
let emit = defineEmits(["confirm", "close"]);
</script>

<style lang="scss" scoped></style>
