<template>
  <div
    v-if="image?.redirect_link?.link_type === 'external_url'"
    :class="saleclass"
  >
    <NuxtLink
      :to="image?.redirect_link?.link"
      target="_blank"
      class="banner-contain d-block h-100"
    >
      <div
        class="h-100 bg-size"
        :class="classes"
        v-if="bgImage"
        :style="{ 'background-image': 'url(' + image?.image_url + ')' }"
      ></div>
      <img
        v-else
        :src="image?.image_url"
        class="h-100 img-fluid w-100"
        alt="banner"
      />
    </NuxtLink>
  </div>

  <div
    v-else-if="image?.redirect_link?.link_type === 'collection'"
    :class="saleclass"
  >
    <NuxtLink
      :to="{
        path: '/collections',
        query: { category: image?.redirect_link?.link },
      }"
      class="h-100 d-block"
    >
      <div
        class="h-100 bg-size"
        :class="classes"
        v-if="bgImage"
        :style="{ 'background-image': 'url(' + image?.image_url + ')' }"
      ></div>
      <img
        v-if="!bgImage"
        :src="image?.image_url"
        class="img-fluid w-100"
        alt="banner"
      />
    </NuxtLink>
  </div>
  <div
    v-else-if="image?.redirect_link?.link_type === 'product'"
    :class="saleclass"
  >
    <NuxtLink to="javascript:void(0)">
      <div
        class="h-100 bg-size"
        :class="classes"
        v-if="bgImage"
        :style="{ 'background-image': 'url(' + image?.image_url + ')' }"
      ></div>
      <img
        v-if="!bgImage"
        :src="image?.image_url"
        class="h-100 img-fluid w-100"
        alt="banner"
      />
    </NuxtLink>
  </div>
  <div v-else>
    <div
      class="h-100 bg-size"
      :class="classes"
      v-if="bgImage"
      :style="{ 'background-image': 'url(' + image?.image_url + ')' }"
    ></div>
    <img
      v-if="!bgImage"
      :src="image?.image_url"
      class="h-100 img-fluid w-100"
      alt="banner"
    />
  </div>
</template>
<script setup>
let props = defineProps({
  image: Object,
  link: String,
  bgImage: Boolean,
  classes: String,
  saleclass: String,
  height: {
    default: true,
    type: Boolean,
  },
});
</script>
