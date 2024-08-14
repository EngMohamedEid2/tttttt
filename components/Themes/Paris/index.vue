<template>
  <div class="bg-effect">
    <!-- Home Section Start -->
    <section class="home-section pt-2" v-if="data?.content?.home_banner">
      <ThemesWidgetsHomeBannerParis :data="data?.content?.home_banner" />
    </section>
    <!-- Home Section End -->

    <!-- Banner Section Start -->
    <section class="banner-section ratio_60">
      <ThemesWidgetsBanner
        :style="'horizontal'"
        :banners="data?.content?.featured_banners?.banners"
      />
    </section>
    <!-- Banner Section End -->

    <!-- Product Section Start -->
    <section class="product-section">
      <div class="container-fluid-lg">
        <div class="row g-sm-4 g-3">
          <!-- Left Content Start -->
          <ThemesParisLeftContent
            :leftdata="data.content"
            :Products="product"
          />
          <!-- Left Content End -->

          <!-- Right Content Star -->

          <ThemesParisRightContent
            :data="data"
            :Products="product"
            :Blogs="blog"
          />
          <!-- Right Content End -->
        </div>
      </div>
    </section>
    <!-- Product Section End -->

    <!-- Newsletter Section Start -->
    <!-- <div v-if="data?.content?.news_letter?.status">
      <section class="newsletter-section section-b-space">
        <ThemesWidgetsNewsletter :data="data?.content?.news_letter" />
      </section>
    </div> -->
    <!-- Newsletter Section End -->
  </div>
  <!-- <app-newsletter-modal></app-newsletter-modal> -->
  <!-- <app-exit-modal></app-exit-modal> -->
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useDataStore } from "~/store/data";

let { data, pending } = await HandleRequest("theme/paris", {
  key: "getAllHomesInPage",
  // params: { slug: 'paris' }
});

let {
  data: product,
  pending: loadingPosProducts,
  error,
} = await HandleRequest("product", {
  key: "getThemeParisProduct",
  params: {
    status: 1,
    theme: "paris",
    ids: data?.value?.content?.products_ids.join(","),
  },
});

let { data: blog } = await HandleRequest("blog", {
  key: "GetAllFeaturedBlogs",
  params: {
    status: 1,
    ids: data?.value.content.main_content?.section9_featured_blogs?.blog_ids.join(
      ","
    ),
  },
});
</script>
<style lang="scss" scoped></style>
