<template>
    <div>
        <section class="selling-section section-b-space" v-if="sellerStore.status">
            <div class="container-fluid-lg">
                <div class="vendor-title">
                    <h5>{{ sellerStore.title }}</h5>
                    <p>{{ sellerStore.description }}</p>
                    <a href="#" 
                     class="btn btn-animation theme-bg-color d-inline-block mt-3">{{$t("Start Selling")}}</a>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
let props = defineProps({
    sellerStore: Object
})
</script>

<style lang="scss" scoped></style>