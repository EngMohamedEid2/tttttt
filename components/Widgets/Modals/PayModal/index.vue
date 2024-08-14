<template>
<div>
  <div class="modal-header">
    <h3 class="fw-semibold">{{ $t("Pay Now") }}</h3>
    <WidgetsButton
        :classes="'btn btn-close'"
        :id="'profile_modal_close_btn'"
        @onClick="() => { emit('close'); }">
        <Icon name="ri-close-line"></Icon>
    </WidgetsButton>
  </div>
  <div class="modal-body">
    <div class="checkout-box">
      <div class="checkout-detail">
        <div class="row g-3">
            <div class="col-md-6"   v-for="(payment,index) in Settings.values.payment_methods" :key="index" >
                <div class="payment-option" v-if="payment.status">
                    <div class="payment-category w-100">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="payment_method" v-model="payment_method" :value="payment.name" :id="payment.name">
                            <label class="form-check-label" :for="payment.name">
                                {{ payment.name  }}
                            </label>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="invalid-feedback" v-if="paymentType?.touched && paymentType.errors?.['required']">
                {{ 'Select Payment Method is Rquired' }}
              </div>
        </div>
    </div>
    <div class="modal-footer">
      <WidgetsButton :classes="'btn btn-theme-outline btn-md fw-bold'" :type="'button'" 
        :id="'cancel_profile_btn'" @onClick="() => { emit('close'); }">{{ $t("Cancel") }}</WidgetsButton>
      <WidgetsButton :classes="'btn theme-bg-color btn-md fw-bold text-light'" :id="'submit_profile_btn'" @click="submit()">
        {{ $t("Submit") }}
      </WidgetsButton>
    </div>
  </div>
</div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useDataStore } from "@/store/data"
let props = defineProps({
  orderNumber:Number
})
let emit = defineEmits(['close'])
let { Settings } = storeToRefs(useDataStore())
let payment_method = ref('')
async function submit(){
  let {data , error} = await useFetch('rePayment',{
    baseURL:BaseUrl,
    headers:GetHeaders(),
    method:'post',
    key:'rePayment',
    cache:false,
    body:{
      order_number:props.orderNumber,
      payment_method:payment_method.value,
      return_url:'http://localhost:3000/account/order/details',
      cancel_url:'http://localhost:3000',
    }
  })
  if(!error.value){
    var order_number =data.value?.order_number
    if(payment_method.value == "cod"){
      emit('close')
        useRouter().push(`/account/order/details/${props.orderNumber}`)
    } else{
        window.open(data.value.url,"",);
        useRouter().push(`/account/order/details/${props.orderNumber}`)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>