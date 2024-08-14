<template>
    <div class="card">
        <div class="card-body">
            <h3 class="fw-semibold mb-3">{{ $t("Consumer Details") }}</h3>
            <div class="customer-detail tracking-wrapper">
                <ul class="row g-3">
                    <li class="col-sm-6" v-if="order?.billing_address">
                        <label>{{ $t("Billing Address") }}:</label>
                        <h4>
                            {{ order.billing_address.street }}
                            {{ order.billing_address.city }} {{ order.billing_address.state.name }} {{
                                order.billing_address.country.name }}
                            {{ order.billing_address.pincode }} <br>
                            {{ $t("Phone") }} : +{{ order.shipping_address.country_code }} {{ order.billing_address.phone }}
                        </h4>
                    </li>
                    <li class="col-sm-6" v-if="order?.shipping_address">
                        <label>{{ $t("Shipping Address") }}:</label>
                        <h4>
                            {{ order.shipping_address.street }}
                            {{ order.shipping_address.city }} {{ order.shipping_address.state.name }} {{
                                order.shipping_address.country.name }}
                            {{ order.shipping_address.pincode }} <br>
                            {{ $t("Phone") }} : +{{ order.shipping_address.country_code }} {{ order.shipping_address.phone
                            }}
                        </h4>
                    </li>
                    <li class="col-sm-6" v-if="order?.delivery_description">
                        <label>{{ $t("Delivery Slot") }}:</label>
                        <h4>{{ order.delivery_description }}</h4>
                    </li>
                    <li class="col-sm-3" v-if="order?.payment_method">
                        <label>{{ $t("Payment Mode") }}:</label>
                        <div class="d-flex align-items-center gap-2">
                            <h4>{{ transform(order.payment_method) }}</h4>
                        </div>
                    </li>
                    <li class="col-sm-3" v-if="order?.payment_method">
                        <label>{{ $t("Payment Status") }}:</label>
                        <div class="d-flex align-items-center gap-2">
                            <h4>{{ order.payment_status }}</h4>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
let props = defineProps({
    order: Object
})
</script>

<style lang="scss" scoped></style>