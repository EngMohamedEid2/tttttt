<template>
  <div class="show-button">
    <div
      class="filter-button-group mt-0"
      v-if="
        useRoute().query.layout !== 'collection_no_sidebar' &&
        useRoute().query.layout !== 'collection_offcanvas_filter'
      "
    >
      <div class="filter-button d-inline-block d-lg-none">
        <a @click="openOffCanvasMenu()">
          <Icon name="ri-filter-2-fill"></Icon> {{ $t("Filter Menu") }}
        </a>
      </div>
    </div>
    <!-- <div class="top-filter-menu">
            <div class="category-dropdown">
                <a href="javascript:void(0)" class="filter-offcanvas-title" @click="openOffCanvasMenu()"
                    v-if="route.query.layout == 'collection_offcanvas_filter'">
                    <Icon name="ri:filter-2-fill"></Icon> Filter Menu
                </a>
                <h5 class="text-content">Sort By :</h5>
                <WidgetsInputFieldsCommonSearchDropdownInput v-model="store.filterObject.sort" :options="sortingOptions"
                    dropdown-id="sortByDropdown" />
            </div>

            <div class="grid-option d-none d-md-block">
                <ul>
                    <li class="three-grid" :class="[{ active: selectedGrid == 'collection_3_grid' }]">
                        <a href="javascript:void(0)" @click.prevent="grid('collection_3_grid')">
                            <img src="/svg/grid-3.svg" alt="sort">
                        </a>
                    </li>
                    <li class="grid-btn d-xxl-inline-block d-none "
                        :class="[{ active: selectedGrid == 'collection_4_grid' }]"
                        @click.prevent="grid('collection_4_grid')">
                        <a href="javascript:void(0)">
                            <img src="/svg/grid-4.svg" class=" d-lg-inline-block d-none" alt="sort">
                            <img src="/svg/grid.svg" class=" img-fluid d-lg-none d-inline-block" alt="sort">
                        </a>
                    </li>

                    <li class="grid-btn d-xxl-inline-block d-none "
                        :class="[{ active: selectedGrid == 'collection_5_grid' }]"
                        @click.prevent="grid('collection_5_grid')">
                        <a href="javascript:void(0)">
                            <img src="/svg/grid-5.svg" class=" d-lg-inline-block d-none" alt="sort">
                            <img src="/svg/grid.svg" class=" img-fluid d-lg-none d-inline-block" alt="sort">
                        </a>
                    </li>
                    <li class="list-btn" :class="[{ active: selectedGrid == 'collection_list_view' }]"
                        @click.prevent="grid('collection_list_view')">
                        <a href="javascript:void(0)">
                            <img src="/svg/list.svg" alt="">
                        </a>
                    </li>
                </ul>
            </div>
        </div> -->
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useCollectionStore } from "~/store/collection";
import { useDataStore } from "~/store/data";
let props = defineProps({
  filter: Object,
  show: Boolean,
  selectedGrid: { type: String, default: "collection_4_grid" },
});

let route = useRoute();
let router = useRouter();
let { offCanvasMenu } = storeToRefs(useDataStore());
let classes = ref(
  "row g-sm-4 g-3 row-cols-xxl-4 row-cols-xl-3 row-cols-lg-2 row-cols-md-3 row-cols-2 product-list-section"
);
let { sortingOptions, sort } = storeToRefs(useCollectionStore());
let emits = defineEmits(["setGridClass"]);
let store = useCollectionStore();

watch(
  () => useRoute().query.layout,
  () => {
    let layout = useRoute().query.layout;
    if (layout) {
      grid(layout);
    }
  },
  { deep: true }
);

function grid(value) {
  if (value == "collection_3_grid") {
    classes.value =
      "row g-sm-4 g-3 product-list-section row-cols-xl-3 row-cols-lg-2 row-cols-md-3 row-cols-2";
    props.selectedGrid = value;
  } else if (value == "collection_4_grid") {
    classes.value =
      "row g-sm-4 g-3 product-list-section row-cols-xxl-4 row-cols-xl-3 row-cols-lg-2 row-cols-md-3 row-cols-2";
    props.selectedGrid = value;
  } else if (value == "collection_5_grid") {
    classes.value =
      "row g-sm-4 g-3 product-list-section row-cols-xxl-5 row-cols-xl-4 row-cols-md-3 row-cols-2";
    props.selectedGrid = value;
  } else if (value == "collection_list_view") {
    classes.value =
      "row g-sm-4 g-3 product-list-section row-cols-xxl-4 row-cols-xl-3 row-cols-lg-2 row-cols-md-3 row-cols-2 list-style";
    props.selectedGrid = value;
  } else if (value == "collection_no_sidebar") {
    classes.value =
      "row g-sm-4 g-3 product-list-section row-cols-xxl-5 row-cols-xl-4 row-cols-md-3 row-cols-2";
    props.selectedGrid = value;
  }
  emits("setGridClass", classes.value);
}
function openOffCanvasMenu() {
  offCanvasMenu.value = true;
}
onMounted(() => {
  let layout = useRoute().query.layout;
  grid(layout);
});
</script>
<style lang="scss" scoped></style>
