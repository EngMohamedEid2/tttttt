<template>
  <section class="blog-section section-b-space">
    <div class="container-fluid-lg">
      <div class="row g-sm-4 g-3">
        <div class="col-xxl-3 col-xl-4 col-lg-5 d-lg-block d-none" :class="{
          'order-lg-1': sidebar === 'right_sidebar',
          'd-none': sidebar === 'no_sidebar',
        }">
          <BlogSidebar :blogs="data" />
        </div>
        <div class="col-xxl-9 col-xl-8 col-lg-7 ratio_50">
          <div class="blog-detail-image rounded-3 mb-4 bg-size" :style="{
            'background-image':
              'url(' + BlogData?.blog_thumbnail?.original_url + ')',
          }">
            <img :src="BlogData?.blog_thumbnail?.original_url" class="bg-img img-fluid" alt="" />
            <div class="blog-image-contain">
              <h2>{{ BlogData?.title }}</h2>
              <ul class="contain-comment-list">
                <li>
                  <div class="user-list">
                    <Icon name="ri:user-line" size="18"></Icon>
                    <span>{{ BlogData?.created_by?.name }}</span>
                  </div>
                </li>

                <li>
                  <div class="user-list">
                    <Icon name="ri:time-line" size="18"></Icon>
                    <span>{{ dateFormatter(BlogData?.created_at) }}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="blog-detail-contain ckeditor-content" v-html="BlogData?.content"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { HandleRequest } from "~~/composables/HandleRequest";
let props = defineProps({
  BlogData: Object,
});
let paramsBlog = { satus: 1, type: 'post', pagination: 5 }
let { data, pending } = await HandleRequest("blog", {
  key: "getAllHomesInPage",
  params: paramsBlog
});

</script>

<style lang="scss" scoped></style>
