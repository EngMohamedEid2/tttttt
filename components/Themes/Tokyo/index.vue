<template>
<div>
  <!-- Home Section Start -->
  <section class="home-section home-section-ratio pt-md-2 pt-4">
    <ThemesWidgetsHomeBannerTokyo :theme="'tokyo'" :data="data?.content?.home_banner" />
  </section>
  <!-- Home Section End -->

  <!-- Category Section Start -->
  <section v-if="data?.content?.categories_icon_list?.status">
    <div class="container-fluid-lg">
      <ThemesWidgetsCategories  :style="'horizontal'" :slidesPerView="9"
        :categoryIds="data?.content?.categories_icon_list?.category_ids || []"
        :image="data?.content?.categories_icon_list?.image_url" :theme="'paris'" />
    </div>
  </section>
  <!-- Category Section End -->

  <!-- Discount Section Start -->
  <section v-if="data?.content?.coupons?.status">
    <div class="container-fluid-lg">
      <div class="row">
        <div class="col-12 sale-banner">
          <ThemesWidgetsBanner :banners="data?.content?.coupons" :classes="'banner-contain hover-effect'"
            :style="'full_width'" />
        </div>
      </div>
    </div>
  </section>
  <!-- Discount Section End -->

  <!-- Banner Section Start -->
  <section class="banner-section ratio_60 wow fadeInUp" v-if="data?.content?.featured_banners?.status">
    <ThemesWidgetsBanner :banners="data?.content?.featured_banners?.banners" :style="'horizontal'" />
  </section>
  <!-- Banner Section End -->

  <!-- Product Section Start -->
  <section>
    <div class="container-fluid-lg">
      <div class="row g-3">
        <div :class="data?.content?.main_content?.sidebar?.status ? 'col-xxl-9 col-xl-8' : 'col-xxl-12 col-xl-12'">
          <!-- Product Box Horizontal Style-->
          <div v-if="data?.content?.main_content?.section1_products?.status &&
            data?.content?.main_content?.section1_products?.product_ids?.length >= 5">
            <div>
              <WidgetsTitle :title="data?.content?.main_content?.section1_products?.title"
                :description="data?.content?.main_content?.section1_products?.description" :svg="'cake'" />
              <ThemesWidgetsProduct :Products="product" :spaceBetween="15"
                :productIds="data?.content?.main_content?.section1_products?.product_ids || []" :slider="true"
                :style="'horizontal'" :boxClass="'product-box-bg'" :productstyle="'product-standard'" />
            </div>
          </div>

          <!-- Product Box Classic Style-->
          <div v-if="data?.content?.main_content?.section2_slider_products?.status &&
            data?.content?.main_content?.section2_slider_products?.product_ids?.length >= 5">
            <div class="section-t-space">
              <WidgetsTitle :title="data?.content?.main_content?.section2_slider_products?.title"
                :description="data?.content?.main_content?.section2_slider_products?.description" :svg="'cake'" />

              <ThemesWidgetsProduct :Products="product"
                :productIds="data?.content?.main_content?.section2_slider_products?.product_ids || []" :style="'classic'"
                :boxClass="'product-box-bg'" />
            </div>
          </div>

          <!-- Product Box Horizontal Style-->
          <div v-if="data?.content?.main_content?.section3_products?.status &&
            data?.content?.main_content?.section3_products?.product_ids?.length >= 5">
            <div class="section-t-space">
              <WidgetsTitle :title="data?.content?.main_content?.section3_products?.title"
                :description="data?.content?.main_content?.section3_products?.description" :svg="'cake'" />
              <ThemesWidgetsProduct :Products="product" :spaceBetween="15"
                :productIds="data?.content?.main_content?.section3_products?.product_ids || []" :slider="true"
                :productstyle="'product-standard'" :style="'horizontal'" :boxClass="'product-box-bg'" />
            </div>
          </div>

          <!-- Product Box Horizontal Style-->
          <div v-if="data?.content?.main_content?.section4_products?.status &&
            data?.content?.main_content?.section4_products?.product_ids?.length >= 5">
            <div class="section-t-space">
              <WidgetsTitle :title="data?.content?.main_content?.section4_products?.title"
                :description="data?.content?.main_content?.section4_products?.description" :svg="'cake'" />
              <ThemesWidgetsProduct :Products="product" :spaceBetween="15"
                :productIds="data?.content?.main_content?.section4_products?.product_ids || []" :slider="true"
                :productstyle="'product-standard'" :style="'horizontal'" :boxClass="'product-box-bg'" />
            </div>
          </div>
        </div>

        <!-- Theme Banner-->
        <div class="col-xxl-3 col-xl-4 d-none d-xl-block" v-if="data?.content?.main_content?.sidebar?.status">
          <div class="position-sticky top-0">
            <ThemesWidgetsBanner :classes="'ratio_209 rounded'"
              :banners="data?.content?.main_content?.sidebar?.right_side_banners?.banner_1" :style="'vertical'" />
            <ThemesWidgetsBanner :classes="'ratio_125 section-t-space'"
              :banners="data?.content?.main_content?.sidebar?.right_side_banners?.banner_2" :style="'vertical'" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Product Section End -->

  <!-- Banner Section Start -->
  <div v-if="data?.content?.full_width_banner?.status">
    <section>
      <div class="container-fluid-lg">
        <div class="row">
          <div class="col-12">
            <WidgetsImageLink :image="data?.content?.full_width_banner" :bgImage="false"
              :class="'home-contain hover-effect'" />
          </div>
        </div>
      </div>
    </section>
  </div>
  <!-- Banner Section End -->

  <!-- Four-column Start -->
  <div v-if="data?.content?.slider_products?.status">
    <section class="top-selling-section">
      <div class="container-fluid-lg">
        <ThemesWidgetsFourColumnProduct :Products="product" :data="data?.content?.slider_products" />
      </div>
    </section>
  </div>
  <!-- Four-column End -->

  <!-- Newsletter Section Start -->
  <div v-if="data?.content?.news_letter?.status">
    <section class="newsletter-section section-b-space">
      <ThemesWidgetsNewsletter :data="data?.content?.news_letter" />
    </section>
  </div>
  <!-- Newsletter Section End -->
</div>
</template>

<script setup>
let props = defineProps({
  data: Object
})

let { data, pending } = await HandleRequest("theme/tokyo", {
  key: "getAllTokyo",
  // params: { slug: 'tokyo' }
});

let { data: product, error } = await HandleRequest("product", {
  key: "getThemeParisProduct",
  params: { status: 1, theme: 'tokyo', ids: data?.value?.content?.products_ids.join(',') }
});

onMounted(() => {
  // Note: This Customization is only for this tokyo theme, otherwise you can change it in the settings from the backend.
  // Change color for this layout
  document.documentElement.style.setProperty('--theme-color', '#d99f46')

  // Add Topbar Dark Class
  document.querySelector('.header-top')?.classList.add('bg-dark');
})

onBeforeUnmount(() => {
  // Remove the color when the component is unmounted
  document.documentElement.style.removeProperty('--theme-color')

  // Remove Topbar Dark Class for this theme only
  document.querySelector('.header-top')?.classList.remove('bg-dark');
})

</script>