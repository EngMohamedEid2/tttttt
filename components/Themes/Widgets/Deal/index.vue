<template>
  <div class="product-bg-image wow fadeInUp" :style="{ 'background-image': 'url(' + data?.image_url + ')' }"
    v-if="deals.length">
    <div class="product-title product-warning">
      <h2>{{ data?.title }}</h2>
    </div>
    <div class="product-box-4 product-box-3 rounded-0">
      <div class="deal-box" v-if="data?.label">
        <div class="circle-box">
          <div class="shape-circle">
            <img src="/images/svg/circle.svg" alt="circle">
            <div class="shape-text">
              <h6>{{ data?.label }}</h6>
            </div>
          </div>
        </div>
      </div>
      <div class="top-selling-slider product-arrow">
        <swiper :loop="true" class="banner-slider" :slides-per-view="1" :space-between="15">
            <swiper-slide v-for="(deal, index) in deals.length" :key="`product${index}`">
              <div  v-if="deals[2]?.status">
                <div class="product-image">
                  <a href="javascript:void(0)">
                    <img :src="deals[2]?.product?.product_thumbnail?.original_url" class="img-fluid product-image"
                      :alt="deals[2]?.product?.name">
                  </a>
                  <ul class="option">
                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                      <a href="javascript:void(0)" @click.prevent="() => { useCartStore().ToggleModal(deals[2]); }">
                        <Icon name="ri:eye-line"></Icon>
                      </a>
                    </li>
                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                      <a href="javascript:void(0)" class="notifi-wishlist"
                        @click.prevent="useWishlistStore().ToggleFromWishlist(deals[2])">
                        <Icon name="ri:heart-line" size="20"  v-if="useWishlistStore().ExistsInCart(deals[2])" />
                        <Icon name="ri:heart-line" size="20" v-else />
                      </a>
                    </li>
                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                      <a href="javascript:void(0)" @click.prevent="useCompareStore().ToggleFromCompare(deals[2])">
                        <Icon name="ri:refresh-line"  size="20"
                          v-if="useCompareStore().ExistsInCompare(deals[2])" />
                        <Icon name="ri:refresh-line" size="20" v-else />
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="product-detail text-center">
                  <ul class="product-rating justify-content-center">
                    <NuxtRating :read-only="true" :ratingValue="deals[2]?.product.rating_count || 0" :rating-size="'25px'" />
                  </ul>
                  <a href="javascript:void(0)">
                    <h3 class="name w-100 mx-auto text-center">
                      {{ deals[2]?.product?.name }}
                    </h3>
                  </a>
                  <h3 class="price theme-color d-flex justify-content-center">
                    $ {{ Number(deals[2]?.product?.sale_price).toFixed(2) }}<del class="delete-price">$ {{
                      Number(deals[2]?.product?.price).toFixed(2) }}</del>
                  </h3>
                  <div class="progress custom-progressbar">
                    <div class="progress-bar" :style="{ width: (deals[2]?.product?.quantity * 100) / 10 + '%' }"
                      role="progressbar"></div>
                  </div>
                  <h5 class="text-content">{{ $t('Sold') }} : <span>{{ deals[2]?.product?.quantity }} {{
                    $t('items') }}</span>
                    <span class="ms-auto text-content">{{ 'Hurry up offer end in' }}</span>
                  </h5>

                  <div class="timer timer-2 ms-0 my-4" id="clockdiv-1" v-if="!deals[2].remainingTime?.seconds >= 0">
                    <ul class="d-flex justify-content-center">
                      <li>
                        <div class="counter">
                          <div class="days">
                            <h6>{{ deals[2]?.remainingTime?.days }}</h6>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="counter">
                          <div class="hours">
                            <h6>{{ deals[2]?.remainingTime?.hours }}</h6>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="counter">
                          <div class="minutes">
                            <h6>{{ deals[2]?.remainingTime?.minutes }}</h6>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="counter">
                          <div class="seconds">
                            <h6>{{ deals[2]?.remainingTime?.seconds }}</h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div v-else>
                    <h2 class="mt-3">{{ (deals[2].remainingTime?.seconds < 0 ? 'offer_closed' : '') }}</h2>
                  </div>
                </div>
              </div>
            </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "@/store/cart";
import { useCompareStore } from "@/store/compare";
import { useWishlistStore } from "@/store/wishlist";
let props = defineProps({
  data: Object,
  Products: Object
})

let deals = ref([])
function startTimers() {
  for (let counterItem of deals.value) {
    const endDate = new Date(counterItem.end_date).getTime();
    const currentTime = new Date().getTime();
    const timeDifference = endDate - currentTime;
    if (timeDifference > 0) {
      counterItem.remainingTime = calculateRemainingTime(timeDifference);
      setInterval(() => {
        counterItem.remainingTime = calculateRemainingTime(endDate - new Date().getTime());
      }, 1000);
    }
  }
}

function calculateRemainingTime(timeDifference) {
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  return { days, hours, minutes, seconds };
}

onMounted(async () => {
  const dealsArray = props?.data?.deals || [];
  dealsArray.forEach((deal) => {
    deal.product = props.Products?.data.find((product) => product.id === deal.product_id);
  });
  deals.value = dealsArray;
  startTimers();
})
</script>

<style lang="scss" scoped></style>