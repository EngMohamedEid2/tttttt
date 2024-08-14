<template>
  <div class="vendor-box">
    <div class="vendor-contain">
      <nuxt-link :to="`/seller/store/${store?.slug}`">
        <div class="vendor-image" v-if="store?.store_logo">
          <img :src="store?.store_logo?.original_url" alt="">
        </div>
        <template v-else>
          <h2 class="vendor-text">{{ store?.store_name?.charAt(0).toString().toUpperCase() }}</h2>
        </template>
      </nuxt-link>
      <div class="vendor-name">
        <nuxt-link :to="`/seller/store/${store?.slug}`">
          <h5 class="fw-500">{{ store?.store_name }}</h5>
        </nuxt-link>
        <div class="product-rating">
          <NuxtRating :read-only="true" :ratingValue="store.rating_count || 0" :rating-size="'25px'" />
          <span class="rating-content">({{ store?.reviews_count }} {{ $t('Review') }})</span>
        </div>
      </div>
    </div>
    <p class="vendor-detail" v-html="store?.description"></p>
    <div class="vendor-list" v-if="!store?.hide_vendor_email && !store?.hide_vendor_email">
      <ul>
        <li v-if="!store?.hide_vendor_phone">
          <div class="address-contact">
            <Icon name="ri-smartphone-line"></Icon>
            <h5>{{ $t('Contact') }}: <span class="text-content">+{{ store?.vendor?.country_code }} {{ store?.vendor?.phone
            }}</span>
            </h5>
          </div>
        </li>
        <li v-if="!store?.hide_vendor_email">
          <div class="address-contact">
            <Icon name="ri-mail-line"></Icon>
            <h5>{{ $t('Email') }}: <span class="text-content">{{ store?.vendor?.email }}</span></h5>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
let props = defineProps({
  store: Object
})
</script>

<style lang="scss" scoped></style>