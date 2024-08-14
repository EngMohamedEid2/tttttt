<template>
<div>
  <div class="progress-sec" v-if="product?.quantity && product.quantity <= 10">
    <div class="left-progressbar">
      <h6>{{ $t("Please hurry! only") }} {{ product.quantity }} {{ $t("left in stock") }}</h6>
      <div class="progress"
        :class="{ 'danger-progress': product.quantity <= 2, 'warning-progress': product.quantity >= 3 && product.quantity <= 7 }"
        role="progressbar">
        <div class="progress-bar progress-bar-striped progress-bar-animated"
          :style="{ width: (product.quantity * 100) / 10 + '%' }"></div>
      </div>
    </div>
  </div>

  <div class="size-delivery-info" v-if="product.size_chart_image || (policy && product.is_return)">
    <a href="javascript:void(0)" @click="(sizeChartData) => { sizechartModal({ sizeChartData }) }"
      v-if="product.size_chart_image">
      <Icon name="ri:ruler-line"></Icon> {{ $t("Size Chart") }}
    </a>
    <a href="javascript:void(0)" @click="(policy) => { deliveryReturnModal({ policy }) }"
      v-if="policy && product.is_return">
      <Icon name="ri:truck-line"></Icon> {{ $t("Delivery Return") }}
    </a>
    <a href="javascript:void(0)" @click="(product) => { askQuestionModal({ product }) }"
      v-if="policy && product.is_return">
      <Icon name="ri:questionnaire-line"></Icon> {{ $t("Ask a Question") }}
    </a>
  </div>

  <WidgetsModalsCommon :showModal="sizeChartModal" @close="sizechartModal({ state: false })" :classes="'modal-lg'">
    <WidgetsModalsSizeChartModal :image="sizeChartData" @close="sizechartModal({ state: false })" />
  </WidgetsModalsCommon>

  <WidgetsModalsCommon :showModal="deliveryModal" @close="deliveryReturnModal({ state: false })" :classes="'modal-lg'">
    <WidgetsModalsDeliveryReturnModal :policy="policy" @close="deliveryReturnModal({ state: false })" />
  </WidgetsModalsCommon>

  <WidgetsModalsCommon :showModal="askQuestion" @close="askQuestionModal({ state: false })">
    <WidgetsModalsQuestionModal :product="product" @close="askQuestionModal({ state: false })" />
  </WidgetsModalsCommon>
</div>
</template>

<script setup>
let props = defineProps({
  product: Object,
  option: Object
})

let policy = ref('');

let sizeChartModal = ref(false)
let sizeChartData = props.product.size_chart_image
let deliveryModal = ref(false)
let askQuestion = ref(false)
policy.value = props?.option?.product?.shipping_and_return

function sizechartModal({ state = true, }) {
  sizeChartModal.value = state
}

function deliveryReturnModal({ state = true, }) {
  deliveryModal.value = state
}

function askQuestionModal({ state = true, }) {
  askQuestion.value = state
}
</script>

<style lang="scss" scoped></style>