<template>
  <button
    :class="classes"
    :id="id"
    :type="type"
    @click="onClick(id)"
    :disabled="disabled || buttonId == id"
  >
    <slot />
  </button>
</template>

<script setup>
let props = defineProps({
  classes: {
    type: String,
    default: "btn btn-animation w-100 justify-content-center",
  },
  id: String,
  iconClass: String,
  label: String,
  type: String,
  disabled: Boolean,
});

const emit = defineEmits(["onClick"]);
const onClick = (id) => {
  // Emit a custom event with a payload
  emit("onClick", id);
};

let buttonId = ref("");
</script>

<style lang="scss" scoped></style>
