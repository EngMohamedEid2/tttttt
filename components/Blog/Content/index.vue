<template>
  <div class="row g-4" :class="{ 'ratio_65': style === 'list_view' }" v-if="blog?.data?.length">

    <div :class="style === 'list_view' ? 'col-12' : 'col-xxl-4 col-sm-6'" v-for="blog of blog?.data" :key="blog">
      <div class="blog-box" :class="{
        'blog-list': style === 'list_view',
        'sticky-blog-box': blog?.is_sticky === 1,
      }">
        <div class="blog-label-tag" v-if="blog?.is_featured">
          <span>{{ $t("Featured") }}</span>
        </div>
        <div class="blog-image">
          <nuxt-link :to="`/blog/${blog?.slug}`">
            <img :src="blog?.blog_thumbnail?.original_url" :alt="blog?.title" />
          </nuxt-link>
        </div>
        <div class="blog-contain blog-contain-2" :class="{ 'blog-contain-2': style === 'list_view' }">
          <div class="blog-label">
            <span class="time">
              <Icon name="ri-time-line"></Icon>
              <span>{{ dateFormatter(blog?.created_at) }}</span>
            </span>
            <span class="super" v-if="themeOption?.blog?.blog_author_enable">
              <Icon name="ri-user-line"></Icon>
              <span>{{ blog?.created_by?.name }}</span>
            </span>
          </div>
          <nuxt-link :to="`/blog/${blog?.slug}`">
            <h3>{{ blog?.title }}</h3>
          </nuxt-link>
          <p v-html="blog.description" v-if="blog?.description"></p>
          <nuxt-link :to="`/blog/${blog?.slug}`" class="blog-button" v-if="themeOption?.blog?.read_more_enable">
            {{ $t("Read More") }}
            <Icon name="ri-arrow-right-fill"></Icon>
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="custome-pagination" v-if="blog?.data?.length">
      <WidgetsPagination :Data="blog" @change-page="(toPage) => {
        ChangePage({ toPage });
      }" />
    </div>
  </div>
  <div v-else>
    <WidgetsNoData :classes="'no-data-added'" :image="'/svg/empty-items.svg'" :text="'No Blogs Found'"
      :description="'Oops! It seems that we could not find any blogs matching your search criteria.'"
      v-if="!blog?.data?.length">
    </WidgetsNoData>
  </div>
</template>

<script setup>
let props = defineProps({
  blog: Object,
  style: [String, Object],
  sidebar: String,
  filter: Object,
  themeOption: Object
});

const ChangePage = ({ toPage }) => {
  props.filter.page = toPage;
};
</script>
<style lang="scss" scoped></style>
