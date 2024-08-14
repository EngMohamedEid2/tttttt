<template>
    <section class="user-dashboard-section section-b-space">
        <div class="container-fluid-lg">
            <div class="row">
                <div class="col-xxl-3 col-lg-4">
                    <AccountSidebar @close="openMenu()" :class="open ? 'show' : ''" :user="user"
                        :UserInfo="useUserStore().UserInfo"></AccountSidebar>
                </div>

                <div class="col-xxl-9 col-lg-8">
                    <WidgetsButton :classes="'btn left-dashboard-show btn-animation btn-md fw-bold d-block mb-4 d-lg-none'"
                        :type="'button'" :id="'show_menu'" @onClick="openMenu()">
                        {{ $t('Show Menu') }}
                    </WidgetsButton>
                    <div class="dashboard-right-sidebar">
                        <slot />
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
let open = ref(false);
function openMenu() {
    open.value = !open.value
}
</script>

<style lang="scss" scoped></style>