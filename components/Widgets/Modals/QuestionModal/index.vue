<template>
<div>
  <div class="modal-header">
    <h3 class="fw-semibold">{{ 'Ask a question' }}</h3>
    <WidgetsButton :classes="'btn btn-close'"  :id="'profile_modal_close_btn'"
    @onClick="() => {emit('close')}">
    <Icon name="ri-close-line"></Icon>
    </WidgetsButton>
  </div>

  <div class="modal-body">
    <form class="product-review-form" >
      <div class="product-wrapper">
        <div class="product-image">
          <img :src="product.product_thumbnail ?
                product.product_thumbnail.original_url :
                '/images/product.png'" class="img-fluid" :alt="product.name">
        </div>
        <div class="product-content">
          <h5 class="name">{{ product?.name }}</h5>
          <div class="product-review-rating">
            <div class="product-rating">
              <h6 class="price-number">{{ store.currency.symbol }} {{ Number(store.convertCurrency(product?.sale_price)).toFixed(2) }}</h6>
            </div>
          </div>
        </div>
      </div>

      <div class="review-box">
        <label class="form-label" for="content">{{ 'Your Questions' }} *</label>
        <textarea placeholder="Your Questions'" class="form-control" id="content" rows="3" v-model="question"></textarea>
      </div>
    </form>
    <div class="modal-footer">
      <WidgetsButton :classes="'btn btn-theme-outline btn-md fw-bold'" :type="'button'"
        :id="'cancel_profile_btn'" @onClick="() => { emit('close'); }">{{ 'Cancel'  }}</WidgetsButton>
      <WidgetsButton :classes="'btn theme-bg-color btn-md fw-bold text-light'"  :id="'submit_profile_btn'" @onClick="submitQuestion">
        {{ 'Submit' }}
      </WidgetsButton>
    </div>
   </div>
  </div>
</template>

<script setup>
import { useCurrencyStore } from '@/store/currency'
import { useDataStore } from '~~/store/data';
let props = defineProps({
    product:Object,
    qna:Object
})

let store = useCurrencyStore();
store.allCurrency();
const emit = defineEmits(['close']);
let question = ref('')
props.qna && setInitialValues(props.qna)
function setInitialValues(values){
  question.value = values.question
}
async function submitQuestion(){
  let userData = localStorage.getItem('usersAccount')
  if(question.value != '' && userData){
   if(props.qna){
      let {data , error} = await useFetch('question-and-answer/'+props.qna.id,{
      baseURL: BaseUrl,
      headers: GetHeaders(),
      body:{
        question:question.value,
        answer:"",
        product_id:props.product.id
      },
       method: "put",
       key: "UpdateQuestion"
    })
   }
   else{
     let {data , error} = await useFetch('question-and-answer',{
      baseURL: BaseUrl,
      headers: GetHeaders(),
      body:{
        question:question.value,
        answer:"",
        product_id:props.product.id
      },
       method: "post",
       key: "AskQuestion"
    })
   }
    useDataStore().GetAllQustionAnswer(props.product.id)
  }
}
</script>

<style lang="scss" scoped>

</style>