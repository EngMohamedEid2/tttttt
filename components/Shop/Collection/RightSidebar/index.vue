<template>
    <section>
    <div class="container-fluid-lg">
        <div class="row">
            <div class="col-12">
                <ShopCollectionWidgetsBanner :imageUrl="bannerImageUrl" ></ShopCollectionWidgetsBanner>
            </div>
        </div>
    </div>
</section>
<section class="section-b-space shop-section" id="filtered_products">
    <div class="container-fluid-lg">
        <div class="row">
            <div class="col-custome-9">
                <ShopCollectionWidgetsCollectionProduct  :filter="filter"/>
            </div>
            <div class="col-custome-3">
                <div class="left-box right-box"  :class="{show :offCanvasMenu}">
                    <ShopCollectionWidgetsSidebar :filter="filter" />
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useCollectionStore } from '~/store/collection';
import { useDataStore } from "~/store/data";
let props = defineProps({
    filter:Object,
    layout:String
})
let { ThemeOptions } = storeToRefs(useDataStore());
let { offCanvasMenu } = storeToRefs(useDataStore())
let bannerImageUrl = ThemeOptions?.value?.options?.collection?.collection_banner_image_url

</script>

<style lang="scss" scoped></style>    