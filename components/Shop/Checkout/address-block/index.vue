<template>
  <div>
    <div class="empty-box" v-if="!addresses?.length">
      <h2>{{ $t("No Address Found") }}</h2>
    </div>
    <div class="row g-3">
      <div
        class="col-xxl-6 col-lg-12 col-md-6"
        v-for="(address, index) of computedAddresses"
        :key="index"
      >
        <label :for="`address-${type}-${address.id}`">
          <div class="delivery-address-box">
            <div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  :value="address.id"
                  :name="`address-${type}`"
                  :id="`address-${type}-${address.id}`"
                  @change="
                    useCheckoutStore().SetCheckoutAddress({
                      type,
                      id: address.id,
                    })
                  "
                />
              </div>
              <ul class="delivery-address-detail">
                <li>
                  <h4 class="fw-semibold">{{ address?.title }}</h4>
                </li>
                <li>
                  <p class="text-content">
                    <span class="text-title">{{ $t("Address") }}: </span>
                    <!-- {{ address?.street }}, {{ address?.city }}, {{ address?.state?.name }},
                                    {{ address?.country?.name }} -->
                    {{ address.address }} , {{ address.city_name }}
                  </p>
                </li>
                <li v-if="address?.zip_code">
                  <h6 class="text-content">
                    <span class="text-title">{{ $t("Zip Code") }}:</span>
                    {{ address?.zip_code }}
                  </h6>
                </li>
                <li v-if="address?.phone">
                  <h6 class="text-content mb-0">
                    <span class="text-title">{{ $t("Phone") }} :</span> +{{
                      address?.country_code
                    }}
                    {{ address?.phone }}
                  </h6>
                </li>
              </ul>
            </div>
          </div>
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useUserStore } from "~~/store/user";
import { useCheckoutStore } from "~~/store/checkout";
let props = defineProps({
  addresses: Object,
  type: {
    default: "shipping",
    type: String,
  },
  modelValue: Object,
});

const computedAddresses = computed(() => props.addresses || []);

const selectedAddressId = ref(null);

let emit = defineEmits(["selectAddress"]);

let { UserInfo } = storeToRefs(useUserStore()),
  AddressModal = ref({ show: false, type: props.type }),
  AddressForm = ref(null);

watch(
  () => props.addresses,
  (newAddresses) => {
    if (newAddresses && newAddresses.length > 0) {
      selectedAddressId.value = newAddresses[0].id;
      emit("selectAddress", selectedAddressId.value);
    }
  }
);

const set = (event) => {
  selectedAddressId.value = Number(event.target?.value);
  emit("selectAddress", selectedAddressId.value);
};

if (props.addresses && props.addresses.length > 0) {
  selectedAddressId.value = props.addresses[0].id;
  useCheckoutStore().SetCheckoutAddress({
    type: props.type,
    id: selectedAddressId.value,
  });
  emit("selectAddress", selectedAddressId.value);
}
onMounted(() => {
  if (props.addresses && props.addresses.length > 0) {
    selectedAddressId.value = props.addresses[0].id;
    useCheckoutStore().SetCheckoutAddress({
      type: props.type,
      id: selectedAddressId.value,
    });
    emit("selectAddress", selectedAddressId.value);
  }
});
</script>

<style lang="scss" scoped></style>
