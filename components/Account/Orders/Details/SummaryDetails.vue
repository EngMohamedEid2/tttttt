<template>
    <div class="card h-m30">
        <div class="card-body">
            <h3 class="fw-semibold mb-3">
                {{ $t("Summary") }}
            </h3>
            <div class="tracking-total tracking-wrapper">
                <ul>
                    <li>{{ $t("Subtotal") }} <span>{{ store.currency.symbol }} {{ Number(store.convertCurrency(order?.amount
                        ? order?.amount : 0)).toFixed(2) }}</span></li>
                    <li>{{ $t("Shipping") }} <span>{{ store?.currency.symbol }} {{
                        Number(store.convertCurrency(order?.shipping_total ? order?.shipping_total : 0)).toFixed(2)
                    }}</span></li>
                    <li>{{ $t("Tax") }} <span>{{ store?.currency.symbol }} {{ Number(store?.convertCurrency(order?.tax_total
                        ?
                        order?.tax_total : 0)).toFixed(2) }}</span></li>
                    <li class="txt-primary fw-bold" v-if="order?.points_amount != 0">{{ $t("Points") }} <span>{{
                        order?.points_amount }}</span></li>
                    <li class="txt-primary fw-bold" v-if="order?.wallet_balance != 0">{{ $t("Wallet Balance") }} <span>{{
                        store?.currency?.symbol }} {{ Number(store.convertCurrency(order?.wallet_balance)).toFixed(2)
    }}</span></li>
                    <li class="txt-primary fw-bold" v-if="order?.coupon_total_discount != 0">{{ $t("Coupon Discount") }}
                        <span>{{ store?.currency?.symbol }} {{
                            Number(store.convertCurrency(order?.coupon_total_discount)).toFixed(2) }}</span>
                    </li>
                    <li>{{ $t("Total") }} <span>{{ store?.currency?.symbol }} {{ (order?.total ? order.total : 0) }}</span>
                    </li>
                </ul>
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