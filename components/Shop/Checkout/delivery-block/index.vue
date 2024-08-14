<template>
    <div class="checkout-detail">
        <div class="row g-4">
            <div class="col-xxl-6" v-if="setting?.delivery">
                <div class="delivery-option">
                    <div class="delivery-category">
                        <div class="shipment-detail w-100">
                            <div class="form-check custom-form-check hide-check-box">
                                <input class="form-check-input" type="radio" name="standard" id="standard" :checked="true"
                                    @change="useCheckoutStore().setDeliveryDescription(setting.delivery.default.title + ' | ' + setting.delivery.default.description, 'standard')">
                                <label class="form-check-label" for="standard">
                                    {{ setting.delivery.default.title }} | {{ setting.delivery.default.description }}
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xxl-6" v-if="setting?.delivery?.same_day_delivery">
                <div class="delivery-option">
                    <div class="delivery-category">
                        <div class="shipment-detail w-100">
                            <div class="form-check mb-0 custom-form-check show-box-checked">
                                <input class="form-check-input" type="radio" name="standard" id="future"
                                    @change="useCheckoutStore().setDeliveryDescription(setting.delivery.same_day.title + ' | ' + setting.delivery.same_day.description), setDeliveryDescription('same_day')">
                                <label class="form-check-label" for="future">
                                    {{ setting.delivery.same_day.title }} | {{ setting.delivery.same_day.description }}
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 future-box" :class="{ 'show': deliveryType && deliveryType == 'same_day' }"
                v-if="setting?.delivery?.same_day_delivery">
                <div class="future-option">
                    <div class="delivery-items">
                        <div>
                            <h4>{{ $t('Select Timing Slot:') }}:</h4>
                            <ul>
                                <li :class="{ 'active': selectedTitle == intervals.title }"
                                    v-for="(intervals, i) in setting.delivery.same_day_intervals" :key="i"
                                    @click="useCheckoutStore().setDeliveryInterval(intervals.description), setDeliveryInterval(intervals.description, intervals.title)">
                                    <a href="javascript:void(0)">{{ intervals.description }}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useCheckoutStore } from '~~/store/checkout';
let props = defineProps({
    setting: Object,
})
const emit = defineEmits(['selectDelivery']);

let selectedTitle = ref("");
let deliveryType = ref("")
let delivery_description = ref("")
let delivery_interval = ref("")

function setDeliveryDescription(type) {
    deliveryType.value = type;

}

function setDeliveryInterval(value, title) {
    selectedTitle.value = title;
    delivery_interval.value = value;
    let delivery = {
        delivery_description: delivery_description.value,
        delivery_interval: delivery_interval.value,
    }
    emit("selectDelivery", delivery);
}
if (props.setting?.delivery) {
    let delivery = {
        delivery_description: props.setting.delivery?.default?.title + ' | ' + props.setting.delivery?.default?.description,
        delivery_interval: delivery_interval.value,
    }
    useCheckoutStore().setDeliveryDescription(props.setting?.delivery?.default?.title + ' | ' + props.setting?.delivery?.default?.description);
    emit("selectDelivery", delivery);
}
onMounted(() => {
    if (props.setting?.delivery) {
        let delivery = {
            delivery_description: props.setting.delivery?.default?.title + ' | ' + props.setting.delivery?.default?.description,
            delivery_interval: delivery_interval.value,
        }
        emit("selectDelivery", delivery);
        useCheckoutStore().setDeliveryDescription(props.setting?.delivery?.default?.title + ' | ' + props.setting?.delivery?.default?.description);
        emit("selectDelivery", delivery);
    }
})
</script>