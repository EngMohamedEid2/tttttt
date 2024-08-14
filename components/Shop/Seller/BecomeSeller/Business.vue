<template>
  <div>
    <section class="business-section section-b-space" v-if="sellerStore.status">
      <div class="container-fluid-lg">
        <div class="vendor-title mb-5">
          <h5>{{ sellerStore.title }}</h5>
        </div>
        <div class="business-contain">
          <div class="row g-xl-4 g-3">
            <div class="col-sm-6 col-xl-4">
              <div class="business-box">
                <div>
                  <div class="business-number">
                    <h2>1</h2>
                  </div>
                  <div class="business-detail">
                    <h4>{{ sellerStore.step_1.title }}</h4>
                    <p>{{ sellerStore.step_1.description }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-sm-6 col-xl-4">
              <div class="business-box">
                <div>
                  <div class="business-number">
                    <h2>2</h2>
                  </div>
                  <div class="business-detail">
                    <h4>{{ sellerStore.step_2.title }}</h4>
                    <p>{{ sellerStore.step_2.description }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-sm-6 col-xl-4">
              <div class="business-box">
                <div>
                  <div class="business-number">
                    <h2>3</h2>
                  </div>
                  <div class="business-detail">
                    <h4>{{ sellerStore.step_3.title }}</h4>
                    <p>{{ sellerStore.step_3.description }}</p>
                  </div>
                </div>
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