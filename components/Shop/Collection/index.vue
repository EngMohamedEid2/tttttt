<template>
  <!-- <ShopCollectionCategorySlider
    :filter="filter"
    :layout="layout"
    v-if="layout == 'collection_category_slider'"
  /> -->
  <!-- <ShopCollectionCategorySidebar
    :filter="filter"
    :layout="layout"
    v-if="layout == 'collection_category_sidebar'"
  /> -->
  <!-- <ShopCollectionBanner
    :filter="filter"
    :layout="layout"
    v-if="layout == 'collection_banner'"
  /> -->
  <!-- <ShopCollectionOffCanvasFilter
    :filter="filter"
    :layout="layout"
    v-if="layout == 'collection_offcanvas_filter'"
  /> -->
  <ShopCollectionLeftSidebar
    @changePage="clickedPage"
    :filter="filter"
    :layout="layout"
  />
  <!-- <ShopCollectionRightSidebar
    :filter="filter"
    :layout="layout"
    v-if="layout == 'collection_right_sidebar'"
  /> -->
  <!-- <ShopCollectionNoSidebar
    :filter="filter"
    :layout="layout"
    v-if="layout == 'collection_no_sidebar'"
  /> -->
  <!-- <ShopCollectionList
    :filter="filter"
    :layout="layout"
    v-if="
      layout == 'collection_3_grid' ||
      layout == 'collection_4_grid' ||
      layout == 'collection_5_grid' ||
      layout == 'collection_list_view'
    "
  /> -->
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useDataStore } from "~/store/data";
import { useCollectionStore } from "~/store/collection";
let { ThemeOptions } = storeToRefs(useDataStore());

const route = useRoute();
const router = useRouter();
let layout = ref("");
layout.value = route?.query.layout;
let { filter } = storeToRefs(useCollectionStore());
let totalItems = ref(0);
let store = useCollectionStore();

let dataStore = useDataStore();
let currentPage = ref(1);
watch(
  () => route?.query?.layout,
  () => {
    if (route?.query?.layout) {
      layout.value = route?.query?.layout;
    } else {
      //  layout.value = ThemeOptions.value.options.seller && ThemeOptions.value.options.seller.store_layout ? ThemeOptions.value.options
    }
  },
  { deep: true }
);

function clickedPage(toPage) {
  currentPage.value = toPage;
  setRoute(), store.getParams();
}
const setLayout = (layoutValue) => {
  layout.value = layoutValue;
};

const getProductLayout = () => {
  layout.value = "collection_left_sidebar";
};
function setRoute() {}
store.getParams();
watch(
  () => store.filterObject,
  () => {
    // setRoute()
    store.show_filters = dataStore.Categories.filter((category) =>
      store.filterObject.selectedCategories.includes(category.id)
    );
    // alert(store.show_filters);
    router.push({
      path: "/collections",
      query: {
        // layout: layout.value,
        // sortBy: store.filterObject.sort.value,
        // field: store.filterObject.field,
        category_id: store.filterObject.selectedCategories.join(","),
        //   ? store.filterObject.selectedCategories.join(",")
        //   : route.query.category_id,
        // attribute: store.filterObject.selectedAttributes.join(","),
        // price: store.filterObject.selectedPrice.join(","),
        // rating: store.filterObject.selectedRating.join(","),
        // tag: route.query.tag,
        // page: currentPage.value,
      },
    });
    // dataStore.Categories.map ((el) => {
    //   el.id ==
    // })
  },
  { deep: true }
);

onMounted(() => {
  route.query.layout ? setLayout(route.query.layout) : getProductLayout();

  if (route.query.category_id) {
    store.filterObject.selectedCategories = route.query.category_id.split(",");

    for (let i = 0; i < store.filterObject.selectedCategories.length; i++) {
      store.filterObject.selectedCategories[i] = Number(
        store.filterObject.selectedCategories[i]
      );
    }

    store.show_filters = dataStore.Categories.filter((category) =>
      store.filterObject.selectedCategories.includes(category.id)
    );

    // console.log(store.show_filters);
    // ids.forEach((el) => {
    //   if (!store.filterObject.selectedCategories.find((e) => e == el)) {
    //   }
    // });
  }
  onUnmounted(() => {
    store.filterObject.selectedCategories = [];
    // console.log(store.filterObject.selectedCategories);
  });
  // console.log(store.filterObject.selectedCategories);
});
</script>
