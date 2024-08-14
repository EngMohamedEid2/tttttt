<template>
    <div class="footer-contact">
        <ul>
            <li v-if="data?.footer?.support_number">
                <div class="footer-number">
                    <Icon name="ri:phone-line" size="18"></Icon>
                    <div class="contact-number">
                        <h6 class="text-content">{{ $t('Customer Support 24/7') }}</h6>
                        <h5>{{ data?.footer?.support_number }}</h5>
                    </div>
                </div>
            </li>

            <li v-if="data?.footer?.support_email">
                <div class="footer-number">
                    <Icon name="ri:mail-line" size="18"></Icon>
                    <div class="contact-number">
                        <h6 class="text-content">{{ $t('Email Address :') }}</h6>
                        <h5>{{ data?.footer?.support_email }}</h5>
                    </div>
                </div>
            </li>

            <li class="social-app mb-0" v-if="data?.footer?.play_store_url || data?.footer?.app_store_url">
                <h5 class="mb-2 text-content">Download App :</h5>
                <ul>
                    <li class="mb-0" v-if="data?.footer?.play_store_url">
                        <NuxtLink :to="data?.footer?.play_store_url" class="text-content">
                            <img src="/images/playstore.svg" class="lazyload" alt="">
                        </NuxtLink>

                    </li>
                    <li class="mb-0" v-if="data?.footer?.app_store_url">
                        <NuxtLink :to="data?.footer?.app_store_url" class="text-content">
                            <img src="/images/appstore.svg" class="lazyload" alt="">
                        </NuxtLink>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script setup>
let props = defineProps({
    data: Object
})
</script>

<style lang="scss" scoped></style>