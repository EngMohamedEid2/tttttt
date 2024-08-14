<template>
    <div class="card" v-if="order?.sub_orders?.length">
        <div class="card-body">
            <div class="tracking-wrapper table-responsive">
                <table class="table product-table">
                    <thead>
                        <tr>
                            <th scope="col">{{ $t("Order Number") }}</th>
                            <th scope="col">{{ $t("Order Date") }}</th>
                            <th scope="col">{{ $t("Total Amount") }}</th>
                            <th scope="col">{{ $t("Status") }}</th>
                            <th scope="col">{{ $t("Action") }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(subOrder, index) in order.sub_orders" :key="index">
                            <td>
                                <h6>{{ '#' + subOrder.order_number }}</h6>
                            </td>
                            <td>
                                <h6>{{ dateFormatter(subOrder.created_at) }}</h6>
                            </td>
                            <td>
                                <h6>{{ store.currency.symbol }} {{ Number(store.convertCurrency(subOrder.amount)).toFixed(2)
                                }}</h6>
                            </td>
                            <td>
                                <h6>
                                    <div :class="`status-${subOrder.order_status.slug}`">
                                        <span>{{ transform(subOrder.order_status.name) }}</span>
                                    </div>
                                </h6>
                            </td>
                            <td>
                                <nuxt-link href="javascript:void(0)"
                                    :to="`/account/order/details/${subOrder.order_number}`">
                                    <Icon name="ri-eye-line"></Icon>
                                </nuxt-link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useCurrencyStore } from '@/store/currency'
let props = defineProps({
    order: Object
})

let store = useCurrencyStore();
store.allCurrency();
</script>

<style lang="scss" scoped></style>