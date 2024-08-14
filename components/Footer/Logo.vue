<template>
  <div class="theme-logo">
    <NuxtLink to="/theme/osaka">
      <img
        src="/images/logo/logo2.png"
        class="img-fluid"
        alt="logo"
        v-if="footer?.footer_logo"
      />
      <div v-else>
        <h2 class="f-w-600" v-if="data && data?.general">
          {{
            data.general.site_title
              ? !data.general.site_title.split(" ")[0]
              : "Logo Here"
          }}
        </h2>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
let props = defineProps({
  footer: Object,
  data: Object,
});
</script>

<style lang="scss" scoped></style>
