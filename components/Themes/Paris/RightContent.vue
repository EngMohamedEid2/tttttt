<template>
  <div
    :class="
      data?.content?.main_content?.sidebar?.status
        ? 'col-xxl-9 col-xl-8'
        : 'col-xxl-12 col-xl-12'
    "
  >
    <!-- Top Save Today Section Start -->
    <div
      v-if="
        (data?.content?.main_content?.section1_products?.status &&
          data?.content?.main_content?.section1_products?.product_ids
            ?.length) ||
        0 >= 5
      "
    >
      <WidgetsTitle
        :title="data?.content?.main_content?.section1_products?.title"
        :description="
          data?.content?.main_content?.section1_products?.description
        "
      />
      <div class="section-b-space">
        <ThemesWidgetsProduct
          :Products="Products"
          :productIds="
            data?.content?.main_content?.section1_products?.product_ids || []
          "
          :slider="true"
          :style="'horizontal'"
        />
      </div>
    </div>
    <!-- Top Save Today Section End -->
    <!-- Categories Section Start -->
    <div>
      <WidgetsTitle
        :title="data?.content?.main_content?.section2_categories_list?.title"
        :description="
          data?.content?.main_content?.section2_categories_list?.description
        "
      />

      <ThemesWidgetsCategories
        :style="'horizontal'"
        :Category="Category"
        :categoryIds="
          data?.content?.main_content?.section2_categories_list?.category_ids ||
          []
        "
        :image="
          data?.content?.main_content?.section2_categories_list?.image_url
        "
        :theme="'paris'"
      />
    </div>
    <!-- Categories Section End -->
    <!-- Two Column Banner Section Start -->
    <div
      v-if="data?.content?.main_content?.section3_two_column_banners?.status"
    >
      <div class="section-t-space section-b-space">
        <div class="row g-md-4 g-3">
          <div class="col-md-6">
            <div class="banner-contain hover-effect">
              <WidgetsImageLink
                :image="
                  data?.content?.main_content?.section3_two_column_banners
                    ?.banner_1
                "
                :bgImage="false"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="banner-contain hover-effect">
              <WidgetsImageLink
                :image="
                  data?.content?.main_content?.section3_two_column_banners
                    ?.banner_2
                "
                :bgImage="false"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Two Column Banner Section End -->
    <!-- Section Start -->
    <div
      v-if="
        (data?.content?.main_content?.section4_products?.status &&
          data?.content?.main_content?.section4_products?.product_ids
            ?.length) ||
        0 >= 5
      "
    >
      <WidgetsTitle
        :title="data?.content?.main_content?.section4_products?.title"
        :description="
          data?.content?.main_content?.section4_products?.description
        "
      />
      <div class="section-b-space">
        <ThemesWidgetsProduct
          :Products="Products"
          :productIds="
            data?.content?.main_content?.section4_products?.product_ids || []
          "
          :slider="true"
          :style="'horizontal'"
        />
      </div>
    </div>
    <!-- Section End -->
    <!-- Coupons Banner Section Start -->
    <div
      class="section-b-space ratio_12"
      v-if="data?.content?.main_content?.section5_coupons?.status"
    >
      <ThemesWidgetsBanner
        :saleclass="'sale-banner'"
        :banners="data?.content?.main_content?.section5_coupons"
        :style="'full_width'"
      />
    </div>
    <!-- Coupons Banner Section End -->
    <!-- Two Column Banner Section Start -->
    <div
      v-if="data?.content?.main_content?.section6_two_column_banners?.status"
    >
      <div
        class="section-b-space"
        v-if="data?.content?.main_content?.section6_two_column_banners?.status"
      >
        <div class="row g-md-4 g-3">
          <div class="col-xxl-8 col-xl-12 col-md-7">
            <div class="banner-contain hover-effect h-100">
              <WidgetsImageLink
                :image="
                  data?.content?.main_content?.section6_two_column_banners
                    ?.banner_1
                "
                :bgImage="false"
              />
            </div>
          </div>
          <div class="col-xxl-4 col-xl-12 col-md-5">
            <div class="banner-contain hover-effect">
              <WidgetsImageLink
                :image="
                  data?.content?.main_content?.section6_two_column_banners
                    ?.banner_2
                "
                :bgImage="false"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Two Column Banner Section End -->
    <!-- Our Best Seller Section Start -->
    <div
      v-if="
        (data?.content?.main_content?.section4_products?.status &&
          data?.content?.main_content?.section7_products?.product_ids
            ?.length) ||
        0 >= 3
      "
    >
      <WidgetsTitle
        :title="data?.content?.main_content?.section7_products?.title"
        :description="
          data?.content?.main_content?.section7_products?.description
        "
      />
      <ThemesWidgetsProduct
        :Products="Products"
        :productIds="
          data?.content?.main_content?.section7_products?.product_ids || []
        "
        :style="'classic'"
      />
    </div>
    <!-- Our Best Seller Section End -->
    <!-- Full Width Banner Section Start -->
    <div v-if="data?.content?.main_content?.section8_full_width_banner?.status">
      <div class="section-b-space section-t-space">
        <div class="banner-contain hover-effect">
          <WidgetsImageLink
            :image="data?.content?.main_content?.section8_full_width_banner"
            :bgImage="false"
          />
        </div>
      </div>
    </div>
    <!-- Full Width Banner Section End -->
    <!-- Blogs Section Start -->
    <div
      v-if="
        (data?.content?.main_content?.section9_featured_blogs?.status &&
          data?.content?.main_content?.section9_featured_blogs?.blog_ids
            ?.length) ||
        0 >= 3
      "
    >
      <WidgetsTitle
        :title="data?.content?.main_content?.section9_featured_blogs?.title"
        :description="
          data?.content?.main_content?.section9_featured_blogs?.description
        "
      />
      <ThemesWidgetsBlog
        :Blogs="Blogs"
        :blogIds="
          data?.content?.main_content?.section9_featured_blogs?.blog_ids || []
        "
        :slidesPerView="3"
      />
    </div>
    <!-- Blogs Section End -->
  </div>
</template>

<script setup>
let props = defineProps({
  data: Object,
  Products: Object,
  Blogs: Object,
  Category: Array,
});
</script>
<style lang="scss" scoped></style>
