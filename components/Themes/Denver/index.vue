<template>
<div>
  <!-- Home Section Start -->
  <section class="home-section-2 home-section-bg pt-md-0 pt-2 overflow-hidden" v-if="data?.content?.home_banner">
    <ThemesWidgetsHomeBannerDenver :data="data?.content?.home_banner" />
  </section>
  <!-- Home Section End -->

  <!-- Category Section Start -->
  <section
    v-if="data?.content?.categories_icon_list?.status && data?.content?.categories_icon_list?.category_ids?.length">
    <div class="container-fluid-lg">
      <ThemesWidgetsCategories  :style="'horizontal'" :theme="'paris'"
        :categoryIds="data?.content?.categories_icon_list?.category_ids || []"
        :image="data?.content?.categories_icon_list?.image_url" />
    </div>
  </section>
  <!-- Category Section End -->

  <!-- Deal Section Start -->
  <section class="product-section product-section-3" v-if="data?.content?.products_list_1?.product_ids?.length || 0 >= 6
    && data?.content?.products_list_1?.status">
    <div class="container-fluid-lg">
      <div>
        <WidgetsTitle :title="data?.content?.products_list_1?.title" :style="'simple'" />
        <ThemesWidgetsProduct :Products="product" :productIds="data?.content?.products_list_1?.product_ids || []"
          :slider="true" :style="'horizontal'" :sliderPerView="6" :productstyle="'product-solid'"
          :boxClass="'product-box-bg'" />
      </div>
    </div>
  </section>
  <!-- Deal Section End -->

  <!-- banner section start -->
  <section v-if="data?.content?.two_column_banners?.status">
    <div class="container-fluid-lg">
      <div class="row g-4">
        <div class="col-xxl-8 col-xl-12 col-md-7">
          <WidgetsImageLink :image="data?.content?.two_column_banners?.banner_1" :bgImage="false" />
        </div>
        <div class="col-xxl-4 col-xl-12 col-md-5">
          <WidgetsImageLink :image="data?.content?.two_column_banners?.banner_2" :bgImage="false" />
        </div>
      </div>
    </div>
  </section>
  <!-- banner section end -->

  <!-- Top Selling Section Start -->
  <section class="top-selling-section no-bg-category">
    <div class="container-fluid-lg">
      <div class="row">
        <div class="col-xl-3 col-lg-4 d-lg-block d-none"
          v-if="data?.content?.slider_product_with_banner?.left_side_banners?.status">
            <WidgetsImageLink :classes="'banner-contain-2 hover-effect'"
              :image="data?.content?.slider_product_with_banner?.left_side_banners?.banner_1" :height="false" :bgImage="false" />
        </div>
        <div
          :class="data?.content?.slider_product_with_banner?.left_side_banners?.status ? 'col-xl-9 col-lg-8' : 'col-xxl-12 col-lg-12'">
          <ThemesWidgetsFourColumnProduct :Products="product" :col="'col-xl-4 col-lg-6 col-md-4 col-sm-6'"
            :data="data?.content?.slider_product_with_banner?.slider_products" />
        </div>
      </div>
    </div>
  </section>
  <!-- Top Selling Section End -->

  <!-- banner section start -->
  <section class="section-t-space" v-if="data?.content?.coupon_banner?.status && data?.content?.coupon_banner">
    <div class="container-fluid-lg">
      <div class="banner-contain">
        <WidgetsImageLink :image="data?.content?.coupon_banner" :bgImage="false" />
      </div>
    </div>
  </section>
  <!-- banner section End -->

  <!-- Top Selling Section Start -->
  <section class="product-section product-section-3" v-if="data?.content?.products_list_2?.product_ids?.length || 0 >= 6
    && data?.content?.products_list_2?.status">
    <div class="container-fluid-lg">
      <div>
        <WidgetsTitle :title="data?.content?.products_list_2?.title" :style="'simple'" />
        <ThemesWidgetsProduct :Products="product" :productIds="data?.content?.products_list_2?.product_ids || []"
          :slider="true" :style="'horizontal'" :sliderPerView="6" :productstyle="'product-solid'"
          :boxClass="'product-box-bg'" />
      </div>
    </div>
  </section>
  <!-- Top Selling Section End -->

  <!-- Top Selling Section Start -->
  <section class="product-section product-section-3" v-if="data?.content?.products_list_3?.product_ids?.length || 0 >= 6
    && data?.content?.products_list_3?.status">
    <div class="container-fluid-lg">
      <div>
        <WidgetsTitle :title="data?.content?.products_list_3?.title" :style="'simple'" />
        <ThemesWidgetsProduct :Products="product" :productIds="data?.content?.products_list_3?.product_ids || []"
          :slider="true" :style="'horizontal'" :sliderPerView="6" :productstyle="'product-solid'"
          :boxClass="'product-box-bg'" />
      </div>
    </div>
  </section>
  <!-- Top Selling Section End -->

  <!-- Newsletter Section Start -->
  <section class="newsletter-section section-b-space" v-if="data?.content?.news_letter?.status">
    <ThemesWidgetsNewsletter :data="data?.content?.news_letter" />
  </section>
  <!-- Newsletter Section End -->
</div>
</template>

<script setup>
let { data, pending } = await HandleRequest("theme/denver", {
  key: "getAllDenver",
  params: { slug: 'denver' }
});

let { data: product, error } = await HandleRequest("product", {
  key: "getThemeDenverProduct",
  params: { status: 1, theme: 'denver', ids: data?.value?.content?.products_ids.join(',') }
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