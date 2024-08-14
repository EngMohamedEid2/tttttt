<template>
  <ul class="category-list custom-padding custom-height">
    <li v-for="(category, index) of Categories" :key="index">
      <div class="form-check ps-0 m-0 category-list-box">
        <input
          class="checkbox_animated"
          type="checkbox"
          :id="category.id"
          :value="category.id"
          v-model="store.filterObject.selectedCategories"
        />
        <label class="form-check-label" :for="category.name">
          <span class="name">{{ category.name }}</span>
        </label>
      </div>
    </li>
  </ul>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useDataStore } from "~/store/data";
import { useCollectionStore } from "~/store/collection";

let store = useCollectionStore();

let { filter, categories, selectedCategories } = storeToRefs(
  useCollectionStore()
);

let { Categories } = storeToRefs(useDataStore());
// const { fetchProducts } = useDataStore();

// categories.value = Categories?.value?.data?.filter(
//   (category) => category.type === "product"
// );

// console.log(selectedCategory, selectedCategoryProducts);

// console.log(Categories);
</script>

<style lang="scss" scoped></style>
