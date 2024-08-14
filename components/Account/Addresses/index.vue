<template>
  <div>
  <div class="dashboard-address">
    <div class="title-header">
      <div class="d-flex align-items-center w-100 justify-content-between">
        <h5>{{ $t("Saved Address") }}</h5>
        <WidgetsButton :classes="'btn theme-bg-color text-white btn-sm fw-bold mt-lg-0 ms-auto'" :type="'button'"
          :id="'add_address'" @click="(data) => {
            addressModal({ data });
          }
            ">
          <Icon name="ri-add-line"></Icon> {{ $t("Add Address") }}
        </WidgetsButton>
      </div>
    </div>
    <div class="row g-sm-4 g-3" v-if="user?.address?.length">
      <div class="col-xxl-4 col-xl-6 col-lg-12 col-md-6" v-for="(address, index) in user?.address" :key="index">
        <div class="address-box">
          <AccountAddressesAddressBox :address="address" :user="user" />
          <div class="button-group">
            <WidgetsButton :classes="'btn btn-sm add-button'" :type="'button'" :id="'edit_address' + address.id"
              @click="addressModal(address?.id)">
              <Icon name="ri-edit-box-line"></Icon> {{ $t("Edit") }}
            </WidgetsButton>
            <WidgetsButton :classes="'btn btn-sm add-button'" :type="'button'" :id="'remove_address' + address.id"
              @click="deleteModal(address?.id)">
              <Icon name="ri-delete-bin-line"></Icon> {{ $t("Remove") }}
            </WidgetsButton>
          </div>
        </div>
      </div>
    </div>
  </div>
  <WidgetsNoData :class="'no-data-added'" :image="'/svg/empty-items.svg'" :text="'No Address Found'"
    :description="'You have not add any address yet'" v-if="!user?.address?.length">
  </WidgetsNoData>

  <WidgetsModalsCommon :showModal="addresModal" @close="addresModal = false" :classes="'modal-lg'">
    <WidgetsModalsAddressModal :addressId="addressId" :user="UserInfo" @close="addresModal = false" />
  </WidgetsModalsCommon>
  <WidgetsModalsCommon :showModal="deleteModals" @close="deleteModals = false">
    <WidgetsModalsDeleteModal :addressId="addressId" @close="deleteModals = false" />
  </WidgetsModalsCommon>
</div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useUserStore } from "@/store/user";


let { UserInfo } = storeToRefs(useUserStore());
let user = ref(UserInfo);
let addresModal = ref(false);
let deleteModals = ref(false);
let addressId = ref(0);

function addressModal(id, state = true) {
  addresModal.value = state;
  addressId.value = id;
}

function deleteModal(id, state = true) {
  deleteModals.value = state;
  addressId.value = id;
}
</script>

<style lang="scss" scoped></style>
