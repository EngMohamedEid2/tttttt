<template>
<div>
  <!-- Home Section Start -->
  <section class="home-section pt-md-0 pt-2 ratio_50" v-if="data?.content?.home_banner">
    <ThemesWidgetsHomeBannerBerlin :data="data?.content?.home_banner" />
  </section>
  <!-- Home Section End -->

  <!-- Service Section Start -->
  <ThemesWidgetsService v-if="data?.content?.services_banner?.status"
    :data="data?.content?.services_banner?.services || []" />
  <!-- Service Section End -->

  <!-- Product Section Start -->
  <section class="product-section" v-if="data?.content?.main_content?.status">
    <div class="container-fluid-lg">
      <div class="row g-sm-4 g-3">
        <div class="col-xxl-9 col-xl-8"
          :class="data?.content?.main_content?.sidebar?.status ? 'col-xxl-9 col-xl-8' : 'col-xxl-12 col-xl-12'">
          <!-- Product Section Start-->
          <div class="section-b-space" v-if="data?.content?.main_content?.section1_products?.product_ids?.length || 0 >= 5 &&
            data?.content?.main_content?.section1_products?.status">
            <WidgetsTitle :title="data?.content?.main_content?.section1_products?.title"
              :description="data?.content?.main_content?.section1_products?.description" />
            <ThemesWidgetsProduct :Products="product" :spaceBetween="15"
              :productIds="data?.content?.main_content?.section1_products?.product_ids || []" :slider="true"
              :style="'horizontal'" :sliderPerView="4" :productstyle="'product-classic'" :boxClass="'product-box-bg'" />
          </div>
          <!-- Product Section End-->

          <!-- Categories Section Start-->
          <div class="section-b-space" v-if="data?.content?.main_content?.section2_categories_icon_list?.status">
            <WidgetsTitle :title="data?.content?.main_content?.section2_categories_icon_list?.title"
              :description="data?.content?.main_content?.section2_categories_icon_list?.description" />
            <ThemesWidgetsCategories :style="'horizontal'" :theme="'paris'"
              :categoryIds="data?.content?.main_content?.section2_categories_icon_list?.category_ids || []" />
          </div>
          <!-- Categories Section End-->

          <!-- Two Column Banner Section Start-->
          <div class="section-b-space" v-if="data?.content?.main_content?.section3_two_column_banners?.status">
            <div class="row g-md-4 g-3">
              <div class="col-xxl-6 col-xl-12 col-lg-6 b-left">
                <WidgetsImageLink :classes="'banner-contain hover-effect'"
                  :image="data?.content?.main_content?.section3_two_column_banners?.banner_1" :bgImage="false" />
              </div>
              <div class="col-xxl-6 col-xl-12 col-lg-6 b-left">
                <WidgetsImageLink :classes="'banner-contain hover-effect'"
                  :image="data?.content?.main_content?.section3_two_column_banners?.banner_2" :bgImage="false" />
              </div>
            </div>
          </div>
          <!-- Two Column Banner Section End -->

          <!-- Product Section Start -->
          <div class=""
            v-if="data?.content?.main_content?.section4_products?.product_ids?.length || 0 >= 5 && data?.content?.main_content?.section4_products?.status">
            <WidgetsTitle :title="data?.content?.main_content?.section4_products?.title"
              :description="data?.content?.main_content?.section4_products?.description" />
            <ThemesWidgetsProduct :Products="product" :sliderPerView="4" :spaceBetween="15"
              :productIds="data?.content?.main_content?.section4_products?.product_ids || []" :slider="true"
              :style="'horizontal'" :productstyle="'product-classic'" :boxClass="'product-box-bg'" />
          </div>
        </div>
        <!-- Product Section End-->

        <div class="col-xxl-3 col-xl-4 d-none d-xl-block" v-if="data?.content?.main_content?.sidebar?.status">
          <div class="position-sticky top-0">
            <ThemesWidgetsCategories
              v-if="data?.content?.main_content?.sidebar?.categories_icon_list?.status" :style="'vertical'"
              :categoryIds="data?.content?.main_content?.sidebar?.categories_icon_list?.category_ids || []"
              :title="data?.content?.main_content?.sidebar?.categories_icon_list?.title" />

            <!-- Sidebar Banner Section Start-->
            <div class="section-t-space banner-contain"
              v-if="data?.content?.main_content?.sidebar?.right_side_banners?.status">
              <WidgetsImageLink :classes="'banner-contain hover-effect'"
                :image="data?.content?.main_content?.sidebar?.right_side_banners?.banner_1" :bgImage="false" />
            </div>
            <!-- Sidebar Banner Section End-->

            <!-- Sidebar Trending Products Section Start-->
            <div class="section-t-space" v-if="data?.content?.main_content?.sidebar?.sidebar_products?.status &&
              data?.content?.main_content?.sidebar?.sidebar_products?.product_ids?.length || 0 >= 3">
              <div class="category-menu">
                <h3>{{ data?.content?.main_content?.sidebar?.sidebar_products?.title }}</h3>
                <ThemesWidgetsProduct :Products="product"
                  :productIds="data?.content?.main_content?.sidebar?.sidebar_products?.product_ids || []"
                  :style="'vertical'" />
              </div>
            </div>
            <!-- Sidebar Trending Products Section End-->
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Product Section End -->

  <!-- Banner Section Start -->
  <section class="banner-section" v-if="data?.content?.full_width_banner">
    <div class="container-fluid-lg">
      <div class="row">
        <div class="col-12">
          <WidgetsImageLink :classes="'home-contain hover-effect'" :image="data?.content?.full_width_banner"
            :bgImage="false" />
        </div>
      </div>
    </div>
  </section>
  <!-- Banner Section End -->

  <!-- Our Best Seller Section Start -->
  <section v-if="data?.content?.product_list_1?.product_ids?.length || 0 >= 3
    && data?.content?.main_content?.section4_products?.status">
    <div class="container-fluid-lg">
      <WidgetsTitle :title="data?.content?.product_list_1?.title"
        :description="data?.content?.product_list_1?.description" />
      <ThemesWidgetsProduct :Products="product" :productIds="data?.content?.product_list_1?.product_ids || []"
        :style="'classic'" />
    </div>
  </section>
  <!-- Our Best Seller Section End -->

  <!-- Newsletter Section Start -->
  <section class="newsletter-section section-b-space" v-if="data?.content?.news_letter?.status">
    <ThemesWidgetsNewsletter :data="data?.content?.news_letter" />
  </section>

  <!-- Newsletter Section End -->
</div>
</template>

<script setup>
let { data, pending } = await HandleRequest("theme/berlin", {
  key: "getAllBerlin",
  params: { slug: 'berlin' }
});

let { data: product, error } = await HandleRequest("product", {
  key: "getThemeberlinProduct",
  params: { status: 1, theme: 'berlin', ids: data?.value?.content?.products_ids.join(',') }
});

onMounted(() => {
  // Change color for this layout
  document.documentElement.style.setProperty('--theme-color', '#417394')
})

onBeforeUnmount(() => {
  // Remove the color when the component is unmounted
  document.documentElement.style.removeProperty('--theme-color')
})
</script>
<style lang="scss" scoped></style>