<template>

  <nav class="custome-pagination section-b-space" v-if="Data?.total">
    <ul class="pagination justify-content-center">
      <li class="page-item" :class="[{ disabled: Data.current_page === 1 }]">
        <a class="page-link" href="javascript:void(0)" @click="ChangePageTo(Data.current_page - 1)">
          <Icon name="ri:arrow-left-s-line"></Icon>
        </a>
      </li>
      <li class="page-item" v-if="Data.current_page > 3 && totalPages > 4">
        <a class="page-link" href="javascript:void(0)" @click="ChangePageTo(1)">
          1
        </a>
      </li>
      <li class="page-item" v-if="Data.current_page > 3 && totalPages > 4">
        <a class="page-link">...</a>
      </li>
      <li class="page-item" :class="[{ active: Data.current_page === page }]" v-for="(page, index) in pages" :key="index">
        <a class="page-link" href="javascript:void(0)" @click="ChangePageTo(page)">
          {{ page }}
        </a>
      </li>

      <li class="page-item" v-if="Data.current_page + 1 < totalPages && totalPages > 4">
        <a class="page-link">...</a>
      </li>
      <li class="page-item" v-if="Data.current_page + 1 < totalPages && totalPages > 4">
        <a class="page-link" href="javascript:void(0)" @click="ChangePageTo(totalPages)">
          {{ totalPages }}
        </a>
      </li>

      <li class="page-item" :class="[{ disabled: Data.current_page === totalPages }]">
        <a class="page-link" href="javascript:void(0)" @click="ChangePageTo(Data.current_page + 1)">
          <Icon name="ri:arrow-right-s-line"></Icon>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
let props = defineProps({
  Data: Object,
});
let currentPage = ref(1);
let emit = defineEmits(["changePage"]);
let pages = ref([]),
  totalPages = ref(0);

const SetPages = () => {
  pages.value = [];
  totalPages.value = Math.ceil(props.Data?.total / props.Data?.per_page);
  let startpage =
    totalPages.value === 4
      ? 1
      : props.Data?.current_page === 1 || props.Data?.current_page - 2 === 0
        ? 1
        : props.Data?.current_page === totalPages.value
          ? props.Data?.current_page - 2
          : props.Data?.current_page - 1;
  let endPage =
    totalPages.value === 4
      ? 4
      : props.Data?.current_page === 1
        ? props.Data?.current_page + 2
        : props.Data?.current_page + 1 <= totalPages.value
          ? props.Data?.current_page + 1
          : props.Data?.current_page;
  for (let i = startpage; i <= endPage; i++) {
    i <= totalPages.value && pages.value.push(i);
  }
};

function ChangePageTo(toPage) {
  if (toPage >= 1 && toPage <= props.Data?.last_page) {
    currentPage.value = toPage;
  }
  emit("changePage", currentPage.value);
  useNuxtApp().$emitter.emit("change-page", currentPage.value);
}

SetPages();

watch(
  () => props.Data,
  () => {
    SetPages();
  },
  { deep: true }
);
</script>
<style lang="scss" scoped></style>
