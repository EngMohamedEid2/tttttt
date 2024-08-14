<template>
  <section class="compare-section section-b-space">
    <div class="container-fluid-lg">
      <div class="row g-0 compare-row">
        <template v-if="skeletonLoader">
          <div class="col skeleton-compare" v-for="item in skeletonItems" :key="item">
            <ShopCompareSkeloton />
          </div>
        </template>
        <template v-else>
          <ShopCompareContent :compare="compare" />
        </template>
      </div>
      <WidgetsNoData :classes="'no-data-added'" :image="'/svg/no-category.svg'" :text="'No Items Added'"
        :description="'It appears that nothing has been added to your compare list. Explore products if you want to.'"
        v-if="!compare?.length">
      </WidgetsNoData>
    </div>
  </section>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useCompareStore } from "~~/store/compare";

let { compare } = storeToRefs(useCompareStore());
useCompareStore().GetCompare()
let skeletonLoader = ref(true)
let skeletonItems = Array.from({ length: 12 }, (_, index) => index);
onMounted(() => {
  setTimeout(() => {
    skeletonLoader.value = false
  }, 2000);
})
</script>
