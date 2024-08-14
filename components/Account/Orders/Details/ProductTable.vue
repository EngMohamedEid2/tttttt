<template>
    <div>
        <div class="card" v-if="order?.products?.length">
            <div class="card-body">
                <div class="tracking-wrapper table-responsive">
                    <table class="table product-table">
                        <thead>
                            <tr>
                                <th scope="col">{{ $t("Image") }}</th>
                                <th scope="col">{{ $t("Name") }}</th>
                                <th scope="col">{{ $t("Price") }}</th>
                                <th scope="col">{{ $t("Quantity") }}</th>
                                <th scope="col">{{ $t("Subtotal") }}</th>
                                <th scope="col">{{ $t("Refund Status") }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="product in order.products" :key="product">
                                <td class="product-image">
                                    <img :src="product?.pivot?.variation && product?.pivot?.variation?.variation_image
                                        ? product?.pivot?.variation?.variation_image?.original_url
                                        : product?.product_thumbnail
                                            ? product?.product_thumbnail?.original_url
                                            : '/images/product.png'" class="img-fluid" alt="product">
                                </td>
                                <td>
                                    <h6>{{ product?.pivot?.variation ? product?.pivot?.variation?.name : product?.name }}
                                    </h6>
                                </td>
                                <td>
                                    <h6>{{ store.currency.symbol }} {{
                                        Number(store.convertCurrency(product?.pivot?.single_price)).toFixed(2) }}</h6>
                                </td>
                                <td>
                                    <h6>{{ product?.pivot?.quantity }}</h6>
                                </td>
                                <td>
                                    <h6>{{ store.currency.symbol }} {{
                                        Number(store.convertCurrency(product?.pivot?.subtotal)).toFixed(2) }}</h6>
                                </td>
                                <td>
                                    <a href="javascript:void(0)" v-if="product?.is_return === 1 &&
                                        order?.payment_status && order?.payment_status === 'COMPLETED'
                                        && order.order_status && order.order_status.slug == 'delivered' &&
                                        !product?.pivot?.refund_status" @click="refundModal(product)">
                                        {{ $t("Ask For Refund") }}
                                    </a>
                                    <span v-else>
                                        <div class="status-{{product?.pivot?.refund_status?.toLowerCase()}}"
                                            v-if="product?.pivot?.refund_status">
                                            <span>{{ product?.pivot?.refund_status }}</span>
                                        </div>
                                        <div v-if="!product?.pivot?.refund_status">{{ '-' }}</div>
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <WidgetsModalsCommon :showModal="refund" @close="refund = false">
            <WidgetsModalsRefundModal :product="singleProduct" :orderId="order.id" @close="refund = false" />
        </WidgetsModalsCommon>
    </div>
</template>

<script setup>
import { useCurrencyStore } from '@/store/currency'
let props = defineProps({
    order: Object,
})

let store = useCurrencyStore();
store.allCurrency();

let refund = ref(false);
let singleProduct = ref({})
function refundModal(product, state = true) {
    refund.value = state;
    singleProduct.value = product
}

</script>

<style lang="scss" scoped></style>