<template>
  <div>
    <!-- Wishlist Basic -->
    <nuxt-link
      :to="NavigationLinks?.wishlist"
      class="btn p-0 position-relative header-wishlist"
      v-if="style == 'basic'"
    >
      <Icon name="ri:heart-3-line" size="24"></Icon>
    </nuxt-link>

    <!-- Wishlist Classic -->
    <nuxt-link
      :to="NavigationLinks?.wishlist"
      class="header-icon bag-icon"
      v-if="style == 'classic'"
    >
      <Icon name="ri:heart-3-line" size="24"></Icon>
    </nuxt-link>
  </div>
</template>

<script setup>
let props = defineProps({
  style: { type: [String, Object], default: "basic" },
});
</script>

<style lang="scss" scoped></style>
