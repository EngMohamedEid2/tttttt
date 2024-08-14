<template>
  <div>
    <section class="saller-poster-section" v-if="sellerStore.status">
      <div class="container-fluid-lg">
        <div class="row">
          <div class="col-12" v-if="sellerStore.image_url">
            <div class="poster-box">
              <div class="poster-image">
                <img :src="sellerStore?.image_url" class="img-fluid" alt="" />
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="seller-title h-100 d-flex align-items-center">
              <div>
                <h2>{{ sellerStore.title }}</h2>
                <p>{{ sellerStore.description }}</p>
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