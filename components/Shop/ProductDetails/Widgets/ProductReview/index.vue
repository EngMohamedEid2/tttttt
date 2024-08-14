<template>
  <div>
    <div class="row">
      <div
        class="col-xl-5"
        v-if="product?.can_review || product?.reviews_count"
      >
        <div class="product-rating-box">
          <div class="row">
            <div class="col-xl-12" v-if="product?.reviews_count">
              <div class="product-main-rating">
                <h2 v-if="product?.rating_count">
                  {{ product?.rating_count?.toFixed(2) }}
                  <Icon name="ri:star-fill"></Icon>
                </h2>
                <h5>{{ product?.reviews_count }} {{ $t("Rating") }}</h5>
              </div>
            </div>
            <div class="col-xl-12">
              <ul class="product-rating-list" v-if="product?.reviews_count">
                <li
                  v-for="(rate, index) of product?.review_ratings
                    ?.slice()
                    ?.reverse()"
                  :key="index"
                >
                  <div class="rating-product">
                    <h5>
                      {{ product?.review_ratings?.length - 1 - index + 1
                      }}<Icon name="ri-star-fill"></Icon>
                    </h5>
                    <div class="progress">
                      <div
                        class="progress-bar"
                        :style="{
                          width:
                            ((rate / product?.reviews_count) * 100).toFixed(0) +
                            '%',
                        }"
                      ></div>
                    </div>
                    <h5 class="total">{{ rate }}</h5>
                  </div>
                </li>
              </ul>
              <div class="review-title-2" v-if="product?.can_review">
                <h4 class="fw-bold">{{ $t("Review this product") }}</h4>
                <p>{{ $t("Let other customers know what you think") }}</p>
                <WidgetsButton
                  :classes="'btn'"
                  :id="'reviews_modal_btn'"
                  @onClick="
                    (reviewModal) => {
                      reviewsModal({ reviewModal });
                    }
                  "
                >
                  {{ product?.user_review ? "Edit Review" : "Write a review" }}
                </WidgetsButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="col-xl-7"
        v-if="product?.can_review || product?.reviews_count"
      >
        <div class="review-people">
          <ul class="review-list" v-if="reviews?.length">
            <li v-for="review of reviews" :key="review">
              <div class="people-box">
                <div>
                  <div class="people-image people-text">
                    <img
                      :src="review?.consumer?.profile_image?.original_url"
                      class="img-fluid"
                      alt="user"
                      v-if="review?.consumer?.profile_image"
                    />
                    <template v-else>
                      <div class="user-round">
                        <h4>
                          {{
                            review?.consumer?.name
                              ?.charAt(0)
                              ?.toString()
                              ?.toUpperCase() || "F"
                          }}
                        </h4>
                      </div>
                    </template>
                  </div>
                </div>
                <div class="people-comment">
                  <div class="people-name">
                    <div class="date-time">
                      <a class="name" href="javascript:void(0)">{{
                        review?.consumer?.name
                      }}</a>
                      <h6 class="text-content">
                        {{ review?.created_at }}
                      </h6>
                    </div>
                    <div class="product-rating">
                      <NuxtRating
                        :read-only="true"
                        :ratingValue="review?.rating || 0"
                        :rating-size="'25px'"
                      />
                    </div>
                  </div>
                  <div class="reply">
                    <p>{{ review?.description }}</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <WidgetsNoData
            :classes="'no-data-added'"
            :text="'No Review Yet'"
            :description="'There are currently no ratings or reviews for this product'"
            v-if="!reviews?.length"
          />
        </div>
      </div>
      <div
        class="col-xl-12"
        v-if="!product?.can_review && !product?.reviews_count"
      >
        <WidgetsNoData
          :classes="'no-data-added'"
          :text="'No Review Yet'"
          :description="'There are currently no ratings or reviews for this product'"
          v-if="!reviews?.length"
        />
      </div>
    </div>
    <WidgetsModalsCommon
      :showModal="reviewModal"
      @close="reviewsModal({ state: false })"
    >
      <WidgetsModalsReviewModal
        :product="product"
        :reviews="reviews"
        @close="reviewsModal({ state: false })"
      />
    </WidgetsModalsCommon>
  </div>
</template>

<script setup>
let props = defineProps({
  product: Object,
  reviews: Object,
});
let reviewModal = ref(false);

function reviewsModal({ state = true }) {
  reviewModal.value = state;
}
</script>
<style lang="scss" scoped></style>
