<template>
  <div >
    <AccountOrdersDetailsTitleHeader :order="filteredOrder" />
    <AccountOrdersDetailsTrackingPanel :order="filteredOrder" :orderStatus="orderStatus" />
    <AccountOrdersDetailsProductTable :order="filteredOrder" />
    <div class="row">
      <div class="col-xxl-8 col-lg-12 col-md-7">
        <AccountOrdersDetailsConsumerDetails :order="filteredOrder" />
      </div>
      <div class="col-xxl-4 col-lg-12 col-md-5">
        <AccountOrdersDetailsSummaryDetails :order="filteredOrder" />
      </div>
    </div>
    <AccountOrdersDetailsSubOrders :order="filteredOrder" />
  </div>
</template>

<script setup>
const route = useRoute();
const filteredOrder = ref(null);


let { data: order, pending } = await HandleRequest(`order`, {
  key: "getAllSingleOrder",
  params: 10,
});

let { data: orderStatus } = await HandleRequest("orderStatus", {
  key: "getorderStatus",
  params: 10,
});

onMounted(() => {
  const params = route.params
  const orderId = params.order_number;

  if(orderId){
    const allOrders = order.value.data;
    filteredOrder.value = allOrders.find((order) => order.order_number == orderId); 
  } else {
    filteredOrder.value = null; 
  }
})
</script>

<style lang="scss" scoped></style>