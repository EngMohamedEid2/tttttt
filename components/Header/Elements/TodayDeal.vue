<template>
<div>
    <!-- Deal Basic Style -->
    <button class="btn deal-button" @click="(data) => { toggleModal({ data }) }" v-if="style == 'basic'">
        <Icon name="ri:flashlight-line"></Icon>
        <span>{{ $t('Deal Today') }}</span>
    </button>
    <!-- Deal Standard Style -->
    <a class="btn theme-bg-color ms-3 fire-button" @click="(data) => { toggleModal({ data }) }" v-if="style == 'standard'">
        <div class="fire">
            <img src="/images/icon/hot-sale.png" class="img-fluid" alt="">
        </div>
        <span>{{ $t('Hot Deals') }}</span>
    </a>
    <!-- Deal Modal -->
    <WidgetsModalsCommon modalClass="deal-modal" :showModal="todaysDeals" @close="toggleModal({ state: false })">
        <HeaderElementsDeals :todayDeal="ModalData" @close="toggleModal({ state: false })" />
    </WidgetsModalsCommon>
</div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useDataStore } from '~/store/data';
const props = defineProps({
    style: { type: [String,Object], default: 'basic' },
})

let todaysDeals = ref(false)
let ModalData = ref()
let { ThemeOptions } = storeToRefs(useDataStore())

function toggleModal({ state = true, }) {
    ModalData.value = ThemeOptions?.value?.options?.header?.today_deals
    todaysDeals.value = state
}
</script>
