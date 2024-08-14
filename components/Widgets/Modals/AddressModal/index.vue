<template>
  <div>
    <div class="modal-header">
      <h3 class="fw-semibold">
        {{ typeof addressId == "number" ? "Edit Address" : "Add Address" }}
      </h3>
      <WidgetsButton
        :classes="'btn btn-close'"
        :id="'address_modal_close_btn'"
        @onClick="
          () => {
            emit('close');
          }
        "
      >
        <Icon name="ri-close-line" />
      </WidgetsButton>
    </div>
    <form>
      <div class="modal-body address-form">
        <div class="row g-4">
          <div class="col-xxl-12">
            <div class="">
              <label class="form-label" for="name">{{ "name" }}</label>
              <WidgetsInputFieldsNonEmptyField
                classes="form-control"
                :formSubmitted="formSubmitted"
                v-model="input.name"
                id="name"
                placeholder="Enter name"
              />
            </div>
          </div>
          <div class="col-xxl-12">
            <div class="">
              <label class="form-label" for="title">{{ "Title" }}</label>
              <WidgetsInputFieldsNonEmptyField
                classes="form-control"
                :formSubmitted="formSubmitted"
                v-model="input.title"
                id="title"
                placeholder="Enter Title"
              />
            </div>
          </div>
          <div class="col-12">
            <div class="">
              <label class="form-label" for="address1">{{ "Address" }}</label>
              <WidgetsInputFieldsNonEmptyField
                classes="form-control"
                :formSubmitted="formSubmitted"
                v-model="input.street"
                id="address1"
                placeholder="Enter Address"
              />
            </div>
          </div>
          <!-- <div class="col-6">
            <div class="">
              <label class="form-label me-2" for="address1">{{
                "Country"
              }}</label>
              <WidgetsInputFieldsSearchDropdown
                get-value-key="id"
                display-key="name"
                :form-submitted="formSubmitted"
                v-model="input.country_id"
                placeholder="Select Country"
                :holdKey="true"
                :display-value="input.country_id?.selected?.name"
                :options="ResponseCountries"
                :initialData="
                  ResponseCountries.filter(
                    (item) => item.id == input.country_id.data
                  )[0]
                "
              />
            </div>
          </div> -->
          <!-- <div class="col-6">
          <div class="">
            <label class="form-label me-2" for="address1">{{ 'State' }}</label>
            <WidgetsInputFieldsSearchDropdown get-value-key="id" placeholder="Select State" display-key="name"
              :form-submitted="formSubmitted" v-model="input.state_id" :display-value="input.state_id?.selected?.name"
              :options="states" :initialData="ResponseStates.filter((item) => item.id == input.state_id.data)[0]" />
          </div>
        </div> -->
          <div class="col-6">
            <div class="">
              <label class="form-label" for="address1">{{ "City" }}</label>
              <WidgetsInputFieldsNonEmptyField
                classes="form-control"
                :formSubmitted="formSubmitted"
                v-model="input.city"
                id="title"
                placeholder="Enter City"
              />
            </div>
          </div>
          <div class="col-6">
            <div class="">
              <label class="form-label" for="address1">{{ "Zip code" }}</label>
              <WidgetsInputFieldsNonEmptyField
                classes="form-control"
                :formSubmitted="formSubmitted"
                v-model="input.pincode"
                id="title"
                placeholder="Enter Zipcode"
              />
            </div>
          </div>
          <div class="col-12 phone-field">
            <div class="">
              <div class="d-flex row">
                <label class="form-label" for="phone">{{
                  "Phone Number"
                }}</label>
                <!-- <span class="col-sm-2 col-3 pe-0">
                <WidgetsInputFieldsSearchDropdown :formSubmitted="formSubmitted" :select-first="true" getValueKey="id"
                  display-key="name" v-model="input.country_code" :form-submitted="formSubmitted"
                  :options="AllCountryCode" />
              </span> -->
                <span class="col-sm-10 col-9 ps-0">
                  <WidgetsInputFieldsNumberField
                    type="number"
                    :formSubmitted="formSubmitted"
                    classes="form-control"
                    errorMessage="phone number is required."
                    v-model="input.phone"
                    id="phone"
                    placeholder="Enter Phone Number"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <WidgetsButton
            :classes="'btn btn-theme-outline btn-md fw-bold'"
            :type="'button'"
            :id="'cancel_addres_btn'"
            @onClick="
              () => {
                emit('close');
              }
            "
          >
            {{ "Cancel" }}
          </WidgetsButton>
          <WidgetsButton
            :classes="'btn theme-bg-color btn-md fw-bold text-light'"
            :id="'submit_address_btn'"
            @click.prevent="setAddressCard()"
          >
            {{ "Submit" }}
          </WidgetsButton>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
// import { AllCountryCode } from "@/data/country_code";
import { useLocationStore } from "@/store/location";
// import { useUserStore } from "@/store/user";
import isFormValid from "@/utils/validators/formValidator";
import axios from "axios";
let props = defineProps({
  addressId: Object,
  user: Object,
});
let emit = defineEmits(["close"]);
let {
  countries,
  states: allStates,
  ResponseStates,
  ResponseCountries,
} = storeToRefs(useLocationStore());
let input = ref({
  name: { data: "" },

  title: { data: "" },
  street: { data: "" },
  city: { data: "" },
  phone: { data: "" },
  pincode: { data: "" },
  country_id: { data: "" },
  country_code: { data: "" },
  state_id: { data: "" },
});

let formSubmitted = ref(false);
// function getAddress() {
//   if (typeof props.addressId == "number") {
//     let filterUser = props.user.address.filter(
//       (item) => item.id == props.addressId
//     )[0];
//     Object.keys(input.value).forEach(
//       (key) => (input.value[key].data = filterUser[key])
//     );
//   }
// }
// getAddress();
// let filtercountry = ResponseCountries.value.filter(
//   (item) => item.id == input.value.country_id.data
// );

// let states = ref();
// watch(
//   () => input.value.country_id,
//   () => {
//     setStatesArray();
//   },
//   { deep: true }
// );

// function setStatesArray() {
//   var countryId = input.value.country_id.data;
//   states.value = ResponseStates.value.filter(
//     (state) => state.country_id == countryId
//   );
// }
let token = JSON.parse(localStorage.getItem("user-data2")).token;

async function setAddressCard() {
  formSubmitted.value = true;
  if (isFormValid({ formData: input.value })) {
    if (typeof props.addressId == "number") {
      await useFetch("/address/" + props.addressId, {
        baseURL: BaseUrl,
        method: "put",
        headers: GetHeaders(),
        body: {
          title: input.value.title.data,
          name: input.value.name.data,
          address: input.value.street.data,
          city_name: input.value.city.data,
          phone: input.value.phone.data,
          zip_code: input.value.pincode.data,
          // country_code: input.value.country_code.data,
          // country_id: input.value.country_id.data,
          // state_id: input.value.state_id.data,
          id: props.user.id,
        },
        key: "AddAddress",
      });
    } else {
      await axios
        .post(
          "https://alsouq.anevex.com/app/shop-api/addresses",
          {
            title: input.value.title.data,
            address: input.value.street.data,
            city_name: input.value.city.data,
            phone: input.value.phone.data,
            zip_code: input.value.pincode.data,
            name: input.value.name.data,

            // country_code: input.value.country_code.data,
            // country_id: input.value.country_id.data,
            // state_id: input.value.state_id.data,
            // id: props.user.id,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          emit("addressAdded");
          emit("close");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  // useUserStore().UpdateUserInfo();
}
</script>
<style lang="scss" scoped></style>
