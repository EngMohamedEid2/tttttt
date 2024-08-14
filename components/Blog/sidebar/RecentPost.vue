<template>
<div>
  <div>
    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse"
        data-bs-target="#panelsStayOpen-collapseOne">
        {{ $t("Recent Post") }}
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
      <div class="accordion-body pt-0">
        <div class="recent-post-box">
          <div class="recent-box" v-for="blog in blogs?.slice(1, 5)" :key="blog">
            <NuxtLink :to="`/blog/${blog?.slug}`" class="recent-image">
              <img
                :src="blog?.blog_thumbnail?.original_url"
                class="bg-fluid" :alt="blog?.title" />
            </NuxtLink>

            <div class="recent-detail">
              <NuxtLink :to="`/blog/${blog?.slug}`" class="recent-image">
                <h5 class="recent-name">{{ blog?.title }}</h5>
                <h6>{{ dateFormatter(blog.created_at) }}</h6>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <WidgetsNoData :classes="'no-data-added bg-light'" :text="'No Blog Found'" v-if="!blogs?.length">
  </WidgetsNoData>
</div>
</template>

<script setup>
let props = defineProps({
  blogs: Object,
});
</script>

<style lang="scss" scoped></style>