<template>
    <section class="service-section">
        <div class="container-fluid-lg">
            <div class="row g-3 row-cols-xxl-5 row-cols-lg-3 row-cols-sm-2">
                <div v-for="service of data" :key="service">
                    <div class="service-contain-2">
                        <img :src="service.image_url" class="icon-width" alt="">
                        <div class="service-detail">
                            <h3>{{ service?.title }}</h3>
                            <h6 class="text-content">{{ service?.sub_title }}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
let props = defineProps({
    data: Object
})
</script>

<style lang="scss" scoped></style>