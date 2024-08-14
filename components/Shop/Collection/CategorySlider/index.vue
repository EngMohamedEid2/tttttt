<template>
<div>
    <section>
        <div class="container-fluid-lg" >
            <div class="row">
                <div class="col-12">
                    <WidgetsCategory :theme="'paris'" :style="'horizontal'">
                    </WidgetsCategory>
                </div>
            </div>
        </div>
    </section>
    <section class="section-b-space shop-section">
        <div class="container-fluid-lg">
            <div class="row">
                <div class="col-custome-3">
                    <div class="left-box wow fadeInUp" :class="{show :offCanvasMenu}">
                        <ShopCollectionWidgetsSidebar :filter="filter" />
                        <!-- <CollectionFilter/> -->
                    </div>
                </div>
                <div class="col-custome-9">
                    <ShopCollectionWidgetsCollectionProduct :filter="filter" />
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useDataStore } from '~/store/data';
import { useCollectionStore } from '~/store/collection';
let props = defineProps({
    filter: Object,
    layout:String
})
let { offCanvasMenu } = storeToRefs(useDataStore())

</script>

<style lang="scss" scoped></style>