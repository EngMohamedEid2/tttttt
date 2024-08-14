<template>
  <ul>
    <li v-for="page in  filteredPages" :key="page">
      <NuxtLink :to="`/pages/${page.slug}`" class="text-content">
        {{ page?.title }}
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup>
let props = defineProps({
  data: Object
})

const filteredPages = ref([]);

watch(data, () => {
  fetchFilteredPages();
});

const fetchFilteredPages = () => {
  let { data: pages } = HandleRequest(`page`, { key: `GetAllpages`, });
  const ids = props.data.value?.footer?.footer_pages;
  if (Array.isArray(ids)) {
    filteredPages.value = pages.value.data.filter((page) => ids.includes(page.id));
  }
};

onMounted(() => {
  fetchFilteredPages();
});
</script>
<style lang="scss" scoped></style>