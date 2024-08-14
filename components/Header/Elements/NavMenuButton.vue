<template>
  <button
    class="navbar-toggler d-xl-none d-inline navbar-menu-button"
    type="button"
    @click="toggleMenu()"
  >
    <span class="navbar-toggler-icon me-md-3">
      <Icon name="ri:align-left" />
    </span>
  </button>
</template>

<script setup>
const props = defineProps({
  show: Boolean,
});

const activeMenu = defineEmits();
const active = ref(false);

function toggleMenu() {
  active.value = !active.value;
  activeMenu("activeMenu", active.value);
}

onUpdated(() => {
  active.value = props.show;
});
</script>

<style lang="scss" scoped></style>
