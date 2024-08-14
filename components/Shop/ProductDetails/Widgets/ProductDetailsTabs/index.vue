<template>
  <WidgetsWapperTab :tabs="tabs">
    <template #pills-description>
      <div class="product-description">
        <div class="nav-desh ckeditor-content" v-html="product?.description"></div>
      </div>
    </template>

    <template #pills-review>
      <ShopProductDetailsWidgetsProductReview :product="product" :reviews="reviews" />
    </template>

    <template #pills-qa>
      <ShopProductDetailsWidgetsQuestionsAnswers :product="product" :questionAnswers="questionAnswers" />
    </template>
  </WidgetsWapperTab>
</template>

<script setup>
let props = defineProps({
  product: Object,
  reviews: Object,
  questionAnswers: Object
});

let tabs = ref([
  { title: "Description", id: "pills-description" },
  { title: "Review", id: "pills-review" },
  { title: "Q&A", id: "pills-qa" },
]);
</script>
<style lang="scss" scoped></style>
