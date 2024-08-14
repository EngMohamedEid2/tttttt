<template>
  <div>
    <!-- Category Style Vertical -->
    <div
      class="category-menu section-b-space"
      v-show="categories?.length && style == 'vertical'"
    >
      <h3>{{ title ? title : $t("Categories") }}</h3>
      <ul>
        <li v-for="category in categories" :key="category">
          <div class="category-list">
            <img
              :src="
                category?.category_icon
                  ? category?.category_icon?.original_url
                  : '/images/category.png'
              "
              :alt="category?.name"
            />
            <h5>
              <a
                href="javascript:void(0)"
                @click="redirectToCollection(category.slug)"
                >{{ category?.name }}</a
              >
            </h5>
          </div>
        </li>
      </ul>
    </div>

    <!-- Category Classic Vertical -->
    <div
      class="shop-left-sidebar"
      v-if="categories?.length && style == 'classic_vertical'"
    >
      <ul class="nav nav-pills mb-3 custom-nav-tab">
        <li class="nav-item" v-for="category in categories" :key="category">
          <WidgetsButton
            :class="
              selectedCategorySlug.length &&
              selectedCategorySlug.includes(category.slug)
                ? 'nav-link active'
                : 'nav-link'
            "
            :id="'nav_link_btn'"
            @onCLick="redirectToCollection(category.slug)"
          >
            {{ category.name }}
            <img
              :src="
                category?.category_icon
                  ? category?.category_icon?.original_url
                  : '/images/category.png'
              "
              :alt="category?.name"
            />
          </WidgetsButton>
        </li>
      </ul>
    </div>

    <!-- Category Style Horizontal -->
    <div
      class="product-wrapper"
      :class="'category-slider'"
      v-show="categories?.length && style == 'horizontal'"
    >
      <swiper
        :breakpoints="categorySlider2"
        :loop="true"
        class="banner-slider"
        :slides-per-view="slidesPerView"
        :space-between="10"
      >
        <swiper-slide v-for="category in categories" :key="category">
          <div v-if="theme == 'paris'">
            <a
              href="javascript:void(0)"
              @click="redirectToCollection(category.slug)"
              class="category-box category-dark"
              :class="{
                active:
                  selectedCategorySlug.length &&
                  selectedCategorySlug.includes(category.slug),
              }"
            >
              <img
                :src="image ? image : '/images/vegetable/shape.png'"
                class="background-image"
                alt=""
              />
              <img
                :src="
                  category?.category_icon
                    ? category?.category_icon?.original_url
                    : '/images/category.png'
                "
                :alt="category?.name"
              />
              <h5>{{ category.name }}</h5>
            </a>
          </div>
          <div v-if="theme == 'madrid'">
            <div class="category-box-list">
              <a
                href="javascript:void(0)"
                @click="redirectToCollection(category.slug)"
                class="category-name"
              >
                <h4>{{ category.name }}</h4>
                <h6>{{ category.products_count }} {{ "items" }}</h6>
              </a>
              <div class="category-box-view">
                <a
                  href="javascript:void(0)"
                  @click="redirectToCollection(category.slug)"
                >
                  <img
                    :src="
                      category?.category_image
                        ? category?.category_image?.original_url
                        : '/images/category.png'
                    "
                    class="img-fluid"
                    :alt="category?.name"
                  />
                </a>
                <WidgetsButton
                  :classes="'btn shop-button'"
                  :id="'shop_now_btn'"
                >
                  <span>{{ "Shop Now" }}</span>
                  <Icon name="ri:arrow-right-s-line"></Icon>
                </WidgetsButton>
              </div>
            </div>
          </div>
          <div v-if="theme == 'rome'">
            <div class="shop-category-box border-0">
              <a
                href="javascript:void(0)"
                @click="redirectToCollection(category.slug)"
                class="circle-1"
              >
                <img
                  :src="
                    category?.category_image
                      ? category?.category_image?.original_url
                      : '/images/category.png'
                  "
                  :alt="category?.name"
                />
              </a>
              <div class="category-name">
                <h6>{{ category.name }}</h6>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <div
      class="product-wrapper"
      :class="'category-slider'"
      v-show="categories?.length && style == 'horizontal'"
    >
      <swiper
        :breakpoints="categorySlider3"
        :loop="true"
        class="banner-slider"
        :slides-per-view="8"
        :space-between="10"
      >
        <swiper-slide v-for="category in categories" :key="category">
          <div v-if="theme == 'rome'">
            <div class="shop-category-box border-0">
              <a
                href="javascript:void(0)"
                @click="redirectToCollection(category.slug)"
                class="circle-1"
              >
                <img
                  :src="
                    category?.category_image
                      ? category?.category_image?.original_url
                      : '/images/category.png'
                  "
                  :alt="category?.name"
                />
              </a>
              <div class="category-name">
                <h6>{{ category.name }}</h6>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <!-- Category Style classic -->
    <div v-if="categories?.length && style == 'classic'">
      <swiper
        :breakpoints="categorySlider2"
        :loop="true"
        class="banner-slider"
        :slides-per-view="slidesPerView"
        :space-between="10"
      >
        <swiper-slide v-for="category in categories" :key="category">
          <div>
            <div class="shop-category-box border-0 wow fadeIn">
              <a
                href="javascript:void(0)"
                @click="redirectToCollection(category.slug)"
                class="circle-1"
              >
                <img
                  :src="
                    category?.category_icon
                      ? category?.category_icon?.original_url
                      : '/images/category.png'
                  "
                  :alt="category?.name"
                />
              </a>
              <div class="category-name">
                <h6>{{ category.name }}</h6>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <!-- Category Style Filter -->
    <ul
      class="nav nav-tabs tab-style-color-2 tab-style-color"
      v-show="categories?.length && style == 'filter'"
    >
      <li class="nav-item" v-for="category in categories" :key="category">
        <WidgetsButton
          :classes="
            selectedCategoryId == category.id
              ? 'nav-link btn active'
              : 'nav-link btn'
          "
          :id="'category' + category.id"
          @onClick="selectCategory(category.id)"
          >{{ category?.name }}</WidgetsButton
        >
      </li>
    </ul>

    <!--- Category Style Dropdown -->
    <ul
      class="category-list"
      v-show="Categories?.length && style == 'dropdown'"
    >
      <li
        class="onhover-category-list"
        v-for="category in Categories"
        :key="category"
      >
        <a
          href="javascript:void(0)"
          @click="redirectToCollection(category.id, category)"
          class="category-name"
        >
          <img
            :src="
              category?.image
              // : '/images/category.png'
            "
            :alt="category?.name"
          />
          <h6>{{ category?.name }}</h6>
        </a>
      </li>
    </ul>
    <!-- Input Category Dropdown -->
    <div class="location-button" v-show="styled === 'input_dropdown'">
      <select class="form-select locat-name border-0">
        <option>{{ "All Category" }}</option>
        <option v-for="category in ProductCategory" :key="category">
          {{ category.name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useDataStore } from "~/store/data";
import { useCollectionStore } from "~/store/collection";
let props = defineProps({
  categoryIds: Array,
  Category: Array,
  style: { type: [String, Object], default: "vertical" },
  title: String,
  image: String,
  theme: String,
  slidesPerView: { type: Number, default: 7 },
  selectedCategoryId: Number,
  bgImage: String,
});
let styled = props.style;
let store = useCollectionStore();
let categorySlider3 = {
  0: {
    slidesPerView: 2,
  },
  620: {
    slidesPerView: 3,
  },
  620: {
    slidesPerView: 4,
  },
  768: {
    slidesPerView: 5,
  },
  1060: {
    slidesPerView: 6,
  },
  1390: {
    slidesPerView: 7,
  },
  1690: {
    slidesPerView: 8,
  },
};

let categorySlider2 = {
  0: {
    slidesPerView: 2,
  },
  460: {
    slidesPerView: 3,
  },
  640: {
    slidesPerView: 4,
  },
  800: {
    slidesPerView: 5,
  },
  1000: {
    slidesPerView: 6,
  },
  1260: {
    slidesPerView: 7,
  },
  1450: {
    slidesPerView: 8,
  },
  1640: {
    slidesPerView: props.slidesPerView,
  },
};

const emit = defineEmits(["selectedCategory"]);
let { Categories } = storeToRefs(useDataStore());
let categories = ref([]);
let ProductCategory = ref([]);
let selectedCategorySlug = ref([]);
let selectedCategory = ref();
let route = useRoute();
let router = useRouter();

ProductCategory.value = Categories?.value?.data?.filter(
  (category) => category.type == "product"
);
categories.value = props.categoryIds
  ? Categories?.value?.data?.filter((category) =>
      props.categoryIds?.includes(category.id)
    )
  : Categories?.value?.data;

function selectCategory(id) {
  emit("selectedCategory", id);
}

const redirectToCollection = (slug, cat) => {
  store.show_filters = [];
  // store.show_filters.push(cat);
  // alert(store.show_filters.value);
  // console.log(store.show_filters);
  store.filterObject.selectedCategories = [];
  selectedCategorySlug.value = [];

  const index = selectedCategorySlug.value.indexOf(slug);
  if (index === -1) {
    selectedCategorySlug.value.push(slug);
  } else {
    selectedCategorySlug.value.splice(index, 1);
  }

  const queryParams = selectedCategorySlug.value.length
    ? selectedCategorySlug.value.join(",")
    : null;

  // Push selected cats
  if (!store.filterObject.selectedCategories.includes(slug)) {
    store.filterObject.selectedCategories.push(slug);
  }
  // console.log(store.filterObject.selectedCategories);

  if (route.name != "collections") {
    router.push({
      path: "/collections",
      query: { category_id: queryParams, layout: "collection_left_sidebar" },
    });
    // store.show_filters = dataStore.Categories.filter((category) =>
    //   store.filterObject.selectedCategories.includes(category.id)
    // );
  }
  console.log("selected categories", store.filterObject.selectedCategories);
  console.log("show_filter", store.show_filters);

  // setTimeout(async () => {
  //   store.initialCheckedValue();
  // }, 2000);
};

onMounted(() => {
  let queryParams = route.query.category_id;
  selectedCategorySlug.value = queryParams ? queryParams.split(",") : [];
});
</script>

<style lang="scss" scoped></style>
