<template>
  <div>
  <div class="row">
    <div class="col-xxl-7">
      <div class="dashboard-title mb-3">
        <h3>{{ "Profile Information" }}</h3>
      </div>
      <div class="table-responsive">
        <table class="table">
          <tbody>
            <tr>
              <td>{{ "Name" }}:</td>
              <td>{{ user?.name }}</td>
            </tr>
            <tr>
              <td>{{ "Phone" }}:</td>
              <td>+{{ user?.country_code }} {{ user?.phone }}</td>
            </tr>
            <tr v-if="user.address">
              <td>{{ "Address" }}:</td>
              <td>
                {{ user.address[0].street }}
                {{ user.address[0].city }}, {{ user.address[0].state.name }},
                {{ user.address[0].country.name }} {{ user.address[0].pincode }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="dashboard-title mb-3">
        <h3>{{ "Login Details" }}</h3>
      </div>
      <div class="table-responsive">
        <table class="table">
          <tbody>
            <tr>
              <td>{{ "Email" }} :</td>
              <td>
                {{ user?.email }}
                <a href="javascript:void(0)" @click="(data) => {
                    profileModal({ data });
                  }
                  ">{{ "Edit" }}</a>
              </td>
            </tr>
            <tr>
              <td>{{ "Password" }} :</td>
              <td>
                ●●●●●●
                <a href="javascript:void(0)" @click="(data) => {
                    changePasswordModal({ data });
                  }
                  ">{{ "Edit" }}</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="col-xxl-5">
      <div class="profile-image">
        <img src="/images/inner-page/dashboard-profile.png" class="img-fluid" alt="dashboard-profile" />
      </div>
    </div>
  </div>
  <WidgetsModalsCommon :showModal="editProfile" @close="profileModal({ state: false })">
    <WidgetsModalsEditProdileModal :initialData="initialProfileData" @close="profileModal({ state: false })" />
  </WidgetsModalsCommon>
  <WidgetsModalsCommon :showModal="chnagePassword" @close="changePasswordModal({ state: false })">
    <WidgetsModalsChnagePasswordModal @close="changePasswordModal({ state: false })" />
  </WidgetsModalsCommon>
</div>
</template>

<script setup>
let props = defineProps({
  user: Object,
});
let initialProfileData = ref({
  name: "",
  email: "",
  country_code: "",
  phone: "",
  status: 0,
});
let editProfile = ref(false);
let chnagePassword = ref(false);
initialProfileData.value.name = props.user?.name;
initialProfileData.value.email = props.user?.email;
initialProfileData.value.country_code = props.user?.country_code;
initialProfileData.value.phone = props.user?.phone;
initialProfileData.value.status = props.user?.status;

function profileModal({ state = true }) {
  editProfile.value = state;
}
function changePasswordModal({ state = true }) {
  chnagePassword.value = state;
}
</script>
<style lang="scss" scoped></style>
