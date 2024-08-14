<template>
  <section class="section-lg-space">
    <div class="container-fluid-lg">
      <div class="about-us-title text-center">
        <h4 class="text-content">{{ $t("Our Blog") }}</h4>
        <h2 class="center">{{ $t("Our Latest Blog") }}</h2>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="slider-dots">
            <swiper :autoplay="{ delay: 2500, disableOnInteraction: true }" :loop="true" :slides-per-view="5"
              :space-between="15" :pagination="{ clickable: true }"  :modules="modules">
              <swiper-slide v-for="blog in blogs" :key="blog">
                <div>
                  <div class="blog-box">
                    <div class="blog-box-image">
                      <div class="blog-image">
                        <nuxtLink :to="`/blog/${blog.slug}`">
                          <img :src="blog.blog_thumbnail.original_url
                              ? blog.blog_thumbnail.original_url
                              : '/images/product.png'
                            " :alt="blog.title" />
                        </nuxtLink>
                      </div>
                    </div>
                    <nuxtLink :to="`/blog/${blog.slug}`" class="blog-detail d-block">
                      <h6>{{ blog.created_by.name }}</h6>
                      <h5>{{ blog.title }}</h5>
                    </nuxtLink>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
            <WidgetsNoData :classes="'no-data-added bg-light'" :text="'No Blog Found'" v-if="!blogs?.length">
            </WidgetsNoData>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useDataStore } from "~/store/data";
import { Pagination, Autoplay } from "swiper";
let modules = [Pagination, Autoplay];
let { ThemeOptions, Blogs } = storeToRefs(useDataStore());
let blogs = ref([]);
blogs.value = Blogs?.value?.data?.filter((blog) =>
  ThemeOptions.value.options.about_us?.blog.blog_ids?.includes(blog.id)
);
</script>

<style lang="scss" scoped></style>
