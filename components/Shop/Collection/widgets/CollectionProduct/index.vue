<template>
  <ShopCollectionWidgetsCollectionSort
    :filter="filter"
    :selectedGrid="selectedGrid"
    @setGridClass="setGridClass($event)"
    :show="show"
  />
  <div :class="gridClass">
    <!-- <div v-if="skeletonLoader">
      <WidgetsProductBoxSkeletonProductBox
        v-for="item in skeletonItems"
        :key="item"
      />
    </div> -->

    <div v-for="(product, index) in data.data" :key="index">
      <WidgetsProductBox
        :product="product"
        :style="'horizontal'"
        :classes="'product-box-3'"
      ></WidgetsProductBox>
    </div>
  </div>
  <WidgetsNoData
    :classes="'no-data-added collection-no-data'"
    :image="'/svg/no-product.svg'"
    :text="'Sorry! Couldn\'t find the products you were looking For!'"
    :description="'Please check if you have misspelt something or try searching with other way.'"
    v-if="!data?.data?.length"
  />

  <WidgetsPagination
    :Data="data"
    @change-page="changePage"
    :filter="filter"
    v-if="data?.data?.length"
  />
</template>

<script setup>
// let axios = useNuxtApp().$axios;
import { storeToRefs } from "pinia";
import { useDataStore } from "~/store/data";
import { useCollectionStore } from "~/store/collection";
let store = useCollectionStore();
let { filter, allProducts } = storeToRefs(useCollectionStore());

let { offCanvasMenu } = storeToRefs(useDataStore());

let props = defineProps({
  filter: Object,
  selectedGrid: String,
  show: Boolean,
});
let { data } = await HandleRequest(
  "https://alsouq.anevex.com/app/shop-api/products?limit=200",
  {
    // key: "getProduct",
    params: store.filter,
  }
);
// console.log(data);
// console.log("res is :", data.value.data);

let gridClass = ref("");
let emits = defineEmits(["changeProductPage", "modelValue"]);
function setGridClass(value) {
  gridClass.value = value;
}
function changePage(toPage) {
  emits("changeProductPage", toPage);
}
</script>

<style lang="scss" scoped></style>
