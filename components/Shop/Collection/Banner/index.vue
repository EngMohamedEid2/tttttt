<template>
    <section class="section-b-space shop-section">
        <div class="container-fluid-lg">
            <div class="row">
                <div class="col-custome-3">
                    <div class="left-box wow fadeInUp"  :class="{show :offCanvasMenu}">
                        <ShopCollectionWidgetsSidebar :filter="filter" />
                    </div>
                </div>
                <div class="col-custome-9">
                    <ShopCollectionWidgetsBanner :imageUrl="bannerImageUrl" />
                    <ShopCollectionWidgetsCollectionProduct :filter="filter" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useDataStore } from '~/store/data';
let props = defineProps({
    filter: Object
})

let bannerImageUrl = ref("")

useDataStore().GetThemeoption()
let { ThemeOptions } = storeToRefs(useDataStore())
let { offCanvasMenu } = storeToRefs(useDataStore())

watchEffect(() => {
    const themeOptions = ThemeOptions.value.options
    bannerImageUrl.value = themeOptions?.collection?.collection_banner_image_url;
});
</script>

<style lang="scss" scoped></style>