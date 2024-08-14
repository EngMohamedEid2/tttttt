<template>
<div>
  <div class="modal-header">
    <h3 class="fw-semibold">{{ $t("Refund") }}</h3>
    <WidgetsButton
        :classes="'btn btn-close'"
        :id="'profile_modal_close_btn'"
        @onClick="() => { emit('close'); }">
        <Icon name="ri-close-line"></Icon>
    </WidgetsButton>
  </div>
  <div class="modal-body">
    <form class="product-review-form">
      <div class="product-wrapper">
        <div class="product-image">
          <img :src="product?.product_thumbnail ?
                product?.product_thumbnail.original_url :
                '/images/product.png'" class="img-fluid" :alt="product?.name">
        </div>
        <div class="product-content">
          <h5 class="name">{{ product?.name }}</h5>
          <div class="product-review-rating">
            <div class="product-rating">
              <h6 class="price-number">{{ product?.sale_price }}</h6>
            </div>
          </div>
        </div>
      </div>

      <div class="review-box">
        <form >
          <label class="form-label" for="content">{{ $t("Reason") }} *</label>
          <textarea placeholder="Enter Reason" class="form-control" id="content" rows="3" formControlName="reason" v-model="reason"></textarea>
          <label class="form-label mt-3" for="payment_option">{{ $t('Payment Option') }}</label>
           <!--Dropdown For PaymentOptions -->
            <WidgetsInputFieldsSearchDropdown get-value-key="value" placeholder="Select Payment Method"  display-key="label" :form-submitted="formSubmitted"
                v-model="paymentMethod" :options="option" />
        </form>
      </div>
    </form>
    <div class="modal-footer">
      <WidgetsButton :classes="'btn btn-theme-outline btn-md fw-bold'" :type="'button'" 
        :id="'cancel_profile_btn'"  @onClick="() => { emit('close'); }">{{ $t("Cancel") }}</WidgetsButton>
      <WidgetsButton :classes="'btn theme-bg-color btn-md fw-bold text-light'" :id="'submit_profile_btn'" @click="sendRequest()">
        {{ $t("Submit") }}
      </WidgetsButton>
    </div>
  </div>
</div>
</template>

<script setup>
let props = defineProps({
    product:Object,
    orderId:Number
})
let emit = defineEmits(['close'])
let paymentMethod = ref({data:''})
let reason = ref('')
let option = [
  {
    label: 'Wallet',
    value: 'wallet',
  },
  {
    label: 'Paypal',
    value: 'paypal',
  },
  {
    label: 'Bank',
    value: 'bank',
  }
]
async function sendRequest(){
  if(reason.value != '' && paymentMethod.value.data != ''){
    await useFetch('/refund',{
      baseURL:BaseUrl,
      headers:GetHeaders(),
      method:'post',
      body:{
        product_id:props.product.id,
        reason:reason.value,
        order_id:props.orderId,
        payment_type:paymentMethod.value.data
      },
      key:'sendRefund'
    })
    emit('close')
  }
}
</script>

<style lang="scss" scoped>

</style>