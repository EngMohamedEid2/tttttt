<template>
<div>
    <!-- Skeleton For Horizontal -->
    <div class="skeleton-div" v-if="style == 'horizontal'">
        <div class="product-box skeleton-box">
            <div class="skeleton">
                <div class="skeleton__section skeleton__section--card">
                    <div class="skeleton__img"></div>
                    <div>
                        <div class="skeleton__header skeleton__header--long"></div>
                        <div class="skeleton__p"></div>
                    </div>
                </div>
                <div class="skeleton__p"></div>
                <div class="skeleton__p"></div>
                <div class="skeleton__p"></div>
            </div>
        </div>
    </div>

    <!-- Skeleton For Vertical -->
    <div class="offer-product skeleton-vertical" v-if="style == 'vertical'">
        <a class="offer-image"></a>
        <div class="offer-detail">
            <div>
                <a href="javascript:void(0)" class="text-title">
                    <h6 class="name"></h6>
                </a>
                <span></span>
                <div class="vertical-price"></div>
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
let props = defineProps({
    style: {
        type: [String,Object],
        default: 'horizontal'
    }
})
</script>

<style lang="scss" scoped></style>