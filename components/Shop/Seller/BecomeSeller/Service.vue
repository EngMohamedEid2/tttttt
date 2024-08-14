<template>
  <div>
    <section class="become-service section-b-space" v-if="sellerStore.status">
      <div class="container-fluid-lg">
        <div class="seller-title mb-5">
          <h2>{{ sellerStore.title }}</h2>
        </div>
        <div class="row">
          <div class="col-sm-6 col-lg-4 col-xxl-3">
            <div class="service-box">
              <div class="service-svg" v-if="sellerStore.service_1.image_url">
                <img :src="sellerStore.service_1.image_url" class="img-fluid" alt="" />
              </div>
              <div class="service-detail">
                <h4>{{ sellerStore.service_1.title }}</h4>
                <p>{{ sellerStore.service_1.description }}</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-4 col-xxl-3">
            <div class="service-box">
              <div class="service-svg" v-if="sellerStore.service_2.image_url">
                <img :src="sellerStore.service_2.image_url" class="img-fluid" alt="" />
              </div>
              <div class="service-detail">
                <h4>{{ sellerStore.service_2.title }}</h4>
                <p>{{ sellerStore.service_2.description }}</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-4 col-xxl-3">
            <div class="service-box">
              <div class="service-svg" v-if="sellerStore.service_3.image_url">
                <img :src="sellerStore.service_3.image_url" class="img-fluid" alt="" />
              </div>
              <div class="service-detail">
                <h4>{{ sellerStore.service_3.title }}</h4>
                <p>{{ sellerStore.service_3.description }}</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-4 col-xxl-3">
            <div class="service-box">
              <div class="service-svg" v-if="sellerStore.service_4.image_url">
                <img :src="sellerStore.service_4.image_url" class="img-fluid" alt="" />
              </div>
              <div class="service-detail">
                <h4>{{ sellerStore.service_4.title }}</h4>
                <p>{{ sellerStore.service_4.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
let props = defineProps({
  sellerStore: Object,
});
</script>

<style lang="scss" scoped></style>