<template>
    <div class="modal-content">
        <div class="modal-header">
            <div>
                <h5 class="modal-title w-100">{{ $t("Deal Today") }}</h5>
                <p class="mt-1 text-content">{{ $t('Recommended deals for you.') }}</p>
            </div>
        </div>
        <div class="modal-body">
            <div class="deal-offer-box">
                <ul class="deal-offer-list">
                    <li class="list-1" v-for="product in TopDealInitial" :key="product">
                        <!-- <pre>{{ product }}</pre> -->
                        <div class="deal-offer-contain">
                            <NuxtLink class="deal-image" :to="`/product/${product?.slug}`"
                                @click="() => { emit('close'); }">
                                <img :src="product?.product_thumbnail ? product?.product_thumbnail?.original_url : 'images/product.png'"
                                    alt="product" height="100" width="100">
                            </NuxtLink>
                            <NuxtLink class="deal-contain" :to="`/product/${product?.slug}`" @click="() => { emit('close'); }">
                                <h5 class="fw-semibold">{{ product?.name }}</h5>
                                <h6>${{ Number(product?.sale_price).toFixed(2) }} <del>{{
                                    Number(product?.price).toFixed(2) }}</del> <span v-if="product?.unit">{{
        product?.unit }}</span></h6>
                            </NuxtLink>
                        </div>
                    </li>
                </ul>
            </div>
            <WidgetsNoData :classes="'no-data-added bg-light'" :text="'No Product Found'" v-if="!TopDealInitial?.length">
            </WidgetsNoData>
        </div>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useDataStore } from '~/store/data';

let { Products } = storeToRefs(useDataStore())
const props = defineProps({
    todayDeal: Object
})

let emit = defineEmits(['close'])
let TopDealInitial = ref()
TopDealInitial.value = Products?.value?.data?.filter((product) =>
    props.todayDeal?.includes(product.id)
);
</script>

<style lang="scss" scoped></style>