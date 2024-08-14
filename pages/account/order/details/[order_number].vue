<template>
    <section class="user-dashboard-section section-b-space">
        <div class="container-fluid-lg">
            <div class="row">
                <div class="col-xxl-3 col-lg-4">
                    <AccountSidebar :user="user" :UserInfo="UserInfo" />
                </div>

                <div class="col-xxl-9 col-lg-8">
                    <button class="btn left-dashboard-show btn-animation btn-md fw-bold d-block mb-4 d-lg-none">Show Menu</button>
                    <div class="dashboard-right-sidebar">
                        <AccountOrdersDetails />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useUserStore } from "~~/store/user";
let { User, UserInfo } = storeToRefs(useUserStore())
let user = ref(UserInfo)
</script>

<style lang="scss" scoped></style>