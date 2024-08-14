<template>
    <section class="section-b-space shop-section filter-offcanvas">
        <div class="container-fluid-lg">
            <div class="row">
                <div class="col-12">
                    <div class="overlay" :class="{show :offCanvasMenu}" @click="closeCanvasMenu()"></div>
                    <div class="left-box top-filter" :class="{show :offCanvasMenu}">
                        <ShopCollectionWidgetsSidebar :filter="filter" />
                    </div>
                </div>
                <div class="col-12">
                    <ShopCollectionWidgetsCollectionProduct  :filter="filter" :activeMenu="offCanvasMenu"/>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useCollectionStore } from '~/store/collection';
import { useDataStore } from '~/store/data';
let props = defineProps({
    filter:Object,
    offCanvasMenu:Boolean,
    layout:String
})

let { offCanvasMenu } = storeToRefs(useDataStore())

function closeCanvasMenu() {
    offCanvasMenu.value = false
   
//   this.attributeService.offCanvasMenu = false;
}

</script>

<style lang="scss" scoped></style>