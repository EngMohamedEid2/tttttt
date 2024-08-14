<template>
  <div
    class="media recently-purchase"
    :class="{ show: popup_enable ? show : popup_enable }"
    v-if="product"
  >
    <img
      :src="
        product.product_thumbnail
          ? product.product_thumbnail.original_url
          : '/images/product.png'
      "
      class="media-height"
      alt="product"
    />
    <div class="media-body">
      <div>
        <div class="title d-block mb-0">
          {{ $t("Someone Recently Purchased") }}
        </div>
        <nuxt-link :to="`/product/${product.slug}`">
          <span class="product-name">
            {{ product.name }}
          </span>
        </nuxt-link>

        <small class="timeAgo">{{ min }} {{ $t("Minutes Ago") }}</small>
      </div>
    </div>
    <a href="javascript:void(0)" @click="closePopup()" class="close-popup">
      <Icon name="ri:close-fill"></Icon>
    </a>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useDataStore } from "~/store/data";

useDataStore().GetProduct();
let { Products } = storeToRefs(useDataStore());

let product = ref();
// let relatesProduct = ref();
let show = ref(false);
let min = ref(10);
let popup_enable = ref(true);
let { data, error } = await HandleRequest(`product`, {
  key: "getProductTopToSave",
});

const randomlySelectProduct = () => {
  if (!Products?.value?.data?.length) {
    relatesProducts();
  } else {
    const randomIndex = Math.floor(Math.random() * Products.value.data.length);
    product.value = Products.value.data[randomIndex];
  }
};

// const relatesProducts = () => {
//   let relatedProductsArrays = Products?.value?.data.map(
//     (product) => product?.related_products || []
//   );
//   let products = Products?.value?.data?.filter((product) =>
//     relatedProductsArrays?.includes(product.id)
//   );
//   let randomIndex = Math.floor(Math.random() * products?.length);
//   product.value = products[randomIndex];
// };

function closePopup() {
  popup_enable.value = false;
}

// onMounted(() => {
//   // randomlySelectProduct();
//   if (popup_enable.value) {
//     const timer = setInterval(() => {
//       show.value = true;
//       min.value = Math.floor(Math.random() * 60) + 1;
//       randomlySelectProduct();
//       setTimeout(() => {
//         show.value = false;
//       }, 3000);
//     }, 20000);

//     return () => {
//       clearInterval(timer);
//     };
//   }
// });
</script>

<style lang="scss" scoped></style>
