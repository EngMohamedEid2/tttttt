<template>
  <div class="back-to-top" :class="{ show: show }" @click="tapToTop()">
    <nuxt-link id="back-to-top">
      <Icon name="ri-arrow-up-s-line"></Icon>
    </nuxt-link>
  </div>
</template>

<script setup>
let show = ref();

const onWindowScroll = () => {
  let number =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;
  if (number > 600) {
    show.value = true;
  } else {
    show.value = false;
  }
};

const tapToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => {
  window.addEventListener("scroll", onWindowScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onWindowScroll);
});
</script>

<style lang="scss" scoped></style>
