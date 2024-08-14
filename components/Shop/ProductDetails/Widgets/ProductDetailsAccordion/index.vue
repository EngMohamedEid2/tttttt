<template>
    <div>
        <div class="accordion accordion-box product-section-box mt-0" id="accordionExample">
            <div class="accordion shipping-accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            :data-bs-target="`#${'description'}`"
                            :aria-expanded="show == true ? 'true' : 'false'">
                            <span>{{ $t("Description") }}</span>
                            <Icon name="ri:arrow-down-s-line"></Icon>
                        </button>
                    </h2>
                    <div :id="`${'description'}`" class="accordion-collapse collapse" data-bs-parent="#accordionExample" :class="{ 'show': open == true }">
                        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <div class="product-description">
                                    <div class="nav-desh ckeditor-content" v-html="product?.description">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion shipping-accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            :data-bs-target="`#${'review'}`">
                            <span>{{ $t("Review") }}</span>
                            <Icon name="ri:arrow-down-s-line"></Icon>
                        </button>
                    </h2>
                    <div :id="`${'review'}`" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <ShopProductDetailsWidgetsProductReview :product="product" :reviews="reviews" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion shipping-accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            :data-bs-target="`#${'qa'}`">
                            <span>{{ $t("QA") }}</span>
                            <Icon name="ri:arrow-down-s-line"></Icon>
                        </button>
                    </h2>
                    <div :id="`${'qa'}`" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <ShopProductDetailsWidgetsQuestionsAnswers :product="product"
                                    :questionAnswers="questionAnswers" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
let props = defineProps({
    product: Object,
    reviews: Object,
    questionAnswers: Object
});

let open = ref(true)
</script>

<style lang="scss" scoped></style>