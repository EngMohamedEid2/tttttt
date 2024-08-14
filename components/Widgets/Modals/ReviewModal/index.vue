<template>
<div>
  <div class="modal-header">
    <h3 class="fw-semibold">{{ (initialRating ? 'Edit a Review' : 'Write a Review') }}</h3>
    <WidgetsButton :classes="'btn btn-close'" :id="'profile_modal_close_btn'" @onClick="() => { emit('close') }">
      <Icon name="ri-close-line"></Icon>
    </WidgetsButton>
  </div>

  <div class="modal-body">
    <form class="product-review-form">
      <div class="product-wrapper">
        <div class="product-image">
          <img :src="product.product_thumbnail ? product.product_thumbnail.original_url : '/images/product.png'"
            class="img-fluid" :alt="product.name">
        </div>
        <div class="product-content">
          <h5 class="name">{{ product.name }}</h5>
          <div class="product-review-rating">
            <label>{{ $t('Rating') }}</label>
            <div class="product-rating">
              <NuxtRating :read-only="false" :ratingValue="initialRating || 0" />
              <h6 class="rating-number" v-if="product.rating_count">( {{ product.rating_count.toFixed(2) || 0 }})</h6>
            </div>
          </div>
        </div>
      </div>
      <div class="review-box">
        <div class="product-review-rating">
          <label>{{ $t('Rating') }}</label>
          <div class="product-rating">
            <NuxtRating :read-only="false" :ratingValue="initialRating || 0" @rating-selected="getRetingValue" />
          </div>
          <div class="invalid-feedback">
            {{ $t('Rating is required') }}
          </div>
        </div>
      </div>

      <div class="review-box">
        <label class="form-label" for="content">{{ $t('Review Content') }}</label>
        <textarea placeholder="Write Something..." class="form-control" v-model="discription"
          formControlName="description" rows="3"></textarea>
      </div>
    </form>

    <div class="modal-footer">
      <WidgetsButton :classes="'btn btn-theme-outline btn-md fw-bold'" :type="'button'" :id="'cancel_profile_btn'"
        @onClick="modal.dismiss('Cancel')">{{ $t('Cancel') }}</WidgetsButton>
      <WidgetsButton :classes="'btn theme-bg-color btn-md fw-bold text-light'" :id="'submit_profile_btn'"
        @onClick="submit()">
        {{ $t('Submit') }}
      </WidgetsButton>
    </div>
  </div>
</div>
</template>

<script setup>
import { useDataStore } from '~~/store/data';
let props = defineProps({
  product: Object,
  reviews: Object
})

let emit = defineEmits(['close'])
let initialRating = ref(props.product?.rating_count)
let ratingValue = ref(0)
let discription = ref(props.reviews[0]?.description)
function getRetingValue(event) {
  ratingValue.value = event
}
async function submit() {
  await useFetch('/review/' + props.reviews[0].id, {
    baseURL: BaseUrl,
    method: 'put',
    headers: GetHeaders(),
    body: {
      rating: ratingValue.value,
      review_image_id: null,
      description: discription.value
    }
  })
  useDataStore().GetSingleProduct()
}
</script>

<style lang="scss" scoped></style>