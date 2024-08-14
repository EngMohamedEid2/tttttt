<template>
  <div>
    <div class="left-sidebar-box wow fadeInUp">
      <div class="accordion left-accordion-box" id="accordionPanelsStayOpenExample">
        <div class="accordion-item">
          <BlogSidebarRecentPost :blogs="blogs?.data" />
        </div>

        <div class="accordion-item">
          <BlogSidebarBlogCategory />
        </div>

        <div class="accordion-item">
          <BlogSidebarBlogTag />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
let props = defineProps({
  blogs: Object,
});
</script>

<style lang="scss" scoped></style>
