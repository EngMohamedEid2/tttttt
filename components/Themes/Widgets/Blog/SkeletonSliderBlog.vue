<template>
    <div>
    <!-- Blog Grid Skeleton -->
    <div class="blog-skeleton">
        <div class="skeleton-div">
            <div class="product-box skeleton-box">
                <div class="skeleton">
                    <div class="skeleton__section skeleton__section--card">
                        <div class="skeleton__img"></div>
                        <div>
                            <div class="skeleton__header skeleton__header--long"></div>
                            <div class="skeleton__p"></div>
                        </div>
                    </div>
                    <div class="content-div">
                        <div class="skeleton__p"></div>
                        <div class="skeleton__p"></div>
                        <div class="skeleton__p"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
let props = defineProps({
    type: {
        type: String,
        default: 'grid'
    }
})
</script>

<style lang="scss" scoped></style>