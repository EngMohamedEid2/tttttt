<template>
    <div>
        <section class="faq-box-contain section-b-space">
            <div class="container">
                <div class="row">
                    <div class="col-xl-5">
                        <div class="faq-contain">
                            <h2>{{ $t("Frequently Asked Questions") }}</h2>
                            <p>{{ $t("We are answering most frequent questions. No worries if you not find exact one. You can find out more by searching.")}}</p>
                        </div>
                    </div>
                    <div class="col-xl-7">
                        <div class="faq-accordion">
                            <div class="accordion" id="accordionExample">
                                <div class="accordion shipping-accordion" id="accordionExample">
                                    <div class="accordion-item" v-for="(faq, index) in faq.data" :key="index">
                                        <h2 class="accordion-header" id="headingOne">
                                            <button class="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" :data-bs-target="`#${'faq' + index + 1}`"
                                                :aria-expanded="index === 0 ? 'true' : 'false'">
                                                {{ faq.title }}
                                                <Icon name="ri:arrow-down-s-line"></Icon>
                                            </button>
                                        </h2>
                                        <div :id="`${'faq' + index + 1}`" class="accordion-collapse collapse"
                                            data-bs-parent="#accordionExample" :class="{ 'show': index === 0 }">
                                            <div id="collapseOne" class="accordion-collapse collapse show"
                                                data-bs-parent="#accordionExample">
                                                <div class="accordion-body">
                                                    <p>{{ faq.description }}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { HandleRequest } from '~~/composables/HandleRequest';
let { data: faq, pending } = await HandleRequest("faq", {
    key: "getAllfaq",
});
</script>
<style lang="scss" scoped></style>