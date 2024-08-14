<template>
  <div>
    <WidgetsBreadcrumb :breadcrumbs="breadcrumbs" />
    <Blog
      :style="style"
      :sidebar="sidebar"
      :blog="blog"
      :themeOption="ThemeOptions.options"
      :filter="filter"
    />
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useDataStore } from "@/store/data";
let filter = ref({
  page: 1,
  paginate: 12,
  status: 1,
  category: "",
  tag: "",
});
let router = useRoute();
let style = ref("");
let sidebar = ref("left_sidebar");
let { ThemeOptions } = storeToRefs(useDataStore());

let breadcrumb = ref({
  title: "Blogs",
});
let breadcrumbs = ref();

let { data: blog, pending } = await HandleRequest("blog", {
  key: "getfilterblogs",
  params: filter.value,
});

function handleBlog() {
  const params = router.query;
  filter.value.category = params["category"] ? params["category"] : "";
  filter.value.tag = params["tag"] ? params["tag"] : "";

  if (params["style"]) {
    style.value = params["style"];
  }

  if (params["sidebar"]) {
    sidebar.value = params["sidebar"];
  }

  if (!params["style"] && !params["sidebar"]) {
    // Get Blog Layout
    style.value = ThemeOptions?.value?.options?.blog?.blog_style;
    sidebar.value = ThemeOptions?.value?.options?.blog.blog_sidebar_type;
  }

  breadcrumb.value.title = filter.value.category
    ? `Blogs: ${filter.value.category.replaceAll("-", " ")}`
    : filter.value.tag
    ? `Blogs: ${filter.value.tag.replaceAll("-", " ")}`
    : "Blogs";
  breadcrumbs.value = {
    page: breadcrumb.value.title,
    links: [{ name: "Blogs" }],
  };
}

watch(
  () => router.query,
  () => {
    handleBlog();
  },
  { deep: true }
);

onMounted(() => {
  handleBlog();
});
console.log(useRoute().path);
</script>
<style lang="scss" scoped></style>
