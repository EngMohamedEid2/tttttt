<template>
    <div class="mb-4">
        <div class="tracking-panel">
            <ul v-if="order && !order?.sub_orders?.length">
                <template v-for="(orderStatus,index) in orderStatus?.data" :key="index">
                    <li :class="{
                        'd-none': (orderStatus?.sequence >= order?.order_status?.sequence
                            && (order?.order_status && order?.order_status.slug == 'cancelled')) ||
                            orderStatus?.slug == 'cancelled', 'active': orderStatus?.sequence <= order?.order_status?.sequence
                    }">
                        <div class="panel-content">
                            <div class="icon">
                                <img :src="`/svg/tracking/${orderStatus?.slug}.svg`" class="img-fluid" alt="image">
                            </div>
                            <div class="status">{{ transform(orderStatus?.name?.replace('_', ' ')) }}</div>
                        </div>
                    </li>
                </template>

                <li class="active cancelled-box" v-if="order?.order_status && order?.order_status?.slug == 'cancelled'">
                    <div class="panel-content" v-if="order?.order_status">
                        <div class="icon">
                            <img :src="`/svg/tracking/${order.order_status.slug}.svg`" class="img-fluid" alt="image">
                        </div>
                        <div class="status">{{ transform(order.order_status.name.replace('_', ' ')) }}</div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
let props = defineProps({
    order: Object,
    orderStatus: Object
})
</script>

<style lang="scss" scoped></style>