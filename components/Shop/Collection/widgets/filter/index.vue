<template>
  <div
    class="filter-category"
    v-if="store.filterObject.selectedCategories.length > 0"
  >
    <div class="filter-title">
      <h2>Filters</h2>
      <a href="javascript:void(0)" @click.prevent="clear()">Clear All</a>
    </div>
    <ul>
      <li v-for="category of store.show_filters" :key="category">
        <a href="javascript:void(0)">{{ category.name }}</a>
        <Icon name="ri:close-line" @click.prevent="remove(category)" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useCollectionStore } from "~/store/collection";

let store = useCollectionStore();
// let filtersObj = {
//   category: [],
//   tag: [],
//   rating: [],
//   price: [],
//   attribute: [],
// };
// let filters = computed(() => {
//   filtersObj.category = useRoute().query.category_id
//     ? useRoute().query.category_id.split(",")
//     : [];
//   filtersObj.tag = useRoute().query.tag ? useRoute().query.tag.split(",") : [];
//   filtersObj.rating = useRoute().query.rating
//     ? useRoute().query.rating.split(",")
//     : [];
//   filtersObj.price = useRoute().query.price
//     ? useRoute().query.price.split(",")
//     : [];
//   filtersObj.attribute = useRoute().query.attribute
//     ? useRoute().query.attribute.split(",")
//     : [];
//   return [
//     ...filtersObj?.category,
//     ...filtersObj?.tag,
//     ...filtersObj?.rating.map((val) =>
//       val.startsWith("rating ") ? val : `rating ${val}`
//     ),
//     ...filtersObj?.price,
//     ...filtersObj?.attribute,
//   ];
// });

// console.log(store.filterObject.selectedCategories);
function remove(tag) {
  // let category = useRoute().query.category_id
  //   ? useRoute().query.category_id.split(",")
  //   : [];
  // let attribute = useRoute().query.attribute
  //   ? useRoute().query.attribute.split(",")
  //   : [];
  // let price = useRoute().query.price ? useRoute().query.price.split(",") : [];
  // let rating = useRoute().query.rating
  //   ? useRoute().query.rating.split(",")
  //   : [];
  // let tags = useRoute().query.tag ? useRoute().query.tag : "";
  // let layout = useRoute().query.layout ? useRoute().query.layout : "";
  // let sortBy = useRoute().query.sortBy ? useRoute().query.sortBy : "";
  // let field = useRoute().query.field ? useRoute().query.field : "";
  // let page = useRoute().query.page ? useRoute().query.page : "";

  const index = store.filterObject.selectedCategories.findIndex(
    (el) => el == tag
  );
  if (index >= 0) {
    store.filterObject.selectedCategories.splice(index, 1);
  }

  // if (category.includes(tag)) {
  //   category.splice(tag, 1);
  // } else if (attribute.includes(tag)) {
  //   attribute.splice(tag, 1);
  // } else if (price.includes(tag)) {
  //   price.splice(tag, 1);
  // } else if (rating.includes(tag)) {
  //   rating.splice(tag, 1);
  // } else if (tags == tag) {
  //   tags = "";
  // }
  // useRouter().push({
  //   path: useRoute().path,
  //   query: {
  //     layout: layout,
  //     sortBy: sortBy,
  //     field: field,
  //     category: category.join(","),
  //     attribute: attribute.join(","),
  //     price: price.join(","),
  //     rating: rating.join(","),
  //     tag: tags,
  //     page: page,
  //   },
  // });
  // setTimeout(async () => {
  //   store.initialCheckedValue();
  // }, 1000);
}
function clear() {
  let layout = useRoute().query.layout ? useRoute().query.layout : "";
  useRouter().push({
    path: useRoute().path,
    query: {
      layout: layout,
    },
  });
  setTimeout(async () => {
    store.initialCheckedValue();
  }, 1000);
}
</script>
<style lang="scss" scoped></style>
