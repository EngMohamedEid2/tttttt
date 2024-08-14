<template>
  <div>
    <!-- My Account Basic Style -->
    <div v-if="style == 'basic'">
      <div class="delivery-login-box">
        <div class="delivery-icon">
          <Icon name="ri:user-3-line" v-if="!User.isLoggedIn"></Icon>
          <div class="user-box" v-else>
            <img
              :src="useUserStore().UserInfo?.profile_image?.original_url"
              class="img-fluid"
              alt="profile"
              v-if="useUserStore().UserInfo?.profile_image?.original_url"
              width="50"
              height="50"
            />
            <h3 v-else>
              {{
                useUserStore()
                  .UserInfo?.name?.charAt(0)
                  ?.toString()
                  ?.toUpperCase()
              }}
            </h3>
          </div>
        </div>
        <div class="delivery-detail">
          <h6 v-if="UserInfo?.name">{{ $t("Hi") }},{{ UserInfo?.name }}</h6>
          <h6 v-else>{{ $t("Hi , Guest") }}</h6>
          <h5>{{ $t("My Account") }}</h5>
        </div>
      </div>
      <div class="onhover-div onhover-div-login">
        <ul class="user-box-name" v-show="User.isLoggedIn == false">
          <li class="product-box-contain">
            <nuxt-link :to="NavigationLinks?.login">{{
              $t("Log In")
            }}</nuxt-link>
          </li>
          <li class="product-box-contain">
            <nuxt-link :to="NavigationLinks?.signUp">{{
              $t("Register")
            }}</nuxt-link>
          </li>
        </ul>
        <ul class="user-box-name" v-show="User.isLoggedIn">
          <li class="product-box-contain">
            <nuxt-link :to="'/account/dashboard'">
              <Icon name="ri:user-3-line" class="me-2" />{{ $t("My Account") }}
            </nuxt-link>
          </li>
          <li class="product-box-contain">
            <a
              href="#"
              @click="
                (data) => {
                  toggleModal({ data });
                }
              "
            >
              <Icon name="ri:logout-box-r-line" class="me-2"></Icon
              >{{ $t("Logout") }}
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- My Account Classic Style -->
    <a href="javascript:void(0)" class="user-box" v-if="style == 'classic'">
      <span class="header-icon">
        <Icon name="ri:user-line"></Icon>
      </span>
      <div class="user-name">
        <h6 class="text-content">{{ $t("My Account") }}</h6>
        <h4 class="mt-1">{{ User?.isLoggedIn ? UserInfo?.name : "User" }}</h4>
      </div>
    </a>

    <a
      href="javascript:void(0)"
      class="header-icon user-icon search-icon"
      v-if="style == 'standard'"
    >
      <Icon name="ri-user-line"></Icon>
    </a>

    <WidgetsModalsCommon
      :showModal="modals.logout"
      @close="toggleModal({ state: false })"
    >
      <WidgetsModalsConfrmationModal
        @close="toggleModal({ state: false })"
        @confirm="
          () => {
            useUserStore().LogoutUser();
            toggleModal({ state: false });
          }
        "
      />
    </WidgetsModalsCommon>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useUserStore } from "@/store/user";
let props = defineProps({
  style: { type: [String, Object], default: "basic" },
});
// useUserStore().setDefaultUser();
let modals = ref({ logout: false });
let { User, UserInfo } = storeToRefs(useUserStore());

async function toggleModal({ state = true }) {
  modals.value.logout = state;
}
// console.log("user", useUserStore().User);
// console.log("user info", useUserStore().UserInfo);

onMounted(() => {
  let storedData = localStorage.getItem("user-data");
  if (storedData?.isLoggedIn == true) {
    useUserStore().UpdateUserInfo();
  }
});
</script>
