<template>
  <div class="section-b-space section-t-space offer-section skeleton-offer" v-if="skeletonLoader">
    <div class="container-fluid-lg">
      <div class="row g-md-4 g-3">
        <div class="col-xxl-3 col-lg-4 col-sm-6" v-for="item in skeletonItems" :key="item">
          <div class="coupon-box">
            <div class="coupon-name">
              <div class="card-name">
                <div>
                  <h5 class="fw-semibold dark-text"></h5>
                </div>
              </div>
            </div>
            <div class="coupon-content">
              <p></p>
              <p class="long"></p>
              <p class="long long-s"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="section-b-space section-t-space offer-section" v-else>
    <div class="container-fluid-lg">
      <div class="row g-md-4 g-3">
        <div class="col-xxl-3 col-lg-4 col-sm-6" v-for="coupon in coupon?.data" :key="coupon">
          <div class="coupon-box">
            <div class="coupon-name">
              <div class="card-name">
                <div>
                  <h5 class="fw-semibold dark-text">{{ coupon.title }}</h5>
                </div>
              </div>
            </div>
            <div class="coupon-content">
              <p>{{ coupon.description }}</p>
              <div class="coupon-apply">
                <h6 class="coupon-code success-color">#{{ coupon.code }}</h6>
                <nuxtLink class="btn theme-btn border-btn copy-btn mt-0" @click="copyFunction(coupon.code)">{{ $t("Copy Code ")}}</nuxtLink>
              </div>
            </div>
          </div>
        </div>
        <WidgetsNoData :classes="'no-data-added collection-no-data'" :image="'/svg/no-product.svg'"
          :text="'I regret to inform you that the offer is currently unavailable.'"
          v-if="!coupon?.data?.length && !skeletonLoader">
        </WidgetsNoData>
      </div>
    </div>
  </div>
</template>

<script setup>
let props = defineProps({
  coupon: Object
})

const skeletonLoader = ref(true)
let skeletonItems = Array.from({ length: 10 }, (_, index) => index);
onMounted(() => {
  setTimeout(() => {
    skeletonLoader.value = false
  }, 2000);
})

function copyFunction(txt) {
  navigator.clipboard.writeText(txt)
}

</script>

<style lang="scss" scoped></style>