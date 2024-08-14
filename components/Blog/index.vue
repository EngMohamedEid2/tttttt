<template>
  <section class="blog-section section-b-space">
    <div class="container-fluid-lg">
      <div class="row g-4">
        <div class="col-xxl-9 col-xl-8 col-lg-7" :class="{
          'order-lg-2': sidebar === 'left_sidebar',
          'col-xxl-12 col-xl-12 col-lg-12': sidebar === 'no_sidebar',
          'col-xxl-9 col-xl-8 col-lg-7': sidebar !== 'no_sidebar',
        }">

          <div v-if="skeletonLoader">
            <div class="row g-4">
              <div :class="style === 'list_view'
                ? 'col-12 list_view'
                : 'col-xxl-4 col-sm-6'

                " v-for="item in skeletonItems" :key="item">
                <BlogSkeletonBlogs :type="'grid'" />
              </div>
            </div>
          </div>

          <template v-else>
            <BlogContent :blog="blog" :style="style" :sidebar="sidebar" :filter="filter" :themeOption="themeOption" />
          </template>
        </div>
        <div class="col-xxl-3 col-xl-4 col-lg-5" :class="{
          'order-lg-1': sidebar === 'left_sidebar',
          'd-none': sidebar === 'no_sidebar',
        }">
          <div class="left-sidebar-box">
            <BlogSkeletonBlogs :type="'sidebar'" v-if="skeletonLoader" />
            <BlogSidebar :blogs="blog" v-else />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
let props = defineProps({
  blog: Object,
  style: [String,Object],
  sidebar: String,
  filter: Object,
  themeOption: Object
});

const skeletonLoader = ref(true)
let skeletonItems = Array.from({ length: 12 }, (_, index) => index);
onMounted(() => {
  setTimeout(() => {
    skeletonLoader.value = false
  }, 2000);
})
</script>

<style lang="scss" scoped></style>
