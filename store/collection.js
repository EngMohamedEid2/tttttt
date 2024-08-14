import { defineStore } from "pinia";
import { useDataStore } from "./data";
export const useCollectionStore = defineStore("Collection-store", () => {
  let show_filters = ref([]);
  let filter = ref({
    // page: 1, // Current page number
    // paginate: 40, // Display per page,
    // status: 1,
    // field: "",
    // price: "",
    category_id: "",
    // tag: "",
    // sort: "", // ASC, DSC
    // sortBy: "",
    // rating: "",
    // attribute: "",
    // store_slug: "",
    // current_page: "",
  });

  let sortingOptions = ref([
    { display: "Low - High Price", value: "low-high" },
    { display: "High - Low Price", value: "high-low" },
    { display: "A - Z Order", value: "a-z" },
    { display: "Z - A Order", value: "z-a" },
    { display: "Ascendind Order", value: "asc" },
    { display: "Decendind Order", value: "dsc" },
    { display: "%Off-High To Low", value: "discount-high-low" },
  ]);

  let categories = ref([]),
    attribute = ref([]);
  let filterObject = ref({
    selectedCategories: [],
    selectedAttributes: [],
    selectedPrice: [],
    selectedRating: [],
    sort: { display: "Ascendind Order", value: "asc" },
    field: "created_at",
    store_slug: {},
  });

  filter.value.sortBy = filterObject.value.sort;
  filter.value.field = filterObject.value.field;
  let allProducts = ref([]);
  function initialCheckedValue() {
    filterObject.value.selectedCategories = useRoute().query.category_id
      ? useRoute().query.category_id.split(",")
      : [];
    filterObject.value.selectedAttributes = useRoute().query.attribute
      ? useRoute().query.attribute.split(",")
      : [];
    filterObject.value.selectedRating = useRoute().query.rating
      ? useRoute().query.rating.split(",")
      : [];
    filterObject.value.selectedPrice = useRoute().query.price
      ? useRoute().query.price.split(",")
      : [];
  }
  onMounted(() => {
    initialCheckedValue();
    // show_filters = useDataStore().Categories.filter((category) =>
    //   filterObject.selectedCategories.includes(category.id)
    // );
  });
  // onUnmounted(() => {
  //   filterObject.value = {};
  //   filter.value = {};
  // });
  function getParams() {
    filter.value.page = useRoute().query.page ? useRoute().query.page : 1;
    filter.value.field = useRoute().query.field
      ? useRoute().query.field
      : "created_at";
    filter.value.price = useRoute().query.price ? useRoute().query.price : "";
    filter.value.category_id = useRoute().query.category_id
      ? useRoute().query.category_id
      : "";
    filter.value.tag = useRoute().query.tag ? useRoute().query.tag : "";
    filter.value.sort = useRoute().query.sort ? useRoute().query.sort : "";
    filter.value.sortBy = useRoute().query.sortBy
      ? useRoute().query.sortBy
      : "";
    filter.value.rating = useRoute().query.rating
      ? useRoute().query.rating
      : "";
    (filter.value.attribute = useRoute().query.attribute
      ? useRoute().query.attribute
      : ""),
      (filter.value.store_slug = useRoute().query.store_slug
        ? useRoute().query.store_slug
        : "");
  }
  watchEffect(async () => {
    getParams();
  });

  return {
    filter,
    categories,
    attribute,
    getParams,
    filterObject,
    allProducts,
    initialCheckedValue,
  };
});
