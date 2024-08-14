<template>
  <div>
    <section class="search-section">
      <div class="container-fluid-lg">
        <div class="row">
          <div class="col-xxl-6 col-xl-8 mx-auto">
            <div class="title d-block text-center">
              <h2>{{ $t("Search for products") }}</h2>
              <span class="title-leaf">
                <svg class="icon-width">
                  <use xlink:href="/svg/leaf.svg#leaf"></use>
                </svg>
              </span>
            </div>

            <div class="search-box">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder=""
                  v-model="search"
                />
                <button
                  class="btn theme-bg-color text-white m-0"
                  type="button"
                  id="button-addon1"
                  @click="searchProduct()"
                >
                  {{ $t(" Search") }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section-b-space">
      <div class="container-fluid-lg">
        <div :class="gridClass">
          <div
            class="col"
            v-for="product of searchProducts?.data"
            :key="product"
          >
            <div class="search-product product-wrapper">
              <div>
                <WidgetsProductBox
                  :style="'horizontal'"
                  :product="product"
                  :classes="'product-box-3'"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <WidgetsNoData
        :class="'no-data-added collection-no-data'"
        :image="'/svg/no-product.svg'"
        :text="'Sorry! Couldn\'t find the products you were looking For!'"
        :description="'Please check if you have misspelt something or try searching with other way.'"
        v-if="!searchProducts.data?.length"
      >
      </WidgetsNoData>
    </section>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useDataStore } from "~/store/data";
// let SearchProductParams = ref({ search: "", page: 1, paginate: 12, status: 1 });
let search = ref("");
let router = useRouter();
search.value = useRoute().query.search;
let gridClass = ref(
  "row g-sm-4 g-3 row-cols-2 row-cols-md-3 cols-lg-4 row-cols-xxl-6 product-list-section"
);
var searchProducts = ref([]);
// await useDataStore().GetSearch();
const GetAllSearchProduct = async () => {
  HandleRequest(
    `https://alsouq.anevex.com/app/shop-api/products?search=${search.value}`,
    {
      // key: "getAllProductsForSearchInStore",
      // params: SearchProductParams.value.search,
      onResponse({ response }) {
        searchProducts.value = response._data;
      },
    }
  );
};
GetAllSearchProduct();

// let { searchProducts } = storeToRefs(useDataStore());
// console.log(searchProducts);

if (useRoute().query.search) {
  searchProduct();
  // router.push({
  //   path: "/search",
  //   query: {
  //     search: `${search.value}`,
  //   },
  // });
}
async function searchProduct() {
  router.push({
    path: "/search", // Adjust path if necessary
    query: {
      search: search.value,
    },
  });
  GetAllSearchProduct();
  // SearchProductParams.value.search = search.value;
}

onMounted(() => {
  search.value = "";
});
// watch(
//   () => useRoute.query,
//   () => searchProduct()
// )
// useRoute().query.search = search.value;
</script>

<style lang="scss" scoped></style>
