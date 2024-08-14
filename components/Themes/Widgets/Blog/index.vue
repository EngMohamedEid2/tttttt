<template>
  <!-- <div class="slider-3-blog ratio_65 product-wrapper">
    <swiper :breakpoints="blogSlider" :loop="true" :slides-per-view="slidesPerView" :space-between="15">
      <template v-if="skeletonLoader">
              <swiper-slide  v-for="item in skeletonItems" :key="item">
                <ThemesWidgetsBlogSkeletonSliderBlog   />
              </swiper-slide>
       </template>
      <swiper-slide v-for="blog in blogs" :key="blog" v-else>
        <div class="blog-box ratio_65" :class="{ 'sticky-blog-box': blog.is_sticky === 1 }">
          <div class="blog-label-tag" v-if="blog.is_featured">
            <span>Featured</span>
          </div>
          <div class="blog-box-image">
            <NuxtLink :to="`/blog/${blog?.slug}`" class="blog-image bg-size"
              :style="{ 'background-image': 'url(' + (blog.blog_thumbnail ? blog?.blog_thumbnail?.original_url : '/images/product.png') + ')' }">
            </NuxtLink>
          </div>
          <NuxtLink :to="`/blog/${blog?.slug}`" class="blog-detail">
            <h6>{{ dateFormatter(blog.created_at) }}</h6>
            <h5>{{ blog.title }}</h5>
          </NuxtLink>
        </div>
      </swiper-slide>
    </swiper>
  </div> -->
</template>
<!-- <script setup>
import { dateFormatter } from "@/utils/formators/date";

let props = defineProps({
  blogIds: Object,
  Blogs: Object,
  slidesPerView: { type: Number, default: 4 },
});
let blogSlider = {
  0: {
    slidesPerView: 1,
  },
  600: {
    slidesPerView: 2,
  },
  1060: {
    slidesPerView: 3,
  },
  1530: {
    slidesPerView: props.slidesPerView,
  },
};

let blogs = ref([]);
blogs.value = props?.Blogs?.data?.filter((blog) =>
  props.blogIds?.includes(blog.id)
);

const skeletonLoader = ref(true);
let skeletonItems = Array.from({ length: 12 }, (_, index) => index);
onMounted(() => {
  setTimeout(() => {
    skeletonLoader.value = false;
  }, 2000);
});
</script>

<style lang="scss" scoped></style> -->
