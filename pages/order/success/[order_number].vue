<template>
    <div v-if="!pending">

    <section class="cart-section section-b-space">
        <div class="container-fluid-lg">
            <div class="row g-sm-4 g-3">
                <div class="col-xxl-9 col-lg-8">
                    
                    <div class="cart-table order-table order-table-2">
                        <div class="table-responsive">
                            <table class="table mb-0">
                                <tbody>
                                    <tr v-for="(product,index) in data.products" :key="`product${index}`">
                                        <td class="product-detail">
                                            <div class="product border-0">
                                               
                                                    <img :src="product.product_thumbnail?.original_url || product.product_galleries[0]?.original_url || PlaceholderImage"
                                                        class="img-fluid" alt="">
                                              
                                                <div class="product-detail">
                                                    <ul>
                                                        <li class="name">
                                                            {{product.name}}
                                                        </li>

                                                        <li class="text-content">Sold By: {{product.store.store_name}}</li>

                                                        <li class="text-content">Quantity - 500 g</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>

                                        <td class="price">
                                            <h4 class="table-title text-content">
                                                Price</h4>
                                            <h6 class="theme-color">${{product.price || 0}}</h6>
                                        </td>

                                        <td class="quantity">
                                            <h4 class="table-title text-content">Qty</h4>
                                            <h4 class="text-title">{{product.pivot?.quantity}}</h4>
                                        </td>

                                        <td class="subtotal">
                                            <h4 class="table-title text-content">Total</h4>
                                            <h5>${{product.pivot.subtotal || 0}}</h5>
                                        </td>
                                    </tr>

                                    

                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div class="col-xxl-3 col-lg-4">
                    <div class="row g-4">
                        <div class="col-lg-12 col-sm-6">
                            <div class="summery-box">
                                <div class="summery-header">
                                    <h3>Price Details</h3>
                                    <h5 class="ms-auto theme-color">({{ data.products.length }} Items)</h5>
                                </div>

                                <ul class="summery-contain">
                                    <li>
                                        <h4>SubTotal</h4>
                                        <h4 class="price">${{data.amount}}</h4>
                                    </li>
                                    <li>
                                        <h4>Tax</h4>
                                        <h4 class="price">${{data.tax_total}}</h4>
                                    </li>
                                    <li>
                                        <h4>Shipping</h4>
                                        <h4 class="price">${{data.shipping_total}}</h4>
                                    </li>
                                    
                                </ul>

                                <ul class="summery-total">
                                    <li class="list-total">
                                        <h4>Total ({{useSettingsStore().currencyName}})</h4>
                                        <h4 class="price">${{data.total}}</h4>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-lg-12 col-sm-6">
                            <div class="summery-box">
                                <div class="summery-header d-block">
                                    <h3>Shipping Address</h3>
                                </div>

                                <ul class="summery-contain pb-0 border-bottom-0">
                                    <li class="d-block">
                                        <h4>{{`${data.shipping_address.street} ${data.shipping_address.city}`}}</h4>
                                        <h4 class="mt-2">{{data.shipping_address?.state?.name}}, {{data?.shipping_address?.country?.name}} {{data?.shipping_address?.pincode}}</h4>
                                    </li>

                                    <li class="pb-0">
                                        <h4>Expected Date Of Delivery:</h4>
                                        <h4 class="price theme-color">
                                            <a @click.prevent="()=>{useRouter().push(`/account/order/details/${data.order_number}`)}" href="#" class="text-danger">Track Order</a>
                                        </h4>
                                    </li>
                                </ul>

                                <ul class="summery-total">
                                    <li class="list-total border-top-0 pt-2">
                                        <h4 class="fw-bold">Oct 21, 2021</h4>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-12">
                            <div class="summery-box">
                                <div class="summery-header d-block">
                                    <h3>Payment Method</h3>
                                </div>

                                <ul class="summery-contain pb-0 border-bottom-0">
                                    <li class="d-block pt-0">
                                        <p class="text-content">{{data.payment_method}}</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
    <div v-else></div>
</template>

<script setup>
import { useSettingsStore } from '~~/store/settings';

let {data,refresh,pending} = await useFetch(`trackOrder/${useRoute().params.order_number}`,{
    baseURL:BaseUrl,
    headers:GetHeaders(),
    method:'get',
    key:`GetOrderInSuccess${useRoute().params.order_number}`,
    params:{order_number:useRoute().params.order_number},
})
</script>

<style lang="scss" scoped>

</style>