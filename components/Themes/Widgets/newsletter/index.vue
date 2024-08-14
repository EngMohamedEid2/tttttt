<template>
  <!-- <div class="container-fluid-lg">
        <div class="row" v-if="style == 'classic'">
            <div class="col-12">
                <div class="newsletter-box hover-effect bg-size"
                    :style="{ 'background-image': 'url(' + data?.image_url + ')' }">
                    <div class="row">
                        <div class="col-xxl-8 col-xl-7">
                            <div class="newsletter-detail p-center-left text-white">
                                <div>
                                    <h2>{{ data?.title }}</h2>
                                    <h4>{{ data?.sub_title }}</h4>
                                    <form class="row g-2">
                                        <div class="col-sm-10 col-12">
                                            <div class="newsletter-form">
                                                <input type="email" class="form-control" id="email"
                                                    placeholder="Enter your email">
                                                <WidgetsButton :type="'submit'"
                                                    :classes="'btn bg-white theme-color btn-md fw-500 submit-button'"
                                                    :id="'subscribe_btn'">{{ $t('subscribe') }}</WidgetsButton>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div class="col-xxl-4 col-xl-5 d-xl-block d-none">
                            <div class="shape-box">
                                <img src="/images/basket.png" alt="basket" class="img-fluid image-1">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <template v-else>
            <div class="newsletter-box newsletter-box-2" :style="{ 'background-image': 'url(' + data?.image_url + ')' }">
                <div class="newsletter-contain py-5">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-xxl-4 col-lg-5 col-md-7 col-sm-9 offset-xxl-2 offset-md-1">
                                <div class="newsletter-detail">
                                    <h2>{{ data?.title }}</h2>
                                    <h5>{{ data?.sub_title }}</h5>
                                    <div class="input-box">
                                        <input type="email" class="form-control" placeholder="Enter Your Email">
                                        <div class="mail-icon">
                                            <Icon name="ri:mail-line"></Icon>
                                        </div>
                                        <WidgetsButton :type="'submit'" :classes="'sub-btn btn-animation'"
                                            :id="'newsletter_subscribe_btn'">
                                            <span class="d-sm-block d-none">{{ $t('subscribe') }}</span>
                                            <Icon name="ri:arrow-right-line"></Icon>
                                        </WidgetsButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </div> -->
</template>

<script setup>
let props = defineProps({
  data: Object,
  style: { type: [String, Object], default: "basic" },
});
</script>

<style lang="scss" scoped></style>
