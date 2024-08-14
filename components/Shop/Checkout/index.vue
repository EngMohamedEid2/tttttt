<template>
  <div>
    <section class="checkout-section-2 section-b-space">
      <div class="container-fluid-lg">
        <div class="row g-sm-4 g-3">
          <div class="col-xxl-8 col-xl-7">
            <div class="left-sidebar-checkout">
              <div class="checkout-detail-box">
                <ul>
                  <li>
                    <div class="checkout-icon">
                      <Icon name="ri-map-pin-line"></Icon>
                    </div>
                    <div class="checkout-box">
                      <div href="javascript:void(0)" class="checkout-title">
                        <h4>{{ $t("Shipping Address") }}</h4>
                        <a
                          href="javascript:void(0)"
                          class="d-flex align-items-center fw-bold"
                          @click="
                            (data) => {
                              profileModal({ data });
                            }
                          "
                        >
                          <Icon name="ri-add-line"></Icon> {{ "Add New" }}
                        </a>
                      </div>
                      <div class="checkout-detail">
                        <ShopCheckoutAddressBlock
                          :addresses="userData"
                          :type="'shipping'"
                        >
                        </ShopCheckoutAddressBlock>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="checkout-icon">
                      <Icon name="ri-map-pin-line"></Icon>
                    </div>
                    <div class="checkout-box">
                      <div href="javascript:void(0)" class="checkout-title">
                        <h4>{{ $t("Billing Address") }}</h4>
                        <a
                          href="javascript:void(0)"
                          class="d-flex align-items-center fw-bold"
                          @click="
                            (data) => {
                              profileModal({ data });
                            }
                          "
                        >
                          <Icon name="ri-add-line"></Icon> {{ $t("Add New") }}
                        </a>
                      </div>
                      <div class="checkout-detail">
                        <ShopCheckoutAddressBlock
                          :addresses="userData"
                          :type="'billing'"
                        >
                        </ShopCheckoutAddressBlock>
                      </div>
                    </div>
                  </li>
                  <!-- <li>
                    <div class="checkout-icon">
                      <Icon name="ri-truck-line"></Icon>
                    </div>
                    <div class="checkout-box">
                      <div class="checkout-title">
                        <h4>{{ $t("Delivery Options") }}</h4>
                      </div>
                      <div class="empty-box" v-if="!user">
                        <h2>{{ $t("No Delivery Options Found") }}</h2>
                      </div>
                      <ShopCheckoutDeliveryBlock :setting="Settings.values" />
                    </div>
                  </li> -->
                  <li>
                    <div class="checkout-icon">
                      <Icon name="ri-bank-card-line"></Icon>
                    </div>
                    <div class="checkout-box">
                      <div class="checkout-title">
                        <h4>{{ "Payment Options" }}</h4>
                      </div>
                      <div class="empty-box" v-if="!user">
                        <h2>{{ "No Payment Options Found" }}</h2>
                      </div>
                      <ShopCheckoutPaymentBlock :setting="settings" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <ShopCheckoutSidebar :Shipping="Shipping" />
        </div>
      </div>
    </section>
    <WidgetsModalsCommon
      :showModal="editProfile"
      @close="profileModal({ state: false })"
    >
      <WidgetsModalsAddressModal
        :user="UserInfo"
        @close="profileModal({ state: false })"
        @addressAdded="refreshAddresses()"
      />
    </WidgetsModalsCommon>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useDataStore } from "~/store/data";
import { useUserStore } from "~~/store/user";
import { useCheckoutStore } from "~~/store/checkout";
import axios from "axios";
let userData = ref();
let settings = ref([]);
let Shipping = ref();
useUserStore().GetUserInfo();
let { User, UserInfo } = storeToRefs(useUserStore());
let user = ref(UserInfo);
let { Settings } = storeToRefs(useDataStore());
let { cart } = storeToRefs(useDataStore());

let editProfile = ref(false);

setTimeout(() => {
  useCheckoutStore().allowApi(true);
}, 1000);

function profileModal({ state = true }) {
  editProfile.value = state;
}
console.log(userData);

async function refreshAddresses() {
  let token = JSON.parse(localStorage.getItem("user-data2")).token;
  try {
    const response = await axios.get(
      "https://alsouq.anevex.com/app/shop-api/addresses",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    userData.value = response.data.data;
  } catch (error) {
    console.error("Error fetching addresses:", error);
  }
}

onMounted(async () => {
  //  get Addresses

  let token = JSON.parse(localStorage.getItem("user-data2")).token;

  await axios
    .get("https://alsouq.anevex.com/app/shop-api/addresses", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      //   console.log("response", response.data.data[0]);
      userData.value = response.data.data;
    })
    .catch((error) => {
      console.log(error);
    });

  // get settings

  await axios
    .get("https://alsouq.anevex.com/app/shop-api/setting")
    .then((res) => {
      settings.value = res.data.data.payment_methods;
      Shipping.value = res.data.data.shipping_cost;
      console.log(Shipping);
    })
    .catch((err) => {
      console.log(err);
    });

  setTimeout(() => {
    useCheckoutStore().allowApi(true);
  }, 1000);
});
</script>

<style lang="scss" scoped></style>
