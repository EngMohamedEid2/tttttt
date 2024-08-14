<template>
  <div class="bg-effect">
    <!-- Home section start -->
    <section class="home-section-2 home-section-small section-b-space"
      :style="{ 'background-image': 'url(' + data?.content?.home_banner?.bg_image_url + ')' }"
      v-if="data?.content?.home_banner">
      <ThemesWidgetsHomeBannerRome :data="data?.content?.home_banner" />
    </section>
    <!-- Home Section End -->

    <!-- Category Section Start -->
    <section class="category-section-2" v-if="data?.content?.categories_image_list?.status">
      <div class="container-fluid-lg">
        <WidgetsTitle :title="data?.content?.categories_image_list?.title" :style="'simple'" />
        <div class="row">
          <div class="col-12">
            <ThemesWidgetsCategories  :style="'horizontal'" :theme="'rome'"
              :categoryIds="data?.content?.categories_image_list?.category_ids || []"
              :image="data?.content?.categories_icon_list?.image_url" />
          </div>
        </div>
      </div>
    </section>
    <!-- Category Section End -->

    <!-- Value Section Start -->
    <section class="overflow-hidden" v-if="data?.content?.value_banners?.status">
      <WidgetsTitle :title="data?.content?.value_banners?.title" :style="'simple'" :classes="'container-fluid-lg'" />
      <div class="row">
        <div class="col-12">
          <ThemesWidgetsBanner :banners="data?.content?.value_banners?.banners" :style="'horizontal-3'"
            :sliderPerView="3" />
        </div>
      </div>
    </section>
    <!-- Value Section End -->

    <!-- Product Section Start -->
    <section class="product-section" v-if="data?.content?.categories_products?.status
      && data?.content?.categories_products?.category_ids?.length">
      <WidgetsTitle :title="data?.content?.categories_products?.title" :style="'simple'" :classes="'container-fluid-lg'">
        <ThemesWidgetsCategories v-if="data?.content?.categories_products?.category_ids?.length" 
          :style="'filter'" @selectCategory="selectCategory($event)" :selectedCategoryId="selectedCategoryId"
          :categoryIds="data?.content?.categories_products?.category_ids || []" />
      </WidgetsTitle>
      <div class="container-fluid-lg">
        <ThemesWidgetsProduct :Products="productsCategory" :productIds="productFilterIds || []" :slider="false"
          :style="'horizontal'" :boxClass="'product-box-bg'" :productstyle="'product-standard'" :showItem="5" />
      </div>
    </section>
    <!-- Product Section End -->

    <!-- Banner Section Start -->
    <section class="banner-section" v-if="data?.content?.two_column_banners?.status">
      <div class="container-fluid-lg">
        <div class="row gy-xl-0 gy-3">
          <div class="col-lg-6 ">
            <WidgetsImageLink :classes="'banner-contain-3 hover-effect'"
              :image="data?.content?.two_column_banners?.banner_1" :bgImage="false" />
          </div>
          <div class="col-lg-6 ">
            <WidgetsImageLink :classes="'banner-contain-3 hover-effect'"
              :image="data?.content?.two_column_banners?.banner_2" :bgImage="false" />
          </div>
        </div>
      </div>
    </section>
    <!-- Banner Section End -->

    <section class="top-selling-section border-box section-b-space" v-if="data?.content?.slider_products?.status">
      <div class="container-fluid-lg">
        <ThemesWidgetsFourColumnProduct :Products="product" :data="data?.content?.slider_products" />
      </div>
    </section>

    <!-- Banner Section Start -->
    <div class="container-fluid-lg" v-if="data?.content?.full_width_banner?.status">
      <div class="ratio_27" v-if="data?.content?.full_width_banner?.status">
        <ThemesWidgetsBanner :banners="data?.content?.full_width_banner" :style="'full_width'" />
      </div>
    </div>
    <!-- Banner Section End -->

    <!-- Product Section Start -->
    <section class="product-section"
      v-if="data?.content?.products_list_1?.status && data?.content?.products_list_1?.product_ids?.length || 0 >= 6">
      <div class="container-fluid-lg">
        <WidgetsTitle :title="data?.content?.products_list_1?.title" :style="'simple'" />
        <ThemesWidgetsProduct :Products="product" :productIds="data?.content?.products_list_1?.product_ids || []"
          :slider="true" :style="'horizontal'" :spaceBetween="24" :productstyle="'product-standard'"
          :boxClass="'product-box-bg'" :sliderPerView="6" />
      </div>
    </section>
    <!-- Product Section End -->

    <!-- Blog Section Start -->
    <section v-if="data?.content?.featured_blogs?.status
      && data?.content?.featured_blogs?.blog_ids?.length || 0 >= 3">
      <div class="container-fluid-lg">
        <WidgetsTitle :title="data?.content?.featured_blogs?.title" :style="'simple'" />
        <ThemesWidgetsBlog :Blogs="blog" :blogIds="data?.content?.featured_blogs?.blog_ids || []" />
      </div>
    </section>
    <!-- Blog Section End -->

    <!-- Newsletter Section Start -->
    <section class="newsletter-section-2 section-b-space" v-if="data?.content?.news_letter?.status">
      <ThemesWidgetsNewsletter :data="data?.content?.news_letter" :style="'classic'" />
    </section>
    <!-- Newsletter Section End -->
  </div>
</template>

<script setup>
const slug = ref(null)
const router = useRouter()
const themeOptionService = ref(null)
const categorySlider = ref(null)
const productSlider6ItemMargin = ref(null)
const customOptionsItem4 = ref(null)
const productFilterIds = ref([])
const selectedCategoryId = ref(null)

let { data, pending } = await HandleRequest("theme/rome", {
  key: "getAllRomes",
  params: { slug: 'rome' }
});

let { data: product, error } = await HandleRequest("product", {
  key: "getThemeParisProduct",
  params: { status: 1, theme: 'rome', ids: data?.value?.content?.products_ids.join(',') }
});

let { data: blog } = await HandleRequest("blog", {
  key: "GetAllFeaturedBlogs",
  params: { status: 1, ids: data?.value?.content?.featured_blogs?.blog_ids?.join(',') }
});

let categoryProduct = data?.value?.content?.categories_products?.category_ids?.join(',')

let { data: productsCategory } = await HandleRequest("product", {
  key: "getProductCategory",
  params: { category_ids: categoryProduct }
});

function selectCategory(id) {
  selectedCategoryId.value = id;
  if (selectedCategoryId.value) {
    productFilterIds.value = productsCategory?.value?.data?.filter(product => product?.categories?.map(category => category?.id).includes(id))
      ?.map(product => product.id)
      .slice(0, 5);
  }
};

if (
  data?.value?.content.categories_products &&
  data?.value?.content.categories_products.category_ids.length
) {
  selectCategory(data?.value?.content?.categories_products?.category_ids[0])
}

onBeforeMount(() => {
  // Change color for this layout
  document.documentElement.style.setProperty('--theme-color', '#0baf9a')
})

onBeforeUnmount(() => {
  // Remove Color
  document.documentElement.style.removeProperty('--theme-color')
})
</script>

<style lang="scss" scoped></style>