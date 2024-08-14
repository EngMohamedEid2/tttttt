<template>
  <div class="product-count"
    v-if="(option?.product?.encourage_order && product?.encourage_order) || (option?.product?.encourage_view && product?.encourage_view)">
    <ul>
      <li v-if="option?.product?.encourage_order && product?.encourage_order">
        <Icon name="ri-flashlight-line" size="18"></Icon>
        <h6 class="lang">{{ ordersCount }} {{ $t('Customers Ordered') }}</h6>
      </li>
      <li v-if="option?.product?.encourage_view && product?.encourage_view">
        <Icon name="ri-eye-line" size="18"></Icon>
        <h6 class="lang">{{ viewsCount }} {{ 'Active View in this item' }}</h6>
      </li>
    </ul>
  </div>
</template>

<script setup>
let props = defineProps({
  option: { type: Object },
  product: { type: Object }
})

let ordersCount = ref(10);
let viewsCount = ref(30);
let countsInterval = ref();

const updateViewsCount = () => {
  const encourage_max_view_count = props.option.value?.product?.encourage_max_view_count || 100;
  viewsCount.value = Math.floor(Math.random() * encourage_max_view_count) + 1;
};

const updateOrdersCount = () => {
  const encourage_max_order_count = props.option.value?.product?.encourage_max_order_count || 100;
  ordersCount.value = Math.floor(Math.random() * encourage_max_order_count) + 1;
};

onMounted(() => {
  updateViewsCount();
  updateOrdersCount();

  countsInterval.value = setInterval(() => {
    updateViewsCount();
  }, 5000);

  countsInterval.value = setInterval(() => {
    updateOrdersCount();
  }, 60000);
});

onUnmounted(() => {
  clearInterval(countsInterval.value);
});
</script>

<style lang="scss" scoped></style>