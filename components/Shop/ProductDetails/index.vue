<template>
  <div>
    <WidgetsBreadcrumb :breadcrumbs="breadcrumbs" />
    <!-- Product Details Layout -->
    <section class="product-section section-b-space">
      <ShopProductDetailsThumbnail
        :Data="data"
        :option="ThemeOptions?.options"
        v-if="layout == 'product_thumbnail'"
        :reviews="productReview?.data"
        :questionAnswers="queAns.data"
      />
      <!-- <ShopProductDetailsImage4
        :Data="data"
        :option="ThemeOptions?.options"
        v-if="layout == 'product_images'"
        :reviews="productReview?.data"
        :questionAnswers="queAns.data"
      /> -->
      <!-- <ShopProductDetailsSilder
        :Data="data"
        :option="ThemeOptions?.options"
        v-if="layout == 'product_slider'"
        :reviews="productReview?.data"
        :questionAnswers="queAns.data"
      /> -->
      <!-- <ShopProductDetailsSticky
        :Data="data"
        :option="ThemeOptions?.options"
        v-if="layout == 'product_sticky'"
        :reviews="productReview?.data"
        :questionAnswers="queAns.data"
      /> -->
      <!-- <ShopProductDetailsAccordions
        :Data="data"
        :option="ThemeOptions?.options"
        v-if="layout == 'product_accordion'"
        :reviews="productReview?.data"
        :questionAnswers="queAns.data"
      /> -->
    </section>
    <!-- Related Products -->
    <!-- <section
      class="product-list-section section-b-space pt-0"
      v-if="data?.related_products?.length"
    >
      <ShopProductDetailsWidgetsRelatedProducts :product="data" />
    </section> -->
    <!-- Sticky Cart Box Start -->
    <!-- <ShopProductDetailsWidgetsStickyCheckout :product="data" /> -->
  </div>
  <!-- Sticky Cart Box End -->
</template>

<script setup>
import { storeToRefs } from "pinia";
import { HandleRequest } from "~~/composables/HandleRequest";
import { useCartStore } from "~~/store/cart";
import { useDataStore } from "~~/store/data";
let props = defineProps({ Data: { type: Object }, option: { type: Object } });
let routeId = useRoute().params.id;

let { ThemeOptions, queAns, SingleProducts } = storeToRefs(useDataStore());
let { data, error } = await HandleRequest(
  `https://alsouq.anevex.com/app/shop-api/product/${routeId}}`,
  {
    // key: "getSingleDetailsProduct",
    //  params: { status: 1 }
  }
);
// console.log(data);

let { data: productReview } = await HandleRequest("front/review", {
  key: "getProductReview",
  params: { product_id: data?.value?.id },
});
var breadcrumbs = {
  page: data.value.data[0].name,
  links: [{ name: "Product" }, { name: data.value.data[0].name }],
};

const route = useRoute();
let layout = ref(route?.query.layout);

const isScrollActive = ref(false);
let { data: SingleProduct } = await HandleRequest(
  `product/slug/${useRoute().params.slug}`,
  { key: "getSingleDetailsProduct", params: { status: 1 } }
);

watch(
  () => route?.query?.layout,
  () => {
    if (route?.query?.layout) {
      layout.value = route?.query?.layout;
    } else {
      console.log("ThemeOptions", ThemeOptions);
      // layout.value =  ThemeOptions.value.options.seller && ThemeOptions.value.options.seller.store_layout ? option.seller.store_layout : 'basic_store';
    }
  },
  { deep: true }
);

const onScroll = () => {
  const button = document.querySelector(".scroll-button");
  if (button) {
    const buttonRect = button.getBoundingClientRect();
    if (buttonRect.bottom < window.innerHeight && buttonRect.bottom < 0) {
      isScrollActive.value = true;
      document.body.classList.add("stickyCart");
    } else {
      isScrollActive.value = false;
      document.body.classList.remove("stickyCart");
    }
  }
};

const setLayout = (layoutValue) => {
  layout.value = layoutValue;
};

const getProductLayout = () => {
  layout.value =
    ThemeOptions.options?.product?.product_layout || "product_thumbnail";
};
useDataStore().GetAllQustionAnswer(data?.value?.id);
useDataStore().GetSingleProduct();

onMounted(() => {
  route.query.layout ? setLayout(route.query.layout) : getProductLayout();
  window.addEventListener("scroll", onScroll);
  useDataStore().GetAllQustionAnswer(data?.value?.id);
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
  document.body.classList.remove("stickyCart");
});
</script>
