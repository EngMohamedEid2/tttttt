<template>
  <div>
    <!-- Home Section Start -->
    <section
      class="home-section-2 home-section-bg pt-0 overflow-hidden"
      v-if="data?.content?.home_banner"
    >
      <ThemesWidgetsHomeBannerMadrid :data="data?.content?.home_banner" />
    </section>
    <!-- Home Section End -->

    <!-- Banner Section Start -->
    <section
      class="banner-section ratio_60"
      v-if="
        (data?.content?.featured_banners?.status &&
          data?.content?.featured_banners?.banners?.length) ||
        0 >= 4
      "
    >
      <ThemesWidgetsBanner
        :banners="data?.content?.featured_banners?.banners"
        :style="'horizontal'"
      />
    </section>
    <!-- Banner Section End -->

    <!-- Category Section Start -->
    <section
      class="category-section-3"
      v-if="data?.content?.categories_image_list?.status"
    >
      <div class="container-fluid-lg">
        <WidgetsTitle
          :title="data?.content?.categories_image_list?.title"
          :style="'simple'"
        />
        <ThemesWidgetsCategories
          :style="'horizontal'"
          :theme="'madrid'"
          :slidesPerView="8"
          :categoryIds="
            data?.content?.categories_image_list?.category_ids || []
          "
          :image="data?.content?.categories_image_list?.image_url"
        />
      </div>
    </section>
    <!-- Category Section End -->

    <!-- Product Section Start -->
    <section
      class="product-section-3"
      v-if="
        data?.content?.products_list_1?.product_ids?.length ||
        (0 >= 6 && data?.content?.products_list_1?.status)
      "
    >
      <div class="container-fluid-lg">
        <WidgetsTitle
          :title="data?.content?.products_list_1?.title"
          :style="'simple'"
        />
        <ThemesWidgetsProduct
          :Products="product"
          :productIds="data?.content?.products_list_1?.product_ids || []"
          :sliderPerView="6"
          :spaceBetween="15"
          :slider="true"
          :style="'horizontal'"
          :productstyle="'product-standard overflow-hidden'"
          :boxClass="'product-box-bg'"
        />
      </div>
    </section>
    <!-- Product Section End -->

    <!-- Banner Section Start -->
    <section
      class="bank-section overflow-hidden"
      v-if="data?.content?.bank_wallet_offers?.status"
    >
      <div class="container-fluid-lg">
        <WidgetsTitle
          :title="data?.content?.bank_wallet_offers?.title"
          :style="'simple'"
        />
        <ThemesWidgetsWalletOffer
          :offers="data?.content?.bank_wallet_offers?.offers"
        />
      </div>
    </section>
    <!-- Banner Section End -->

    <!-- Deal Section Start -->
    <section
      class="product-section product-section-3"
      v-if="data?.content?.product_with_deals?.status"
    >
      <div class="container-fluid-lg">
        <WidgetsTitle
          :title="data?.content?.product_with_deals?.title"
          :style="'simple'"
        />
        <div class="row g-sm-4 g-3">
          <div
            class="col-xxl-4 order-lg-2 d-xxl-block d-none"
            v-if="data?.content?.product_with_deals?.deal_of_days?.status"
          >
            <ThemesWidgetsDeal
              :Products="product"
              :data="data?.content?.product_with_deals?.deal_of_days"
            />
          </div>
          <div
            class="col-xxl-8 col-lg-12 order-lg-1"
            :class="
              (data?.content?.product_with_deals?.deal_of_days?.status &&
                data?.content?.product_with_deals?.deal_of_days?.deals
                  ?.length) ||
              0
                ? 'col-xxl-8 col-lg-12 order-lg-1'
                : 'col-xxl-12 col-lg-12 order-lg-1'
            "
          >
            <ThemesWidgetsProduct
              :Products="product"
              :productIds="
                data?.content?.product_with_deals?.products_list?.product_ids ||
                []
              "
              :slider="false"
              :style="'horizontal'"
              :productstyle="'product-standard theme-plus overflow-hidden'"
              :boxClass="'product-box-bg'"
              :showItem="
                (data?.content?.product_with_deals?.deal_of_days?.status &&
                  data?.content?.product_with_deals?.deal_of_days?.deals
                    ?.length) ||
                0
                  ? 4
                  : 6
              "
            />
          </div>
        </div>
      </div>
    </section>
    <!-- Deal Section End -->

    <!-- Offer Section Start -->
    <section
      class="offer-section sale-banner"
      v-if="data?.content?.full_width_banner?.status"
    >
      <div class="container-fluid-lg">
        <div class="row">
          <div class="col-12 ratio_12">
            <WidgetsImageLink
              :classes="'offer-box hover-effect'"
              :image="data?.content?.full_width_banner"
              :bgImage="false"
            />
          </div>
        </div>
      </div>
    </section>
    <!-- Offer Section End -->

    <!-- Product Section Start -->
    <section
      class="product-section"
      v-if="
        data?.content?.products_list_2?.product_ids?.length ||
        (0 >= 6 && data?.content?.products_list_2?.status)
      "
    >
      <div class="container-fluid-lg">
        <WidgetsTitle
          :title="data?.content?.products_list_2?.title"
          :style="'simple'"
        />
        <ThemesWidgetsProduct
          :Products="product"
          :productIds="data?.content?.products_list_2?.product_ids || []"
          :sliderPerView="6"
          :slider="true"
          :spaceBetween="15"
          :style="'horizontal'"
          :productstyle="'product-standard theme-plus'"
          :boxClass="'product-box-bg'"
        />
      </div>
    </section>
    <!-- Product Section End -->

    <!-- Product Section Start -->
    <section
      class="product-section"
      v-if="
        data?.content?.products_list_3?.product_ids?.length ||
        (0 >= 6 && data?.content?.products_list_3?.status)
      "
    >
      <div class="container-fluid-lg">
        <WidgetsTitle
          :title="data?.content?.products_list_3?.title"
          :style="'simple'"
        />
        <ThemesWidgetsProduct
          :Products="product"
          :spaceBetween="15"
          :productIds="data?.content?.products_list_3?.product_ids || []"
          :sliderPerView="6"
          :slider="true"
          :style="'horizontal'"
          :productstyle="'product-standard theme-plus overflow-hidden'"
          :boxClass="'product-box-bg'"
        />
      </div>
    </section>
    <!-- Product Section End -->

    <!-- Banner Section Start -->
    <section
      class="banner-section"
      v-if="data?.content?.two_column_banners?.status"
    >
      <div class="container-fluid-lg">
        <div class="row gy-lg-0 gy-3">
          <div class="col-lg-6">
            <WidgetsImageLink
              :classes="'banner-contain-3 hover-effect'"
              :image="data?.content?.two_column_banners?.banner_1"
              :bgImage="false"
            />
          </div>
          <div class="col-lg-6">
            <WidgetsImageLink
              :classes="'banner-contain-3 hover-effect'"
              :image="data?.content?.two_column_banners?.banner_2"
              :bgImage="false"
            />
          </div>
        </div>
      </div>
    </section>
    <!-- Banner Section End -->

    <!-- Product Section Start -->
    <section
      class="product-section"
      v-if="
        data?.content?.products_list_4?.product_ids?.length ||
        (0 >= 6 && data?.content?.products_list_4?.status)
      "
    >
      <div class="container-fluid-lg">
        <WidgetsTitle
          :title="data?.content?.products_list_4?.title"
          :style="'simple'"
        />
        <ThemesWidgetsProduct
          :Products="product"
          :productIds="data?.content?.products_list_4?.product_ids || []"
          :sliderPerView="6"
          :slider="true"
          :style="'horizontal'"
          :spaceBetween="15"
          :productstyle="'product-standard theme-plus overflow-hidden'"
          :boxClass="'product-box-bg'"
        />
      </div>
    </section>
    <!-- Product Section End -->

    <!-- Product Section Start -->
    <section
      class="product-section"
      v-if="
        data?.content?.products_list_5?.product_ids?.length ||
        (0 >= 6 && data?.content?.products_list_5?.status)
      "
    >
      <div class="container-fluid-lg">
        <WidgetsTitle
          :title="data?.content?.products_list_5?.title"
          :style="'simple'"
        />
        <ThemesWidgetsProduct
          :Products="product"
          :productIds="data?.content?.products_list_5?.product_ids || []"
          :sliderPerView="6"
          :slider="true"
          :style="'horizontal'"
          :spaceBetween="15"
          :productstyle="'product-standard theme-plus overflow-hidden'"
          :boxClass="'product-box-bg'"
        />
      </div>
    </section>
    <!-- Product Section End -->

    <!-- Banner Section Start -->
    <section
      class="banner-section"
      v-if="data?.content?.delivery_banners?.status"
    >
      <div class="container-fluid-lg">
        <div class="row gy-lg-0 gy-3">
          <div class="col-lg-8">
            <WidgetsImageLink
              :classes="'banner-contain  pt-sm-5 hover-effect'"
              :image="data?.content?.delivery_banners?.banner_1"
              :bgImage="false"
            />
          </div>
          <div class="col-lg-4">
            <WidgetsImageLink
              :classes="'banner-contain pt-lg-4 hover-effect'"
              :image="data?.content?.delivery_banners?.banner_2"
              :bgImage="true"
              :saleclass="'h-100'"
            />
          </div>
        </div>
      </div>
    </section>
    <!-- Banner Section End -->

    <!-- Product Section Start -->
    <section
      class="product-section"
      v-if="
        data?.content?.products_list_6?.product_ids?.length &&
        data?.content?.products_list_6?.status
      "
    >
      <div class="container-fluid-lg">
        <WidgetsTitle
          :title="data?.content?.products_list_6?.title"
          :style="'simple'"
        />
        <ThemesWidgetsProduct
          :Products="product"
          :productIds="data?.content?.products_list_6?.product_ids || []"
          :sliderPerView="6"
          :slider="true"
          :style="'horizontal'"
          :spaceBetween="15"
          :productstyle="'product-standard theme-plus overflow-hidden'"
          :boxClass="'product-box-bg'"
        />
      </div>
    </section>

    <!-- Product Section Start -->
    <section
      class="product-section"
      v-if="
        data?.content?.products_list_7?.product_ids?.length ||
        (0 >= 6 && data?.content?.products_list_7?.status)
      "
    >
      <div class="container-fluid-lg">
        <WidgetsTitle
          :title="data?.content?.products_list_7?.title"
          :style="'simple'"
        />
        <ThemesWidgetsProduct
          :Products="product"
          :productIds="data?.content?.products_list_7?.product_ids || []"
          :sliderPerView="6"
          :slider="true"
          :style="'horizontal'"
          :spaceBetween="15"
          :productstyle="'product-standard theme-plus overflow-hidden'"
          :boxClass="'product-box-bg'"
        />
      </div>
    </section>
    <!-- Product Section End -->

    <!-- Blog Section Start -->
    <section
      class="section-b-space"
      v-if="
        data?.content?.featured_blogs?.blog_ids?.length ||
        (0 >= 3 && data?.content?.featured_blogs?.status)
      "
    >
      <div class="container-fluid-lg">
        <WidgetsTitle
          :title="data?.content?.featured_blogs?.title"
          :style="'simple'"
        />
        <ThemesWidgetsBlog
          :Blogs="blog"
          :blogIds="data?.content?.featured_blogs?.blog_ids || []"
          :sliderPerView="4"
        />
      </div>
    </section>
    <!-- Banner Section End -->
  </div>
</template>
<script setup>
let { data, pending } = await HandleRequest("theme/madrid", {
  key: "getAllmadrid",
  params: { slug: "madrid" },
});

let { data: product, error } = await HandleRequest("product", {
  key: "getThemeParisProduct",
  params: {
    status: 1,
    theme: "madrid",
    ids: data?.value?.content?.products_ids?.join(","),
  },
});

let { data: blog } = await HandleRequest("blog", {
  key: "GetAllFeaturedBlogs",
  params: {
    status: 1,
    ids: data?.value?.content?.featured_blogs?.blog_ids?.join(","),
  },
});

onMounted(() => {
  // Change color for this layout
  document.documentElement.style.setProperty("--theme-color", "#239698");
});

onBeforeUnmount(() => {
  // Remove Color
  document.documentElement.style.removeProperty("--theme-color");
});
</script>
