<template>
  <div
    class="col-xxl-3 col-xl-4 d-none d-xl-block"
    v-if="leftdata?.main_content?.sidebar?.status"
  >
    <div class="p-sticky">
      <!-- Sidebar Category Vertical Style -->
      <div
        v-if="
          leftdata?.main_content?.sidebar?.categories_icon_list?.category_ids
            ?.length
        "
      >
        <ThemesWidgetsCategories
          :Category="Category"
          :style="'vertical'"
          :categoryIds="
            leftdata?.main_content?.sidebar?.categories_icon_list
              ?.category_ids || []
          "
        />
      </div>
      <!-- Sidebar Vertical Banner -->
      <ThemesWidgetsBanner
        :classes="'ratio_156 section-t-space'"
        :style="'vertical'"
        :banners="leftdata?.main_content?.sidebar?.left_side_banners?.banner_1"
      />
      <!-- Sidebar Vertical Banner -->
      <ThemesWidgetsBanner
        :classes="'ratio_medium section-t-space'"
        :style="'vertical'"
        :banners="leftdata?.main_content?.sidebar?.left_side_banners?.banner_2"
      />
      <!-- Products -->
      <div
        v-if="
          (leftdata?.main_content?.sidebar?.sidebar_products?.status &&
            leftdata?.main_content?.sidebar?.sidebar_products?.product_ids
              ?.length) ||
          0 > 3
        "
      >
        <div class="section-t-space">
          <!-- <div class="category-menu">
            <h3>{{ leftdata?.main_content?.sidebar?.sidebar_products?.title }}</h3>
            <ThemesWidgetsProduct :Products="Products" :style="'vertical'"
              :productIds="leftdata?.main_content?.sidebar?.sidebar_products?.product_ids || []" />
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
let props = defineProps({
  leftdata: Object,
  Category: Object,
  Products: [Object, Array],
});
</script>

<style lang="scss" scoped></style>
