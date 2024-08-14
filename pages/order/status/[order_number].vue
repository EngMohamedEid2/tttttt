<template>
    <div>
        <WidgetsBreadcrumb />
        <section class="section-b-space order-tracking-sec" v-if="!pending">
            <div class="container-fluid-lg">
                <div class="row">
                    <div class="col-12 mb-4">
                        <div class="order-detail-title">
                            <h2>Your order: {{ data.order_number }}</h2>
                            <div class="right-detail">
                                <label v-if="data.payment_status.toLowerCase().includes('complete')">Status : <span
                                        class="text-theme">Completed</span></label>
                                <a href="#" class="btn btn-2-animation btn-animation btn-md" v-else>Pay Now</a>
                                <a href="#" class="btn btn-2-animation btn-animation btn-md">Download Invoice</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-9">
                        <div class="mb-4">
                            <div class="tracking-panel">
                                <ul>
                                    <li :class="[{ active: index + 1 <= data.order_status.sequence }]"
                                        v-for="(status, index) in order_statuses" :key="`OrderStatus${index}`">
                                        <div class="panel-content">
                                            <div class="icon">
                                                <component :is="status.component" />
                                            </div>
                                            <div class="status">
                                                {{ status.title }}
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="tracking-wrapper">
                            <OrderTable :items="data.products" />
                        </div>

                    </div>
                    <OrderStatusRightSidebar :order="data" v-if="data" />
                </div>
            </div>
        </section>
    </div>

</template>

<script setup>
let { data, refresh, pending } = await useFetch(`trackOrder/${useRoute().params.order_number}`, {
    baseURL: BaseUrl,
    headers: GetHeaders(),
    method: 'get',
    key: `GetOrder${useRoute().params.order_number}`,
    cache: false
}), order_statuses = ref([
    { title: 'Order Processed', component: "CommonSvgOrderStatusProcessed" },
    { title: 'Order Shipped', component: "CommonSvgOrderStatusShipped" },
    { title: 'Order Enroute', component: "CommonSvgOrderStatusEnroute" },
    { title: 'Order Arrived', component: "CommonSvgOrderStatusArrived" },
])
</script>

<style lang="scss" scoped></style>