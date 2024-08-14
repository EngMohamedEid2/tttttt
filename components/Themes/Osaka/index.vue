<template>
  <div class="bg-effect">
    <!-- Home Section Start -->
    <section class="home-section pt-2">
      <ThemesWidgetsHomeBannerOsaka
        :data="{
          status: true,
          main_banner: {
            image_url: adv[0].image || '/images/data/themes/osaka/1.jpg',
            redirect_link: {
              link: 'vegetables-fruits',
              link_type: 'collection',
            },
          },
          sub_banner_1: {
            image_url: adv[1].image || '/images/data/themes/osaka/2.jpg',
            redirect_link: {
              link: 'vegetables-fruits',
              link_type: 'collection',
              product_ids: 'collection',
            },
          },
        }"
      />
    </section>
    <!-- Home Section End -->

    <!-- Category Section Start -->
    <!-- <section v-if="data?.content?.categories_icon_list?.status">
      <div class="container-fluid-lg">
        <WidgetsTitle
          :title="data?.content?.categories_icon_list?.title"
          :description="data?.content?.categories_icon_list?.description"
        />
        <ThemesWidgetsCategories
          :style="'horizontal'"
          :theme="'paris'"
          :categoryIds="data?.content?.categories_icon_list?.category_ids || []"
          :image="data?.content?.categories_icon_list?.image_url"
          :slidesPerView="9"
        />
      </div>
    </section> -->
    <!-- Category Section End -->

    <!-- Discount Section Start -->
    <section v-if="data?.content?.coupons?.status">
      <div class="container-fluid-lg sale-banner">
        <div class="row">
          <div class="col-12">
            <ThemesWidgetsBanner
              :banners="{
                image_url:
                  product.data[0].advertisements[0].image ||
                  '/images/data/themes/osaka/4.jpg',

                redirect_link: {
                  link: 'vegetables-fruits',
                  link_type: 'collection',
                },
                status: true,
              }"
              :classes="'banner-contain hover-effect'"
              :style="'full_width'"
            />
          </div>
        </div>
      </div>
    </section>
    <!-- Discount Section End -->

    <!-- Product Section Start -->
    <section v-for="i in product?.data" :key="i">
      <div class="container-fluid-lg">
        <WidgetsTitle
          :title="i.title"
          :description="i.description"
          :catId="i.id"
        />
        <ThemesWidgetsProduct
          :products="i.products_to_show"
          :productIds="data?.content?.products_list_1?.product_ids || []"
          :slider="true"
          :style="'horizontal'"
          :sliderPerView="6"
        />
      </div>
    </section>
    <!-- Product Section End -->

    <!-- Offer Section Start -->
    <section v-if="data?.content?.offer_banner?.status">
      <div class="container-fluid-lg">
        <div class="row">
          <div class="col-12">
            <ThemesWidgetsBanner
              :banners="{
                image_url:
                  product.data[5].advertisements[0].image ||
                  '/images/data/themes/osaka/5.jpg',

                redirect_link: {
                  link: 'vegetables-fruits',
                  link_type: 'collection',
                },
                status: true,
              }"
              :classes="'offer-box hover-effect'"
              :style="'full_width'"
            />
          </div>
        </div>
      </div>
    </section>
    <!-- Offer Section End -->

    <!-- Product Section Start -->
    <!-- <section
      v-if="
        data?.content?.products_list_2?.product_ids?.length ||
        (0 >= 6 && data?.content?.products_list_2?.status)
      "
    >
      <div class="container-fluid-lg">
        <WidgetsTitle
          :title="data?.content?.products_list_2?.title"
          :description="data?.content?.products_list_2?.description"
        />
        <ThemesWidgetsProduct
          :sliderPerView="6"
          :products="product?.data[1]?.products_to_show"
          :productIds="data?.content?.products_list_2?.product_ids || []"
          :slider="true"
          :style="'horizontal'"
        />
      </div>
    </section> -->
    <!-- Product Section End -->

    <!-- Product Section Start -->
    <!-- <section v-if="data?.content?.product_bundles?.status">
      <div class="container-fluid-lg">
        <div class="row">
          <div class="col-12">
            <ThemesWidgetsCollection
              :data="data?.content?.product_bundles?.bundles"
            ></ThemesWidgetsCollection>
          </div>
        </div>
      </div>
    </section> -->
    <!-- Product Section End -->

    <!-- Four Product Section Start -->
    <!-- <section class="top-selling-section border-box" v-if="data?.content?.slider_products?.status">
      <div class="container-fluid-lg">
        <ThemesWidgetsFourColumnProduct :Products="product" :data="data?.content?.slider_products" />
      </div>
    </section> -->
    <!-- Four Product Section End -->

    <!-- Blog Section Start -->
    <!-- <section
      v-if="
        data?.content?.featured_blogs?.status &&
        data?.content?.featured_blogs?.blog_ids?.length
      "
    >
      <div class="container-fluid-lg">
        <WidgetsTitle
          :title="data?.content?.featured_blogs?.title"
          :description="data?.content?.featured_blogs?.description"
        />
        <ThemesWidgetsBlog
          :Blogs="blog"
          :blogIds="data?.content?.featured_blogs?.blog_ids || []"
          :slidesPerView="4"
        />
      </div>
    </section> -->
    <!-- Blog Section End -->

    <!-- Newsletter Section Start -->
    <!-- <section
      class="newsletter-section section-b-space"
      v-if="data?.content?.news_letter?.status"
    >
      <ThemesWidgetsNewsletter :data="data?.content?.news_letter" />
    </section> -->
    <!-- Newsletter Section End -->
  </div>
</template>

<script setup>
import axios from "axios";
// / ===== advertisments ===== ////

let { data, pending } = await HandleRequest("theme/osaka", {
  key: "getAllOsaka",
  params: { slug: "osaka" },
});

let adv = ref({});
await axios
  .get(
    "https://alsouq.anevex.com/app/shop-api/advertisements?home_page_position=Header&show_in=home"
  )
  .then((res) => {
    adv = res.data.data;
    // console.log(adv);
  });
// console.log(adv[0].image);
// console.log(adv.value);
/// ===== advertisments ===== ////

let { data: product, error } = await HandleRequest(
  "https://alsouq.anevex.com/app/shop-api/sections",
  {
    // key: "getThemeParisProduct",
    // params: {
    //   status: 1,
    //   theme: "osaka",
    //   ids: data?.value?.content?.products_ids.join(","),
    // },
  }
);

// console.log(product.value.data[6].advertisements[0].image);
// console.log(data?.content?.offer_banner);

let { data: blog } = await HandleRequest("blog", {
  key: "GetAllFeaturedBlogs",
  params: {
    status: 1,
    ids: data?.value?.content?.featured_blogs?.blog_ids.join(","),
  },
});

// console.log("data.content.coupons..", data?.value.content?.coupons);

onMounted(async () => {
  // Note: This Customization is only for this tokyo theme, otherwise you can change it in the settings from the backend.
  // Change color for this layout
  document.documentElement.style.setProperty("--theme-color", "#239698");

  // console.log("adv is => ", adv.value);
});

onBeforeUnmount(() => {
  // Remove the color when the component is unmounted
  document.documentElement.style.removeProperty("--theme-color");
});
</script>

<style lang="scss" scoped></style>
