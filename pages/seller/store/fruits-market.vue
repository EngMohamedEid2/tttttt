<template>
    <div>
        <WidgetsBreadcrumb :breadcrumbs="breadcrumbs" />
        <ShopSellerDetailsBasic :store="store" v-if="layout == 'basic_store_details'" :layout="layout">
        </ShopSellerDetailsBasic>
        <ShopSellerDetailsClassic :store="store" v-if="layout == 'classic_store_details'" :layout="layout">
        </ShopSellerDetailsClassic>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useDataStore } from '@/store/data';
let { ThemeOptions } = storeToRefs(useDataStore())
var breadcrumbs = { page: 'Fruits Market', links: [{ name: 'Sellers Store' }, { name: 'Fruits Market' }] }

let router = useRoute()
const layout = ref('basic_store_details');
;

let StoreParams = ref({ paginate: 9, page: 1, search: '' });
let { data: store } = await HandleRequest('store/slug/fruits-market', { key: 'GetStore', params: StoreParams.value }, { initialCache: false });

watch(() => router?.query.layout, () => {
    if (router?.query.layout) {
        layout.value = router?.query.layout;
    } else {
        layout.value = ThemeOptions.value.options.seller && ThemeOptions.value.options.seller.store_layout ? ThemeOptions.value.options.seller.store_layout : 'basic_store';
    }
}, { deep: true })


</script>

<style lang="scss" scoped></style>