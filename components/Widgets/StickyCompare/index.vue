<template>
  <div class="compare-fix" v-if="compare?.length">
    <!-- <nuxt-link to="/compare">
      <h5>
        {{ $t("Compare") }} <span>({{ compare?.length }})</span>
      </h5>
    </nuxt-link> -->
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useCompareStore } from "~~/store/compare";
useCompareStore().GetCompare();
let { compare } = storeToRefs(useCompareStore());
</script>

<style lang="scss" scoped></style>
