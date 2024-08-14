<template>
  <section class="wishlist-section section-b-space">
    <div class="container-fluid-lg">
      <div v-if="skeletonLoader">
        <div class="row g-sm-3 g-2">
          <div class="col-xxl-2 col-lg-3 col-md-4 col-6 product-box-contain" v-for="item in skeletonItems" :key="item">
            <WidgetsProductBoxSkeletonProductBox />
          </div>
        </div>
      </div>
      <template v-else>
        <div class="row g-sm-3 g-2">
          <div class="col-xxl-2 col-lg-3 col-md-4 col-6 product-box-contain" v-for="(product, index) in wishlist"
            :key="index">
            <WidgetsProductBox :product="product" :close="true" :style="'horizontal'" :classes="'product-box-3'">
            </WidgetsProductBox>
          </div>
        </div>
      </template>
      <WidgetsNoData :class="'no-data-added'" :image="'/svg/empty-items.svg'" :text="'No Items Added'"
        :description="'It appears that nothing has been added to your wishlist. Explore categories if you want to.'"
        v-if="!wishlist?.length">
      </WidgetsNoData>
    </div>
  </section>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useWishlistStore } from '~~/store/wishlist';

let { wishlist } = storeToRefs(useWishlistStore())
let skeletonLoader = ref(true)
let skeletonItems = Array.from({ length: 12 }, (_, index) => index);
if (!wishlist.value.length) {
  useWishlistStore().GetWishlist();
}

onMounted(() => {
  setTimeout(() => {
    skeletonLoader.value = false
  }, 2000);
})


</script>

<style lang="scss" scoped></style>