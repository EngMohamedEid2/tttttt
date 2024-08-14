<template>
<div>
    <WidgetsBreadcrumb  :breadcrumbs="breadcrumbs"/>
    <section class="seller-grid-section section-b-space">
        <ShopSellerStoreBasic :stores="store?.data" :skeletonItems="skeletonItems" :skeletonLoader="skeletonLoader"
            v-if="layout === 'basic_store'"></ShopSellerStoreBasic>
        <ShopSellerStoreClassic :stores="store?.data" :skeletonItems="skeletonItems" :skeletonLoader="skeletonLoader"
            v-if="layout === 'classic_store'"></ShopSellerStoreClassic>
    </section>
    <div class="custome-pagination section-b-space" v-if="store?.data?.length">
        <WidgetsPagination :Data="store" @change-page="(toPage) => ChangePage({ toPage })" />
    </div>
</div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useDataStore } from '@/store/data';
let { ThemeOptions } = storeToRefs(useDataStore())
var breadcrumbs = { page: 'Sellers Store', links: [{ name: 'Sellers Store' }] }

let router = useRoute()
let skeletonLoader = ref(true)
let skeletonItems = Array.from({ length: 9 }, (_, index) => index);
let layout = ref(router?.query.layout);
let StoreParams = ref({ paginate: 9, page: 1, search: '' });

let { data: store } = await HandleRequest('store', { key: 'GetStore', params: StoreParams.value }, { initialCache: false });

watch(() => router?.query.layout, () => {
    if (router?.query.layout) {
        layout.value = router?.query.layout;
    } else {
        layout.value = ThemeOptions.value.options.seller && ThemeOptions.value.options.seller.store_layout ? ThemeOptions.value.options.seller.store_layout : 'basic_store';
    }
}, { deep: true })

const ChangePage = ({ toPage }) => {
    StoreParams.value.page = toPage;
}

onMounted(() => {
    setTimeout(() => {
        skeletonLoader.value = false
    }, 2000);
})
</script>

<style lang="scss" scoped></style>