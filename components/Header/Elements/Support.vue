<template>
<div>
    <!-- Call Style Basic -->
    <a href="javascript:void(0)" class="delivery-login-box" v-if="style == 'basic'">
        <div class="delivery-icon">
            <Icon name="ri:customer-service-line"></Icon>
        </div>
        <div class="delivery-detail">
            <h6>{{ $t("24/7 Support Center") }}</h6>
            <h5>{{ themeOptions?.header?.support_number }}</h5>
        </div>
    </a>
    <!-- Call Style Classic -->
    <div class="support-box" v-if="style == 'classic'">
        <div class="support-image">
            <img src="/images/icon/support.png" class="img-fluid" alt="support">
        </div>
        <div class="support-number">
            <h2>{{ themeOptions?.header?.support_number }}</h2>
            <h4>{{ $t("24/7 Support Center") }}</h4>
        </div>
    </div>
    <!-- Call Style Standard -->
    <div class="nav-number" v-if="style == 'standard'">
        <img src="/images/icon/music.png" class="img-fluid" alt="">
        <span>{{ themeOptions?.header?.support_number }}</span>
    </div>
</div>
</template>

<script setup>
const props = defineProps({
    themeOptions: Object,
    style: { type: [String,Object], default: 'basic' }
})

</script>