<template>

<section class="user-dashboard-section section-b-space">
    <div class="container-fluid-lg">
        <div class="row">
            <div class="col-xxl-3 col-lg-4">
                <div class="dashboard-left-sidebar" :class="{'show':open}">
                    <AccountSidebar :v-show="open" @menu="openMenu(event)" />
                </div>
            </div>
            <div class="col-xxl-9 col-lg-8 custom-box-loader" id="account">
                <div class="box-loader" v-if="loadingStatus">
                    <!-- <app-loader [loaderClass]="'custom-loader-wrapper blur-bg'"></app-loader> -->
                </div>
                <div>
                    <WidgetsButton
                      :class="'btn left-dashboard-show btn-animation btn-md fw-bold d-block mb-4 d-lg-none'"
                      :type="'button'"
                      :id="'show_menu'"
                      @onClick="openMenu(true)">
                        {{ $t('Show Menu') }}
                    </WidgetsButton>
                    <div class="dashboard-right-sidebar">
                        <div class="tab-content">
                           <NuxtPage/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

</template>

<script setup>
let open = ref(false);
function openMenu(value){
    open.value = value
}
</script>

<style lang="scss" scoped>

</style>