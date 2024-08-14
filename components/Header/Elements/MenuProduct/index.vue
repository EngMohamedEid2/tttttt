<template>
  <div class="product-box">
    <div class="product-image">
      <nuxt-link class="dropdown-item" :to="`/product/${product?.slug}`">
        <img :src="product.product_thumbnail ? product.product_thumbnail.original_url : '/images/product.png'"
          class="img-fluid" alt="">
      </nuxt-link>

      <ul class="product-option">
        <li>
          <a href="javascript:void(0)" @click.prevent="useCompareStore().ToggleFromCompare({ product })">
            <Icon name="teenyicons:git-compare-outline"  size="20"
              v-if="useCompareStore().ExistsInCompare({ product })" />
            <Icon name="teenyicons:git-compare-outline" size="20" v-else />
          </a>
        </li>
        <li>
          <Icon name="ic:outline-remove-red-eye" size="20" />
        </li>
        <li>
          <a href="javascript:void(0)" @click.prevent="useWishlistStore().ToggleFromWishlist({ product })">
            <Icon name="fe:heart" size="20"  v-if="useWishlistStore().ExistsInCart({ product })" />
            <Icon name="fe:heart-o" size="20" v-else />
          </a>
        </li>
      </ul>
    </div>
    <div class="product-detail">
      <nuxt-link class="dropdown-item" :to="`/product/${product?.slug}`">
        <h6 class="name">{{ product.name }}</h6>
      </nuxt-link>
      

      <h5 class="sold text-content">
        <span class="theme-color price">$ {{ Number(product.sale_price).toFixed(2) }}</span>
        <del v-if="product.discount">$ {{ Number(product.price).toFixed(2) }}</del>
      </h5>
    </div>
  </div>
</template>

<script setup>
import { useCompareStore } from "@/store/compare";
import { useWishlistStore } from "@/store/wishlist";

let props = defineProps({
  product: Object
})
</script>

<style lang="scss" scoped></style>